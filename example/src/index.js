import Logger from '../../src/index.js';
var map={
    test:{
        action:'clicked'
    }
};
debugger;
$.logger.use(map);
$('body').logger.on('click','.test',function(){
    $(this).data('logName','test')
});

