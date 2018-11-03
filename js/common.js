$(function () {

    var index = $(".item-current").index(); //获取当前nav tab的索引
    var kcIndex = $(".kc_menu .menu_item_cur").index(); //获取服务子菜单当前tab的索引
    var jxIndex = $(".jx_menu .menu_item_cur").index(); //获取服务子菜单当前tab的索引

    console.dir($(".menu_item"));
    /* 顶部导航当前tab背景色切换*/
    $(".nav-item").on("mouseenter", function () {
        $(this).addClass("item-current").siblings().removeClass("item-current");
    });
    //移出右侧导航栏后返回当前网页的导航tab
    $(".r-nav").on("mouseleave", function () {
        $(".nav-item").eq(index).addClass("item-current").siblings().removeClass("item-current");
    });

    /* 子菜单显示隐藏 start */
    // function：顶部导航tab子菜单的显示、隐藏--参数1：导航栏tab选择器，参数2：子菜单选择器
    function toggleMenu(selector1, selector2) {
        $(selector1).on("mouseenter", function () {
            $(selector2).show();
        });
        $(selector1).on("mouseleave", function () {
            $(selector2).hide();
        });
    }
    // function：子菜单显示时当前项背景色切换-参数1：子菜单tab选择器，参数2：当前项样式类名
    function changeCur(selector1, className) {
        $(selector1).on("mouseenter", function () {
            $(this).addClass(className).siblings().removeClass(className);
        });
    }
    // function：子菜单隐藏后返回子菜单当前tab-参数1：导航栏tab选择器，参数2：子菜单tab选择器，参数3：当前样式类名，参数4：当前子菜单tab的index
    function backCurTab(selector1, selector2, className, index) {
        $(selector1).on("mouseleave", function () {
            $(selector2).removeClass(className).eq(index).addClass(className);
        });
    }
    toggleMenu(".nav-item-kc", ".kc_menu");
    toggleMenu(".nav-item-jx", ".jx_menu");
    changeCur(".kc_item","menu_item_cur");
    changeCur(".jx_item","menu_item_cur");
    backCurTab(".nav-item-kc",".kc_item","menu_item_cur",kcIndex);
    backCurTab(".nav-item-jx",".jx_item","menu_item_cur",jxIndex);
    /* 子菜单显示隐藏 end */

    /* swiper start*/
    // 初始化swiper      
    var mySwiper = new Swiper('#swiper1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        pagination: {
            el: '#swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        // },

    });

    //鼠标移入轮播图暂停自动播放、显示滑块控制
    $("#swiper1").on("mouseenter", function (event) {
        mySwiper.autoplay.stop();
        $("#swiper1 .swiper-button-next").fadeIn(1000);
        $("#swiper1 .swiper-button-prev").fadeIn(1000);
        return false;
    });
    $("#swiper1").on("mouseleave", function (event) {
        mySwiper.autoplay.start();
        $("#swiper1 .swiper-button-next").fadeOut(1000);
        $("#swiper1 .swiper-button-prev").fadeOut(1000);
        return false;
    });
    /* swiper end*/


});
