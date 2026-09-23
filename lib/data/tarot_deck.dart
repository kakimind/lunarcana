import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;

import '../models/tarot_card.dart';

class TarotDeck {
  static const _manifestPath = 'assets/tarot/cards.json';

  static List<TarotCard>? _cache;

  static Future<List<TarotCard>> load() async {
    if (_cache != null) return _cache!;
    final raw = await rootBundle.loadString(_manifestPath);
    final list = jsonDecode(raw) as List<dynamic>;
    _cache = list
        .map((e) => TarotCard.fromJson(e as Map<String, dynamic>))
        .toList();
    return _cache!;
  }
}
