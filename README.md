# jquery-log

> a log system for jquery project

## features[特点]
1. 打点代码和业务逻辑代码分离
2. 使用简单

## usage[使用方式]
```javascript

    # 引入模块
    import logger from 'jquery-log';
    
    # 引入打点文件 
    import map from './logMap.js';
    
    //启用日志文件
    $.logger.use(map);
    
    //设置日志处理模块，可以分文件配置，也可以直接全局配置
    $.logger.executor=(log)=>{
        $('.show-result').append('<dd>打点日志为'+JSON.stringify(log)+'</dd>')
    };
    
    //实际调用。打点事件,使用方式还是和之前的jqueryAPI一模一样,只不过加了一层logger中间件
    $('.test').logger().on('click','li',function(){
   
        //在这里设置你的logKey，如果已在对应dom中存储了data-log-key，则不需要这一步
        $(this).data('logKey','clickLi');
        
        //do your logic
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


