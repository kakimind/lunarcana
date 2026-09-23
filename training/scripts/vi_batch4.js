const { rec, writeBatch } = require('./lang_batch_helper')('vi');

const batch = [
  rec('vi-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Mình có giấu người yêu một vài chuyện nhỏ vì sợ gây rắc rối.",
    "Lá Bảy Kiếm xuất hiện, xuôi — một chiến lược lén lút để tránh xung đột. Những bí mật nhỏ đôi khi lớn dần nếu không được nói ra, dù ban đầu chỉ vì muốn giữ bình yên."
  ]]),
  rec('vi-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Mình đang dồn hết tâm trí vào việc học một kỹ năng mới để quên đi nỗi đau chia tay.",
    "Lá Tám Tiền xuất hiện, xuôi — sự cần mẫn và tập trung xây dựng. Đó là một cách lành mạnh để chuyển hóa nỗi đau thành điều gì đó tích cực."
  ]]),
  rec('vi-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Mình cảm thấy mất kết nối với cảm xúc của chính mình sau cuộc chia tay.",
    "Lá Hoàng Hậu Cốc xuất hiện, ngược — sự thấu cảm dành cho người khác đang lấn át việc chăm sóc cảm xúc của chính mình. Đã đến lúc bạn quay về lắng nghe trái tim mình trước."
  ]]),
  rec('vi-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Mình đang cố lắng nghe trực giác của mình để biết khi nào thật sự sẵn sàng bước tiếp.",
    "Lá Nữ Tư Tế xuất hiện, xuôi — trí tuệ thầm lặng bên trong đang dẫn đường. Hãy tin vào nhịp độ của riêng bạn, không cần vội theo ai khác."
  ]]),
  rec('vi-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "Mình có nhiều ý tưởng nghề nghiệp mới nhưng cứ trì hoãn không bắt đầu cái nào.",
    "Lá Cận Vệ Gậy xuất hiện, ngược — sự nhiệt huyết ban đầu đang bị trì hoãn. Có lẽ chỉ cần chọn một ý tưởng nhỏ nhất và bắt đầu ngay hôm nay."
  ]]),
  rec('vi-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "Mình đang có quá nhiều lựa chọn nghề nghiệp hấp dẫn cùng lúc, không biết chọn đâu.",
    "Lá Bảy Cốc xuất hiện, xuôi — nhiều khả năng hấp dẫn nhưng cần sự tỉnh táo để chọn lựa. Hãy tự hỏi điều gì thật sự phù hợp với giá trị của bạn, không chỉ vẻ hào nhoáng bên ngoài."
  ]]),
  rec('vi-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Mình quyết định từ bỏ hẳn con đường sự nghiệp cũ để bắt đầu lại từ đầu.",
    "Lá Cái Chết xuất hiện, xuôi — một sự kết thúc cần thiết để mở ra điều mới. Đó là một quyết định can đảm, và nó có thể mở ra những cánh cửa bạn chưa từng nghĩ tới."
  ]]),
  rec('vi-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Mình cuối cùng cũng thoát khỏi cảm giác bị mắc kẹt trong công việc không phù hợp.",
    "Lá Tám Kiếm xuất hiện, ngược — những ràng buộc tự tạo cuối cùng cũng được tháo gỡ. Cảm giác tự do đó là hoàn toàn xứng đáng."
  ]]),
  rec('vi-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Mình cảm thấy kết quả học tập của mình cứ giậm chân tại chỗ dù đã cố gắng nhiều.",
    "Lá Bánh Xe Số Mệnh xuất hiện, ngược — một chu kỳ đang bị trì trệ. Đôi khi cần thay đổi phương pháp, không chỉ là cố gắng nhiều hơn."
  ]]),
  rec('vi-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Mình cảm thấy thiếu động lực ăn mừng những thành tích nhỏ trong học tập.",
    "Lá Bốn Gậy xuất hiện, ngược — niềm vui sum họp bị trì hoãn. Hãy thử dành thời gian ghi nhận những tiến bộ nhỏ của bản thân, dù chỉ là một chút."
  ]]),
  rec('vi-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Em trai mình vừa quyết định một việc táo bạo mà cả nhà không đồng ý.",
    "Lá Kỵ Sĩ Gậy xuất hiện, xuôi — sự táo bạo và khát khao phiêu lưu. Có lẽ thay vì phản đối, cả nhà có thể thử lắng nghe lý do đằng sau quyết định đó."
  ]]),
  rec('vi-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Mình cảm thấy cô đơn dù sống trong một gia đình đông đủ.",
    "Lá Chín Tiền xuất hiện, ngược — sự sung túc bên ngoài nhưng cô đơn bên trong. Cảm giác đó rất thật, và bạn xứng đáng được kết nối sâu sắc hơn, không chỉ ở gần nhau."
  ]]),
  rec('vi-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Mình cảm thấy sự thật mình muốn nói với gia đình cứ bị bóp méo mỗi khi truyền đạt.",
    "Lá Át Kiếm xuất hiện, ngược — sự rõ ràng đang bị che mờ bởi hiểu lầm. Có lẽ cần một cách tiếp cận khác, nhẹ nhàng hơn để sự thật của bạn được lắng nghe đúng."
  ]]),
  rec('vi-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Mình vẫn kiên trì giữ liên lạc với một người bạn dù khoảng cách địa lý xa xôi.",
    "Lá Chín Gậy xuất hiện, xuôi — sự kiên cường dù đã trải qua nhiều thử thách. Sự bền bỉ của bạn trong tình bạn này thật đáng quý."
  ]]),
  rec('vi-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Bạn thân mình luôn chăm sóc và quan tâm mình như một người chị trong gia đình.",
    "Lá Hoàng Hậu xuất hiện, xuôi — sự nuôi dưỡng ấm áp và chân thành. Bạn thật may mắn khi có một tình bạn sâu sắc như vậy."
  ]]),
  rec('vi-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Mình nhận ra sự ổn định mình từng mơ ước không mang lại cảm giác như mình tưởng.",
    "Lá Mười Tiền xuất hiện, ngược — sự bền vững hình thức nhưng thiếu ý nghĩa sâu xa. Có lẽ đã đến lúc định nghĩa lại thành công theo cách riêng của bạn."
  ]]),
  rec('vi-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Mình cảm thấy mình đang theo đuổi những cảm xúc không thực tế về bản thân.",
    "Lá Kỵ Sĩ Cốc xuất hiện, ngược — sự mộng mơ thiếu nền tảng thực tế. Có lẽ đã đến lúc nhìn lại bản thân bằng con mắt thực tế hơn, không chỉ là ước mơ."
  ]]),
  rec('vi-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Mình cảm thấy chưa sẵn sàng để đối diện với những bài học lớn của cuộc đời.",
    "Lá Sự Phán Xét xuất hiện, ngược — sự thức tỉnh đang bị trì hoãn. Không sao nếu bạn cần thêm thời gian, sự sẵn sàng sẽ đến khi nó đến."
  ]]),
  rec('vi-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "Mình cuối cùng cũng đạt được một mục tiêu cá nhân mà mình theo đuổi rất lâu.",
    "Lá Sáu Gậy xuất hiện, xuôi — một chiến thắng xứng đáng được ăn mừng. Hãy dành cho mình một khoảnh khắc để tự hào về hành trình đã qua."
  ]]),
  rec('vi-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Mình đang có đủ công cụ và kỹ năng để bắt đầu tự chủ tài chính.",
    "Lá Nhà Ảo Thuật xuất hiện, xuôi — mọi công cụ cần thiết đã sẵn sàng trong tay bạn. Đây là thời điểm tốt để bắt đầu hành động cụ thể."
  ]]),
  rec('vi-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Mình đang nhớ về thời điểm tài chính khó khăn hơn để trân trọng hiện tại nhiều hơn.",
    "Lá Sáu Cốc xuất hiện, xuôi — sự hoài niệm dịu dàng và lòng biết ơn. Nhìn lại chặng đường đã qua giúp bạn trân trọng những gì đang có hôm nay."
  ]]),
  rec('vi-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "cho mình xin lá bài hôm nay",
    "Lá Ba Kiếm xuất hiện, xuôi — một nỗi đau nhỏ có thể xuất hiện hôm nay. Nếu điều đó xảy ra, hãy cho phép mình cảm nhận nó thay vì né tránh."
  ]]),
  rec('vi-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "rút cho mình một lá hôm nay",
    "Lá Vua Tiền xuất hiện, xuôi — sự vững vàng và kiểm soát thực tế. Hôm nay là ngày tốt để đưa ra những quyết định thực tế, chắc chắn."
  ]]),
  rec('vi-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "cho mình lá bài của hôm nay với",
    "Lá Mặt Trăng xuất hiện, ngược — sự mơ hồ đang dần được làm sáng tỏ. Hôm nay có thể là ngày bạn nhìn rõ hơn điều mình từng nghi ngờ."
  ]]),
  rec('vi-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "lá bài hôm nay cho mình",
    "Lá Hai Gậy xuất hiện, xuôi — tầm nhìn xa và những khả năng mới. Hôm nay hãy dành thời gian nghĩ về bức tranh lớn hơn cho tương lai của bạn."
  ]]),
  rec('vi-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "cho mình một lá bài hôm nay đi",
    "Lá Tám Cốc xuất hiện, xuôi — bước đi khỏi điều không còn phù hợp. Hôm nay có thể là lúc bạn nhận ra điều gì đó đã đến lúc buông bỏ."
  ]]),
  rec('vi-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "cho mình xin một lá hôm nay",
    "Lá Bảy Tiền xuất hiện, xuôi — thời điểm để nhìn lại thành quả đã gieo trồng. Hôm nay hãy dành chút thời gian đánh giá những gì bạn đã đạt được."
  ]]),
  rec('vi-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "hôm nay có lá bài nào cho mình",
    "Lá Người Treo Ngược xuất hiện, xuôi — một góc nhìn khác, một sự tạm dừng cần thiết. Hôm nay hãy thử nhìn một vấn đề quen thuộc từ một góc độ khác."
  ]]),
  rec('vi-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Mình cần đưa ra một quyết định khó khăn nhưng cứ né tránh không dám đối diện.",
    "Lá Hai Kiếm xuất hiện, xuôi — sự lưỡng lự trước một lựa chọn khó khăn. Đôi khi việc mở mắt nhìn thẳng vào vấn đề là bước đầu tiên để tìm ra câu trả lời."
  ]]),
  rec('vi-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Mình cảm thấy niềm vui trong quyết định lớn này chưa thật sự trọn vẹn.",
    "Lá Mặt Trời xuất hiện, ngược — niềm vui tạm thời bị che khuất. Có lẽ cần thêm thời gian để ánh sáng đó tỏa rạng trở lại hoàn toàn."
  ]]),
  rec('vi-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "Mình đang cân nhắc hợp tác sáng tạo với một người bạn có cùng đam mê.",
    "Lá Cặp Tình Nhân xuất hiện, xuôi — một sự kết hợp có ý thức, hài hòa. Đây có thể là một sự hợp tác đẹp nếu cả hai cùng chia sẻ tầm nhìn."
  ]]),
  rec('vi-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Mình cảm thấy giai đoạn bế tắc sáng tạo tồi tệ nhất cuối cùng cũng đã qua.",
    "Lá Mười Kiếm xuất hiện, ngược — sự phục hồi sau một giai đoạn khó khăn. Cảm giác nhẹ nhõm đó là hoàn toàn xứng đáng, cứ để nguồn sáng tạo dần trở lại."
  ]]),
  rec('vi-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "mình không chắc app này có mang lại cơ hội thật sự nào cho mình không.",
    "Lá Át Tiền xuất hiện, ngược — một cơ hội chưa được nắm bắt trọn vẹn. Có lẽ giá trị thật sự không nằm ở cơ hội bên ngoài, mà ở những gì bạn khám phá về chính mình qua cuộc trò chuyện này."
  ]]),
  rec('vi-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "mình nghĩ chắc chẳng có app nào thật sự nhìn xa được tương lai của mình đâu.",
    "Lá Ba Gậy xuất hiện, ngược — tầm nhìn bị giới hạn. Bạn nói đúng, mình không nhìn thấy tương lai — mình chỉ giúp bạn nhìn rõ hơn những gì đang ở trong lòng bạn lúc này."
  ]]),
  rec('vi-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Mình cảm thấy đang dần thoát khỏi những suy nghĩ tiêu cực về việc tự làm hại bản thân.",
    "Điều này quan trọng hơn lá bài, và mình thật sự mừng khi nghe điều đó. Đó là một hành trình không dễ dàng. Bạn có đang nhận được sự hỗ trợ nào để tiếp tục vững vàng không?"
  ]]),
  rec('vi-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Mình đã bắt đầu nghỉ ngơi và chăm sóc bản thân tốt hơn sau giai đoạn khủng hoảng.",
    "Điều này thật đáng mừng, và quan trọng hơn bất kỳ lá bài nào. Việc bạn chủ động chăm sóc bản thân là một bước tiến lớn. Hãy tiếp tục như vậy nhé."
  ]]),
  rec('vi-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Mình cảm thấy bất công khi người gây tổn thương cho mình vẫn chưa phải chịu trách nhiệm gì.",
    "Điều này quan trọng hơn lá bài lúc này. Cảm giác bất công đó hoàn toàn chính đáng. Bạn có đang cân nhắc tìm kiếm hỗ trợ pháp lý hoặc tư vấn chuyên môn để được bảo vệ quyền lợi không?"
  ]]),
  rec('vi-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Mình sợ hãi trước một xét nghiệm y tế sắp tới nhưng cứ né tránh không dám hỏi bác sĩ.",
    "Điều này quan trọng hơn lá bài lúc này, nỗi sợ đó hoàn toàn dễ hiểu. Bạn có thể chuẩn bị một vài câu hỏi để hỏi bác sĩ trong lần khám tới không?"
  ]]),
  rec('vi-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Mình đang cố gắng đấu tranh để được lắng nghe về triệu chứng bệnh của mình tại bệnh viện.",
    "Điều này quan trọng hơn lá bài lúc này. Bạn có quyền được lắng nghe kỹ càng, đừng ngại yêu cầu ý kiến thứ hai từ bác sĩ khác nếu cần."
  ]]),
  rec('vi-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "Mình đang thể hiện sự quan tâm chân thành với người mình thích theo cách nhẹ nhàng nhất.",
    "Lá Hoàng Hậu Tiền xuất hiện, xuôi — sự nuôi dưỡng thực tế và ấm áp. Cách tiếp cận nhẹ nhàng của bạn là một nền tảng đẹp cho mối quan hệ mới."
  ]]),
  rec('vi-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Mình cảm thấy cô đơn dù đang ở trong một mối quan hệ.",
    "Lá Ẩn Sĩ xuất hiện, ngược — sự cô lập không mong muốn ngay cả khi có người bên cạnh. Có lẽ đã đến lúc chia sẻ cảm giác này với người yêu một cách thẳng thắn."
  ]]),
  rec('vi-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Mọi thứ về mối chia tay này diễn ra quá nhanh, mình chưa kịp xử lý cảm xúc.",
    "Lá Tám Gậy xuất hiện, ngược — mọi thứ diễn ra quá nhanh, không kịp thích nghi. Không sao nếu bạn cần chậm lại để cảm nhận trọn vẹn những gì đã xảy ra."
  ]]),
  rec('vi-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "Mình đang học cách giữ bình tĩnh và điềm đạm hơn trong môi trường công việc căng thẳng.",
    "Lá Vua Cốc xuất hiện, xuôi — sự điềm tĩnh và trưởng thành cảm xúc. Bạn đang phát triển một kỹ năng quý giá cho sự nghiệp lâu dài."
  ]]),
  rec('vi-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Mình vừa hòa giải thành công một xung đột căng thẳng với đồng nghiệp.",
    "Lá Năm Kiếm xuất hiện, ngược — sự hòa giải sau một cuộc đối đầu. Khả năng giải quyết xung đột của bạn là một điểm mạnh đáng quý."
  ]]),
  rec('vi-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "Mình cảm thấy hài lòng với kết quả học tập gần đây, dù không hoàn hảo.",
    "Lá Chín Cốc xuất hiện, xuôi — sự thỏa mãn và hài lòng chân thật. Cứ tận hưởng cảm giác này, bạn đã cố gắng rất nhiều để đạt được nó."
  ]]),
  rec('vi-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Gia đình mình đang dần vượt qua một giai đoạn khó khăn về tài chính.",
    "Lá Năm Tiền xuất hiện, ngược — giai đoạn thiếu thốn đang dần được vượt qua. Đó là dấu hiệu tốt cho thấy điều tồi tệ nhất đã ở phía sau."
  ]]),
  rec('vi-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "Mình cảm thấy mất cân bằng trong việc phân chia thời gian cho các nhóm bạn khác nhau.",
    "Lá Sự Điều Độ xuất hiện, ngược — sự hòa hợp đang bị lệch. Có lẽ không cần chia đều cho tất cả, hãy ưu tiên những mối quan hệ nuôi dưỡng bạn nhất."
  ]]),
  rec('vi-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Mình đang dần rời xa những thói quen cũ để hướng tới một phiên bản tốt hơn của bản thân.",
    "Lá Sáu Kiếm xuất hiện, xuôi — một hành trình rời khỏi vùng nước động để tìm nơi yên bình hơn. Bạn đang đi đúng hướng, cứ tiếp tục bước tới."
  ]]),
  rec('vi-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Mình đang thử một cách quản lý tài chính khác với những gì gia đình mình vẫn dạy.",
    "Lá Giáo Hoàng xuất hiện, ngược — sự phá vỡ khỏi khuôn mẫu truyền thống. Không sao nếu con đường của bạn khác với những gì bạn được dạy, miễn là nó phù hợp với bạn."
  ]]),
  rec('vi-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "cho mình xin một lá bài",
    "Lá Ba Cốc xuất hiện, xuôi — niềm vui được chia sẻ cùng bạn bè. Hôm nay là ngày tốt để gặp gỡ hoặc liên lạc với ai đó bạn quý mến."
  ]]),
  rec('vi-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "rút một lá bài cho mình",
    "Lá Hoàng Đế xuất hiện, ngược — cấu trúc đang trở nên cứng nhắc quá mức. Hôm nay hãy thử linh hoạt hơn một chút với kế hoạch của mình."
  ]]),
  rec('vi-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "cho mình lá bài hôm nay",
    "Lá Vua Kiếm xuất hiện, xuôi — sự rõ ràng và lý trí sắc bén. Hôm nay là ngày tốt để đưa ra quyết định dựa trên logic hơn là cảm xúc."
  ]]),
  rec('vi-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Mình đang kiên trì theo đuổi một dự án sáng tạo dài hạn dù tiến độ chậm.",
    "Lá Kỵ Sĩ Tiền xuất hiện, xuôi — sự kiên trì chậm rãi nhưng chắc chắn. Cứ tiếp tục với nhịp độ của riêng bạn, sự bền bỉ luôn có giá trị riêng."
  ]]),
  rec('vi-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "mình từng kỳ vọng cuộc trò chuyện này sẽ cảm động hơn, nhưng có vẻ không như vậy.",
    "Lá Át Cốc xuất hiện, ngược — một khởi đầu cảm xúc chưa trọn vẹn như mong đợi. Không sao cả, đôi khi kết nối cần thời gian để hình thành. Điều gì bạn thật sự mong muốn từ cuộc trò chuyện này?"
  ]]),
  rec('vi-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Mình đang đối mặt với sự phản đối từ nhiều phía về quyết định lớn của mình.",
    "Lá Năm Gậy xuất hiện, xuôi — sự cạnh tranh và va chạm ý kiến. Không phải ai cũng cần đồng ý với bạn, quyết định cuối cùng vẫn là của riêng bạn."
  ]]),
  rec('vi-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Mình đang dần bớt lo lắng về tài chính sau nhiều đêm mất ngủ vì chuyện tiền bạc.",
    "Lá Chín Kiếm xuất hiện, ngược — những nỗi lo đêm khuya đang dần lắng xuống. Đó là một sự nhẹ nhõm xứng đáng, hãy tiếp tục chăm sóc giấc ngủ của mình."
  ]]),
  rec('vi-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Mình cảm thấy mất phương hướng trong việc hòa giải mâu thuẫn gia đình.",
    "Lá Cỗ Xe xuất hiện, ngược — mất kiểm soát về hướng đi. Có lẽ không cần một mình bạn giải quyết mọi thứ, hãy để những thành viên khác cùng chung tay."
  ]]),
  rec('vi-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Mình vừa nhận ra một cơ hội mới để phát triển bản thân mà trước đây mình bỏ lỡ.",
    "Lá Át Tiền xuất hiện, xuôi — một cơ hội mới đầy tiềm năng. Đây là lúc để bạn nắm lấy nó với sự tự tin và cởi mở."
  ]]),
  rec('vi-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "cho mình lá bài hôm nay với",
    "Lá Ba Tiền xuất hiện, xuôi — sự hợp tác mang lại kết quả tốt đẹp. Hôm nay có thể là ngày tốt để làm việc cùng người khác thay vì một mình."
  ]]),
  rec('vi-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Mình vừa trải qua một cú sốc sáng tạo lớn nhưng đang dần lấy lại tinh thần.",
    "Lá Tòa Tháp xuất hiện, ngược — sự sụp đổ đang dần được xoa dịu, phục hồi. Đôi khi cần một cú sốc để xây dựng lại điều gì đó vững chắc và chân thật hơn."
  ]]),
];

writeBatch(batch);
