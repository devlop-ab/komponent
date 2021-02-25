'use strict';

// const Komponent = require('./core/Komponent');

import Komponent from './core/Komponent';

interface Config {
    // selectorPrefix: string | null,
    // identifier: string | null,
};

let config = {
    selectorPrefix: '.component\\:',
};

const factory = function (name : any, callback : any) {
    const componentSelector = config.selectorPrefix + name.replace(/([:.])/g, '\\$1');

    const components = document.querySelectorAll(componentSelector);

    components.forEach(function (component) {
        callback.call(
            new Komponent(config, component), // this
            component,
        );
    });
};

const constructor = function (config : Config) {
    return factory;
};

export default constructor;

// module.exports = komponent;

// // Allow use of default import syntax in TypeScript
// module.exports.default = komponent;
