//获取元素的位置和尺寸
const getRect = (el) => {
    return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
    }
};
let vendor = (() => {
    let elementStyle = document.createElement('div').style
    let transformNames = {
        standard: 'transform',
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform'
    }

    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key
        }
    }
    return false
})();

const prefixStyle = (style) => {
    /* istanbul ignore if */
    if (vendor === false) {
        return false
    }

    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend'
        }
        return style
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
};

//拉升后的贝塞尔曲线相关
const easeOutQuart = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
const easeOutCubic = 'cubic-bezier(0.22, 0.61, 0.36, 1)';

const getNow = () => {
    return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
};

export {
    getRect,
    prefixStyle,
    easeOutQuart,
    easeOutCubic,
    getNow
}