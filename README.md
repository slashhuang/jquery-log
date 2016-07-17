# jquery-logger

> a logger system for jquery project

## features[特点]
1. 打点代码和业务逻辑代码分离
2. 使用简单

## usage[使用方式]
```javascript

    # 引入模块
    import logger from 'jquery-logger';
    
    # 引入打点文件
    import logFile from 'logFile的位置'；
    
    # 启用打点文件
    $.logger.use(logFile)；
    
    # 打点事件,使用方式还是和之前的jqueryAPI一模一样,只不过加了一层logger中间件
    $('.test').logger().on('click','li',function(){
   
        //在这里设置你的logKey，如果已在对应dom中存储了data-log-key，则不需要这一步
        $(this).data('logKey','clickLi');
        
        //do your logic
    })
    ====实际上的效果====>
    $('.test').on('click','li',function(){
            //在这里设置你的logKey，如果已在对应dom中存储了data-log-key，则不需要这一步
            let key = $(this).data('logKey','clickLi');
            //do your logic
            //打点代码
            $.logger['logModule'](key);
            
        })
  
```

## Command[命令]

```
    # 安装依赖
    npm install 
	#karma测试	
	npm run test	
	#上线打包	
	npm run build	
	#demo测试	
	npm run demo	
```
container.on('',()=>{
})
container.on=function(a,b){
    container.on(a,b1)

}


