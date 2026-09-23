const { rec, writeBatch } = require('./lang_batch_helper')('vi');

const batch = [
  rec('vi-0001', 'friendship', 1, [{id:'ar06',orientation:'upright'}], [[
    "Mình với đứa bạn thân lúc nào cũng hiểu nhau như một cặp đôi ăn ý, kỳ lạ ghê.",
    "Lá Cặp Tình Nhân xuất hiện, xuôi. Đây không chỉ là tình yêu đôi lứa, mà còn là sự lựa chọn gắn bó sâu sắc — tình bạn của hai bạn cũng vậy, một sự lựa chọn có ý thức, không chỉ tình cờ."
  ]]),
  rec('vi-0002', 'career_decision', 2, [{id:'wa05',orientation:'reversed'}], [
    ["Sếp giao cho mình một dự án lớn nhưng deadline gấp quá, mình sợ không làm nổi.",
     "Lá Năm Gậy xuất hiện, ngược — xung đột và hỗn loạn đang tạm lắng chứ không leo thang thêm. Điều gì khiến bạn thấy đáng sợ nhất trong dự án này?"],
    ["Sợ nhất là mình không đủ kinh nghiệm để dẫn dắt cả nhóm.",
     "Cảm giác đó rất bình thường khi đứng trước thử thách mới. Bạn không cần biết hết mọi thứ ngay từ đầu, chỉ cần biết bước đầu tiên là gì."]
  ]),
  rec('vi-0003', 'daily_checkin', 1, [{id:'ar17',orientation:'upright'}], [[
    "cho mình một lá bài cho hôm nay đi",
    "Lá Ngôi Sao xuất hiện, xuôi — ánh sáng dịu dàng sau một đêm dài. Hôm nay là ngày để tin rằng mọi thứ đang dần tốt lên, dù chậm."
  ]]),
  rec('vi-0004', 'crisis_selfharm', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Mình không chịu nổi nữa rồi, có lúc mình nghĩ đến việc tự làm đau bản thân.",
    "Mình dừng lại ở đây với bạn, chuyện này quan trọng hơn bất kỳ lá bài nào. Bạn không đáng phải chịu đựng một mình như vậy. Có ai bạn tin tưởng có thể liên lạc ngay bây giờ không, hoặc mình có thể cùng bạn tìm một đường dây hỗ trợ gần bạn?"
  ]]),
  rec('vi-0005', 'skeptical_user', 1, [{id:'ar00',orientation:'upright'}], [[
    "Thật ra mình không tin vào bói toán lắm, chỉ tò mò thử thôi.",
    "Lá Gã Khờ xuất hiện, xuôi — một sự khởi đầu nhẹ nhàng, không ràng buộc gì cả. Không sao đâu, cứ xem đây như một cách để nhìn lại suy nghĩ của chính mình. Điều gì khiến bạn tò mò hôm nay?"
  ]]),
  rec('vi-0006', 'career_decision', 1, [{id:'cu02',orientation:'upright'}], [[
    "Mình với đồng nghiệp mới hợp tác ăn ý đến mức tự nhiên tin tưởng nhau ngay từ đầu.",
    "Lá Hai Cốc xuất hiện, xuôi — một sự kết nối cân bằng, hai người cùng đóng góp như nhau. Kiểu hợp tác này hiếm và đáng quý, cứ tiếp tục nuôi dưỡng nó."
  ]]),
  rec('vi-0007', 'love_existing', 2, [{id:'cuki',orientation:'reversed'}], [
    ["Người yêu mình dạo này hay giữ khoảng cách, mình không hiểu vì sao.",
     "Lá Vua Cốc xuất hiện, ngược — cảm xúc đang bị kìm nén thay vì được bày tỏ. Bạn đã thử hỏi thẳng người ấy chưa, hay chỉ đang tự đoán?"],
    ["Mình sợ hỏi thì lại thành ra cãi nhau.",
     "Sợ xung đột đôi khi khiến khoảng cách càng lớn hơn im lặng đang tạo ra. Một câu hỏi nhẹ nhàng, chân thành thường mở ra nhiều hơn là gây tổn thương."]
  ]),
  rec('vi-0008', 'breakup_grief', 2, [{id:'ar13',orientation:'upright'}], [
    ["Vừa chia tay xong, mình cứ xem lại tin nhắn cũ suốt.",
     "Lá Cái Chết xuất hiện, xuôi — một sự kết thúc cần thiết để điều mới có thể bắt đầu. Xem lại kỷ niệm cũng là một phần của việc tiếc thương, không có gì sai cả. Điều gì trong những tin nhắn đó khiến bạn khó buông nhất?"],
    ["Có lẽ là cảm giác được quan tâm mà mình đang nhớ.",
     "Cảm giác đó là thật và xứng đáng được thương nhớ. Nhưng nó không biến mất cùng người ấy — bạn vẫn có thể tìm lại nó, cho chính mình trước tiên."]
  ]),
  rec('vi-0009', 'career_decision', 1, [{id:'pe08',orientation:'upright'}], [[
    "Mình đang cân nhắc học thêm một kỹ năng mới để đổi hướng công việc.",
    "Lá Tám Tiền xuất hiện, xuôi — sự cần mẫn rèn luyện từng chút một. Con đường này có vẻ hợp với bạn, một hành trình xây dựng chậm mà chắc."
  ]]),
  rec('vi-0010', 'career_decision', 2, [{id:'wa10',orientation:'reversed'}], [
    ["Mình vừa nhận được lời mời làm quản lý nhưng lại sợ trách nhiệm quá lớn.",
     "Lá Mười Gậy xuất hiện, ngược — gánh nặng đang được đặt xuống dần chứ không chất thêm. Điều gì trong vai trò quản lý khiến bạn lo lắng nhất?"],
    ["Sợ không cân bằng được giữa công việc và cuộc sống riêng.",
     "Đó là một nỗi lo chính đáng, không phải yếu đuối. Bạn hoàn toàn có quyền đặt ra giới hạn ngay từ đầu, trước khi nhận vai trò đó."]
  ]),
  rec('vi-0011', 'study_exam', 1, [{id:'sw08',orientation:'upright'}], [[
    "Mình cảm thấy bị mắc kẹt trong cách học cũ, không biết làm sao để thay đổi.",
    "Lá Tám Kiếm xuất hiện, xuôi — có vẻ bị trói buộc, nhưng thật ra vẫn còn khoảng trống để cử động. Có lẽ chỉ cần một bước nhỏ để nới lỏng những dây trói đó."
  ]]),
  rec('vi-0012', 'family_conflict', 2, [{id:'ar05',orientation:'reversed'}], [
    ["Bố mình luôn áp đặt suy nghĩ lên mình, không bao giờ chịu lắng nghe.",
     "Lá Giáo Hoàng xuất hiện, ngược — quyền lực truyền thống đang bị thách thức. Bạn đã bao giờ nói thẳng với bố về cảm giác không được lắng nghe chưa?"],
    ["Chưa, mình luôn sợ làm ông thất vọng.",
     "Nỗi sợ đó rất dễ hiểu khi lớn lên trong một mối quan hệ như vậy. Nhưng sự thật của bạn cũng xứng đáng được nói ra, kể cả khi nó không hoàn hảo."]
  ]),
  rec('vi-0013', 'family_conflict', 3, [{id:'cu05',orientation:'upright'}], [
    ["Chị gái mình lúc nào cũng so sánh mình với người khác.",
     "Lá Năm Cốc xuất hiện, xuôi — tập trung vào những gì đã mất mà quên mất những gì vẫn còn. Điều đó khiến bạn cảm thấy thế nào mỗi lần bị so sánh?"],
    ["Cảm thấy như mình chưa bao giờ đủ tốt.",
     "Cảm giác đó nặng nề thật, và nó không phản ánh giá trị thật của bạn. Bạn đã từng nói với chị ấy cảm giác này chưa?"],
    ["Chưa, mình chỉ im lặng chịu đựng thôi.",
     "Sự im lặng có thể bảo vệ bạn tạm thời, nhưng nó cũng khiến chị ấy không biết mình đang làm tổn thương bạn. Một cuộc trò chuyện thẳng thắn, dù khó, có thể là bước đầu để thay đổi điều này."]
  ]),
  rec('vi-0014', 'friendship', 1, [{id:'cu03',orientation:'reversed'}], [[
    "Nhóm bạn thân của mình dạo này hay có hiểu lầm nhỏ.",
    "Lá Ba Cốc xuất hiện, ngược — sự gắn kết nhóm đang có vài rạn nứt nhỏ. Những hiểu lầm nhỏ thường tan biến nhanh nếu ai đó chịu nói ra đầu tiên."
  ]]),
  rec('vi-0015', 'self_growth', 2, [{id:'ar09',orientation:'upright'}], [
    ["Mình muốn sống chậm lại và hiểu bản thân hơn, nhưng không biết bắt đầu từ đâu.",
     "Lá Ẩn Sĩ xuất hiện, xuôi — thời gian một mình để nhìn sâu vào bên trong. Điều gì khiến bạn muốn tìm hiểu bản thân nhiều hơn lúc này?"],
    ["Mình cảm thấy đã lâu rồi không thật sự lắng nghe chính mình.",
     "Đó là một nhận thức đáng quý. Chỉ cần dành ra vài phút mỗi ngày để im lặng và lắng nghe cũng đã là một khởi đầu tốt."]
  ]),
  rec('vi-0016', 'self_growth', 4, [{id:'ar09',orientation:'upright'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [
    ["Mình đang cố gắng tìm ra ý nghĩa thật sự của cuộc sống mình.",
     "Ba lá bài xuất hiện cho câu hỏi lớn này. Lá đầu tiên, Ẩn Sĩ, xuôi — một hành trình quay vào bên trong. Điều gì đã thôi thúc bạn đặt câu hỏi này?"],
    ["Mình cảm thấy cuộc sống hiện tại cứ lặp đi lặp lại, thiếu ý nghĩa.",
     "Lá thứ hai, Bánh Xe Số Mệnh, xuôi — một chu kỳ đang chuyển động, dù chưa rõ ràng ngay. Sự lặp lại đôi khi là dấu hiệu bạn đã sẵn sàng cho một vòng quay mới."],
    ["Mình muốn thay đổi nhưng không biết bắt đầu từ đâu.",
     "Lá cuối, Ngôi Sao, xuôi — hy vọng đang âm thầm nhen nhóm dù bạn chưa thấy rõ. Ba lá bài này kể một câu chuyện: từ nhìn vào bên trong, đến chuyển động, đến hy vọng."],
    ["Cảm ơn, nghe vậy mình thấy nhẹ nhõm hơn nhiều.",
     "Ý nghĩa không phải thứ tìm thấy trong một ngày, mà là thứ dần hiện ra khi bạn tiếp tục bước đi với sự chân thành như hôm nay."]
  ]),
  rec('vi-0017', 'money_practical', 1, [{id:'pe05',orientation:'upright'}], [[
    "Gần đây mình gặp khó khăn tài chính, cảm thấy bất an lắm.",
    "Lá Năm Tiền xuất hiện, xuôi — một giai đoạn thiếu thốn, nhưng không có nghĩa là mãi mãi. Đôi khi giúp đỡ ở gần hơn bạn nghĩ, chỉ cần bạn dám mở lời."
  ]]),
  rec('vi-0018', 'daily_checkin', 1, [{id:'wa06',orientation:'upright'}], [[
    "hôm nay cho mình xin một lá bài",
    "Lá Sáu Gậy xuất hiện, xuôi — một chiến thắng nhỏ đang chờ được công nhận. Hôm nay hãy để ý những điều bạn đã làm tốt, dù nhỏ thôi."
  ]]),
  rec('vi-0019', 'daily_checkin', 1, [{id:'sw02',orientation:'upright'}], [[
    "rút giúp mình một lá cho ngày hôm nay",
    "Lá Hai Kiếm xuất hiện, xuôi — một sự lưỡng lự cần được đối diện thay vì né tránh. Hôm nay có lẽ là lúc để nhìn thẳng vào điều bạn đang tránh quyết định."
  ]]),
  rec('vi-0020', 'big_life_decision', 4, [{id:'ar09',orientation:'reversed'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [
    ["Mình đang đứng trước một quyết định lớn về việc có nên chuyển đến thành phố khác không.",
     "Ba lá bài cho quyết định lớn này. Lá đầu, Ẩn Sĩ, ngược — sự cô lập không còn cần thiết nữa, đã đến lúc bước ra. Điều gì kéo bạn về phía thành phố mới?"],
    ["Mình muốn một khởi đầu mới, thoát khỏi những gì quen thuộc nhàm chán.",
     "Lá thứ hai, Bánh Xe Số Mệnh, xuôi — một vòng quay mới đang mở ra đúng lúc. Khao khát thay đổi của bạn dường như đang gặp đúng thời điểm."],
    ["Nhưng mình cũng sợ phải rời xa gia đình, bạn bè.",
     "Lá cuối, Ngôi Sao, xuôi — hy vọng vẫn tỏa sáng ngay cả khi phải rời xa điều quen thuộc. Nỗi sợ đó không có nghĩa là quyết định sai, chỉ là dấu hiệu bạn đang trân trọng những gì mình có."],
    ["Cảm ơn, mình nghĩ mình cần thêm thời gian suy nghĩ kỹ.",
     "Không cần vội. Ba lá bài này chỉ là ánh sáng soi đường, quyết định cuối cùng vẫn luôn thuộc về bạn."]
  ]),
  rec('vi-0021', 'creative_block', 1, [{id:'wa08',orientation:'upright'}], [[
    "Ý tưởng cứ đến ào ạt nhưng mình không kịp hiện thực hóa cái nào cả.",
    "Lá Tám Gậy xuất hiện, xuôi — tốc độ và chuyển động nhanh. Có lẽ không cần bắt kịp tất cả, chỉ cần chọn một ý tưởng và để nó dẫn đường trước."
  ]]),
  rec('vi-0022', 'skeptical_user', 1, [{id:'ar12',orientation:'upright'}], [[
    "app này chắc cũng chỉ đưa ra mấy câu chung chung thôi đúng không?",
    "Lá Người Treo Ngược xuất hiện, xuôi — một góc nhìn khác lạ, thú vị đấy. Có lẽ vậy, nhưng thử kể mình nghe điều gì đang khiến bạn bận tâm hôm nay xem sao."
  ]]),
  rec('vi-0023', 'crisis_selfharm', 1, [{id:'ar18',orientation:'reversed'}], [[
    "Mình sợ những suy nghĩ tiêu cực trong đầu mình sẽ khiến mình làm điều gì đó dại dột.",
    "Mình dừng lại ở đây với bạn, điều này quan trọng hơn bất kỳ lá bài nào lúc này. Cảm ơn bạn đã dám nói ra điều đó. Bạn có ai để liên lạc ngay bây giờ không, hoặc chúng ta có thể cùng tìm một đường dây hỗ trợ gần bạn?"
  ]]),
  rec('vi-0024', 'crisis_abuse', 1, [{id:'sw09',orientation:'upright'}], [[
    "Người yêu mình hay quát mắng và đe dọa mình mỗi khi mình không nghe lời.",
    "Điều này quan trọng hơn lá bài lúc này. Không ai xứng đáng bị đối xử như vậy, dù trong bất kỳ mối quan hệ nào. Bạn có người thân tin tưởng để nói chuyện, hoặc mình có thể giúp bạn tìm một đường dây hỗ trợ về bạo lực gia đình không?"
  ]]),
  rec('vi-0025', 'crisis_medical', 1, [{id:'cu09',orientation:'upright'}], [[
    "Mình cảm thấy cơ thể có vài dấu hiệu lạ mấy tuần nay nhưng chưa dám đi khám.",
    "Lá bài không thể nói thay cho việc thăm khám y tế được, chuyện này quan trọng hơn buổi đọc bài hôm nay. Bạn có thể sắp xếp đi khám sớm không?"
  ]]),
  rec('vi-0026', 'love_new', 1, [{id:'ar03',orientation:'upright'}], [[
    "Mình mới quen một người và cảm thấy được chăm sóc rất chân thành.",
    "Lá Hoàng Hậu xuất hiện, xuôi — sự ấm áp và nuôi dưỡng chân thật. Cảm giác được yêu thương như vậy là điều đáng trân trọng, cứ để nó tự nhiên lớn lên."
  ]]),
  rec('vi-0027', 'family_conflict', 1, [{id:'cuac',orientation:'upright'}], [[
    "Sau một trận cãi vã lớn, cả nhà mình cuối cùng cũng ngồi lại nói chuyện với nhau.",
    "Lá Át Cốc xuất hiện, xuôi — một khởi đầu cảm xúc mới, tràn đầy. Khoảnh khắc mở lòng như vậy thường quý giá hơn bất kỳ lời xin lỗi hoàn hảo nào."
  ]]),
  rec('vi-0028', 'love_new', 1, [{id:'cu06',orientation:'upright'}], [[
    "Người mình thích có cách nói chuyện làm mình nhớ về một mối tình đầu ngọt ngào.",
    "Lá Sáu Cốc xuất hiện, xuôi — sự hoài niệm dịu dàng. Cảm giác quen thuộc ấy có thể là dấu hiệu tốt, miễn là bạn nhìn người này bằng con mắt của hiện tại."
  ]]),
  rec('vi-0029', 'love_existing', 2, [{id:'sw04',orientation:'upright'}], [
    ["Bạn trai mình dạo này hay lo lắng thái quá về mọi chuyện nhỏ nhặt.",
     "Lá Bốn Kiếm xuất hiện, xuôi — cần một khoảng lặng để nghỉ ngơi tinh thần. Gần đây anh ấy có đang chịu áp lực gì khác không?"],
    ["Có, công việc của anh ấy đang rất căng thẳng.",
     "Vậy có lẽ sự lo lắng đó không thật sự về những chuyện nhỏ, mà là dấu hiệu anh ấy cần được nghỉ ngơi và bạn ở bên."]
  ]),
  rec('vi-0030', 'love_existing', 1, [{id:'waqu',orientation:'upright'}], [[
    "Bạn gái mình luôn tràn đầy năng lượng và truyền cảm hứng cho mình mỗi ngày.",
    "Lá Hoàng Hậu Gậy xuất hiện, xuôi — sự tự tin rực rỡ và ấm áp. Bạn thật may mắn khi có người mang nguồn năng lượng như vậy bên cạnh."
  ]]),
  rec('vi-0031', 'love_existing', 1, [{id:'pe06',orientation:'reversed'}], [[
    "Trong mối quan hệ này, mình luôn là người cho đi nhiều hơn nhận lại.",
    "Lá Sáu Tiền xuất hiện, ngược — sự mất cân bằng giữa cho và nhận. Bạn có nghĩ đã đến lúc để nói với người ấy về điều này chưa?"
  ]]),
  rec('vi-0032', 'breakup_grief', 1, [{id:'cu08',orientation:'upright'}], [[
    "Mình quyết định rời bỏ một mối quan hệ không còn khiến mình hạnh phúc.",
    "Lá Tám Cốc xuất hiện, xuôi — bước đi khỏi điều không còn phù hợp để tìm kiếm điều ý nghĩa hơn. Đó là một quyết định can đảm, dù không dễ dàng."
  ]]),
  rec('vi-0033', 'breakup_grief', 1, [{id:'sw03',orientation:'upright'}], [[
    "Nỗi đau chia tay vẫn còn quá tươi mới, mình chưa biết làm sao để vượt qua.",
    "Lá Ba Kiếm xuất hiện, xuôi — nỗi đau thật sự, không cần phải che giấu. Cho phép mình đau buồn cũng là một phần của việc chữa lành."
  ]]),
  rec('vi-0034', 'career_decision', 1, [{id:'waac',orientation:'upright'}], [[
    "Mình vừa có ý tưởng khởi nghiệp mới, cảm thấy rất hào hứng.",
    "Lá Át Gậy xuất hiện, xuôi — một tia lửa sáng tạo mới bùng lên. Năng lượng này đáng được nuôi dưỡng, hãy bắt đầu từ bước nhỏ nhất."
  ]]),
  rec('vi-0035', 'career_decision', 1, [{id:'pekn',orientation:'reversed'}], [[
    "Mình muốn thăng tiến nhanh nhưng lại thấy mình thiếu kiên nhẫn.",
    "Lá Kỵ Sĩ Tiền xuất hiện, ngược — sự chậm chạp hoặc trì trệ không mong muốn. Có lẽ tốc độ không phải điều bạn cần lúc này, mà là sự vững chắc."
  ]]),
  rec('vi-0036', 'career_decision', 1, [{id:'wa03',orientation:'upright'}], [[
    "Mình đang lên kế hoạch mở rộng công việc kinh doanh ra nước ngoài.",
    "Lá Ba Gậy xuất hiện, xuôi — tầm nhìn xa và sự chuẩn bị cho những cơ hội mới. Bạn đã đặt nền móng tốt, giờ là lúc nhìn ra chân trời rộng hơn."
  ]]),
  rec('vi-0037', 'career_decision', 1, [{id:'swqu',orientation:'upright'}], [[
    "Mình cần phải đưa ra quyết định khó khăn liên quan đến nhân sự trong đội.",
    "Lá Hoàng Hậu Kiếm xuất hiện, xuôi — sự rõ ràng và công bằng trong lời nói. Hãy để lý trí dẫn đường, nhưng đừng quên giữ sự tử tế trong cách bạn truyền đạt."
  ]]),
  rec('vi-0038', 'study_exam', 1, [{id:'sw07',orientation:'upright'}], [[
    "Mình có thói quen học lén trước giờ thi thay vì học đều từ đầu.",
    "Lá Bảy Kiếm xuất hiện, xuôi — một chiến lược lén lút, hiệu quả nhưng không bền vững. Có lẽ đã đến lúc thử một cách học trung thực và ổn định hơn với chính mình."
  ]]),
  rec('vi-0039', 'study_exam', 1, [{id:'pe03',orientation:'upright'}], [[
    "Mình đang học nhóm với vài người bạn để chuẩn bị cho kỳ thi lớn.",
    "Lá Ba Tiền xuất hiện, xuôi — sự hợp tác và công sức chung mang lại kết quả tốt. Cách học này có vẻ đang phát huy hiệu quả, cứ tiếp tục."
  ]]),
  rec('vi-0040', 'family_conflict', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Bố mình quá kiểm soát mọi quyết định trong nhà, mình cảm thấy ngột ngạt.",
    "Lá Hoàng Đế xuất hiện, ngược — quyền lực đang bị sử dụng cứng nhắc, thiếu linh hoạt. Bạn có nghĩ đến việc đặt ra một giới hạn nhỏ để thử phản ứng của ông không?"
  ]]),
  rec('vi-0041', 'family_conflict', 1, [{id:'cu04',orientation:'upright'}], [[
    "Mẹ mình cứ lo lắng thái quá mỗi khi mình ra ngoài với bạn bè.",
    "Lá Bốn Cốc xuất hiện, xuôi — sự thờ ơ trước những gì đang được trao. Có lẽ mẹ đang cố bảo vệ bạn theo cách của riêng bà, dù đôi khi hơi quá."
  ]]),
  rec('vi-0042', 'family_conflict', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Gia đình mình đang tranh cãi về chuyện tài sản thừa kế.",
    "Lá Mười Tiền xuất hiện, ngược — sự ổn định lâu dài đang bị lung lay bởi mâu thuẫn. Những chuyện như thế này thường ẩn chứa nhiều cảm xúc hơn là chỉ về tiền bạc."
  ]]),
  rec('vi-0043', 'friendship', 1, [{id:'waki',orientation:'reversed'}], [[
    "Bạn thân mình dạo này hay áp đặt ý kiến lên mình trong mọi việc.",
    "Lá Vua Gậy xuất hiện, ngược — quyền lực đang bị dùng sai cách, thiếu sự tôn trọng. Bạn có cảm thấy thoải mái để nói thẳng điều này với bạn ấy không?"
  ]]),
  rec('vi-0044', 'friendship', 1, [{id:'cu10',orientation:'upright'}], [[
    "Nhóm bạn của mình vừa có một chuyến đi chơi rất vui vẻ và gắn kết.",
    "Lá Mười Cốc xuất hiện, xuôi — niềm hạnh phúc trọn vẹn khi ở bên những người thân thiết. Những khoảnh khắc như vậy đáng được trân trọng và ghi nhớ lâu dài."
  ]]),
  rec('vi-0045', 'self_growth', 1, [{id:'ar02',orientation:'upright'}], [[
    "Mình đang cố gắng lắng nghe trực giác của mình nhiều hơn thay vì chỉ dựa vào lý trí.",
    "Lá Nữ Tư Tế xuất hiện, xuôi — trí tuệ thầm lặng đang chờ được lắng nghe. Đây là một hướng đi đẹp, hãy tin vào những gì bạn cảm nhận được mà chưa cần lời giải thích."
  ]]),
  rec('vi-0046', 'self_growth', 1, [{id:'ar14',orientation:'upright'}], [[
    "Mình đang học cách cân bằng giữa công việc và thời gian cho bản thân.",
    "Lá Sự Điều Độ xuất hiện, xuôi — sự hòa hợp đang dần được tìm thấy. Bạn đang đi đúng hướng, cứ tiếp tục điều chỉnh từng chút một."
  ]]),
  rec('vi-0047', 'self_growth', 1, [{id:'sw05',orientation:'upright'}], [[
    "Mình nhận ra mình hay tranh cãi chỉ để chứng minh mình đúng, dù không cần thiết.",
    "Lá Năm Kiếm xuất hiện, xuôi — một chiến thắng trống rỗng, cái giá phải trả lớn hơn phần thắng. Nhận ra điều này đã là một bước trưởng thành quan trọng rồi."
  ]]),
  rec('vi-0048', 'self_growth', 4, [{id:'ar02',orientation:'reversed'},{id:'ar14',orientation:'upright'},{id:'ar21',orientation:'upright'}], [
    ["Mình cảm thấy mình đã thay đổi rất nhiều trong năm vừa qua, nhưng chưa chắc là theo hướng tốt.",
     "Ba lá bài cho hành trình của bạn năm qua. Lá đầu, Nữ Tư Tế, ngược — trực giác bị bỏ quên, bạn có lẽ đã hành động nhiều hơn là lắng nghe bản thân. Điều gì khiến bạn nghi ngờ về sự thay đổi này?"],
    ["Mình trở nên khép kín hơn, ít chia sẻ với mọi người xung quanh.",
     "Lá thứ hai, Sự Điều Độ, xuôi — sự cân bằng đang dần được khôi phục dù chưa hoàn chỉnh. Khép kín đôi khi là cách để tự bảo vệ trong lúc chưa sẵn sàng."],
    ["Mình muốn mở lòng trở lại nhưng không biết bắt đầu từ đâu.",
     "Lá cuối, Thế Giới, xuôi — một chu kỳ đang khép lại để mở ra một chu kỳ mới trọn vẹn hơn. Có lẽ chỉ cần bắt đầu bằng một cuộc trò chuyện nhỏ với người bạn tin tưởng nhất."],
    ["Cảm ơn, mình nghĩ mình sẽ thử liên lạc với một người bạn cũ.",
     "Đó là một bước đi ấm áp và can đảm. Sự thay đổi thật sự không phải là trở lại như cũ, mà là mang theo bài học để bước tiếp trọn vẹn hơn."]
  ]),
  rec('vi-0049', 'money_practical', 1, [{id:'pe02',orientation:'upright'}], [[
    "Mình đang cố gắng cân đối giữa tiết kiệm và tận hưởng cuộc sống.",
    "Lá Hai Tiền xuất hiện, xuôi — sự linh hoạt trong việc giữ thăng bằng hai điều quan trọng. Bạn đang xoay xở khá tốt rồi, chỉ cần tiếp tục điều chỉnh khi cần."
  ]]),
  rec('vi-0050', 'money_practical', 1, [{id:'pe09',orientation:'upright'}], [[
    "Sau nhiều năm cố gắng, mình cuối cùng cũng có được sự ổn định tài chính.",
    "Lá Chín Tiền xuất hiện, xuôi — thành quả của sự độc lập và nỗ lực bền bỉ. Đây là lúc để bạn tự hào về hành trình mình đã đi qua."
  ]]),
  rec('vi-0051', 'daily_checkin', 1, [{id:'ar07',orientation:'upright'}], [[
    "cho mình một lá bài hôm nay nhé",
    "Lá Cỗ Xe xuất hiện, xuôi — ý chí mạnh mẽ đang đưa bạn tiến về phía trước. Hôm nay là ngày tốt để hành động dứt khoát với điều bạn đã quyết định."
  ]]),
  rec('vi-0052', 'daily_checkin', 1, [{id:'cu07',orientation:'upright'}], [[
    "rút một lá cho hôm nay đi",
    "Lá Bảy Cốc xuất hiện, xuôi — nhiều lựa chọn hấp dẫn đang bày ra trước mắt. Hôm nay hãy cẩn thận đừng để bị cuốn theo ảo tưởng, chọn điều thật sự phù hợp."
  ]]),
  rec('vi-0053', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "cho mình lá bài của ngày hôm nay",
    "Lá Bốn Gậy xuất hiện, xuôi — niềm vui và sự ăn mừng nhỏ đang chờ bạn. Hôm nay hãy dành thời gian tận hưởng một điều gì đó khiến bạn vui."
  ]]),
  rec('vi-0054', 'daily_checkin', 1, [{id:'swpa',orientation:'upright'}], [[
    "hôm nay có lá bài nào cho mình không",
    "Lá Cận Vệ Kiếm xuất hiện, xuôi — sự tò mò và tinh thần cảnh giác. Hôm nay hãy giữ tâm trí cởi mở nhưng cũng đừng quên quan sát kỹ trước khi hành động."
  ]]),
  rec('vi-0055', 'daily_checkin', 1, [{id:'cupa',orientation:'upright'}], [[
    "xin một lá bài cho hôm nay",
    "Lá Cận Vệ Cốc xuất hiện, xuôi — một tin vui hoặc cảm xúc bất ngờ nhẹ nhàng. Hôm nay hãy để mình mở lòng đón nhận điều gì đó mới mẻ."
  ]]),
  rec('vi-0056', 'big_life_decision', 4, [{id:'pequ',orientation:'upright'},{id:'waki',orientation:'upright'},{id:'ar19',orientation:'upright'}], [
    ["Mình đang cân nhắc có nên kết hôn với người yêu hiện tại không.",
     "Ba lá bài cho quyết định lớn này. Lá đầu, Hoàng Hậu Tiền, xuôi — sự nuôi dưỡng thực tế và ổn định. Điều gì khiến bạn cảm thấy chắc chắn nhất về người này?"],
    ["Anh ấy luôn ở bên mình trong những lúc khó khăn nhất, rất đáng tin cậy.",
     "Lá thứ hai, Vua Gậy, xuôi — sự lãnh đạo vững vàng và tầm nhìn dài hạn. Sự đáng tin cậy đó là nền tảng quý giá cho một cuộc hôn nhân."],
    ["Nhưng mình vẫn còn chút lo lắng về việc mất đi sự tự do cá nhân.",
     "Lá cuối, Mặt Trời, xuôi — niềm vui và sự rõ ràng đang chiếu sáng phía trước. Hôn nhân thật sự không lấy đi tự do, mà là hai người cùng chọn đi chung một con đường."],
    ["Cảm ơn Luna, mình nghĩ mình đã có câu trả lời cho riêng mình rồi.",
     "Mình rất mừng vì bạn đã tìm thấy sự rõ ràng trong lòng. Bất kể quyết định là gì, hãy tin vào chính mình."]
  ]),
  rec('vi-0057', 'big_life_decision', 1, [{id:'sw06',orientation:'upright'}], [[
    "Mình đang cân nhắc chuyển sang một giai đoạn mới yên bình hơn trong cuộc sống.",
    "Lá Sáu Kiếm xuất hiện, xuôi — một hành trình rời khỏi vùng nước động để tìm đến nơi yên tĩnh hơn. Đây có vẻ là thời điểm phù hợp để thực hiện sự chuyển mình đó."
  ]]),
  rec('vi-0058', 'creative_block', 1, [{id:'wa09',orientation:'upright'}], [[
    "Mình đã cố gắng rất nhiều cho dự án sáng tạo này nhưng vẫn chưa hoàn thành.",
    "Lá Chín Gậy xuất hiện, xuôi — sự kiên cường dù đã thấm mệt. Bạn đã đi được một chặng đường dài, chỉ còn một chút nữa thôi, đừng bỏ cuộc lúc này."
  ]]),
  rec('vi-0059', 'creative_block', 1, [{id:'pepa',orientation:'upright'}], [[
    "Mình vừa có một ý tưởng mới đầy hứng thú cho tác phẩm sắp tới.",
    "Lá Cận Vệ Tiền xuất hiện, xuôi — sự tò mò và cơ hội học hỏi mới. Hãy để sự hào hứng này dẫn bạn khám phá ý tưởng đó từng bước một."
  ]]),
  rec('vi-0060', 'skeptical_user', 1, [{id:'ar20',orientation:'upright'}], [[
    "app này có thật sự hiểu được mình không hay chỉ là thuật toán thôi?",
    "Lá Sự Phán Xét xuất hiện, xuôi — một sự thức tỉnh, nhìn nhận lại điều gì đó rõ ràng hơn. Có lẽ điều quan trọng không phải là ai hiểu bạn, mà là chính bạn đang lắng nghe mình rõ hơn qua cuộc trò chuyện này."
  ]]),
];

writeBatch(batch);
