require('../../src/index.js');
var map={
    test:{
        action:'clicked'
    }
};
$.logger.use(map);
$.logger('body').on('click','.test',function(){
    $(this).data('logName','test')
});

