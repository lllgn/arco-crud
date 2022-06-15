/**
 * 表单配置-常量
 * @author lllgn
 */
import { iColumnsOption } from "./interface";

const dictData = [
  {
    label: "是",
    value: true,
  },
  {
    label: "否",
    value: false,
  },
];

const columns: Array<iColumnsOption> = [
  {
    label: "布局方式-[layout]",
    prop: "layout",
    type: "select",
    help: "表单的布局方式，包括水平、垂直、多列",
    value: "horizontal",
    dictData: [
      {
        label: "水平",
        value: "horizontal",
      },
      {
        label: "垂直",
        value: "vertical",
      },
      {
        label: "多列",
        value: "inline",
      },
    ],
  },
  {
    label: "表单控件的尺寸-[size]",
    prop: "size",
    type: "select",
    value: "large",
    dictData: [
      {
        label: "迷你",
        value: "mini",
      },
      {
        label: "小",
        value: "small",
      },
      {
        label: "中",
        value: "medium",
      },
      {
        label: "大",
        value: "large",
      },
    ],
  },
  {
    label: "标签的对齐方向-[labelAlign]",
    prop: "labelAlign",
    type: "select",
    dictData: [
      {
        label: "左",
        value: "left",
      },
      {
        label: "右",
        value: "right",
      },
    ],
  },
  {
    label: "是否禁用表单-[disabled]",
    prop: "disabled",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否开启自动标签宽度-[autoLabelWidth]",
    prop: "autoLabelWidth",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    help: "是否开启自动标签宽度，仅在 layout='horizontal' 下生效。",
    value: false,
  },
  {
    label: "表单宽度-[width]",
    prop: "width",
    type: "input",
  },

  {
    label: "是否显示冒号-[showColon]",
    prop: "showColon",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "间距-[padding]",
    prop: "padding",
    type: "input",
  },
  {
    label: "显示按钮-[showButton]",
    prop: "showButton",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
];

export default {
  columns,
};
