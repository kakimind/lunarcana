enum ArcanaType { major, minor }

class TarotCard {
  final String id;
  final String name;
  final ArcanaType type;
  final String image;
  final String meaningUp;
  final String meaningRev;
  final String desc;

  const TarotCard({
    required this.id,
    required this.name,
    required this.type,
    required this.image,
    required this.meaningUp,
    required this.meaningRev,
    required this.desc,
  });

  factory TarotCard.fromJson(Map<String, dynamic> json) {
    return TarotCard(
      id: json['id'] as String,
      name: json['name'] as String,
      type: json['type'] == 'major' ? ArcanaType.major : ArcanaType.minor,
      image: json['image'] as String,
      meaningUp: json['meaning_up'] as String,
      meaningRev: json['meaning_rev'] as String,
      desc: json['desc'] as String,
    );
  }
}
