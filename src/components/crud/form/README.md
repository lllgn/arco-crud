## 组件使用

```
<template>
  <div>
    <vForm
      ref="formRef"
      :form="form"
      :option="option"
      :columns="columns"
      @change="handleChange"
      @input="handleInput"
    >
      <template #slot1>
        <h1 @click="handleC">我是具名插槽</h1>
        <h1>我是具名插槽</h1>
        <h1>我是具名插槽</h1>
      </template>
    </vForm>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs, reactive, ref } from 'vue';

  // 定义数据
  const datas = reactive({
    form: {
      input1: '',
      radioButton: '0',
    },
    // 表单配置
    option: {
      width: '100%',
    },
    // 表单项列表
    columns: [
      {
        type: 'input',
        prop: 'input1',
        label: '输入框',
        width: '600px',
        showWordLimit: true,
        placeholder: '请输入标题',
        rules: [
          {
            required: true,
            message: '请输入标题',
            trigger: 'blur',
          },
        ],
        maxLength: 10,
      },
      {
        type: 'radio',
        prop: 'radio1',
        label: '单选框',
        dicProps: {
          label: 'name',
          value: 'code',
        },
        dicData: [
          {
            name: '否',
            code: '0',
          },
          {
            name: '是',
            code: '1',
          },
        ],
        rules: [
          {
            required: true,
            message: '请选择',
            trigger: 'change',
          },
        ],
        direction: 'vertical',
      },
      {
        type: 'radio',
        radioType: 'button',
        prop: 'radioButton',
        label: '单选按钮',
        width: 'none',
        showWordLimit: true,
        dicData: [
          {
            label: '按钮1',
            value: '0',
          },
          {
            label: '按钮2',
            value: '0',
          },
          {
            label: '按钮3',
            value: '0',
          },
        ],
      },
      {
        type: 'slider',
        prop: 'slider1',
        label: '滑块',
        maxLength: 100,
      },
      {
        type: 'checkbox',
        prop: 'checkbox1',
        label: '多选框',
        value: ['0', '1'],
        dicData: [
          {
            label: '否',
            value: '0',
          },
          {
            label: '是',
            value: '1',
          },
        ],
      },
      {
        type: 'select',
        prop: 'select1',
        label: '选择器',
        value: ['1'],
        dicData: [
          {
            label: '选择1',
            value: '1',
          },
          {
            label: '选择2',
            value: '2',
          },

          {
            label: '选择3',
            value: '3',
          },
          {
            label: '选择4',
            value: '4',
          },
          {
            label: '选择5',
            value: '5',
          },
          {
            label: '选择6',
            value: '6',
          },
        ],
      },
      {
        type: 'cascader',
        prop: 'cascader',
        label: '级联选择',
        value: ['datunli'],
        dicData: [
          {
            value: 'beijing',
            label: 'Beijing',
            children: [
              {
                value: 'chaoyang',
                label: 'ChaoYang',
                children: [
                  {
                    value: 'datunli',
                    label: 'Datunli',
                  },
                ],
              },
              {
                value: 'haidian',
                label: 'Haidian',
              },
              {
                value: 'dongcheng',
                label: 'Dongcheng',
              },
              {
                value: 'xicheng',
                label: 'Xicheng',
                children: [
                  {
                    value: 'jinrongjie',
                    label: 'Jinrongjie',
                  },
                  {
                    value: 'tianqiao',
                    label: 'Tianqiao',
                  },
                ],
              },
            ],
          },
          {
            value: 'shanghai',
            label: 'Shanghai',
            children: [
              {
                value: 'huangpu',
                label: 'Huangpu',
              },
            ],
          },
          {
            type: 'input',
            prop: 'slot1',
            label: '插槽',
            slot: true,
          },
        ],
      },
    ],
  });
  // 抛出数据到渲染层
  const { form, option, columns } = toRefs(datas);

  // 获取表单Ref
  const formRef = ref(null);

  // 监听change事件
  const onChange = (val: any) => {
    if (val.prop === 'select1') {
      console.log('onChange', val);
    }
  };

  // 监听Input事件
  const onInput = (val: any) => {
    if (val.prop === 'input1') {
      console.log('onInput', val);
    }
  };

  /**
   * 调用内部方法修改Column数据  setColumnData(prop: string, key: string, value: any)
   * prop:属性值
   * key:参数名
   * value:参数值
   */
  const handleColumnData = () => {
    formRef.value.setColumnData('t1', 'disabled', true);
  };
</script>
```

