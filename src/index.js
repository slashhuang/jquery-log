/**
 * build by slashhuang 16.7.17
 * 主程序入口
 */
import logCore from './core.js';
import {checkLog} from './utils/checker.js';

$.fn.logger=function(){
    let container = $(this);
    $.fn.logger.init(container);
    return container;
};
/**
 * 兼容所有事件类型,方法类型
 */
$.fn.logger._eventType=[
    'on', 'click','blur','focus', 'load','beforeunload',
    'mouseover','mouseenter',
    'change','input','keyup',
    'scroll'];
/**
 * @param container jquery对象
 */
$.fn.logger.init=function(container){
    //初始化日志模块,修正所有的要处理的key
    this._eventType.forEach((eventType)=>{
        container[eventType] = logCore(eventType);
    });
};
/**
 * 初始化日志打点
 * @param logModule 打点文件
 */
$.fn.logger.use=function(logModule){
        //检测日志是否规范,不规范的话直接返回并打印错误信息
        checkLog(logModule);
        //存放打点模块
        $.fn.logger['logModule']=logModule;
};


if(jQuery){
   jQuery.logger = $.logger=$.fn.logger;
}