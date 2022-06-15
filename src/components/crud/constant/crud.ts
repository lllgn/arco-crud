/**
 * table-常量
 * @author lllgn
 */

import { iCrudOption, iCrudColumnsOption } from "./crud_interface";

const crudDefultOption: iCrudOption = {
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

// 操作栏
const handleColumn: iCrudColumnsOption = {
  label: "操作",
  title: "操作",
  prop: "handleMenu",
  slotName: "crudHandleMenu",
  dataIndex: "handleMenu",
  fixed: "right",
  align: "center",
  width: 200,
};

// 默认分页参数
const tableDefultPagination: any = {
  // 是否显示数据总数
  "show-total": true,
  // 是否显示数据条数选择器
  "show-page-size": true,
};

export default {
  crudDefultOption,
  handleColumn,
  tableDefultPagination,
};