## 属性值 Props

### option

```
// 表单的布局方式，包括水平、垂直、多列
layout?: string;
// 表单控件的尺寸
size?: string;
// 标签元素布局选项。参数同 <col> 组件一致
labelColProps?: boolean;
// 表单控件布局选项。参数同 <col> 组件一致
wrapperColProps?: boolean;
// 标签的对齐方向
labelAlign?: object;
// 是否禁用表单
disabled?: object;
// 是否开启自动标签宽度，仅在 layout="horizontal" 下生效。
autoLabelWidth?: string;
// 表单宽度
width?: string;
// 是否显示冒号
showColon?: boolean;
```

### columns

```
 // 默认值（非受控模式）
  value?: any;
  // 类型
  type: string;
  // 文本
  label: string;
  // 属性
  prop: string;
  // 是否禁用
  disabled?: string;
  // 是否禁用
  hidden?: boolean;
  // 字典属性
  dicProps?: idicProps;
  // 字典数据
  dicData?: string;
  // 动态字典链接
  dicUrl: string;
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
  width?: string;
  // 设置 flex 布局属性	number | string | 'initial' | 'auto' | 'none'
  flex?: string;
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
  mode?: string;
  // input-number 数字精度
  precision?: number;
  // input-number 数字变化步长
  step?: number;
  // input-number 定义输入框展示值
  formatter?: any;
  // radio-group 单选框组的方向
  direction?: string;
  // radio-group 单选框组的方向
  radioType?: string;
  // slider 设置显示的标签
  marks?: Array<iRecord>;
  // slider 是否显示刻度线
  showTicks?: Array<iRecord>;
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

  /**
   * picker 值的格式，对 value defaultValue pickerValue defaultPickerValue 以及事件中的返回值生效，
   * 支持设置为时间戳，Date 和字符串（参考字符串解析格式）。
   * 如果没有指定，将格式化为字符串，格式同 format。
   */
  valueFormat?: string;
  // picker不可选取的日期
  disabledDate?: any;
  // picker不可选取的时间
  disabledTime?: any;
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
```

### columns-dicProps

```
  //  文本
  label?: string;
  // 值
  value?: string;
```

### columns-record

```
 //  文本
 label?: string;
 // 值
 value?: number;
```

prop: item.prop,
val: datas.formData[item.prop],
index,
item,

## 事件 Event

| 事件   | 描述                 | 返回                                                                                    |
| ------ | -------------------- | --------------------------------------------------------------------------------------- |
| change | 数据更改时触发       | prop: string //属性值, val: string //参数值, index: number //下标 item:columns //表单项 |
| clear  | 用户输入时触发       | prop: string //属性值, val: string //参数值, index: number //下标 item:columns //表单项 |
| focus  | 输入框获取焦点时触发 | prop: string //属性值, val: string //参数值, index: number //下标 item:columns //表单项 |
| blur   | 输入框失去焦点时触发 | prop: string //属性值, val: string //参数值, index: number //下标 item:columns //表单项 |
| input  | 用户输入时触发       | prop: string //属性值, val: string //参数值, index: number //下标 item:columns //表单项 |

## 方法 Methods

| 事件          | 描述                         | 参数                                                             |
| ------------- | ---------------------------- | ---------------------------------------------------------------- |
| setColumnData | 调用内部方法修改 Column 数据 | prop: string //属性值, key: string //参数名, value: any //参数值 |
