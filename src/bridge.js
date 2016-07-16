/**
 * Created by slashhuang on 16/7/16.
 * log core logic
 * 嫁接转换真正的日志模块的桥梁
 */
import logCore from './core.js'
let logBridge=function(){
    let logMap={};
    //具体的执行逻辑
    let ExecuteLog=(event)=>{
        return function(...args){
            $[event](logCore.getLog(...args));
        }
    };
    $.logger['_eventType'].forEach((event)=>{
        logMap[event] = ExecuteLog(event);
    });
    return logMap;
};

export default  logBridge;
