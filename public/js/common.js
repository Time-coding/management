

// 功能模块
define(['jquery', 'nprogress', 'template', 'bootstrap', 'cookie',], function ($, nprogress, template) {
    // 退出登录
    // $('#logout').click(function(){
    //     $.ajax({
    //         url : '/api/logout',
    //         type : 'post',
    //         success : function(data){
    //             if(data.code == 200){
    //                 location.href = '/login';
    //             }
    //         }
    //     });
    // });
    // // 登录验证
    // var pathname = location.pathname;
    // if(pathname != '/login' && !$.cookie('PHPSESSID')){
    //     location.href = '/login'
    // }
    // 控制左侧导航折叠
    $('.navs ul').prev('a').click(function () {
        $(this).next('ul').slideToggle();
    });
    var flag=true;
    $('.header .navbar-header').click(function () {
        if (flag == true) {
            $('.aside').hide();
            $('.main').css({
                "padding-left": "0"
            })
            $('.main .header').css({
                "margin-left": "0",
                "padding-left": "0",
                "padding-right":"15px"
            })
            flag=false;
        }else{
            $('.aside').show();
            $('.main').css({
                "padding-left": "180px"
            })
            $('.main .header').css({
                "margin-left": "-195px",
                "padding-left": "180px"
            })
            flag=true;
        }

    })
    // 登录信息
    // var loginfo = $.cookie('loginfo') && $.parseJSON($.cookie('loginfo'));

    // var profile = '<!-- 头像 -->\
    //         <div class="avatar img-circle">\
    //             {{if tc_avatar }}\
    //                 <img src="{{ tc_avatar }}">\
    //             {{ else }}\
    //                 <img src="/public/images/default.png">\
    //             {{ /if }}\
    //         </div>\
    //         <h4>{{ tc_name }}</h4>',

    // render = template.compile(profile),
    // html = render(loginfo || {});

    // $('.aside .profile').html(html);

    // // 设置全局状态
    nprogress.start();
    nprogress.done();

    // // loading
    // $(document).ajaxStart(function () {
    //     $('.overlay').show();
    // }).ajaxStop(function () {
    //     setTimeout(function () {
    //         $('.overlay').hide();
    //     }, 200);
    // });


});

