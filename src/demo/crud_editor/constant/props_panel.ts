/**
 * toolbar-常量
 * @author lllgn
 */

import { iEditFormOption, iEditCrudOption } from "./interface";

const crudDefultOption: iEditCrudOption = {
  size: "large",
  // 添加按钮
  addBtn: true,
  // 添加按钮文字
  addBtnText: "新增",
  // 编辑按钮
  editBtn: true,
  // 编辑按钮文本
  editBtnText: "编辑",
  // 删除按钮
  delBtn: true,
  // 删除按钮文本
  delBtnText: "删除",
  // 选择表头按钮
  headerBtn: true,
  // 下载按钮
  downloadBtn: true,
  // 刷新按钮
  refreshBtn: true,
  // 显示操作菜单
  handleMenu: true,
  // 操作菜单宽度
  handleMenuWidth: 200,
  // 操作对齐
  handleMenuAlign: "center",
  // 对话框宽度
  modalWidth: "50%",
  // 对话框高度
  modalTop: "20%",
  // 添加对话框标题
  modalAddTitle: "新增",
  // 添加对话框标题
  modalEditTitle: "编辑",
  // 对话框是否居中显示
  modalAlignCenter: false,
  // 对话框确认按钮的内容-新增
  modalAddOkText: "确定新增",
  // 对话框确认按钮的内容-编辑
  modalEditOkText: "确定修改",
  // 对话框取消按钮的内容
  modalCanceText: "取消",
  // 对话框取消按钮的内容
  delModalText: "是否删除选中项",
  // 默认排序
  defaultSort: 99,
  // 默认排列
  defaultAlign: "center",
  // 默认宽度
  defaultWidth: 150,
};

// 表单默认配置
const formDefultOption: iEditFormOption = {
  // 表单的布局方式，包括水平、垂直、多列
  layout: "horizontal",
  // 表单控件的尺寸
  size: "large",
  // 表单宽度
  width: "100%",
  // 是否显示冒号
  showColon: true,
  // 间距
  padding: "10px",
  // 显示搜索
  showButton: true,
  // 提交文本
  submitButtonText: "确定",
  // 重置文本
  resetButtonText: "重置",
  // 项宽
  itemWidth: "200px",
};

// 项表单默认配置
const columnDefultOption: iEditFormOption = {
  // 表单的布局方式，包括水平、垂直、多列
  layout: "vertical",
  // 表单控件的尺寸
  size: "large",
  // 表单宽度
  width: "100%",
  // 是否显示冒号
  showColon: true,
  // 是否开启自动标签宽度，仅在 layout="horizontal" 下生效。
  autoLabelWidth: true,
  // 间距
  padding: "0px",
  // 显示搜索
  showButton: false,
  // 提交文本
  submitButtonText: "确定",
  // 重置文本
  resetButtonText: "重置",
  // 项宽
  itemWidth: "100%",
};

export default {
  crudDefultOption,
  formDefultOption,
  columnDefultOption,
};
