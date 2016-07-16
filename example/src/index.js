require('../../src/index.js');
var map={
    test:{
        action:'clicked'
    }
};
$.logger.use(map);
$('body').logger.on('click','.test',function(){
    $(this).data('logName','test')
});

