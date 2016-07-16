/**
 * Created by slashhuang on 16/7/17.
 * 执行打点
 */

export default {
    //存储打点模块
    logModule:{},
    /**
     * 修改回调函数，嵌入打点
     * @param callback
     * @return {Function}
     */
    getLog:(...args)=>{
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
        let _this = this;
        let getParams=(...args)=>{
                let $this =$(_this);
                let keyName=$this.data('logName');
                let dealKey = $.fn.logger.logModule[keyName];
                if(typeof dealKey =='function'){
                    return  dealKey.apply(this,...args);
                }else if(typeof dealKey=='object'){
                    return dealKey;
                }
        };
       alert(JSON.stringify(getParams(args)))
    }
};