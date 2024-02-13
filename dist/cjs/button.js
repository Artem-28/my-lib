'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Button = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"my-lib-button"},[_vm._t("default",function(){return [(_vm.label)?_c('span',{staticClass:"my-lib-button__label",domProps:{"textContent":_vm._s(_vm.label)}}):_vm._e()]})],2)},
staticRenderFns: [],
  name: "DSButton",
  props: {
    label: {
      type: String,
      required: false,
    }
  }
};

var plugin = {
    install: function (Vue) {
        Vue.component(Button.name, Button);
    }
};

exports.DSButton = Button;
exports.default = plugin;
