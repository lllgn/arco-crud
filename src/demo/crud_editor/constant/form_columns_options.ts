/**
 * 表单/CRUD项配置-常量
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
  //========================表单====================================
  {
    label: "属性-[prop]",
    prop: "prop",
    type: "input",
    placeholder: "请输入属性名称",
    rules: [
      {
        required: true,
        message: "请输入属性名称",
        trigger: "blur",
      },
    ],
  },
  {
    label: "字段名称-[label]",
    prop: "label",
    type: "input",
    placeholder: "请输入字段名称",
    rules: [
      {
        required: true,
        message: "请输入字段名称",
        trigger: "blur",
      },
    ],
  },
  {
    label: "默认值-[value]",
    prop: "value",
    type: "input",
    help: "默认值（非受控模式）",
  },
  {
    label: "类型-[type]",
    prop: "type",
    type: "input",
  },
  {
    label: "插槽-[slot]",
    prop: "slot",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "排序-[sort]",
    prop: "sort",
    type: "number",
    value: 99,
    minLength: 0,
    maxLength: 999,
  },
  {
    label: "是否隐藏-[hide]",
    prop: "hide",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否禁用-[disabled]",
    prop: "disabled",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "帮助文案-[help]",
    prop: "help",
    type: "input",
  },
  {
    label: "额外显示的文案-[extra]",
    prop: "extra",
    type: "input",
  },
  {
    label: "是否必须填写-[required]",
    prop: "required",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },

  {
    label: "是否隐藏标签-[hideLabel]",
    prop: "hideLabel",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否隐藏星号-[hideAsterisk]",
    prop: "hideAsterisk",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },

  {
    label: "项宽度-[formItemWidth]",
    prop: "formItemWidth",
    type: "number",
    value: 300,
    minLength: 0,
    maxLength: 1000,
  },
  {
    label: "最大值-[maxLength]",
    prop: "formItemWidth",
    type: "number",
    minLength: 0,
  },
  {
    label: "最小值-[minLength]",
    prop: "minLength",
    type: "number",
    minLength: 0,
    maxLength: 1000,
  },
  {
    label: "是否显示字数统计-[showWordLimit]",
    prop: "showWordLimit",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "提示文字-[placeholder]",
    prop: "placeholder",
    type: "input",
  },
  {
    label: "模式-[mode]",
    prop: "mode",
    type: "select",
    radioType: "button",
    formItemWidth: "none",
    dictData: [
      {
        label: "按钮内嵌模式",
        value: "embed",
      },
      {
        label: "左右按钮模式",
        value: "button",
      },
    ],
  },
  {
    label: "数字精度-[precision]",
    prop: "precision",
    type: "number",
  },
  {
    label: "数字变化步长-[step]",
    prop: "step",
    type: "number",
  },
  {
    label: "单选框组的方向-[direction]",
    prop: "direction",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: [
      {
        label: "横向",
        value: "horizontal",
      },
      {
        label: "纵向",
        value: "vertical",
      },
    ],
    value: "horizontal",
  },
  {
    label: "是否显示刻度线-[showTicks]",
    prop: "showTicks",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否显示输入框-[showInput]",
    prop: "showInput",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否开启范围选择-[range]",
    prop: "showInput",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否开启多选模式-[multiple]",
    prop: "multiple",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "是否开启多选模式-[multiple]",
    prop: "multiple",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "输入框的默认值-[value]",
    prop: "value",
    type: "input",
    help: "输入框的默认值（非受控模式）",
  },
  {
    label: "picker 值的格式-[valueFormat]",
    prop: "valueFormat",
    type: "input",
  },
  {
    label: "是否增加时间选择-[showTime]",
    prop: "showTime",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "格式-[valueFormat]",
    prop: "format",
    type: "input",
  },
  {
    label: "12小时制-[use12Hours]",
    prop: "use12Hours",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "验证规则-[rules]",
    prop: "rules",
    type: "textarea",
    help: "验证规则 例子：[{required:true,message:'name is required'},{minLength:5,message:'must be greater than 5 characters'}]",
  },

  {
    label: "数据字段-[dictProps]",
    prop: "dictProps",
    type: "textarea",
    help: "数据字段键值 例子：{label:'key',value:'value'}   默认{label:'label',value:'value'}",
  },
  {
    label: "数据-[dictData]",
    prop: "dictData",
    type: "textarea",
    help: "例子：[{label:'上架',value:'1'},{label:'下架',value:'0'}]",
  },
  //========================CRUD====================================
  {
    label: "显示在搜索表单中-[searchFormShow]",
    prop: "searchFormShow",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "搜索插槽-[searchSlot]",
    prop: "searchSlot",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "搜索栏排序-[searchSort]",
    prop: "searchSort",
    type: "number",
    value: 99,
    minLength: 0,
    maxLength: 999,
  },
  {
    label: "搜索栏宽度-[searchWidth]",
    prop: "searchWidth",
    type: "number",
    value: 200,
    minLength: 0,
    maxLength: 1000,
  },
  {
    label: "CRUD表单插槽-[formSlot]",
    prop: "formSlot",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "CRUD表单排序-[formSort]",
    prop: "formSort",
    type: "number",
    value: 99,
    minLength: 0,
    maxLength: 999,
  },
  {
    label: "在添加表单中隐藏-[addFormHide]",
    prop: "addFormHide",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "在添加表单中不可用-[addDisabled]",
    prop: "addDisabled",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "在编辑表单中隐藏-[editFormHide]",
    prop: "editFormHide",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "在编辑表单中不可用-[editDisabled]",
    prop: "editDisabled",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "固定位置-[fixed]",
    prop: "fixed",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
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
    label: "对齐方向-[align]",
    prop: "align",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: [
      {
        label: "左",
        value: "left",
      },
      {
        label: "居中",
        value: "center",
      },
      {
        label: "右",
        value: "right",
      },
    ],
  },
  //========================分组标题====================================
  {
    prop: "title_form",
    label: "表单配置",
    type: "title",
  },
  {
    prop: "title_crud",
    label: "CRUD配置",
    type: "title",
  },
  {
    prop: "title_common",
    label: "通用配置",
    type: "title",
  },
];

export default {
  columns,
};
