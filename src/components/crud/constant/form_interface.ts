/**
 * 声明表单配置
 */
export interface iFormOptions {
  // 表单的布局方式，包括水平、垂直、多列
  layout?: "horizontal" | "vertical" | "inline";
  // 表单控件的尺寸
  size?: "mini" | "small" | "medium" | "large";
  // 标签元素布局选项。参数同 <col> 组件一致
  labelColProps?: object;
  // 表单控件布局选项。参数同 <col> 组件一致
  wrapperColProps?: object;
  // 标签的对齐方向
  labelAlign?: "left" | "right";
  // 是否禁用表单
  disabled?: boolean;
  // 是否开启自动标签宽度，仅在 layout="horizontal" 下生效。
  autoLabelWidth?: boolean;
  // 表单宽度
  width?: string;
  // 是否显示冒号
  showColon?: boolean;
  // 间距
  padding?: string;
  // 显示按钮
  showButton?: boolean;
  // 提交文本
  submitButtonText?: string;
  // 重置文本
  resetButtonText?: string;
  // 默认项宽
  itemWidth?: string;
}

/**
 * 声明Item配置
 */
export interface iItemOption {
  // 项宽
  width?: string;
}

/**
 * 声明字典属性
 */
export interface iDictProps {
  //  文本
  label?: string;
  // 值
  value?: string;
}

/**
 * 声明Record
 */
export interface iRecord {
  //  文本
  label?: string;
  // 值
  value?: number;
}

/**
 * 声明表单项配置
 */
export interface iFormColumns {
  // 默认值（非受控模式）
  value?: any;
  // 类型
  type?: string;
  // 文本
  label: string;
  // 属性
  prop: string;
  // 插槽
  slot?: boolean;
  // 排序
  sort?: number;
  // 是否禁用
  disabled?: boolean;
  // 是否隐藏
  hide?: boolean;
  // 字典属性
  dictProps?: iDictProps;
  // 字典数据
  dictData?: Array<any>;
  // 动态字典链接
  dictUrl?: string;
  // 帮助文案
  help?: string;
  // 额外显示的文案
  extra?: string;
  // 是否必须填写
  required?: boolean;
  // 表单项校验规则
  rules?: Array<any>;
  // 是否隐藏标签
  hideLabel?: boolean;
  // 是否隐藏星号
  hideAsterisk?: boolean;
  // 项宽度
  formItemWidth?: number | string;
  // 设置 flex 布局属性	number | string | 'initial' | 'auto' | 'none'
  flex?: number | string | "initial" | "auto" | "none";
  // 栅格占位格数
  span?: number;
  // 最大长度
  maxLength?: number;
  // 最小长度
  minLength?: number;
  // input-是否显示字数统计
  showWordLimit?: boolean;
  // input-提示文字
  placeholder?: string;
  // input-number 	模式（embed：按钮内嵌模式，button：左右按钮模式）
  mode?: string | "embed" | "button";
  // input-number 数字精度
  precision?: number;
  // input-number 数字变化步长
  step?: number;
  // input-number 定义输入框展示值
  formatter?: any; //----------
  // radio-group 单选框组的方向
  direction?: "horizontal" | "vertical";
  // radio-group 单选框组的类型
  radioType?: "radio" | "button";
  // slider 设置显示的标签
  marks?: Array<iRecord>; //----------
  // slider 是否显示刻度线
  showTicks?: boolean;
  // slider 是否显示输入框
  showInput?: boolean;
  // slider 是否开启范围选择
  range?: boolean;
  // select 是否开启多选模式（多选模式默认开启搜索）
  multiple?: boolean;
  // select 输入框的值(v-model)
  inputValue?: string;
  // select  	输入框的默认值（非受控模式）
  defaultInputValue?: string;
  // cascader 是否开启严格选择模式
  checkStrictly?: boolean;

  /**
   * picker 值的格式，对 value defaultValue pickerValue defaultPickerValue 以及事件中的返回值生效，
   * 支持设置为时间戳，Date 和字符串（参考字符串解析格式）。
   * 如果没有指定，将格式化为字符串，格式同 format。
   */
  valueFormat?: string;
  // picker不可选取的日期
  disabledDate?: any; //----------
  // picker不可选取的时间
  disabledTime?: any; //----------
  // picker是否增加时间选择
  showTime?: boolean;
  // picker 格式
  format?: string;
  // time 禁用的部分小时选项
  disabledHours?: any;
  // time 禁用的部分分钟选项
  disabledMinutes?: any;
  // time 禁用的部分秒数选项
  disabledSeconds?: any;
  // time 12 小时制
  use12Hours?: boolean;
}
