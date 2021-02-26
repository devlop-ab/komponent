'use strict';

// const Komponent = require('./core/Komponent');

import ConfigInterface from './ConfigInterface';
import Komponent from './Komponent';

let config : ConfigInterface = {
    //
};

const factory = function (selector : string, callback : Function) {
    // const componentSelector = name.replace(/([:.])/g, '\\$1');

    const components = document.querySelectorAll(selector);

    components.forEach(function (component) {
        callback.call(
            new Komponent(config, component),
            component,
        );
    });
};

const constructor = function (_config : ConfigInterface) {
    config = _config;

    return factory;
};

export default constructor;

// module.exports = constructor;

// // Allow use of default import syntax in TypeScript
// module.exports.default = constructor;
