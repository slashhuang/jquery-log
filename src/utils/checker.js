/**
 * Created by slashhuang on 16/7/16.
 * 参数检测
 */
export default{
    //打印参数错误日志
    _console: (message)=> {
        if (typeof console == 'object') {
            console.error(message)
        }
    },
    /**
     * 检测日志文件是否符合规范,
     * @param logger 日志构造函数或者日志key/value处理文件
     */
    checkLog: (logger)=> {
        let checkLogType = Object.prototype.toString;
        if(!(typeof logger=='object' && checkLogType.call(logger)=="[object Object]")){
            this._console('your logger should be a pure key/value object');
            return false;
        }
    }
}