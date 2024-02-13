'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var button = require('./button.js');

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Button: button.default
});

var DSLibrary = {
    install: function (app) {
        // Auto import all components
        for (var componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

exports.Button = button.default;
exports.default = DSLibrary;
