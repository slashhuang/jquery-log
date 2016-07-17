require('../../src/index.js');
var map={
    click:{
        action:'clicked'
    },
    mouseover:{
        action:'mouseover'
    },
    change:{
        action:'change input'
    }
};
$.logger.use(map);

$('body').logger().on('click','.click',function(){
    $(this).data('logKey','click');
    console.log('clicked')
});
$('.input').logger().change(function(){
    $(this).data('logKey','change');
    console.log('changed')
});


