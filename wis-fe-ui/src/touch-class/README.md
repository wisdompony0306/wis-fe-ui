# 使用方法
* 1.引入本指令

```javascript
import { TouchClass } from "fe-v-ui";
Vue.use(TouchClass);
```
* 2.将本指令绑定到需要加点击状态的button上

```html
<p v-touch-class>提交</p>
```

* 3.在css里touched类名下写对应样式

```css
.touched {
    color:red;
}
```

# 实现原理
在touchstart 和 touchend 事件中间，为当前元素添加一个class，默认叫touched, 也可以自定义。

```html
<p v-touch-class:custom-class>提交</p>
```