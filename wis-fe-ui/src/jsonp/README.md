# 未测试

# 使用方法
* 1.引入本指令

```javascript
import { Jsonp } from "fe-v-ui";
Vue.use(Jsonp);
```
* 2.使用
```javascript
    this.$jsonp('api url',
      {
        callbackQuery = "jsonpCallback";
        callbackName = "jsonpCallback";
        otherData = ''
      }
    ).then(res => {})
    .catch(err => {});
```


# 实现原理
将vue-jsonp绑定到vue实例上，须自行添加promise polyfill

# 具体用法请参考vue-jsonp文档
- [axios 传送门](https://www.npmjs.com/package/vue-jsonp)