/**
 * form-常量
 * @author lllgn
 *
 */

import { iFormOptions } from "./form_interface";
// 正常模式
const normalModel: iFormOptions = {
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
// 搜索模式
const searchModel: iFormOptions = {
  // 表单的布局方式，包括水平、垂直、多列
  layout: "inline",
  // 表单控件的尺寸
  size: "large",
  // 表单宽度
  width: "100%",
  // 是否显示冒号
  showColon: true,
  // 间距
  padding: "0px",
  // 显示搜索
  showButton: true,
  // 提交文本
  submitButtonText: "搜索",
  // 重置文本
  resetButtonText: "重置",
  // 项宽
  itemWidth: "200px",
};
// crud搜索模式
const crudSearch: iFormOptions = {
  // 表单的布局方式，包括水平、垂直、多列
  layout: "inline",
  // 表单控件的尺寸
  size: "large",
  // 表单宽度
  width: "100%",
  // 是否显示冒号
  showColon: true,
  // 间距
  padding: "0px",
  // 显示搜索
  showButton: true,
  // 提交文本
  submitButtonText: "查询",
  // 重置文本
  resetButtonText: "重置",
  // 项宽
  itemWidth: "200px",
};

// 正常模式
const crudNormal: iFormOptions = {
  // 表单的布局方式，包括水平、垂直、多列
  layout: "horizontal",
  // 表单控件的尺寸
  size: "large",
  // 表单宽度
  width: "100%",
  // 是否显示冒号
  showColon: true,
  // 间距
  padding: "4px",
  // 显示搜索
  showButton: false,
  // 提交文本
  submitButtonText: "确定",
  // 重置文本
  resetButtonText: "重置",
  //  是否开启自动标签宽度，仅在 layout="horizontal" 下生效。
  autoLabelWidth: true,
  // 项宽
  itemWidth: "400px",
};

export default {
  formModel: {
    search: searchModel,
    normal: normalModel,
    crudSearch,
    crudNormal,
  },
};
