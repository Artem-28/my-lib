import plugin from './button.mjs';

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Button: plugin
});

var DSLibrary = {
    install: function (app) {
        // Auto import all components
        for (var componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

export { plugin as Button, DSLibrary as default };
