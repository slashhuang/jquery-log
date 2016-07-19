/**
 * Created by slashhuang on 16/7/17.
 * 执行打点
 */


let logCore = function (eventType){
    return function(...args){
        //将方法重定向到jQuery的方法
        let container = this;
        //采用统一的jquery方式
        if(eventType=='on'){
            $.fn.on.apply(container,logUtils.transArgs(...args));
        }else{
            $.fn.on.apply(container,[eventType,...logUtils.transArgs(...args)])
        }
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
                if(typeof callback=='function'){
                    callback && callback.apply(this,args);
                }
                //如果设置了logger为false，则不进行logger
                if(!$(this).data('stopLog')){
                    _this.triggerLogger.apply(this,args);
                }
            };
        //如果最后一个参数不是函数，则还是塞回去
        if(typeof callback!='function'){
            args.push(callback);
        }
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
        //获取打点参数
        let $this =$(this);
        let keyName=$this.data('logKey');
        let dealKey = $.fn.logger.logModule[keyName];
        let logArgs = {};
        if(typeof dealKey =='function'){
            logArgs =  dealKey.apply(this,...args);
        }else if(typeof dealKey=='object'){
            logArgs= dealKey;
        }
        //执行打点

        $.fn.logger.executor(logArgs);
    }
};
export default logCore;