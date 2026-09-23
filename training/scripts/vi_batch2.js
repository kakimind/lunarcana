const { rec, writeBatch } = require('./lang_batch_helper')('vi');

const batch = [
  rec('vi-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    "Mình nghĩ mấy app kiểu này chỉ là chiêu trò kiếm tiền thôi.",
    "Lá Vua Kiếm xuất hiện, ngược — sự hoài nghi lạnh lùng, cũng dễ hiểu thôi. Dù bạn tin hay không, điều gì khiến hôm nay bạn vẫn mở app lên?"
  ]]),
  rec('vi-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    "Mình đã có kế hoạch cụ thể để làm hại bản thân rồi.",
    "Mình dừng lại ngay ở đây với bạn, chuyện này khẩn cấp hơn bất kỳ lá bài nào. Bạn không đơn độc trong chuyện này. Bạn có thể gọi cho một đường dây khẩn cấp gần bạn ngay bây giờ không, hoặc có ai đó bạn tin tưởng có thể ở bên bạn lúc này?"
  ]]),
  rec('vi-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    "Bố mình hay đánh mình mỗi khi ông nổi giận.",
    "Điều này quan trọng hơn lá bài rất nhiều. Không ai đáng bị đánh đập, kể cả từ người thân. Bạn có nơi nào an toàn để đến lúc này không, hoặc mình có thể giúp bạn tìm một đường dây hỗ trợ bảo vệ trẻ em hay gia đình gần bạn không?"
  ]]),
  rec('vi-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    "Mình bị đau ngực mấy hôm nay nhưng cứ trì hoãn không đi khám.",
    "Đây là điều quan trọng hơn lá bài lúc này, đau ngực cần được bác sĩ kiểm tra sớm. Bạn có thể đi khám ngay hôm nay hoặc ngày mai không?"
  ]]),
  rec('vi-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    "Mình cảm thấy kiệt sức hoàn toàn cả về thể chất lẫn tinh thần, không biết còn chịu được bao lâu nữa.",
    "Điều này nghe rất nghiêm trọng, quan trọng hơn buổi đọc bài hôm nay. Bạn đã nói chuyện với bác sĩ hoặc chuyên gia tâm lý về tình trạng này chưa?"
  ]]),
  rec('vi-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    "Mình cảm thấy đã có đủ kỹ năng để bắt đầu công việc mơ ước của mình.",
    "Lá Nhà Ảo Thuật xuất hiện, xuôi — mọi công cụ cần thiết đã ở trong tay bạn. Đây là thời điểm để tin vào năng lực của chính mình và bắt đầu hành động."
  ]]),
  rec('vi-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    "Mình đang học cách đối mặt với nỗi sợ hãi của bản thân thay vì trốn tránh.",
    "Lá Sức Mạnh xuất hiện, xuôi — sức mạnh nội tâm dịu dàng nhưng vững chãi. Bạn đang làm điều đó tốt hơn bạn nghĩ đấy."
  ]]),
  rec('vi-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    "Mình đang cố tìm cách công bằng để giải quyết tranh chấp giữa các anh chị em.",
    "Lá Công Lý xuất hiện, xuôi — sự cân bằng và lẽ phải rõ ràng. Hãy lắng nghe tất cả các bên trước khi đưa ra quyết định cuối cùng."
  ]]),
  rec('vi-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    "Mình nhận ra mình đang bị cuốn vào một thói quen xấu khó bỏ.",
    "Lá Quỷ Dữ xuất hiện, xuôi — sự ràng buộc mà chính bạn đang nắm giữ chìa khóa để tháo gỡ. Nhận ra điều này đã là bước đầu tiên để thoát ra."
  ]]),
  rec('vi-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    "Mình vừa khám phá ra một loại hình nghệ thuật hoàn toàn mới và rất hào hứng thử.",
    "Lá Cận Vệ Gậy xuất hiện, xuôi — sự nhiệt huyết của một khởi đầu mới mẻ. Cứ để sự tò mò dẫn đường, đừng lo về việc phải giỏi ngay từ đầu."
  ]]),
  rec('vi-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    "Mình đang cân nhắc rời bỏ công việc ổn định để theo đuổi đam mê.",
    "Lá Kỵ Sĩ Gậy xuất hiện, xuôi — sự táo bạo và khát khao phiêu lưu. Nếu ngọn lửa đam mê đó đủ mạnh, có lẽ đây chính là lúc để hành động."
  ]]),
  rec('vi-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    "Mình đang lên kế hoạch cho bước tiếp theo trong sự nghiệp của mình.",
    "Lá Hai Gậy xuất hiện, xuôi — đứng nhìn ra chân trời, cân nhắc những khả năng. Bạn đã có tầm nhìn rõ ràng, giờ chỉ cần chọn hướng đi đầu tiên."
  ]]),
  rec('vi-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    "Mình phải bảo vệ quan điểm của mình trước áp lực từ nhóm bạn.",
    "Lá Bảy Gậy xuất hiện, xuôi — đứng vững một mình trước nhiều thử thách. Việc giữ vững lập trường của mình không hề dễ, nhưng nó cho thấy bạn biết mình là ai."
  ]]),
  rec('vi-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    "Có một người luôn thể hiện tình cảm với mình một cách rất lãng mạn và tinh tế.",
    "Lá Kỵ Sĩ Cốc xuất hiện, xuôi — người mang đến tình cảm chân thành và mơ mộng. Đây có thể là một khởi đầu đẹp, cứ để bản thân đón nhận nó."
  ]]),
  rec('vi-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    "Người yêu mình rất thấu hiểu và luôn lắng nghe cảm xúc của mình.",
    "Lá Hoàng Hậu Cốc xuất hiện, xuôi — sự thấu cảm sâu sắc và dịu dàng. Bạn đang có một mối quan hệ được nuôi dưỡng bằng sự chân thành."
  ]]),
  rec('vi-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    "Mình đầu tư sai chỗ và giờ đang gặp khó khăn tài chính nghiêm trọng.",
    "Lá Vua Tiền xuất hiện, ngược — sự kiểm soát tài chính đang lung lay. Có lẽ đã đến lúc nhìn lại và lập kế hoạch cẩn thận hơn cho những bước tiếp theo."
  ]]),
  rec('vi-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    "Mình có xu hướng giữ chặt tiền bạc vì sợ mất kiểm soát tài chính.",
    "Lá Bốn Tiền xuất hiện, xuôi — sự bám giữ chặt chẽ, đôi khi quá mức. Sự an toàn là điều tốt, nhưng đừng để nỗi sợ ngăn bạn tận hưởng thành quả của mình."
  ]]),
  rec('vi-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    "Mình vừa có một nhận thức rõ ràng về điều mình thực sự muốn trong đời.",
    "Lá Át Kiếm xuất hiện, xuôi — một sự thật sáng rõ vừa được khai mở. Hãy giữ lấy sự rõ ràng này, nó sẽ là kim chỉ nam cho những quyết định sắp tới."
  ]]),
  rec('vi-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    "cho mình lá bài của hôm nay",
    "Lá Ẩn Sĩ xuất hiện, ngược — cô đơn không mong muốn hơn là tự chọn. Hôm nay có lẽ bạn cần chủ động tìm đến ai đó thay vì chờ đợi."
  ]]),
  rec('vi-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    "rút cho mình một lá hôm nay",
    "Lá Cái Chết xuất hiện, ngược — sự thay đổi cần thiết đang bị trì hoãn. Hôm nay hãy tự hỏi mình đang bám víu vào điều gì đã không còn phù hợp."
  ]]),
  rec('vi-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "cho mình xin lá bài hôm nay đi",
    "Lá Năm Cốc xuất hiện, ngược — bắt đầu nhìn thấy những gì vẫn còn thay vì chỉ những gì đã mất. Hôm nay là ngày tốt để thực hành lòng biết ơn nhỏ."
  ]]),
  rec('vi-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    "lá bài hôm nay cho mình với",
    "Lá Năm Gậy xuất hiện, xuôi — một chút cạnh tranh hoặc va chạm nhỏ có thể xảy ra. Hôm nay hãy giữ bình tĩnh nếu gặp bất đồng, đó chỉ là tạm thời."
  ]]),
  rec('vi-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    "cho mình một lá cho ngày hôm nay",
    "Lá Tám Tiền xuất hiện, ngược — sự chán nản hoặc thiếu tập trung trong công việc. Hôm nay hãy thử làm mọi việc chậm lại một chút, không cần vội."
  ]]),
  rec('vi-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    "xin lá bài cho hôm nay",
    "Lá Mười Kiếm xuất hiện, ngược — giai đoạn khó khăn nhất đã qua, giờ là lúc phục hồi. Hôm nay hãy để bản thân nghỉ ngơi nhiều hơn."
  ]]),
  rec('vi-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    "Mọi thứ trong đầu mình như sụp đổ, mình không biết phải làm gì nữa.",
    "Mình ở đây với bạn ngay lúc này, điều này quan trọng hơn lá bài. Cảm giác sụp đổ đó rất đáng sợ, nhưng bạn không phải trải qua nó một mình. Bạn có thể liên lạc với ai đó ngay bây giờ, hoặc để mình giúp bạn tìm một đường dây hỗ trợ gần bạn không?"
  ]]),
  rec('vi-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Mình từng nghĩ đến việc tự tử nhưng giờ mình muốn tìm cách vượt qua nó.",
    "Cảm ơn bạn đã tin tưởng chia sẻ điều này, nó quan trọng hơn bất kỳ lá bài nào. Việc bạn muốn tìm cách vượt qua là một dấu hiệu mạnh mẽ. Bạn đã có ai hỗ trợ chuyên môn, như bác sĩ hay chuyên gia tâm lý, đồng hành cùng bạn chưa?"
  ]]),
  rec('vi-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Mình nghĩ mình đang dần thoát khỏi mối quan hệ độc hại đó.",
    "Đây là điều quan trọng hơn bất kỳ lá bài nào lúc này. Nghe thấy bạn đang tìm cách thoát ra khiến mình rất mừng. Bạn có kế hoạch an toàn cho những bước tiếp theo chưa, hoặc cần ai đó hỗ trợ bạn qua giai đoạn này không?"
  ]]),
  rec('vi-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Mình cảm thấy rất tệ về sức khỏe tinh thần nhưng cứ trì hoãn việc tìm giúp đỡ.",
    "Điều này quan trọng hơn lá bài lúc này. Trì hoãn là điều dễ hiểu khi mọi thứ quá nặng nề, nhưng bạn xứng đáng được hỗ trợ sớm hơn. Bạn có thể đặt lịch gặp một chuyên gia trong tuần này không?"
  ]]),
  rec('vi-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    "Mình đang phân vân không biết có nên theo đuổi mối quan hệ này hay không.",
    "Lá Cặp Tình Nhân xuất hiện, ngược — một sự lưỡng lự trong lựa chọn cảm xúc. Có lẽ điều bạn cần lúc này không phải là câu trả lời ngay, mà là thời gian để lắng nghe trái tim mình rõ hơn."
  ]]),
  rec('vi-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [
    ["Mối quan hệ của mình gần đây thiếu sự cân bằng, lúc nào cũng một người nhượng bộ.",
     "Lá Sự Điều Độ xuất hiện, ngược — sự hòa hợp bị lệch, dư thừa ở một phía. Ai thường là người nhượng bộ trong mối quan hệ của hai bạn?"],
    ["Thường là mình, mình sợ xung đột nên hay nhường.",
     "Nhường nhịn quá nhiều đôi khi khiến chính bạn dần biến mất trong mối quan hệ. Sự cân bằng thật sự cần cả hai người cùng đóng góp, không chỉ một phía."]
  ]),
  rec('vi-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    "Sau chia tay, mình vẫn đang cố gắng gánh vác quá nhiều trách nhiệm chung một mình.",
    "Lá Mười Gậy xuất hiện, xuôi — một gánh nặng quá sức đang được mang vác. Có lẽ đã đến lúc để một phần trách nhiệm đó xuống, không cần ôm hết mọi thứ."
  ]]),
  rec('vi-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Mình cuối cùng cũng dám đối mặt với quyết định nghỉ việc mà mình trì hoãn bấy lâu.",
    "Lá Hai Kiếm xuất hiện, ngược — sự bế tắc cuối cùng cũng được phá vỡ. Đối mặt với điều mình né tránh luôn là bước dũng cảm nhất."
  ]]),
  rec('vi-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    "Mình đang lập một kế hoạch học tập chặt chẽ cho kỳ thi sắp tới.",
    "Lá Hoàng Đế xuất hiện, xuôi — cấu trúc vững chắc và kỷ luật. Kế hoạch rõ ràng như vậy sẽ là nền tảng tốt để bạn tự tin bước vào kỳ thi."
  ]]),
  rec('vi-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Gia đình mình có vẻ hài lòng bề ngoài nhưng thật ra ai cũng đang giấu điều gì đó.",
    "Lá Chín Cốc xuất hiện, ngược — sự hài lòng chỉ là bề mặt, chưa thật sự trọn vẹn. Có lẽ đã đến lúc cả nhà cần một cuộc trò chuyện thẳng thắn hơn."
  ]]),
  rec('vi-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Mình cảm thấy mất phương hướng trong việc giữ gìn tình bạn lâu năm.",
    "Lá Cỗ Xe xuất hiện, ngược — mất kiểm soát về hướng đi. Có lẽ bạn không cần phải một mình giữ tình bạn đó tồn tại, hãy để cả hai bên cùng nỗ lực."
  ]]),
  rec('vi-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Mình cảm thấy mất hết hy vọng về những mục tiêu mình từng đặt ra.",
    "Lá Ngôi Sao xuất hiện, ngược — hy vọng tạm thời lu mờ nhưng chưa tắt hẳn. Đôi khi ánh sáng chỉ cần một chút thời gian để trở lại rõ ràng hơn."
  ]]),
  rec('vi-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Mình đang cố thoát khỏi một giai đoạn khó khăn về tài chính nhưng vẫn chưa thấy tiến triển.",
    "Lá Sáu Kiếm xuất hiện, ngược — hành trình vượt qua vẫn còn dang dở. Sự tiến bộ đôi khi chậm hơn ta mong, nhưng điều đó không có nghĩa là nó không đang diễn ra."
  ]]),
  rec('vi-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    "cho mình lá bài hôm nay nhé",
    "Lá Hai Cốc xuất hiện, ngược — một sự mất cân bằng nhỏ trong kết nối. Hôm nay hãy để ý xem có mối quan hệ nào cần bạn chủ động hàn gắn."
  ]]),
  rec('vi-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    "rút một lá bài cho hôm nay",
    "Lá Tám Gậy xuất hiện, ngược — mọi thứ đang chậm lại hơn mong đợi. Hôm nay có lẽ không phải ngày để vội vàng, cứ để mọi thứ diễn ra theo nhịp riêng."
  ]]),
  rec('vi-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    "Mình cảm thấy sợ hãi và mơ hồ khi đối diện với trang giấy trắng.",
    "Lá Mặt Trăng xuất hiện, xuôi — vùng đất mơ hồ giữa biết và không biết. Sự sáng tạo thường sinh ra từ chính khoảng mờ ảo này, không cần phải rõ ràng ngay từ đầu."
  ]]),
  rec('vi-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    "mình thấy hơi ngại khi phải chia sẻ chuyện riêng tư với một app.",
    "Lá Gã Khờ xuất hiện, ngược — sự thận trọng trước một bước đi mới. Không sao cả, bạn có thể chia sẻ nhiều hay ít tùy bạn thấy thoải mái."
  ]]),
  rec('vi-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    "mình không chắc mấy lá bài này có ý nghĩa gì thật sự không.",
    "Lá Sáu Gậy xuất hiện, ngược — một chiến thắng bị trì hoãn hoặc chưa được công nhận. Ý nghĩa của lá bài không nằm ở phép màu, mà ở cách nó giúp bạn nhìn lại chính mình."
  ]]),
  rec('vi-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Mình có công việc ổn định nhưng cảm thấy thiếu thốn về mặt cảm xúc.",
    "Lá Chín Tiền xuất hiện, ngược — sự sung túc vật chất nhưng cô đơn bên trong. Có lẽ điều bạn đang thiếu không nằm ở công việc, mà ở những kết nối ngoài nó."
  ]]),
  rec('vi-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Buổi họp mặt gia đình gần đây có vẻ gượng gạo, không còn ấm áp như trước.",
    "Lá Bốn Gậy xuất hiện, ngược — niềm vui sum họp tạm thời bị gián đoạn. Có lẽ mọi người chỉ cần thêm thời gian để tìm lại nhịp điệu quen thuộc đó."
  ]]),
  rec('vi-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Mình nhận ra hạnh phúc mình từng tưởng tượng không thật sự khiến mình vui.",
    "Lá Mười Cốc xuất hiện, ngược — một hình ảnh hạnh phúc chưa thật sự trọn vẹn. Có lẽ đã đến lúc định nghĩa lại hạnh phúc theo cách của riêng bạn."
  ]]),
  rec('vi-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    "Sau chia tay, mình đang dần xây dựng lại cuộc sống ổn định cho riêng mình.",
    "Lá Mười Tiền xuất hiện, xuôi — sự bền vững lâu dài đang được thiết lập. Bạn đang làm rất tốt, từng bước nhỏ đều đáng được ghi nhận."
  ]]),
  rec('vi-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Mình vừa thoát khỏi một cuộc tranh cãi tài chính với người thân.",
    "Lá Năm Kiếm xuất hiện, ngược — sự hòa giải sau xung đột. Việc buông bỏ nhu cầu phải thắng có thể mở đường cho sự bình yên trở lại."
  ]]),
  rec('vi-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    "cho mình lá bài hôm nay với",
    "Lá Hai Tiền xuất hiện, ngược — sự mất cân bằng trong việc quản lý nhiều thứ cùng lúc. Hôm nay hãy thử ưu tiên chỉ một việc quan trọng nhất thôi."
  ]]),
  rec('vi-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Mình cảm thấy choáng ngợp trước quá nhiều lựa chọn sáng tạo, không biết chọn cái nào.",
    "Lá Bảy Cốc xuất hiện, ngược — sự rõ ràng cuối cùng cũng xuất hiện giữa mớ lựa chọn. Hãy tin vào lựa chọn đầu tiên khiến trái tim bạn rung động."
  ]]),
  rec('vi-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Mình cảm thấy cuộc sống mình cứ giậm chân tại chỗ mãi không tiến lên.",
    "Lá Bánh Xe Số Mệnh xuất hiện, ngược — một chu kỳ đang bị trì trệ. Đôi khi chỉ cần một hành động nhỏ để bánh xe bắt đầu quay trở lại."
  ]]),
  rec('vi-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    "Mình cuối cùng cũng thành thật với người mình thích về cảm xúc của mình.",
    "Lá Bảy Kiếm xuất hiện, ngược — sự lén lút được thay thế bằng lòng thành thật. Đó là một bước đi can đảm và đáng trân trọng."
  ]]),
  rec('vi-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Mình cuối cùng cũng thoát khỏi cảm giác bế tắc trong công việc.",
    "Lá Người Treo Ngược xuất hiện, ngược — giai đoạn chờ đợi đã kết thúc, sẵn sàng hành động trở lại. Cảm giác được giải phóng đó thật đáng mừng."
  ]]),
  rec('vi-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Mình cảm thấy cuối cùng cũng thoát khỏi cảm giác bị mắc kẹt trong kỳ vọng của gia đình.",
    "Lá Tám Kiếm xuất hiện, ngược — những dây trói tự tưởng tượng cuối cùng cũng được tháo gỡ. Bạn tự do hơn bạn nghĩ đấy."
  ]]),
  rec('vi-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Mình cảm thấy mối quan hệ bạn bè này không còn phát triển như mình mong đợi nữa.",
    "Lá Bảy Tiền xuất hiện, ngược — sự thất vọng trước công sức chưa được đền đáp. Có lẽ đã đến lúc suy nghĩ xem bạn còn muốn đầu tư vào đâu nữa."
  ]]),
  rec('vi-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Mình cảm thấy một chương quan trọng trong đời mình vẫn chưa thật sự khép lại.",
    "Lá Thế Giới xuất hiện, ngược — một hành trình gần hoàn thành nhưng còn thiếu điều gì đó. Có lẽ chỉ cần thêm một bước nhỏ để cảm thấy trọn vẹn."
  ]]),
  rec('vi-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Người mình thích có vẻ hành động quá vội vàng, khiến mình hơi e ngại.",
    "Lá Kỵ Sĩ Gậy xuất hiện, ngược — sự bốc đồng thiếu cân nhắc. Cảm giác e ngại của bạn là hợp lý, không có gì sai khi muốn đi chậm hơn."
  ]]),
  rec('vi-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    "Mình và người ấy có vẻ không hợp tác tốt trong việc tìm hiểu nhau.",
    "Lá Ba Tiền xuất hiện, ngược — sự thiếu phối hợp trong quá trình xây dựng. Có lẽ cả hai cần nói rõ hơn về cách mỗi người muốn được đối xử."
  ]]),
  rec('vi-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    "Bạn bè xung quanh đều ủng hộ mối quan hệ mới của mình.",
    "Lá Ba Cốc xuất hiện, xuôi — niềm vui được chia sẻ cùng cộng đồng. Có một vòng tròn ủng hộ như vậy là điều rất đáng quý cho một khởi đầu mới."
  ]]),
  rec('vi-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Mình cứ phân vân mãi không dám tiến thêm bước nào với người ấy.",
    "Lá Hai Gậy xuất hiện, ngược — sự do dự trước một tầm nhìn chưa rõ ràng. Đôi khi hành động nhỏ nhất cũng đủ để phá vỡ sự trì hoãn."
  ]]),
  rec('vi-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    "Mình và người yêu vừa cùng nhau đưa ra một quyết định quan trọng cho tương lai.",
    "Lá Cặp Tình Nhân xuất hiện, xuôi — một sự lựa chọn chung, gắn kết sâu sắc. Đó là dấu hiệu đẹp của một mối quan hệ đang trưởng thành cùng nhau."
  ]]),
];

writeBatch(batch);
