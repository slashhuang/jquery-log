/**
 * Created by slashhuang on 16/7/17.
 * 执行打点
 */


let logCore = function (eventType){
    return function(...args){
        //将方法重定向到jQuery的方法
        let container = this;
        $.fn[eventType].apply(container,logUtils.transArgs(...args));
    }
};

let logUtils={
    /**
     * 修改回调函数，嵌入打点
     * @param callback
     * @return {Function}
     */
    transArgs:function(...args){
        let callback = args.pop(),
            _this =this,
            finalCallback=function(...args){
                callback.apply(this,args);
                _this.triggerLogger.apply(this,args);
            };
        args.push(finalCallback);
        return args;
    },
    /**
     * 返回日志参数
     * @param args
     * @return {*}
     */

    /**
     * 打点模块
     */
    triggerLogger:function(...args){
        let $this =$(this);
        let keyName=$this.data('logKey');
        let dealKey = $.fn.logger.logModule[keyName];
        let logArgs = {};
        if(typeof dealKey =='function'){
            logArgs=  dealKey.apply(this,...args);
        }else if(typeof dealKey=='object'){
            logArgs= dealKey;
        }
       alert(JSON.stringify(logArgs))
    }
};
export default logCore;