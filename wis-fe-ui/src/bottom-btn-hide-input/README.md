# 使用方法
* 1.引入本指令

```javascript
import { BottomBtnHideInput } from "fe-v-ui";
Vue.use(BottomBtnHideInput);
```
* 2.将本指令绑定到底部button上

```html
<p v-bottom-btn-hide-input>提交</p>
```

# 实现原理
检测可视高度变化，变小后隐藏元素。恢复正常后显示元素。注意：在ios中的uc浏览器中无效