require('../../src/index.js');
require('../public.less');
import map from './logMap.js';
//启用日志文件
$.logger.use(map);
//设置日志处理模块，可以分文件配置，也可以直接全局配置
$.logger.executor=(log)=>{

    $('.show-result').append('<dd>打点日志为'+JSON.stringify(log)+'</dd>')
};
//调用
$('body').logger().on('click','.click',function(){
    $(this).data('logKey','click');
});
$('.input').logger().blur(function(){
    $(this).data('logKey','blur');
});
$(document).logger().scroll(function(){
    let scrollTop=$(this).scrollTop();
    $(this).data('logKey','scroll');
    let originTop=100;
    console.log(scrollTop+'--'+originTop)
    if(scrollTop<=originTop){
        $(this).data('stop-log',true);
    }else{
        $(this).data('stop-log',false);
    }
});


