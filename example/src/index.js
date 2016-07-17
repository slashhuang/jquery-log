require('../../src/index.js');
require('../public.less');
import map from './logMap.js';
//启用日志文件
$.logger.use(map);
//设置日志处理模块
$.logger.executor=(log)=>{
    $('.show-result').append('<dd>打点日志为'+JSON.stringify(log)+'</dd>')
};
//调用
$('body').logger().on('click','.click',function(){
    $(this).data('logKey','click');
});
$('.input').logger().change(function(){
    $(this).data('logKey','change');
});


