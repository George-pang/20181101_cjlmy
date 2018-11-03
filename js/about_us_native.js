$(function () {
    /* 侧边导航栏 start*/
    var nav_height = $(".top-nav").height();
    var cTop_1 = $(".gsjj").offset().top - nav_height;
    var cTop_2 = $(".xyxq").offset().top - nav_height;
    var cTop_3 = $(".szbz").offset().top - nav_height;
    var cTop_4 = $(".jxhj").offset().top - nav_height;

    $(window).on("scroll", function () {
        var toTop = $(this).scrollTop();
        // 固定定位切换
        if (toTop >= cTop_1) {
            $(".aside-nav").addClass("fixed");
        } else if (toTop < cTop_1) {
            $(".aside-nav").removeClass("fixed");
        }
        // 判断当前tab
        if (toTop >= cTop_1 && toTop < cTop_2) {
            $(".aside-nav .nav-tab").eq(0).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        } else if (toTop >= cTop_2 && toTop < cTop_3) {
            $(".aside-nav .nav-tab").eq(1).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        } else if (toTop >= cTop_3 && toTop < cTop_4) {
            $(".aside-nav .nav-tab").eq(2).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        } else if (toTop >= cTop_4) {
            $(".aside-nav .nav-tab").eq(3).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        }
    });
    // 点击tab跳转---也可以利用锚点定位
    $(".aside-nav .nav-tab").each(function (index) {
        $(this).on("click", function () {
            $(".nav-tab").removeClass("nav-tab-cur").eq(index).addClass("nav-tab-cur");
            switch (index) {
                case 0:
                    $("html,body").animate({
                        scrollTop: cTop_1 + "px"
                    }, 0);
                    break;
                case 1:
                    $("html,body").animate({
                        scrollTop: cTop_2 + "px"
                    }, 0);
                    break;
                case 2:
                    $("html,body").animate({
                        scrollTop: cTop_3 + "px"
                    }, 0);
                    break;
                case 3:
                    $("html,body").animate({
                        scrollTop: cTop_4 + "px"
                    }, 0);
                    break;
            }
            return false;
        });
    });

    /* 侧边导航栏 end */


    /* 教学环境 tab切换 */ 
    $(".tab-hd .tab").on("click", function () {
        $(this).addClass("tab-cur").siblings().removeClass("tab-cur");
        var index = $(this).index();
        $(".tab-bd .tab-item").eq(index).addClass("tab-item-cur").siblings().removeClass("tab-item-cur");
        if (index == 0) { //重绘-需要重新初始化swiper
            var photoSwiper1 = newSwiper(".photoSwiper1");
            autoplayStop(photoSwiper1, ".photoSwiper1");
            autoplayStart(photoSwiper1, ".photoSwiper1");
        } else if (index == 1) {
            var photoSwiper2 = newSwiper(".photoSwiper2");
            autoplayStop(photoSwiper2, ".photoSwiper2");
            autoplayStart(photoSwiper2, ".photoSwiper2");
        }
    });

    // 函数---初始化swiper，参数：选择器--前提：初始化swiper的配置对象参数完全相同
    function newSwiper(selector) {
        var mySwiper = new Swiper(selector, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 7,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            centeredSlides : true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                // 当当前Slide切换时执行(activeIndex发生改变)--bug:当点击tab切换重绘swiper时，自动播放第一次切换大图总先显示别图，再显示下一slide的图
                slideChange: function () {
                    var index = this.activeIndex;
                    $(".tab-item-cur .big-pic img")[0].src = $(".tab-item-cur .swiper-slide").eq(index).find("img").get(0).src;
                },
            },
        });
        return mySwiper;
    }
    // 函数-鼠标移入swiper暂停自动播放
    function autoplayStop(swiper, selector) {
        $(selector).on("mouseenter", function (event) {
            swiper.autoplay.stop();
            return false;
        });
    }
    // 函数-鼠标移出swiper开始自动播放
    function autoplayStart(swiper, selector) {
        $(selector).on("mouseleave", function (event) {
            swiper.autoplay.start();
            return false;
        });
    }
    // 初始化tab切换中当前tab1的swiper
    var photoSwiper1 = newSwiper(".photoSwiper1");
    // 鼠标移入轮播图暂停自动播放
    autoplayStop(photoSwiper1, ".photoSwiper1");
    autoplayStart(photoSwiper1, ".photoSwiper1");

});