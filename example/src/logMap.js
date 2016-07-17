/**
 * Created by slashhuang on 16/7/17.
 * 日志的key/value支持简单的对象，也支持函数返回
 */

export default {
    /**
     * this指向当前调用的dom对象
     * @param event
     * @return {{action: string, id: (*|jQuery)}}
     */
    click:function(){
        let id =$(this).data('cityId');
        return {
            action:'clicked' ,
            id:id
        }
    },
    mouseover:{
        action:'mouseover'
    },
    blur:function(){
        let type = $(this).data('type');
        return   {
            action:'change input',
            type:type
        }
    },
    scroll:function(){
        let area = $(this).data('type');
        return {
            action:'scroll',
            area:area
        }
    }
};