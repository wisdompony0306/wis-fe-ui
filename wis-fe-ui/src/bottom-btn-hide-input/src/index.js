export default {
    install(Vue, options) {
        let oriHeight = window.innerHeight;
        let oriWidth = window.innerWidth;
        Vue.directive('bottom-btn-hide-input', function (el, binding) {
            const ua = navigator.userAgent;
            if (ua.match(/iPhone/i) || ua.match(/iPod/i)) {
                window.addEventListener('focusin', () => {
                    el.style.display = 'none';
                });
                window.addEventListener('focusout', () => {
                    el.style.display = 'block';
                });
            } else {
                window.addEventListener('resize', function () {
                    if (oriWidth == window.innerWidth) {
                        if (oriHeight <= window.innerHeight) {
                            el.style.display = 'block';
                        } else {
                            el.style.display = 'none';
                        }
                    } else {
                        oriHeight = window.innerHeight;
                        oriWidth = window.innerWidth;
                    }
                });
            }
        });
    },
};
