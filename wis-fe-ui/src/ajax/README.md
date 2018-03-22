# 未测试

# 使用方法
* 1.引入本指令

```javascript
import { Ajax } from "fe-v-ui";
Vue.use(Ajax);
```
* 2.使用
```javascript
    this.$ajax
        .get("api url", {
            params: {}
        })
        .then(
            function(response) {
              var data = response.data;
            }
        )
        .catch(function(error){});
```


# 实现原理
将axios绑定到vue实例上，须自行添加promise polyfill

# 具体用法请参考axios文档
- [axios 传送门](https://github.com/axios/axios)