import { defineComponent, toRefs, reactive, getCurrentInstance, provide, renderSlot } from "vue";
import { configProviderInjectionKey } from "./context.js";
import _export_sfc from "../_virtual/plugin-vue_export-helper.js";
const _sfc_main = defineComponent({
  name: "ConfigProvider",
  props: {
    prefixCls: {
      type: String,
      default: "xiaolaji"
    },
    locale: {
      type: Object
    },
    size: {
      type: String
    },
    global: {
      type: Boolean,
      default: false
    },
    updateAtScroll: {
      type: Boolean,
      default: false
    },
    scrollToClose: {
      type: Boolean,
      default: false
    },
    exchangeTime: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const {
      prefixCls,
      locale,
      size,
      updateAtScroll,
      scrollToClose,
      exchangeTime
    } = toRefs(props);
    const config = reactive({
      slots,
      prefixCls,
      locale,
      size,
      updateAtScroll,
      scrollToClose,
      exchangeTime
    });
    if (props.global) {
      const instance = getCurrentInstance();
      if (instance) {
        instance.appContext.app.provide(configProviderInjectionKey, config);
      }
    } else {
      provide(configProviderInjectionKey, config);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var _ConfigProvider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _ConfigProvider as default };
