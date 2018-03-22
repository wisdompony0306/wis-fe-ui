
# FE-UI

> Mobile UI elements for **Vue 2.0**

<!-- - [Documentation](http://mint-ui.github.io/docs) -->

## Installation
```shell
npm install git+http://gitlab.58corp.com/fangfe/fe-v-ui.git#[版本号] --save
```

## Usage

Import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import Vue from 'vue';
import { iphoneXBottomBtn } from "fe-ui";

Vue.use(iphoneXBottomBtn);
```


Equals to

```javascript
import iphoneXBottomBtn from 'fe-ui/lib/iphone-x-bottom-btn';

Vue.use(iphoneXBottomBtn);
```

## babel-plugin-component
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```