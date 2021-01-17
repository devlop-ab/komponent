'use strict';
import Komponent from './core/Komponent';
let config = {
    selectorPrefix: '.component\\:',
};
const komponent = function (name, callback) {
    console.log(name);
    const componentSelector = config.selectorPrefix + name.replace(/([:.])/g, '\\$1');
    const components = document.querySelectorAll(componentSelector);
    components.forEach(function (component) {
        callback.call(new Komponent(config, component), component);
    });
};
export default komponent;
