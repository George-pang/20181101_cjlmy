$(function () {
    $(".nav-tab").on("click", function () {
        $(this).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        var index = $(this).index();
        $(".bd-item").eq(index).show().siblings().hide();
        // 切换tab重新渲染数据
        if(index==0){
            var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//本地假数据
            renderData("#center-pagination-container", "#center-data-container", data);
        }else if(index==1){
            var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//本地假数据
            renderData("#activity-pagination-container", "#activity-data-container", data);
        }else if(index==2){
            var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//本地假数据
            renderData("#download-pagination-container", "#download-data-container", data);
        }
    });

    /* 分页--调用了https://github.com/superRaytin/paginationjs第三方插件 */
    // 函数--渲染模板
    function simpleTemplating(data) {
        var html = '<ul class="news-list">';
        $.each(data, function (index, item) {
            html += '<li class="news clearfix">' +
                '       <div class="news-pic">' +
                '           <img src="img/img30.png" alt="">' +
                '       </div>' +
                '       <div class="news-details">' +
                '           <h3 class="news-title special-font">主题教学 | 万圣节要怎么玩才尽兴？</h3>' +
                '           <p class="news-summary">' +
                '               10/20~10/26 GIRAFFE万圣节主题教学进行中尽情释放心中的「小捣蛋鬼」提前欢享万圣节的精彩' +
                '           </p>' +
                '           <p class="news-time">' +
                '               [2018-10-23]' +
                '           </p>' +
                '       </div>' +
                '   </li>'
        });
        html += '</ul>';
        return html;
    }
    // 渲染数据并初始化,因为此页有三个分页器，所以对渲染数据的代码进行了封装
    //参数1：分页器选择器，参数2：数据渲染容器选择器,参数3：渲染数据 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function renderData(selector1, selector2, data) {
        $(selector1).pagination({
            dataSource: data, //数据来源：可以为对象数组--存着每条新闻的数据
            pageSize: 4,
            // prevText:"上一页",
            // nextText:"下一页",
            className: 'paginationjs-theme-blue',
            callback: function (data, pagination) {
                var html = simpleTemplating(data);
                $(selector2).html(html);
            }
        })
    }
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//本地假数据
    renderData("#center-pagination-container", "#center-data-container", data);
    // $('#pagination-container').pagination({
    //     dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //数据来源：可以为对象数组--存着每条新闻的数据
    //     pageSize: 4,
    //     // prevText:"上一页",
    //     // nextText:"下一页",
    //     className: 'paginationjs-theme-blue',
    //     callback: function (data, pagination) {
    //         var html = simpleTemplating(data);
    //         $('#data-container').html(html);
    //     }
    // })
});