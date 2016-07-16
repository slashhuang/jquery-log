/**
 * Created by slashhuang on 16/7/16.
 * log core logic
 * 核心思想
 */
import warning from 'warn.js';
let logCore=function(eventType){
    let logMap={};
    $.logger['_eventType'].forEach((event)=>{
        logMap[event] = new logCore(event);
    });
    return logMap;
};
//存储打点模块
logCore['logModule']=[];
//可以处理的类型
logCore['eventType']=[];



//具体的执行逻辑
class executeLog{
    constructor(event){

    }
    execute(...args){
        let args = this.transArgs(...args);
        $[eventType](...args);
    }
    /**
     * 修改回调函数，嵌入打点
     * @param callback
     * @return {Function}
     */
    transArgs(...args){
        let callback = args.pop(),
            _this =this,
            finalCallback=function(...args){
                callback.apply(this,args);
                _this.triggerLogger.apply(this,args);
            };
        args.push(finalCallback);
        return args;
    }
    /**
     * 打点模块
     */
    triggerLogger(args){


    }
};
export default  logCore;
