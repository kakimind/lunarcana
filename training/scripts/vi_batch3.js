const { rec, writeBatch } = require('./lang_batch_helper')('vi');

const batch = [
  rec('vi-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [
    ["Mình cảm thấy kiệt sức khi phải luôn là người cố gắng giữ mối quan hệ này.",
     "Lá Chín Gậy xuất hiện, ngược — sự phòng thủ mệt mỏi, luôn trong tư thế sẵn sàng chiến đấu. Người ấy có biết bạn đang cảm thấy như vậy không?"],
    ["Mình chưa từng nói ra, sợ bị coi là yếu đuối.",
     "Chia sẻ sự mệt mỏi không phải là yếu đuối, mà là một hình thức tin tưởng. Có lẽ đã đến lúc để người ấy biết bạn cũng cần được san sẻ."]
  ]),
  rec('vi-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Sau một giai đoạn khó khăn, mối quan hệ của mình đang dần ổn định trở lại.",
    "Lá Năm Tiền xuất hiện, ngược — giai đoạn thiếu thốn đang dần qua đi. Đó là một tín hiệu đáng mừng, cứ tiếp tục nuôi dưỡng sự hồi phục này."
  ]]),
  rec('vi-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Mình vẫn chưa thể chấp nhận rằng mối quan hệ đó đã thật sự kết thúc.",
    "Lá Cái Chết xuất hiện, ngược — một sự kết thúc đang bị cưỡng lại. Chấp nhận cần thời gian, không có gì sai khi bạn vẫn đang trong quá trình đó."
  ]]),
  rec('vi-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Mình cứ mãi nhớ về những kỷ niệm đẹp thay vì nhìn nhận thực tế của mối quan hệ đó.",
    "Lá Sáu Cốc xuất hiện, ngược — hoài niệm đang che mờ hiện thực. Có lẽ đã đến lúc nhìn cả những phần chưa đẹp để thật sự buông bỏ."
  ]]),
  rec('vi-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Mình cảm thấy không thể nghỉ ngơi được dù đã chia tay được một thời gian.",
    "Lá Bốn Kiếm xuất hiện, ngược — sự nghỉ ngơi cần thiết vẫn chưa đến. Tâm trí bạn có lẽ vẫn đang xử lý quá nhiều, hãy cho nó thêm thời gian."
  ]]),
  rec('vi-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Mình đang trải qua giai đoạn mơ hồ, không rõ cảm xúc của mình về việc chia tay.",
    "Lá Mặt Trăng xuất hiện, xuôi — một vùng đất chưa rõ ràng giữa quá khứ và tương lai. Sự mơ hồ này là một phần bình thường của quá trình chữa lành."
  ]]),
  rec('vi-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "Mình vừa nhận được một cơ hội công việc tuyệt vời mà mình hằng mong đợi.",
    "Lá Át Tiền xuất hiện, xuôi — một cơ hội mới đầy tiềm năng. Đây là lúc để bạn nắm lấy nó bằng cả sự tự tin."
  ]]),
  rec('vi-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "Mình hành động quá vội vàng trong một quyết định công việc gần đây và giờ đang hối hận.",
    "Lá Kỵ Sĩ Kiếm xuất hiện, ngược — sự vội vàng thiếu cân nhắc. Hối hận là điều bình thường, nhưng bạn vẫn có thể điều chỉnh từ đây."
  ]]),
  rec('vi-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Mình cảm thấy công việc hiện tại không còn nuôi dưỡng sự sáng tạo của mình nữa.",
    "Lá Hoàng Hậu xuất hiện, ngược — sự nuôi dưỡng đang bị cạn kiệt. Có lẽ đã đến lúc tìm một môi trường mới để nguồn sáng tạo được hồi sinh."
  ]]),
  rec('vi-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Mình bắt đầu chú ý và trân trọng những cơ hội nhỏ tại nơi làm việc hơn.",
    "Lá Bốn Cốc xuất hiện, ngược — sự thờ ơ đang dần được thay bằng sự chú tâm. Đó là một thay đổi tích cực đáng được ghi nhận."
  ]]),
  rec('vi-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "Mình đang đánh giá lại xem công sức mình bỏ ra có xứng đáng với kết quả không.",
    "Lá Bảy Tiền xuất hiện, xuôi — thời điểm để nhìn lại và đánh giá thành quả. Đây là lúc hợp lý để cân nhắc liệu con đường này còn đáng để tiếp tục theo đuổi."
  ]]),
  rec('vi-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "Mình cảm thấy mất kết nối với trực giác của bản thân khi đưa ra quyết định công việc.",
    "Lá Nữ Tư Tế xuất hiện, ngược — trực giác bị che mờ bởi tiếng ồn bên ngoài. Có lẽ bạn cần một khoảng lặng để lắng nghe lại chính mình."
  ]]),
  rec('vi-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Mình có nhiều ý tưởng học tập nhưng không cái nào được thực hiện đến cùng.",
    "Lá Cận Vệ Kiếm xuất hiện, ngược — sự tò mò nhưng thiếu tập trung. Có lẽ chỉ cần chọn một ý tưởng và theo đuổi nó trọn vẹn trước khi chuyển sang cái khác."
  ]]),
  rec('vi-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "Mình đang xây dựng một nền tảng kiến thức vững chắc cho tương lai nghề nghiệp.",
    "Lá Mười Tiền xuất hiện, xuôi — sự bền vững lâu dài đang được thiết lập. Những gì bạn học hôm nay sẽ là nền móng cho một tương lai vững chắc."
  ]]),
  rec('vi-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Mình có đủ kiến thức nhưng lại thiếu tự tin khi vào phòng thi.",
    "Lá Nhà Ảo Thuật xuất hiện, ngược — tiềm năng chưa được sử dụng trọn vẹn. Điều bạn cần không phải học thêm, mà là tin vào những gì bạn đã có."
  ]]),
  rec('vi-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "Mình muốn khởi xướng một cuộc trò chuyện mới để hàn gắn gia đình nhưng chưa biết bắt đầu thế nào.",
    "Lá Át Gậy xuất hiện, ngược — nguồn năng lượng khởi đầu vẫn còn đang tích tụ. Có lẽ bắt đầu bằng một câu hỏi đơn giản, chân thành cũng đủ."
  ]]),
  rec('vi-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Bố mình cuối cùng cũng thể hiện sự thấu hiểu hơn với cảm xúc của mình.",
    "Lá Vua Cốc xuất hiện, xuôi — sự trưởng thành cảm xúc và điềm tĩnh. Đây là một bước tiến đẹp trong mối quan hệ giữa hai người."
  ]]),
  rec('vi-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Mình cảm thấy như đã chạm đáy trong mối quan hệ với gia đình, không thể tệ hơn được nữa.",
    "Lá Mười Kiếm xuất hiện, xuôi — điểm kết thúc của một chu kỳ đau đớn. Khi đã chạm đáy, điều duy nhất còn lại là đi lên."
  ]]),
  rec('vi-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Mình mong đợi một sự thay đổi trong gia đình nhưng mọi thứ vẫn giậm chân tại chỗ.",
    "Lá Ba Gậy xuất hiện, ngược — tầm nhìn xa bị trì hoãn. Có lẽ sự thay đổi cần bắt đầu từ chính bạn trước, thay vì chờ đợi người khác."
  ]]),
  rec('vi-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Mình cứ do dự mãi không dám rời khỏi một tình bạn không còn lành mạnh.",
    "Lá Tám Cốc xuất hiện, ngược — sự do dự trước một bước đi cần thiết. Bạn xứng đáng có những mối quan hệ nuôi dưỡng mình, không chỉ làm mình mệt mỏi."
  ]]),
  rec('vi-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "Mình vừa có một buổi họp mặt bạn bè tràn đầy tiếng cười và niềm vui.",
    "Lá Mặt Trời xuất hiện, xuôi — niềm vui rực rỡ và chân thật. Những khoảnh khắc như vậy chính là nguồn năng lượng quý giá cho tâm hồn."
  ]]),
  rec('vi-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "Mình và bạn thân luôn sẵn sàng giúp đỡ nhau bất cứ khi nào cần.",
    "Lá Sáu Tiền xuất hiện, xuôi — sự cho và nhận cân bằng, hào phóng. Đó là dấu hiệu của một tình bạn được xây dựng trên sự tin tưởng thật sự."
  ]]),
  rec('vi-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Mình đang chuẩn bị bước vào một chương hoàn toàn mới của cuộc đời.",
    "Lá Gã Khờ xuất hiện, xuôi — một khởi đầu tự do, tràn đầy khả năng. Hãy bước đi với sự tò mò thay vì nỗi sợ, mọi thứ đều đang mở ra trước mắt bạn."
  ]]),
  rec('vi-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Mình đang dần chữa lành khỏi một nỗi đau cũ đã đeo bám lâu nay.",
    "Lá Ba Kiếm xuất hiện, ngược — vết thương đang liền lại. Đó là một hành trình chậm nhưng chắc chắn, hãy tự hào về những gì bạn đã vượt qua."
  ]]),
  rec('vi-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Mình cảm thấy khó tin tưởng vào những cảm xúc mới mẻ đang đến với mình.",
    "Lá Cận Vệ Cốc xuất hiện, ngược — sự e dè trước một tin tức cảm xúc mới. Không sao nếu bạn cần thời gian để mở lòng đón nhận."
  ]]),
  rec('vi-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Mình cảm thấy kiệt sức vì cứ phải bảo vệ quan điểm của mình trước mọi người.",
    "Lá Bảy Gậy xuất hiện, ngược — sự phòng thủ đã kéo dài quá lâu. Không phải lúc nào bạn cũng cần chứng minh mình đúng, đôi khi nghỉ ngơi cũng là một lựa chọn."
  ]]),
  rec('vi-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Mình luôn chăm sóc người khác nhưng quên mất việc chăm sóc bản thân.",
    "Lá Hoàng Hậu Tiền xuất hiện, ngược — sự nuôi dưỡng đang mất cân bằng, dồn hết cho người khác. Đã đến lúc bạn cũng cần được chăm sóc, không chỉ là người cho đi."
  ]]),
  rec('vi-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Mình cố gắng rất nhiều trong công việc nhưng vẫn chưa nhận được sự công nhận tài chính xứng đáng.",
    "Lá Sáu Gậy xuất hiện, ngược — một chiến thắng đang bị trì hoãn công nhận. Đôi khi công sức cần thêm thời gian để được đền đáp đúng mức."
  ]]),
  rec('vi-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Mình có đủ tiền nhưng vẫn cảm thấy trống rỗng, không thật sự hài lòng.",
    "Lá Chín Cốc xuất hiện, ngược — sự thỏa mãn vật chất chưa chạm đến điều bạn thật sự cần. Có lẽ điều bạn đang tìm kiếm không nằm ở con số trong tài khoản."
  ]]),
  rec('vi-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "Tình hình tài chính của mình đang có dấu hiệu chuyển biến tốt hơn gần đây.",
    "Lá Bánh Xe Số Mệnh xuất hiện, xuôi — một chu kỳ mới đang mở ra thuận lợi. Cứ để dòng chảy này tiếp tục, và tận dụng đà tích cực này."
  ]]),
  rec('vi-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "cho mình lá bài của hôm nay",
    "Lá Giáo Hoàng xuất hiện, xuôi — sự hướng dẫn và truyền thống vững chắc. Hôm nay có thể là ngày tốt để tìm lời khuyên từ ai đó bạn tin tưởng."
  ]]),
  rec('vi-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "rút một lá cho ngày hôm nay",
    "Lá Hai Cốc xuất hiện, xuôi — một sự kết nối cân bằng đang chờ đợi. Hôm nay hãy để ý đến một mối quan hệ có tiềm năng phát triển đẹp."
  ]]),
  rec('vi-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "cho mình xin lá bài hôm nay",
    "Lá Năm Kiếm xuất hiện, xuôi — cảnh báo về một cuộc tranh cãi không đáng có. Hôm nay hãy cân nhắc kỹ trước khi bước vào bất kỳ cuộc đối đầu nào."
  ]]),
  rec('vi-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "hôm nay có lá nào cho mình không",
    "Lá Chín Tiền xuất hiện, xuôi — sự tận hưởng thành quả độc lập. Hôm nay hãy dành thời gian tận hưởng những gì bạn đã tự mình xây dựng nên."
  ]]),
  rec('vi-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "lá bài cho mình hôm nay với",
    "Lá Bốn Gậy xuất hiện, xuôi — niềm vui sum họp và ăn mừng. Hôm nay là ngày tốt để chia sẻ niềm vui với những người thân yêu."
  ]]),
  rec('vi-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "cho mình một lá bài hôm nay",
    "Lá Hai Kiếm xuất hiện, ngược — một sự bế tắc đang được phá vỡ. Hôm nay có thể là lúc bạn cuối cùng cũng đưa ra được quyết định đã trì hoãn lâu."
  ]]),
  rec('vi-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "cho mình lá bài của hôm nay nhé",
    "Lá Mười Cốc xuất hiện, xuôi — hạnh phúc trọn vẹn bên những người thân yêu. Hôm nay hãy trân trọng những khoảnh khắc giản dị bên gia đình, bạn bè."
  ]]),
  rec('vi-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "rút cho mình lá bài hôm nay",
    "Lá Mười Gậy xuất hiện, xuôi — một gánh nặng lớn gần đến đích. Hôm nay hãy nhắc nhở bản thân rằng bạn sắp hoàn thành điều mình đang cố gắng."
  ]]),
  rec('vi-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Mình cần thời gian một mình để suy nghĩ thấu đáo trước khi đưa ra quyết định lớn.",
    "Lá Ẩn Sĩ xuất hiện, xuôi — sự tìm kiếm nội tâm sâu sắc. Đây chính xác là lúc để bạn lùi lại và lắng nghe tiếng nói bên trong mình."
  ]]),
  rec('vi-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "Một sự kiện bất ngờ vừa làm thay đổi hoàn toàn kế hoạch của mình.",
    "Lá Tòa Tháp xuất hiện, xuôi — một sự sụp đổ đột ngột nhưng cần thiết để xây lại điều vững chắc hơn. Đôi khi những gì sụp đổ lại mở đường cho điều tốt hơn."
  ]]),
  rec('vi-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Sau nhiều khó khăn, mình cuối cùng cũng cảm thấy có hy vọng về tương lai.",
    "Lá Ngôi Sao xuất hiện, xuôi — hy vọng dịu dàng đang tỏa sáng trở lại. Hãy giữ lấy cảm giác này, nó sẽ dẫn đường cho những bước tiếp theo."
  ]]),
  rec('vi-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Mình cảm thấy không công bằng khi tác phẩm của mình không được đánh giá đúng mức.",
    "Lá Công Lý xuất hiện, ngược — sự mất cân bằng trong việc nhìn nhận công sức. Cảm giác đó rất thật, nhưng giá trị công việc của bạn không phụ thuộc vào sự công nhận từ người khác."
  ]]),
  rec('vi-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Mình cứ phê phán tác phẩm của chính mình quá khắt khe.",
    "Lá Hoàng Hậu Kiếm xuất hiện, ngược — sự phán xét quá lạnh lùng, thiếu khoan dung. Hãy thử nhìn tác phẩm của mình bằng ánh mắt dịu dàng hơn một chút."
  ]]),
  rec('vi-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "Mình cuối cùng cũng tìm được động lực để hoàn thành dự án sáng tạo còn dang dở.",
    "Lá Cỗ Xe xuất hiện, xuôi — ý chí mạnh mẽ đưa bạn tiến về phía trước. Hãy giữ lấy động lực này cho đến khi hoàn thành."
  ]]),
  rec('vi-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "mấy lời khuyên kiểu này nghe hơi sến, có thật sự áp dụng được không?",
    "Lá Kỵ Sĩ Cốc xuất hiện, ngược — cảm xúc có phần viển vông, thiếu thực tế. Bạn nói đúng, lời khuyên chỉ có ý nghĩa nếu nó thật sự chạm đến hoàn cảnh của bạn. Có điều gì cụ thể đang khiến bạn bận tâm không?"
  ]]),
  rec('vi-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "mình không muốn phụ thuộc quá nhiều vào một cái app để cảm thấy tốt hơn.",
    "Lá Bốn Tiền xuất hiện, ngược — sự buông lỏng khỏi việc bám giữ quá chặt. Đó là một suy nghĩ lành mạnh. App này chỉ là một công cụ nhỏ, sức mạnh thật sự luôn nằm ở chính bạn."
  ]]),
  rec('vi-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "ban đầu mình hoài nghi nhưng giờ thấy cuộc trò chuyện này khá dễ chịu.",
    "Lá Sáu Kiếm xuất hiện, xuôi — một hành trình êm đềm hơn đang mở ra. Mình rất vui vì bạn cảm thấy thoải mái hơn, dù chỉ một chút."
  ]]),
  rec('vi-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Mình đã ngừng những suy nghĩ muốn làm hại bản thân, nhưng vẫn còn thấy mong manh.",
    "Cảm ơn bạn đã chia sẻ điều này, nó quan trọng hơn bất kỳ lá bài nào. Thật tốt khi bạn nhận ra được sự thay đổi đó, dù cảm giác mong manh vẫn còn là điều bình thường. Bạn có ai đồng hành cùng bạn trong quá trình hồi phục này không?"
  ]]),
  rec('vi-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "Mình từng có ý định tự làm hại bản thân nhưng giờ mình muốn tìm cách chữa lành.",
    "Điều này quan trọng hơn lá bài rất nhiều, và mình rất trân trọng việc bạn chia sẻ. Mong muốn chữa lành của bạn là một bước khởi đầu quý giá. Bạn đã có người hỗ trợ chuyên môn đồng hành cùng chưa?"
  ]]),
  rec('vi-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Sếp mình liên tục dùng lời lẽ đe dọa để ép mình làm việc quá sức.",
    "Điều này quan trọng hơn lá bài lúc này. Không ai nên bị đe dọa để làm việc, đó là hành vi lạm dụng quyền lực. Bạn có thể tìm đến bộ phận nhân sự, luật lao động, hoặc một người bạn tin tưởng để được hỗ trợ không?"
  ]]),
  rec('vi-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "Mình cảm thấy nhẹ nhõm hơn sau khi thoát khỏi một mối quan hệ có tính kiểm soát.",
    "Điều này quan trọng hơn lá bài, và mình rất mừng khi nghe điều đó. Ra khỏi một mối quan hệ như vậy cần rất nhiều can đảm. Bạn có đang nhận được sự hỗ trợ nào để tiếp tục hồi phục không?"
  ]]),
  rec('vi-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "Mình đang trong quá trình điều trị bệnh và cảm thấy cân bằng hơn dạo gần đây.",
    "Điều này thật đáng mừng, và mình rất vui khi nghe bạn đang cảm thấy tốt hơn. Hãy tiếp tục theo dõi sát với bác sĩ điều trị của bạn nhé."
  ]]),
  rec('vi-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "Mình cảm thấy quá yếu đuối để đối mặt với chẩn đoán bệnh gần đây.",
    "Điều này quan trọng hơn lá bài, cảm giác đó hoàn toàn dễ hiểu. Bạn có người thân hoặc chuyên gia y tế nào đang đồng hành cùng bạn qua giai đoạn này không?"
  ]]),
  rec('vi-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "cho mình lá bài hôm nay",
    "Lá Tám Gậy xuất hiện, xuôi — tốc độ và chuyển động nhanh chóng. Hôm nay mọi thứ có thể diễn ra nhanh hơn bạn nghĩ, hãy sẵn sàng đón nhận."
  ]]),
  rec('vi-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "Tình bạn của mình và một người bạn cũ vừa trải qua một chặng đường trọn vẹn, đầy ý nghĩa.",
    "Lá Thế Giới xuất hiện, xuôi — một hành trình hoàn chỉnh, viên mãn. Những tình bạn như vậy là món quà quý giá của cuộc đời."
  ]]),
  rec('vi-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "Mình cảm thấy tràn đầy hy vọng về một mối tình mới có thể bắt đầu.",
    "Lá Ngôi Sao xuất hiện, xuôi — hy vọng dịu dàng đang tỏa sáng. Cứ để cảm giác này dẫn đường, không cần vội vàng."
  ]]),
  rec('vi-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "Mình cứ lo lắng suy nghĩ quá nhiều về việc liệu người ấy có thích mình không.",
    "Lá Chín Kiếm xuất hiện, xuôi — những nỗi lo trong đêm khuya, thường lớn hơn thực tế. Có lẽ điều bạn cần là một giấc ngủ ngon hơn là thêm suy nghĩ."
  ]]),
  rec('vi-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Mình đang cố cân bằng giữa việc theo đuổi tình cảm mới và công việc bận rộn.",
    "Lá Hai Tiền xuất hiện, xuôi — sự linh hoạt giữ thăng bằng nhiều thứ cùng lúc. Bạn đang xoay xở khá tốt, chỉ cần tiếp tục lắng nghe bản thân."
  ]]),
  rec('vi-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Mình cảm thấy nhẹ nhõm hơn sau khi chia sẻ bớt trách nhiệm trong mối quan hệ với người yêu.",
    "Lá Mười Gậy xuất hiện, ngược — gánh nặng đang được đặt xuống dần. Sự chia sẻ đó là dấu hiệu của một mối quan hệ đang trưởng thành hơn."
  ]]),
  rec('vi-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "Mình nhận ra mình và người yêu đang mắc kẹt trong một vòng lặp cãi vã không lối thoát.",
    "Lá Quỷ Dữ xuất hiện, xuôi — một sự ràng buộc mà cả hai đang tự tạo ra cho nhau. Nhận ra vòng lặp này là bước đầu tiên để cùng nhau thoát ra."
  ]]),
];

writeBatch(batch);
