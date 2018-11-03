$(function () {

    /* 侧边导航栏 start*/
    var nav_height = $(".top-nav").height();
    var cTop = $(".main").offset().top - nav_height;
    var cTop_1 = $("#nav1").offset().top - nav_height;
    var cTop_2 = $("#nav2").offset().top - nav_height;
    var cTop_3 = $("#nav3").offset().top - nav_height;
    var cTop_4 = $("#nav4").offset().top - nav_height;
    $(window).on("scroll", function () {
        var toTop = $(this).scrollTop();
        // 固定定位切换
        if (toTop >= cTop) {
            $(".aside-nav").addClass("fixed");
        } else if (toTop < cTop) {
            $(".aside-nav").removeClass("fixed");
        }
        // 判断当前tab
        if (toTop >= cTop_1 && toTop < cTop_2) {
            $(".aside-nav .nav-tab").eq(0).addClass("nav-tab-cur").siblings().removeClass(
                "nav-tab-cur");
        } else if (toTop >= cTop_2 && toTop < cTop_3) {
            $(".aside-nav .nav-tab").eq(1).addClass("nav-tab-cur").siblings().removeClass(
                "nav-tab-cur");
        } else if (toTop >= cTop_3 && toTop < cTop_4) {
            $(".aside-nav .nav-tab").eq(2).addClass("nav-tab-cur").siblings().removeClass(
                "nav-tab-cur");
        } else if (toTop >= cTop_4) {
            $(".aside-nav .nav-tab").eq(3).addClass("nav-tab-cur").siblings().removeClass(
                "nav-tab-cur");
        }

    });

    // 点击tab跳转
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
    /* 侧边导航栏 end*/

});