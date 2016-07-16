
import $ from 'jquery';
import logBridge from './bridge.js';
import logCore from './core.js'
import {checkLog} from './utils/checker.js';
$.fn.logger={
    //兼容所有事件类型
    _eventType:[
        'on',
        'click','blur','focus',
        'load','beforeunload',
        'mouseover','mouseenter'
    ],
    init:function(){
        //初始化日志模块
        let logger = logBridge();
        //将$.logger和logBridge做映射关系
        this._eventType.forEach((eventType)=>{
            $.logger[eventType] = logger[eventType];
        });
    },
    /**
     * 初始化日志打点
     * @param logModule 打点文件
     */
    use:function(logModule){
        //初始化$.logger
        $.logger.init();
        //检测日志是否规范,不规范的话直接返回并打印错误信息
        checkLog(logModule);
        //存放打点模块
        $.fn.logger['logModule']=logModule;
    }
};
$.logger=$.fn.logger;
if(jQuery){
   jQuery.logger = $.logger=$.fn.logger;
}