'use strict';

// const Komponent = require('./core/Komponent');

import Komponent from './core/Komponent';

let config = {
    selectorPrefix: '.component\\:',
};

// Create the default instance to be exported
const komponent = function (name, callback) {
    const componentSelector = config.selectorPrefix + name.replace(/([:.])/g, '\\$1');

    const components = document.querySelectorAll(componentSelector);

    components.forEach(function (component) {
        callback.call(
            new Komponent(config, component), // this
            component,
        );
    });
};

export default komponent;

// module.exports = komponent;

// // Allow use of default import syntax in TypeScript
// module.exports.default = komponent;
