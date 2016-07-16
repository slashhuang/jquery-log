import $ from 'jquery';
import logCore from './core.js';
$.logger={
    //兼容所有事件类型
    _eventType:[
        'on',
        'click','blur','focus',
        'load','beforeunload',
        'mouseover','mouseenter'
    ],
    init:function(){
        //将$.logger和处理逻辑做映射关系
        this._eventType.forEach((eventType)=>{
            $.logger[eventType] = logCore[eventType];
        });
    },
    /**
     * 初始化日志打点
     * @param logModule 打点文件
     */
    use:function(logModule){
        //存放打点模块,接受多文件
        logCore['logModule'].push(logModule);
    }
};
//初始化
$.logger.init();
if(jQuery){
    jQuery.logger = $.logger;
}