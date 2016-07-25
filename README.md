# jquery-log

> a log system for jquery project

## features[特点]
1. 打点代码和业务逻辑代码分离  separate logic and logger 
2. 使用简单     easy to use

## usage[使用方式]
```javascript

    # 引入模块
    import logger from 'jquery-log';
    
    # 引入打点文件
    import map from './logMap.js';
    
    //启用日志文件 ==>  use log map to map node's `data-log-key`
    $.logger.use(map);
    
    //设置日志处理模块 ==>  set the executor for events
    $.logger.executor=(log)=>{
        $('.show-result').append('<dd>打点日志为'+JSON.stringify(log)+'</dd>')
    };
    
    //实际调用  code is developed like old jquery stuff,but with a logger middleware
    $('.test').logger().on('click','li',function(){
        //do your logic,
        //jquery-log will find the triggerd dom node and trigger executor
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


