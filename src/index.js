/**
 * build by slashhuang 16.7.17
 */
import logBridge from './bridge.js';
import logCore from './core.js'
import {checkLog} from './utils/checker.js';
$.fn.logger=function(args){
    let container = $(args);
    $.fn.logger.init(container);
};
/**
 * 兼容所有事件类型
 */
$.fn.logger._eventType=['on', 'click','blur','focus', 'load','beforeunload', 'mouseover','mouseenter'];
/**
 * @param container jquery对象
 */
$.fn.logger.init=function(container){
    //初始化日志模块
    let logger = logBridge(container);
    //将$.logger和logBridge做映射关系
    this._eventType.forEach((eventType)=>{
        container[eventType] = logger[eventType];
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
        this['logModule']=logModule;
};


if(jQuery){
   jQuery.logger = $.logger=$.fn.logger;
}