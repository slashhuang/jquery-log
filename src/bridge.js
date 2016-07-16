/**
 * Created by slashhuang on 16/7/16.
 * log core logic
 * 嫁接转换真正的日志模块的桥梁
 */
import logCore from './core.js'
let logBridge=function(){
    //具体的执行逻辑
    let ExecuteLog=(container,event)=>{
        return function(...args){
            container[event](logCore.getLog(...args));
        }
    };
    return function(container){
        $.logger['_eventType'].forEach((event)=>{
            container[event] = ExecuteLog(container,event);
        });
    };
};

export default  logBridge;
