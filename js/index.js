$(function () {
    /* 预约试听验证输入 start */
    // 验证手机号
    function isName(name) {
        var pattern = /^[A-Za-z\u4e00-\u9fa5]+$/;
        return pattern.test(name);
    }
    function isTel(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
    }
    function isEmail(email) {
        var pattern = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
        return pattern.test(email);
    }
    $(".btn-submit").on("click", function () {
        var value_1=$("#nameInput").val().trim();
        var value_2=$("#sexSelect").val().trim();
        var value_3=$("#relationSelect").val().trim();
        var value_4=$("#telInput").val().trim();
        var value_5=$("#emailInput").val().trim();
        var value_6=$("#campusSelect").val().trim();
        if(value_1==""){
            console.log("name");
            alert("请填写孩子姓名！");
        }else if(!isName(value_1)){
            alert("姓名填写有误，请重新填写！");
        }else if(value_2=="孩子性别"){
            alert("请选择孩子性别！");
        }else if(value_3=="与孩子关系"){
            alert("请选择您与孩子的关系！");
        }else if(value_4==""){
            alert("请填写预约手机号！");
        }else if(!isTel(value_4)){
            alert("手机号填写有误，请重新填写！");
        }else if(value_5==""){
            alert("请填写预约邮箱地址！");
        }else if(!isEmail(value_5)){
            alert("邮箱地址输入有误，请重新填写！");
        }else if(value_6=="请选择校区"){
            alert("请选择预约试听校区！");
        }
        // 意见、建议非必填项，没有验证弹窗
    });
    /* 预约试听验证输入 end */


    //初始化师资力量 swipper
    var teacherSwiper = new Swiper('.teacher-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },

        // 前进后退按钮
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