import Vue from 'vue';
import ToastComponent from './Toast';

let instance;
let defaultDuration = 1500;
let timer;
let ToastConstructor = Vue.extend(ToastComponent);

let initInstance = (bottom)=>{
    instance = new ToastConstructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let toast = (msg, duration=defaultDuration)=>{
        instance.show = true;
        instance.msg = msg;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            instance.show = false;
        }, duration);
};
export default {
    install(Vue, options) {
        initInstance();
        if (options.defaultDuration) {
            defaultDuration = options.defaultDuration;
        }
        Vue.prototype.$toast = toast;
    },
};
