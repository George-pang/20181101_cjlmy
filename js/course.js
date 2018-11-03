$(function(){
    $(".tab").on("click",function(){
        $(this).addClass("tab-cur").siblings().removeClass("tab-cur");
        var index=$(this).index();
        $(".tab-item").eq(index).show().siblings().hide();
    })

});