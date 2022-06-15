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
  //========================表单====================================
  {
    label: "按钮大小-[size]",
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
    label: "显示添加按钮-[addBtn]",
    prop: "addBtn",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: true,
  },
  {
    label: "添加按钮文本-[addBtnText]",
    prop: "addBtnText",
    type: "input",
  },
  {
    label: "显示编辑按钮-[editBtn]",
    prop: "editBtn",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: true,
  },
  {
    label: "编辑按钮文本-[editBtnText]",
    prop: "editBtnText",
    type: "input",
  },
  {
    label: "显示删除按钮-[delBtn]",
    prop: "delBtn",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: true,
  },
  {
    label: "删除按钮文本-[delBtnText]",
    prop: "delBtnText",
    type: "input",
  },
  {
    label: "显示选择表头按钮-[headerBtn]",
    prop: "headerBtn",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: true,
  },
  {
    label: "显示刷新按钮-[refreshBtn]",
    prop: "refreshBtn",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: true,
  },

  {
    label: "显示操作菜单-[handleMenu]",
    prop: "handleMenu",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: true,
  },
  {
    label: "操作菜单宽度-[handleMenuWidth]",
    prop: "handleMenuWidth",
    type: "number",
    value: 300,
    minLength: 0,
    maxLength: 1000,
  },
  {
    label: "操作菜单对齐-[handleMenuAlign]",
    prop: "handleMenuAlign",
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
  {
    label: "对话框宽度-[modalWidth]",
    prop: "modalWidth",
    type: "input",
  },
  {
    label: "对话框高度-[modalTop]",
    prop: "modalTop",
    type: "input",
  },
  {
    label: "添加对话框标题-[modalAddTitle]",
    prop: "modalAddTitle",
    type: "input",
  },
  {
    label: "编辑对话框标题-[modalEditTitle]",
    prop: "modalEditTitle",
    type: "input",
  },
  {
    label: "对话框是否居中显示-[modalAlignCenter]",
    prop: "modalAlignCenter",
    type: "radio",
    radioType: "button",
    formItemWidth: "none",
    dictData: dictData,
    value: false,
  },
  {
    label: "对话框新增按钮文本-[modalAddOkText]",
    prop: "modalAddOkText",
    type: "input",
  },
  {
    label: "对话框编辑按钮文本-[modalEditOkText]",
    prop: "modalEditOkText",
    type: "input",
  },
  {
    label: "对话框取消按钮文本-[modalCanceText]",
    prop: "modalCanceText",
    type: "input",
  },
  {
    label: "删除对话框内容-[delModalText]",
    prop: "delModalText",
    type: "input",
  },
];

export default {
  columns,
};
