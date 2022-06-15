import { iFormColumns } from "./form_interface";
/**
 * 声明CRUD默认配置
 */
export interface iCrudOption {
  // 按钮大小
  size?: "mini" | "small" | "medium" | "large";
  // 显示添加按钮
  addBtn?: boolean;
  // 添加按钮文本
  addBtnText?: string;
  // 显示编辑按钮
  editBtn?: boolean;
  // 编辑按钮文本
  editBtnText?: string;
  // 显示删除按钮
  delBtn?: boolean;
  // 删除按钮文本
  delBtnText?: string;
  // 显示选择表头按钮
  headerBtn?: boolean;
  // 下载按钮
  downloadBtn?: boolean;
  // 显示刷新按钮
  refreshBtn?: boolean;
  // 显示操作菜单
  handleMenu?: boolean;
  // 操作菜单宽度
  handleMenuWidth?: number;
  // 操作菜单对齐
  handleMenuAlign?: string;
  // 对话框宽度
  modalWidth?: string;
  // 对话框高度
  modalTop?: string;
  // 添加对话框标题
  modalAddTitle?: string;
  // 编辑对话框标题
  modalEditTitle?: string;
  // 对话框是否居中显示
  modalAlignCenter?: boolean;
  // 对话框确认按钮的内容-新增
  modalAddOkText?: string;
  // 对话框确认按钮的内容-编辑
  modalEditOkText?: string;
  // 对话框取消按钮的内容
  modalCanceText?: string;
  // 删除对话框内容
  delModalText?: string;
  // 默认排序
  defaultSort?: number;
  // 默认排列
  defaultAlign?: "left" | "center" | "right";
  // 默认宽度
  defaultWidth?: number;
}

/**
 * 声明CRUD项配置
 */
export interface iCrudColumnsOption extends iFormColumns {
  // 显示在搜索表单中
  searchFormShow?: boolean;
  // 搜索插槽
  searchSlot?: boolean;
  // 搜索栏排序
  searchSort?: number;
  // 搜索栏宽度
  searchWidth?: number;
  // crud表单插槽
  formSlot?: boolean;
  // 表单排序
  formSort?: number;
  // 在添加表单中隐藏
  addFormHide?: boolean;
  // 在添加表单中不可用
  addDisabled?: boolean;
  // 在编辑表单中隐藏
  editFormHide?: boolean;
  // 在编辑表单中不可用
  editDisabled?: boolean;
  // 列标题
  title?: string;
  // 列信息的标识，对应TableData中的数据
  dataIndex?: string;
  // 子集
  children?: Array<iCrudColumnsOption>;
  // 设置当前列的渲染插槽的名字。插槽参数同 #cell
  slotName?: string;
  // 设置当前列的标题的渲染插槽的名字
  titleSlotName?: string;
  // 固定位置	'left' | 'right'
  fixed?: "left" | "right";
  // 对齐方向	'left' | 'center' | 'right'
  align?: "left" | "center" | "right";
  // 表格列宽
  width?: number;
}
