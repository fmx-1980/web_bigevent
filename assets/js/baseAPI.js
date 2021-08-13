//注意：每次调用$.get()或$.post()或$.ajax()的时候
//会先调ajaxPrefilter这个函数
//在这个函数中，可以拿到我们给的Ajax提供的配置对象
$.ajaxPrefilter(function(option) {
    //在发起真正的Ajax请求，统一拼接请求的根路径
    option.url = 'http://api-breakingnews-web.itheima.net' + option.url
})