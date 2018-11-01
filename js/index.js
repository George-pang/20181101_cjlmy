$(function(){

    //初始化服务范围 swipper
    var teacherSwiper = new Swiper ('.teacher-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // // 如果需要分页器
        // pagination: {
        //   el: '.teacher-swiper_pagination',
        //   clickable: true,
        // },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });   

          //鼠标移入轮播图暂停自动播放、显示滑块控制
    $(".teacher-swiper").on("mouseenter", function (event) {
      teacherSwiper.autoplay.stop();
      return false;
  });
  $(".teacher-swiper").on("mouseleave", function (event) {
    teacherSwiper.autoplay.start();
      return false;
  });



});