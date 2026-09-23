// Shared helper for building a language's pilot JSONL from batch files.
// Each language batch script does:
//   const { rec, writeBatch } = require('../scripts/lang_batch_helper')('ja');
//   const batch = [ rec('ja-0001', 'love_new', 1, [{id:'ar06',orientation:'upright'}], [[...]]), ... ];
//   writeBatch(batch);
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PERSONA = fs.readFileSync(path.join(ROOT, 'training/persona/system_prompt.md'), 'utf8');
const ALL_CARDS = require(path.join(ROOT, 'assets/tarot/cards.json'));
const CARD_ID_TO_NAME_EN = Object.fromEntries(ALL_CARDS.map(c => [c.id, c.name]));

const LANG_CONFIG = {
  ko: { tagLabel: '뽑힌 카드', ow: { upright: '정방향', reversed: '역방향' }, nameFile: 'card_names_ko.json' },
  ja: { tagLabel: '引いたカード', ow: { upright: '正位置', reversed: '逆位置' }, nameFile: 'card_names_ja.json' },
  'zh-Hans': { tagLabel: '抽到的牌', ow: { upright: '正位', reversed: '逆位' }, nameFile: 'card_names_zh-Hans.json' },
  es: { tagLabel: 'Cartas sacadas', ow: { upright: 'derecho', reversed: 'invertido' }, nameFile: 'card_names_es.json' },
  fr: { tagLabel: 'Cartes tirées', ow: { upright: 'endroit', reversed: 'inversée' }, nameFile: 'card_names_fr.json' },
  de: { tagLabel: 'Gezogene Karten', ow: { upright: 'aufrecht', reversed: 'umgekehrt' }, nameFile: 'card_names_de.json' },
  pt: { tagLabel: 'Cartas tiradas', ow: { upright: 'normal', reversed: 'invertida' }, nameFile: 'card_names_pt.json' },
  it: { tagLabel: 'Carte estratte', ow: { upright: 'dritta', reversed: 'rovesciata' }, nameFile: 'card_names_it.json' },
  ru: { tagLabel: 'Выпавшие карты', ow: { upright: 'прямое положение', reversed: 'перевёрнутое положение' }, nameFile: 'card_names_ru.json' },
  ar: { tagLabel: 'الأوراق المسحوبة', ow: { upright: 'معتدلة', reversed: 'مقلوبة' }, nameFile: 'card_names_ar.json' },
  hi: { tagLabel: 'निकाले गए कार्ड', ow: { upright: 'सीधा', reversed: 'उल्टा' }, nameFile: 'card_names_hi.json' },
  id: { tagLabel: 'Kartu yang ditarik', ow: { upright: 'tegak', reversed: 'terbalik' }, nameFile: 'card_names_id.json' },
  vi: { tagLabel: 'Lá bài đã rút', ow: { upright: 'xuôi', reversed: 'ngược' }, nameFile: 'card_names_vi.json' },
  th: { tagLabel: 'ไพ่ที่จั่วได้', ow: { upright: 'ตั้งตรง', reversed: 'กลับหัว' }, nameFile: 'card_names_th.json' },
  tr: { tagLabel: 'Çekilen kartlar', ow: { upright: 'düz', reversed: 'ters' }, nameFile: 'card_names_tr.json' },
  pl: { tagLabel: 'Wyciągnięte karty', ow: { upright: 'proste', reversed: 'odwrócone' }, nameFile: 'card_names_pl.json' },
  nl: { tagLabel: 'Getrokken kaarten', ow: { upright: 'rechtop', reversed: 'omgekeerd' }, nameFile: 'card_names_nl.json' },
  sv: { tagLabel: 'Dragna kort', ow: { upright: 'rättvänt', reversed: 'omvänt' }, nameFile: 'card_names_sv.json' },
  uk: { tagLabel: 'Витягнуті карти', ow: { upright: 'пряме положення', reversed: 'перевернуте положення' }, nameFile: 'card_names_uk.json' },
};

module.exports = function (langCode) {
  const cfg = LANG_CONFIG[langCode];
  if (!cfg) throw new Error('no LANG_CONFIG for ' + langCode);
  const nameFilePath = path.join(ROOT, 'training/data', cfg.nameFile);
  const names = fs.existsSync(nameFilePath) ? require(nameFilePath) : CARD_ID_TO_NAME_EN;

  function rec(id, topic, turn_count, cardSpecs, turns) {
    const cards = cardSpecs.map(c => ({ id: c.id, name: names[c.id] || CARD_ID_TO_NAME_EN[c.id], orientation: c.orientation }));
    const tag = `[${cfg.tagLabel}: ${cards.map(c => `${c.name}(${cfg.ow[c.orientation]})`).join(', ')}]`;
    const messages = [{ role: 'system', content: PERSONA }];
    const flat = turns.flat();
    flat[0] = `${tag}\n${flat[0]}`;
    for (let i = 0; i < flat.length; i += 2) {
      messages.push({ role: 'user', content: flat[i] });
      messages.push({ role: 'assistant', content: flat[i + 1] });
    }
    return { id, language: langCode, topic, turn_count, cards, messages };
  }

  function writeBatch(batch, { append = true } = {}) {
    const outPath = path.join(ROOT, 'training/data/pilot', `${langCode}.jsonl`);
    const lines = batch.map(r => JSON.stringify(r));
    if (append && fs.existsSync(outPath)) {
      const existing = fs.readFileSync(outPath, 'utf8').trimEnd();
      fs.writeFileSync(outPath, existing + '\n' + lines.join('\n') + '\n');
    } else {
      fs.writeFileSync(outPath, lines.join('\n') + '\n');
    }
    console.log(`${langCode}: wrote ${batch.length} records`);
  }

  return { rec, writeBatch };
};
