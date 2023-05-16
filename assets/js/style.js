$(document).ready(function() {
    // Xử lý sự kiện click cho các link có class "scroll"
    $('.scroll').click(function(event) {
      // Ngăn chặn hành vi mặc định của link (chuyển trang web)
      event.preventDefault();
      
      // Lấy giá trị thuộc tính href của link
      var target = $(this).attr('href');
      
      // Tính toán khoảng cách từ đầu trang đến phần tử cần scroll đến
      var distance = $(target).offset().top;
      
      // Scroll đến phần tử tương ứng
      $('html, body').animate({
        scrollTop: distance
      }, 800);
    });
});


$(document).ready(function(){
  // Xử lý sự kiện click cho các thẻ liên kết trong navbar
  $('.scroll').on('click', function(e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    $('.active').removeClass('active'); // Xóa lớp active khỏi tất cả các thẻ li
    $(this).parent().addClass('active'); // Thêm lớp active vào thẻ li của liên kết được click
    // Cuộn đến vị trí của phần tử có id tương ứng với giá trị thuộc tính href của liên kết
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 100, 'linear');
  });
});
