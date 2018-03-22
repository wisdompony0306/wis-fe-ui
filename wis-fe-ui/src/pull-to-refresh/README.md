# 使用方法
* 1.引入本指令

```javascript
import { PullToRefresh } from "fe-v-ui";
Vue.use(PullToRefresh);
```

* 2.使用
```javascript
    window.document.addEventListener(
      "pull-to-refresh",
      function(e) {
        // 下拉触发的自定义方法， 调用e.detail.finish()，来结束刷新状态
        setTimeout(() => {
          e.detail.finish();
          location.reload();
        }, 500);
      },
      false
    );
```


# 注意
该组件依赖于promise。须自行添加promise polyfill

# 该组件底层使用了一个第三方包 mobile-pull-to-refresh
- [mobile-pull-to-refresh 传送门](https://www.npmjs.com/package/mobile-pull-to-refresh)