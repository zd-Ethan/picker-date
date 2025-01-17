import { toRefs, computed } from "vue";
import { padStart } from "../../_utils/pad.js";
import { getColumnsFromFormat } from "../utils/index.js";
function useTimeList(props) {
  const {
    format,
    step,
    use12Hours,
    hideDisabledOptions,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    selectedHour,
    selectedMinute,
    selectedSecond,
    selectedAmpm,
    disabled
  } = toRefs(props);
  const hours = computed(() => {
    var _a;
    const { hour: hourStep = 1 } = (step == null ? void 0 : step.value) || {};
    const disabledList = ((_a = disabledHours == null ? void 0 : disabledHours.value) == null ? void 0 : _a.call(disabledHours)) || [];
    let list = [];
    for (let i = 0; i < (use12Hours.value ? 12 : 24); i += hourStep) {
      list.push(i);
    }
    if (use12Hours.value) {
      list[0] = 12;
    }
    if (hideDisabledOptions.value && disabledList.length) {
      list = list.filter((h) => disabledList.indexOf(h) < 0);
    }
    return list.map((h) => ({
      label: padStart(h, 2, "0"),
      value: h,
      selected: selectedHour.value === h,
      disabled: (disabled == null ? void 0 : disabled.value) || disabledList.includes(h)
    }));
  });
  const minutes = computed(() => {
    var _a;
    const { minute: minuteStep = 1 } = (step == null ? void 0 : step.value) || {};
    const disabledList = ((_a = disabledMinutes == null ? void 0 : disabledMinutes.value) == null ? void 0 : _a.call(disabledMinutes, selectedHour.value)) || [];
    let list = [];
    for (let i = 0; i < 60; i += minuteStep) {
      list.push(i);
    }
    if (hideDisabledOptions.value && disabledList.length) {
      list = list.filter((m) => disabledList.indexOf(m) < 0);
    }
    return list.map((m) => ({
      label: padStart(m, 2, "0"),
      value: m,
      selected: selectedMinute.value === m,
      disabled: (disabled == null ? void 0 : disabled.value) || disabledList.includes(m)
    }));
  });
  const seconds = computed(() => {
    var _a;
    const { second: secondStep = 1 } = (step == null ? void 0 : step.value) || {};
    const disabledList = ((_a = disabledSeconds == null ? void 0 : disabledSeconds.value) == null ? void 0 : _a.call(disabledSeconds, selectedHour.value, selectedMinute.value)) || [];
    let list = [];
    for (let i = 0; i < 60; i += secondStep) {
      list.push(i);
    }
    if (hideDisabledOptions.value && disabledList.length) {
      list = list.filter((s) => disabledList.indexOf(s) < 0);
    }
    return list.map((s) => ({
      label: padStart(s, 2, "0"),
      value: s,
      selected: selectedSecond.value === s,
      disabled: (disabled == null ? void 0 : disabled.value) || disabledList.includes(s)
    }));
  });
  const AMPM = ["am", "pm"];
  const ampmList = computed(() => {
    const isUpperCase = getColumnsFromFormat(format.value).list.includes("A");
    return AMPM.map((a) => ({
      label: isUpperCase ? a.toUpperCase() : a,
      value: a,
      selected: selectedAmpm.value === a,
      disabled: disabled == null ? void 0 : disabled.value
    }));
  });
  return {
    hours,
    minutes,
    seconds,
    ampmList
  };
}
export { useTimeList as default };
