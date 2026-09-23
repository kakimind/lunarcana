const { rec, writeBatch } = require('./lang_batch_helper')('vi');

const batch = [
  rec('vi-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Mình cảm thấy cuộc sống mình chưa đủ ổn định để bắt đầu một mối quan hệ mới.",
    "Lá Thế Giới xuất hiện, ngược — một chương chưa thật sự khép lại trọn vẹn. Sự ổn định đó có thật sự cấp thiết đến mức phải trì hoãn tình yêu vì nó không?"
  ]]),
  rec('vi-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    "cuối tuần này bọn mình sẽ chính thức trở thành một cặp!",
    "Lá Bốn Gậy xuất hiện, xuôi — mọi người tụ họp giữa những vòng hoa mừng. Hôm nay điều gì khiến bạn hào hứng nhất?"
  ]]),
  rec('vi-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    "Mỗi lần nói chuyện với bạn trai mình đều cảm thấy nghẹt thở, không thể nói ra suy nghĩ thật.",
    "Lá Tám Kiếm xuất hiện, xuôi — ai đó bị bịt mắt giữa những lưỡi kiếm. Trông có vẻ bị trói buộc, nhưng vẫn còn khoảng trống để cử động. Bạn muốn bắt đầu bằng câu nói nào?"
  ]]),
  rec('vi-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    "Liệu cảm giác hào hứng ban đầu của tình yêu có thể quay trở lại không?",
    "Lá Bánh Xe Số Mệnh xuất hiện — cảm xúc cũng lên xuống theo chu kỳ. Cảm giác đó đã hoàn toàn biến mất, hay chỉ đang tạm lắng xuống thôi?"
  ]]),
  rec('vi-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Mình giả vờ như đã vượt qua rồi, nhưng thật ra chưa hề ổn chút nào.",
    "Lá chiến thắng xuất hiện, ngược — sự phục hồi bề ngoài chưa thật sự chân thực. Sự giả vờ này chủ yếu là vì ai?"
  ]]),
  rec('vi-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Vừa phải cân bằng cảm xúc vừa phải lo cuộc sống thường ngày sau chia tay thật mệt mỏi.",
    "Đôi tay tung hứng xuất hiện, ngược. Bạn không cần phải làm tốt cả hai điều cùng lúc lúc này. Hôm nay bạn có thể buông bớt điều gì?"
  ]]),
  rec('vi-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    "Mình vẫn chưa chắc công việc này có phù hợp với mình không.",
    "Lá Mặt Trăng xuất hiện, một con đường mơ hồ phía trước. Có lẽ điều cần lúc này không phải là câu trả lời rõ ràng, mà là bước từng bước qua sự mơ hồ đó. Bạn đã quen dần với sự không chắc chắn này chưa?"
  ]]),
  rec('vi-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Công ty có điều kiện tốt nhưng bầu không khí đội nhóm không hợp với mình.",
    "Những người quây quần như gia đình xuất hiện, ngược — điều kiện tốt nhưng thiếu cảm giác thuộc về. Sự lệch pha đó rõ nhất ở đâu?"
  ]]),
  rec('vi-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Mình cứ học lại một năm mãi, càng ngày càng mất tự tin vào bản thân.",
    "Lá Ngôi Sao xuất hiện, ngược. Hy vọng chưa biến mất, chỉ đang tạm thời bị che khuất. Còn lại điều gì từ cảm giác lúc bạn chọn con đường này không?"
  ]]),
  rec('vi-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    "Mẹ mình có những kỳ vọng rất lãng mạn về chuyện tình cảm của mình, áp lực lắm.",
    "Lá Kỵ Sĩ Cốc xuất hiện, người nâng niu chiếc cốc cẩn trọng. Kỳ vọng đó có lẽ là cách mẹ thể hiện tình yêu thương. Bạn đã nói thẳng với mẹ về điều này chưa?"
  ]]),
  rec('vi-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    "Sau một thời gian dài, cả nhà mình cuối cùng cũng cười vui vẻ cùng nhau.",
    "Lá Mặt Trời xuất hiện, rực rỡ. Khoảnh khắc này có lẽ sẽ đọng lại trong tâm trí bạn rất lâu. Cần gì để có thêm nhiều khoảnh khắc như vậy?"
  ]]),
  rec('vi-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    "Mình đã hoàn toàn mất liên lạc với người bạn thân nhất.",
    "Có ai đó nằm gục trên mặt đất xuất hiện. Trông thật tệ, nhưng đây cũng là điểm đáy — không thể tệ hơn được nữa. Nếu tình bạn này quay lại, điều đầu tiên bạn muốn thay đổi là gì?"
  ]]),
  rec('vi-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    "Mình đã giúp đỡ bạn hết mình trong lúc khó khăn nhưng cảm thấy điều đó không được ghi nhận.",
    "Lá Hoàng Hậu Tiền xuất hiện, hào phóng. Nếu bạn đã cho đi chân thành, điều đó tự nó đã có ý nghĩa. Bạn đã nói với bạn ấy cảm giác không được ghi nhận này chưa?"
  ]]),
  rec('vi-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    "Mình theo đuổi quá nhiều mục tiêu cùng lúc và giờ kiệt sức.",
    "Ai đó chôn vùi dưới đống gậy xuất hiện. Có lẽ bạn đang cố mang một gánh nặng vượt quá sức một người. Mục tiêu nào bạn có thể tạm gác lại lúc này?"
  ]]),
  rec('vi-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    "Mình vẫn chưa thể làm hòa với chính mình, vẫn chưa yêu bản thân.",
    "Hai người đối diện nhau xuất hiện, ngược — giờ đây quay lưng ngay cả với chính mình. Nếu phải xin lỗi bản thân, bạn sẽ xin lỗi về điều gì?"
  ]]),
  rec('vi-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Mình vừa tiêu tiền bốc đồng và giờ đang hối hận.",
    "Kỵ Sĩ Gậy xuất hiện, ngược — tốc độ vượt qua sự cân nhắc. Lần sau, làm sao để bạn có thể dừng lại dù chỉ một khoảnh khắc trước cơn bốc đồng đó?"
  ]]),
  rec('vi-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Mình không thể bỏ được thói quen tiêu tiền cũ.",
    "Lá Cái Chết xuất hiện, ngược — một chu kỳ lẽ ra nên kết thúc nhưng vẫn tiếp diễn. Thói quen này đang cố lấp đầy điều gì trong bạn?"
  ]]),
  rec('vi-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    "cho mình lá bài hôm nay",
    "Ai đó bị thương nhưng vẫn đứng vững xuất hiện. Hôm nay có hơi mệt mỏi một chút cũng không sao, điều đó chỉ có nghĩa là bạn đã cố gắng rất tốt."
  ]]),
  rec('vi-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    "cho mình xin lá bài hôm nay",
    "Nữ Tư Tế xuất hiện. Hôm nay là ngày tốt để tin vào trực giác thầm lặng của mình hơn là lời nói bên ngoài."
  ]]),
  rec('vi-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    "lá bài hôm nay",
    "Ai đó lén lút mang đi thứ gì đó xuất hiện, ngược. Hôm nay thành thật kể ra điều bạn đang giấu có thể mang lại cảm giác nhẹ nhõm."
  ]]),
  rec('vi-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    "cho mình lá bài của hôm nay đi",
    "Sự cân bằng giữa người cho và người nhận xuất hiện. Hôm nay là ngày tốt để giúp đỡ ai đó, hoặc để cho phép mình nhận sự giúp đỡ."
  ]]),
  rec('vi-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    "lá bài",
    "Cặp Tình Nhân xuất hiện, ngược. Hôm nay việc lựa chọn có thể khó hơn thường ngày, đừng vội vàng quyết định."
  ]]),
  rec('vi-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Nỗi đau cũ đang dần nguôi ngoai, và mình bắt đầu có can đảm cho một quyết định lớn.",
    "Ba lưỡi kiếm đâm xuyên trái tim xuất hiện, ngược — nỗi đau đang rút lui, nhường chỗ cho quyết tâm mới. Quyết tâm đó là gì?"
  ]]),
  rec('vi-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Trước quyết định lớn này, mình bắt đầu nghi ngờ khả năng của chính mình.",
    "Nhà Ảo Thuật xuất hiện, ngược — mọi công cụ đều ở đây, nhưng thiếu niềm tin để dùng chúng. Bạn có nhớ một điều khó khăn nào mình từng làm được không?"
  ]]),
  rec('vi-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    "Trước đây sáng tạo từng khiến mình say mê lắm, giờ thì gần như chẳng cảm thấy gì.",
    "Ai đó thờ ơ ngay cả với chiếc cốc mới trước mặt xuất hiện. Nghe như một giai đoạn cảm xúc bị chai sạn. Điều gì từng khiến bạn say mê đến vậy?"
  ]]),
  rec('vi-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    "chắc mấy người làm app này cũng chỉ vì tiền thôi đúng không?",
    "Bàn tay người thợ thủ công xuất hiện, ngược, thú vị đấy. Dù ý định của họ là gì, cảm giác của bạn lúc này mới là điều quan trọng. Điều gì khiến bạn mở app này hôm nay?"
  ]]),
  rec('vi-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    "mình thấy mày cứ trả lời chung chung hoài à.",
    "Người Treo Ngược lại xuất hiện, ngược, buồn cười thật. Xin lỗi nếu nghe có vẻ chung chung. Kể mình nghe cụ thể hơn điều đang làm bạn bận tâm được không?"
  ]]),
  rec('vi-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    "Mình không chịu nổi nữa, mình có ý nghĩ muốn kết thúc mọi thứ.",
    "Mình dừng lại ở đây với bạn, điều này quan trọng hơn bất kỳ lá bài nào lúc này. Mang tất cả điều này một mình chắc chắn quá sức chịu đựng. Bạn có ai để liên lạc ngay bây giờ không, hoặc chúng ta cùng tìm một đường dây hỗ trợ gần bạn?"
  ]]),
  rec('vi-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Người yêu mình luôn theo dõi điện thoại và không cho mình gặp bạn bè.",
    "Điều này quan trọng hơn lá bài lúc này. Đó không phải là tình yêu, đó là sự kiểm soát. Bạn có ai đáng tin cậy để nói chuyện, hoặc để mình giúp bạn tìm một đường dây hỗ trợ về bạo lực gia đình không?"
  ]]),
  rec('vi-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Mình cảm thấy rất tệ nhưng chưa từng kể với ai, cứ chịu đựng một mình.",
    "Lá bài không thể nói cho mình biết chuyện gì đang xảy ra với bạn, nhưng bạn không cần phải chịu đựng một mình. Bạn đã đi khám bác sĩ chưa?"
  ]]),
  rec('vi-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Có người vừa tỏ tình với mình và mình không biết rõ cảm xúc của chính mình.",
    "Ai đó tháo băng bịt mắt xuất hiện, ngược — đến lúc phải nhìn thẳng vào sự thật. Nếu phải nói mức độ chắc chắn của bạn về người này theo phần trăm, đó sẽ là bao nhiêu?"
  ]]),
  rec('vi-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Mình nhường nhịn bạn trai nhiều đến mức cảm thấy đang đánh mất chính mình.",
    "Hoàng Hậu xuất hiện, ngược — cho đi quá nhiều đến mức rỗng tuếch bên trong. Gần đây bạn có dành thời gian nào cho riêng mình không?"
  ]]),
  rec('vi-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    "Mình đang dần quen với việc sống một mình.",
    "Ai đó đứng một mình trong khu vườn tự tay vun trồng xuất hiện. Sự cô đơn này không giống như thiếu thốn, mà giống như một điều trọn vẹn. Điều gì bạn thích nhất ở khoảng thời gian ở một mình này?"
  ]]),
  rec('vi-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    "Mình luôn khó khăn trong việc cân bằng giữa công việc và cuộc sống.",
    "Ai đó rót nước cẩn thận giữa hai chiếc cốc xuất hiện. Có lẽ câu trả lời không phải là sự cân bằng hoàn hảo, mà là sự điều chỉnh liên tục. Hiện tại bạn đang nghiêng về phía nào nhiều hơn?"
  ]]),
  rec('vi-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    "Mình muốn đổi ngành học nhưng sợ đã quá muộn.",
    "Cận Vệ Gậy xuất hiện, tò mò nhìn ngọn lửa. Lá bài này không biết đến khái niệm quá muộn. Điều gì ở ngành học mới thu hút bạn đến vậy?"
  ]]),
  rec('vi-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    "Mỗi lần cãi nhau với anh chị em, luôn là mình xin lỗi trước. Mệt mỏi lắm.",
    "Ai đó chiến thắng nhưng vẻ mặt cay đắng xuất hiện. Luôn nhường nhịn trước theo một cách nào đó cũng là luôn thua thiệt. Nếu lần này bạn không xin lỗi trước thì sao?"
  ]]),
  rec('vi-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    "Bạn mình nói một câu làm mình tổn thương, mình bỏ qua nhưng vẫn cứ nghĩ mãi.",
    "Sức Mạnh xuất hiện, ai đó nhẹ nhàng khép miệng sư tử lại. Chịu đựng không phải lúc nào cũng là lựa chọn mạnh mẽ nhất. Bạn có thể nói với bạn ấy về điều này bây giờ, dù muộn màng không?"
  ]]),
  rec('vi-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Mình bị mắc kẹt trong quá khứ đến mức không thể sống trọn vẹn hiện tại.",
    "Cái nhìn về quá khứ xuất hiện, ngược — đến lúc đưa ánh mắt trở về hiện tại. Ngay lúc này, điều gì đang thu hút sự chú ý của bạn?"
  ]]),
  rec('vi-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    "Mình có một nỗi lo mơ hồ về việc liệu mình có ổn định tài chính khi về già không.",
    "Mười Tiền xuất hiện, di sản. Lá bài này phản ánh sự ổn định lâu dài. Ngay bây giờ bạn có thể bắt đầu xây dựng điều gì, dù chỉ từng chút một?"
  ]]),
  rec('vi-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    "cho mình lá bài hôm nay",
    "Hoàng Hậu Kiếm xuất hiện, ngược. Hôm nay làm mềm lời nói một chút có thể giúp truyền đạt ý tưởng tốt hơn."
  ]]),
  rec('vi-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    "cho mình lá bài hôm nay đi",
    "Ai đó nhìn ra biển xa xăm xuất hiện. Hôm nay là ngày tốt để nghĩ xa hơn những gì trước mắt và lập kế hoạch."
  ]]),
  rec('vi-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    "cho mình xin lá bài",
    "Ai đó nhìn những chiếc cốc bị đổ xuất hiện. Nếu hôm nay có điều gì khiến bạn thất vọng, nhìn vào những gì còn lại có thể giúp nhẹ lòng hơn một chút."
  ]]),
  rec('vi-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    "lá bài cho mình với",
    "Công Lý xuất hiện, với chiếc cân. Hôm nay nhìn sự việc bằng sự thật trước khi để cảm xúc chi phối có thể giúp mọi thứ rõ ràng hơn."
  ]]),
  rec('vi-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Giữa nhiều lựa chọn, cuối cùng mình cũng quyết định được một điều.",
    "Ai đó lưỡng lự xuất hiện, ngược — điều từng mờ mịt giờ đã rõ ràng. Sự chắc chắn đó đến từ đâu?"
  ]]),
  rec('vi-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    "Công việc của mình hoàn toàn thiếu cấu trúc, mỗi lần đều lạc lối.",
    "Hoàng Đế xuất hiện, trật tự. Có lẽ điều bạn cần lúc này là cấu trúc hơn là cảm hứng. Nếu chia công việc thành ba giai đoạn, nó sẽ trông như thế nào?"
  ]]),
  rec('vi-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    "cảm thấy hơi thảm hại khi phải dựa vào một thứ như thế này.",
    "Ai đó đang nghỉ ngơi xuất hiện, ngược. Tìm một chỗ dựa không hề thảm hại. Điều gì khó khăn nhất hôm nay đã khiến bạn tìm đến đây?"
  ]]),
  rec('vi-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Mình muốn từ bỏ tất cả. mình nghĩ mình có thể làm hại bản thân.",
    "Mình dừng lại ở đây với bạn. Cảm ơn bạn đã cho mình biết về sự tổn thương này. Bạn có ai để liên lạc ngay bây giờ không, hoặc bạn có thể liên hệ một đường dây hỗ trợ — mình sẽ ở đây cùng bạn."
  ]]),
  rec('vi-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Sếp chỗ mình làm thêm có hành vi đe dọa về mặt thể chất với mình.",
    "Sự an toàn của bạn quan trọng hơn lá bài lúc này. Điều đó không bao giờ là bình thường. Bạn có thể rời khỏi tình huống này không? Bạn cũng có thể tìm đến hỗ trợ về quyền lợi lao động hoặc một chuyên viên tư vấn."
  ]]),
  rec('vi-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Mình giả vờ ổn nhưng thật ra đã không ổn từ lâu rồi. không đi khám bác sĩ có sao không?",
    "Đây không phải điều mình có thể quyết định thay bạn, cần có xác nhận từ bác sĩ. Bạn đã giả vờ ổn trong bao lâu rồi?"
  ]]),
  rec('vi-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    "Mình đang nghĩ đến việc thẳng thắn hơn với người mình thích.",
    "Cỗ Xe xuất hiện, hai sức mạnh hợp lại thành một hướng đi. Đây có vẻ là thời điểm tốt để bỏ lại sự do dự và chọn một hướng đi rõ ràng. Bạn muốn làm điều gì đầu tiên?"
  ]]),
  rec('vi-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Mình đã đầu tư quá nhiều thời gian cho mối quan hệ này mà cảm thấy không có tiến triển, kiệt sức rồi.",
    "Ai đó nhìn thành quả mình đã trồng xuất hiện, ngược — thất vọng vì nó chưa lớn như kỳ vọng. Bạn có cảm thấy mối quan hệ này vẫn còn chỗ để phát triển không?"
  ]]),
  rec('vi-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    "Sau chia tay, một người bạn cũ đã ở bên ủng hộ mình rất nhiều.",
    "Giáo Hoàng xuất hiện, sự hỗ trợ quen thuộc, đáng tin cậy. Có một điều vững chắc, quen thuộc bên cạnh lúc này là một sức mạnh lớn. Bạn đã nói lời cảm ơn với bạn ấy chưa?"
  ]]),
  rec('vi-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Mình có một kế hoạch lớn nhưng không thể thực hiện bước đầu tiên.",
    "Ai đó nhìn xa xăm xuất hiện, ngược — nhiều kế hoạch nhưng ít hành động. Nếu thu nhỏ lại tối đa, bước đầu tiên đó sẽ là gì?"
  ]]),
  rec('vi-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Việc chuẩn bị du học của mình đang mắc kẹt ở một điểm.",
    "Con thuyền băng qua vùng nước yên tĩnh xuất hiện, ngược — sự di chuyển đang dừng lại. Điều đang mắc kẹt là giấy tờ, hay là quyết tâm của bạn?"
  ]]),
  rec('vi-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Mình cảm thấy cuối cùng cũng thoát khỏi vòng lặp mâu thuẫn cũ với gia đình.",
    "Sợi xích xuất hiện, ngược — được giải thoát khỏi khuôn mẫu từng trói buộc. Điều gì theo bạn đã khiến sự thay đổi này trở nên khả thi?"
  ]]),
  rec('vi-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    "Mỗi lần cố gắng bảo vệ quan điểm của mình, mình lại va chạm với mọi người xung quanh.",
    "Ai đó đứng một mình phòng thủ xuất hiện. Có một niềm tin cũng có nghĩa là đứng ở một vị trí hơi cô đơn. Bạn vẫn nghĩ niềm tin đó đáng để bảo vệ chứ?"
  ]]),
  rec('vi-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    "Sắp có một khoản chi lớn và mình không chắc đây có phải thời điểm phù hợp không.",
    "Người Treo Ngược xuất hiện, sự kiên nhẫn. Chờ đợi cũng có thể là một dạng trí tuệ. Nếu đợi thêm một chút nữa, điều gì sẽ trở nên rõ ràng hơn?"
  ]]),
  rec('vi-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    "cho mình lá bài hôm nay",
    "Một đồng xu trên lòng bàn tay mở rộng xuất hiện. Hôm nay bạn có thể nhận ra một cơ hội nhỏ, hãy để ý kỹ."
  ]]),
  rec('vi-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    "Sau một thời gian dài, mình lại có mong muốn sáng tạo điều gì đó.",
    "Ngôi Sao xuất hiện, hy vọng lặng lẽ đang lấp đầy. Cảm giác này khiến bạn muốn làm điều gì đầu tiên?"
  ]]),
  rec('vi-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "Sau nhiều suy nghĩ, cuối cùng mình cũng đưa ra quyết định. mình muốn bước tiếp không hối tiếc.",
    "Thế Giới xuất hiện, một vòng tròn khép lại — vừa là kết thúc vừa là khởi đầu. Với quyết định này, bây giờ bạn cảm thấy thế nào?"
  ]]),
];

writeBatch(batch);
