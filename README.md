<div align=center>

![image](https://wxstore-1255947013.cos.ap-guangzhou.myqcloud.com/project/arco-crud/logo.png)

</div>

<div align=center>

![image](https://wxstore-1255947013.cos.ap-guangzhou.myqcloud.com/project/arco-crud/mit.svg)

</div>



## 介绍

arco-crud 是基于现有的 arco-design 库进行的二次封装，从而简化一些繁琐的操作，核心理念为数据驱动视图,主要的组件库针对 table 表格和 form 表单场景，同时衍生出更多企业常用的组件，达到高复用，容易维护和扩展的框架，同时内置了丰富了数据展示组件，让开发变得更加容易.

### 浏览器兼容性

支持所有符合 ES5 标准的浏览器(不支持 IE8 及以下版本）.

## 安装

通过 npm 安装

```
# 安装
npm  i @lllgn/arco-crud -S

# 引入
import ArcoCrud from '@lllgn/arco-crud';
// 引入CRUD样式
import '@lllgn/arco-crud/dist/style.css';
Vue.use(ArcoCrud);
```
## arco.design

https://arco.design/vue/docs/start

## 预览Demo

https://lllgn.github.io/arco-crud/

## Example

```
<template>
  <div>
    <arco-crud
      :loading="loading"
      :option="option"
      :columns="columns"
      :table-data="tableData"
      @refresh="onRefresh"
      @row-update="onUpdate"
      @row-save="onSave"
      @row-del="onDel"
    >
      <template #roadSearch>
        <a-button type="primary">插槽1</a-button>
      </template>
    </arco-crud>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from "vue";

// 声明表单对象
const searchFormRef = ref(null);

const datas = reactive<{
  // 加载状态
  loading: boolean;
  // 加载状态
  option: any;
  // crud列表项
  columns: Array<any>;
  // 表格数据
  tableData: Array<any>;
}>({
  loading: false,
  option: {},
  columns: [
    {
      label: "姓名",
      prop: "name",
      fixed: "left",
      width: 140,
      type: "input",
      searchFormShow: true,
      formItemWidth: "500px",
      showWordLimit: true,
      placeholder: "请输入姓名",
      rules: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur",
        },
      ],
      maxLength: 10,
    },
    {
      label: "用户信息",
      children: [
        {
          label: "生日",
          prop: "birthday",
        },
        {
          label: "性别",
          prop: "sex",
          type: "radio",
          radioType: "button",
          width: 140,
          formItemWidth: "none",
          showWordLimit: true,
          dictData: [
            {
              label: "男",
              value: "1",
            },
            {
              label: "女",
              value: "0",
            },
            {
              label: "未知",
              value: "2",
            },
          ],
        },
        {
          label: "爱好",
          prop: "hobby",
          type: "select",
          width: 140,
          showWordLimit: true,
          dictData: [
            {
              label: "足球",
              value: "1",
            },
            {
              label: "舞蹈",
              value: "0",
            },
            {
              label: "音乐",
              value: "2",
            },
          ],
        },
        {
          label: "地址",
          children: [
            {
              label: "城市",
            },
            {
              label: "街道",
              prop: "road",
            },
            {
              label: "门牌",
              prop: "no",
            },
          ],
        },
        {
          label: "街道",
          prop: "road",
          type: "input",
          searchFormShow: true,
          searchSlot: true,
        },
      ],
    },
    {
      label: "信息",
      children: [
        {
          label: "电子邮箱",
          prop: "email",
        },
        {
          label: "电话",
          prop: "phone",
        },
      ],
    },
    {
      label: "薪资",
      type: "input",
      prop: "salary",
      width: 120,
      formItemWidth: "300px",
    },
  ],
  tableData: [
    {
      key: "1",
      name: "Jane Doe",
      salary: 2300,
      birthday: "1994-04-21",
      city: "London",
      road: "Park",
      hobby: "1",
      sex: "1",
      no: "34",
      phone: "12345678",
      email: "jane.doe@example.com",
    },
    {
      key: "2",
      name: "Alisa Ross",
      salary: 2500,
      birthday: "1994-05-21",
      city: "London",
      road: "Park",
      sex: "0",
      hobby: "0",
      no: "37",
      phone: "12345678",
      email: "alisa.ross@example.com",
    },
    {
      key: "3",
      name: "Kevin Sandra",
      salary: 2200,
      birthday: "1992-02-11",
      city: "Paris",
      road: "Arco",
      sex: "0",
      hobby: "0",
      no: "67",
      phone: "12345678",
      email: "kevin.sandra@example.com",
    },
    {
      key: "4",
      name: "Ed Hellen",
      salary: 1700,
      birthday: "1991-06-21",
      city: "London",
      road: "Park",
      no: "317",
      sex: "1",
      hobby: "1",
      phone: "12345678",
      email: "ed.hellen@example.com",
    },
    {
      key: "5",
      name: "William Smith",
      salary: 2700,
      birthday: "1996-08-21",
      city: "Paris",
      road: "Park",
      sex: "1",
      no: "114",
      phone: "12345678",
      email: "william.smith@example.com",
    },
  ],
});
// 抛出数据到渲染层
const { loading, option, columns, tableData } = toRefs(datas);

// 保存
const onSave = (done: any, row: any) => {
  setTimeout(() => {
    done();
  }, 2000);
};

// 删除
const onDel = (done: any, row: any) => {
  setTimeout(() => {
    done();
  }, 2000);
};
// 更新
const onUpdate = (done: any, row: any) => {
  setTimeout(() => {
    done();
  }, 2000);
};

// 刷新
const onRefresh = () => {};
</script>
```

## API

### Props

### CrudProp (CRUD属性)

| 参数名               | 描述           | 类型                         | 默认值 | 版本   |
| -------------------- | -------------- | ---------------------------- | ------ | ------ |
| option               | 配置           | CrudOption                   |        |        |
| columns              | 表格项         | Array`<CrudColumnsOption>` |        |        |
| tableData            | 表格数据       | Array`<any>`               |        |        |
| loading              | 加载状态       | boolean                      |        |        |
| formData             | 表单数据       | any                          |        |        |
| pagination           | 分页参数       | PaginationProps              |        | 0.0.41 |
| searchOption         | 搜索表单配置   | FormOptions                  |        | 0.0.52 |
| formOption           | 表单配置       | FormOptions                  |        | 0.0.52 |
| beforeAddModalOpen   | 打开新增表单前 | Function                     |        | 0.0.52 |
| beforeEditModalOpen  | 打开编辑表单前 | Function                     |        | 0.0.52 |
| beforeCloseModalOpen | 打开关闭表单前 | Function                     |        | 0.0.52 |

### CrudOption (CRUD配置)

| 参数名           | 描述                      | 类型                        | 默认值           | 版本 |
| ---------------- | ------------------------- | --------------------------- | ---------------- | ---- |
| addBtn           | 添加按钮                  | boolean                     | true             |      |
| addBtnText       | 添加按钮文本              | string                      | "新增"           |      |
| editBtn          | 编辑按钮                  | boolean                     | true             |      |
| editBtnText      | 编辑按钮文本              | string                      | "编辑"           |      |
| delBtn           | 删除按钮                  | boolean                     | true             |      |
| delBtnText       | 删除按钮文本              | string                      | "删除"           |      |
| headerBtn        | 选择表头按钮              | boolean                     | true             |      |
| refreshBtn       | 刷新按钮                  | boolean                     | true             |      |
| handleMenu       | 操作菜单                  | boolean                     | true             |      |
| handleMenuWidth  | 操作菜单宽度              | number                      | 200              |      |
| handleMenuAlign  | 操作菜单对齐              | string                      | "center"         |      |
| modalWidth       | 对话框宽度                | string                      | "50%"            |      |
| modalTop         | 对话框高度                | string                      | "20%"            |      |
| modalAddTitle    | 添加对话框标题            | string                      | "新增"           |      |
| modalEditTitle   | 编辑对话框标题            | string                      | "编辑"           |      |
| modalAlignCenter | 对话框是否居中显示        | boolean                     | false            |      |
| modalAddOkText   | 对话框确认按钮的内容-新增 | string                      | "确定新增"       |      |
| modalEditOkText  | 对话框确认按钮的内容-编辑 | string                      | "确定修改"       |      |
| modalCanceText   | 对话框取消按钮的内容      | string                      | "取消"           |      |
| delModalText     | 删除对话框内容            | string                      | "是否删除选中项" |      |
| defaultSort      | 默认排序                  | number                      | 99               |      |
| defaultAlign     | 默认排列                  | "left" , "center" , "right" | "center"         |      |
| defaultWidth     | 默认宽度                  | number                      | "150"            |      |

### CrudColumnsOption extends FormColumns （CRUD项配置继承自FormColumns）

| 参数名         | 描述                                        | 类型                         | 默认值 | 版本 |
| -------------- | ------------------------------------------- | ---------------------------- | ------ | ---- |
| searchFormShow | 显示在搜索表单中                            | boolean                      | -      |      |
| searchSlot     | 搜索插槽                                    | boolean                      | -      |      |
| searchSort     | 搜索栏排序                                  | number                       | -      |      |
| formSlot       | crud表单插槽                                | boolean                      | -      |      |
| formSort       | 表单排序                                    | number                       | -      |      |
| addFormHide    | 添加表单隐藏                                | boolean                      | -      |      |
| addDisabled    | 添加表单不可用                              | boolean                      | -      |      |
| editFormHide   | 编辑表单隐藏                                | boolean                      | -      |      |
| editDisabled   | 编辑表单不可用                              | boolean                      | -      |      |
| children       | 子集                                        | Array`<CrudColumnsOption>` | -      |      |
| slotName       | 设置当前列的渲染插槽的名字。插槽参数同#cell | Array`<CrudColumnsOption>` | -      |      |
| titleSlotName  | 设置当前列的标题的渲染插槽的名字            | string                       | -      |      |
| fixed          | 固定位置                                    | 'left' , 'right'             | -      |      |
| align          | 对齐方向                                    | 'left' , 'center' , 'right'  | -      |      |
| width          | 表格列宽                                    | number                       | -      |      |

### FormColumns (表单项配置)

| 参数名            | 描述                                                        | 类型                                         | 默认值 | 版本 |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------- | ------ | ---- |
| value             | 默认值（非受控模式）                                        | any                                          | -      |      |
| type              | 类型                                                        | string                                       | -      |      |
| label             | 文本                                                        | string                                       | -      |      |
| prop              | 字段名                                                      | string                                       | -      |      |
| slot              | 插槽                                                        | boolean                                      | -      |      |
| sort              | 排序                                                        | number                                       | -      |      |
| disabled          | 是否禁用                                                    | boolean                                      | -      |      |
| hide              | 是否隐藏                                                    | boolean                                      | -      |      |
| dictProps         | 字典属性                                                    | DictProps                                    | -      |      |
| dictData          | 字典数据                                                    | Array`<any>`                               | -      |      |
| help              | 帮助文案                                                    | string                                       | -      |      |
| extra             | 额外显示的文案                                              | string                                       | -      |      |
| required          | 是否必须填写                                                | boolean                                      | -      |      |
| rules             | 表单项校验规则                                              | Array`<any>`                               | -      |      |
| hideLabel         | 是否隐藏标签                                                | boolean                                      | -      |      |
| hideAsterisk      | 是否隐藏星号                                                | boolean                                      | -      |      |
| formItemWidth     | 项宽度                                                      | number ,string                               | -      |      |
| flex              | 布局属性                                                    | number , string , "initial" , "auto", "none" | -      | span |
| maxLength         | 最大长度                                                    | number                                       | -      |      |
| minLength         | 最小长度                                                    | number                                       | -      |      |
| showWordLimit     | input-是否显示字数统计                                      | boolean                                      | -      |      |
| placeholder       | 提示文字                                                    | string                                       | -      |      |
| mode              | input-number模式（embed：按钮内嵌模式，button：左右按钮模式 | "embed","button"                             | -      |      |
| precision         | input-number 数字精度                                       | number                                       | -      |      |
| step              | input-number 数字变化步长                                   | number                                       | -      |      |
| formatter         | input-number 定义输入框展示值                               | any                                          | -      |      |
| direction         | radio-group 单选框组的方向                                  | "horizontal","vertical"                      | -      |      |
| radioType         | radio-group 单选框组的类型                                  | "radio" , "button"                           | -      |      |
| marks             | slider设置显示的标签                                        | Array`<Record>`                            | -      |      |
| showTicks         | slider是否显示刻度线                                        | boolean                                      | -      |      |
| showInput         | slider是否显示输入框                                        | boolean                                      | -      |      |
| range             | slider是否开启范围选择                                      | boolean                                      | -      |      |
| multiple          | select是否开启多选模式                                      | boolean                                      | -      |      |
| cascader          | cascader是否开启严格选择模式                                | boolean                                      | 0.0.47 |      |
| defaultInputValue | 输入框的默认值（非受控模式                                  | string                                       | -      |      |
| valueFormat       | picker 值的格式                                             | string                                       | -      |      |
| disabledDate      | picker不可选取的日期                                        | any                                          | -      |      |
| disabledTime      | picker不可选取的时间                                        | any                                          | -      |      |
| showTime          | picker是否增加时间选择                                      | boolean                                      | -      |      |
| format            | picker 格式                                                 | string                                       | -      |      |
| disabledHours     | time 禁用的部分小时选项                                     | any                                          | -      |      |
| disabledMinutes   | time 禁用的部分秒数选项                                     | any                                          | -      |      |
| disabledMinutes   | time 禁用的部分秒数选项                                     | any                                          | -      |      |
| use12Hours        | time 12 小时制                                              | boolean                                      | -      |      |

### FormOptions (表单配置)

| 参数名           | 描述                                                  | 类型                                  | 默认值 | 版本 |
| ---------------- | ----------------------------------------------------- | ------------------------------------- | ------ | ---- |
| layout           | 表单的布局方式，包括水平、垂直、多列                  | "horizontal" , "vertical" , "inline"  | -      |      |
| size             | 表单控件的尺寸                                        | "mini" , "small" , "medium" , "large" | -      |      |
| labelColProps    | 标签元素布局选项。参数同'col'组件一致                 | object                                | -      |      |
| wrapperColProps  | 表单控件布局选项。参数同'col'组件一致                 | object                                | -      |      |
| labelAlign       | 标签的对齐方向                                        | "left" , "right"                      | -      |      |
| disabled         | 是否禁用表单                                          | boolean                               | -      |      |
| autoLabelWidth   | 是否开启自动标签宽度，仅在 layout="horizontal" 下生效 | boolean                               | -      |      |
| width            | 表单宽度                                              | string                                | -      |      |
| showColon        | 是否显示冒号                                          | boolean                               | -      |      |
| padding          | 间距                                                  | string                                | -      |      |
| showButton       | 显示按钮                                              | boolean                               | -      |      |
| submitButtonText | 提交按钮文本                                          | string                                | -      |      |
| resetButtonText  | 重置按钮文本                                          | string                                | -      |      |
| itemWidth        | 默认项宽                                              | string                                | -      |      |

### DictProps  (字典属性)

| 参数名 | 描述 | 类型   | 默认值 | 版本 |
| ------ | ---- | ------ | ------ | ---- |
| label  | 文本 | string | -      |      |
| value  | 值   | string | -      |      |

### Record  (Record属性)

| 参数名 | 描述 | 类型   | 默认值 | 版本 |
| ------ | ---- | ------ | ------ | ---- |
| label  | 文本 | string | -      |      |
| value  | 值   | number | -      |      |

## Event(事件)

### Crud Event

| 事件名             | 描述                           | 参数                                       | 版本   |
| ------------------ | ------------------------------ | ------------------------------------------ | ------ |
| refresh            | 点击刷新按钮时触发             | -                                          | -      |
| search             | 点击搜按钮时触发               | searchForm:any                             | -      |
| rowUpdate          | 修改时触发                     | done,form                                  | -      |
| rowSave            | 修改时触发                     | done,form                                  | -      |
| rowDel             | 修改时触发                     | done,form                                  | -      |
| expand             | 点击展开行时触发               | rowKey: string                             | 0.0.41 |
| expanded-change    | 已展开的数据行发生改变时触发   | rowKeys: string[]                          | 0.0.41 |
| select             | 点击行选择器时触发             | rowKeys: string[],rowKey: string           | 0.0.41 |
| select-all         | 点击全选选择器时触发           | checked: boolean                           | 0.0.41 |
| selection-change   | 已选择的数据行发生改变时触发   | rowKeys: string[]                          | 0.0.41 |
| sorter-change      | 排序规则发生改变时触发         | dataIndex: string,direction: string        | 0.0.41 |
| filter-change      | 过滤选项发生改变时触发         | dataIndex: string,filteredValues: string[] | 0.0.41 |
| page-change        | 表格分页发生改变时触发         | page: number                               | 0.0.41 |
| page-size-change   | 表格每页数据数量发生改变时触发 | pageSize: number                           | 0.0.41 |
| change             | 表格数据发生变化时触发         | data: TableData[],extra: TableChangeExtra  | 0.0.41 |
| cell-click         | 点击单元格时触发               | record: TableData,column: TableColumnData  | 0.0.41 |
| row-click          | 点击行数据时触发               | record: TableData                          | 0.0.41 |
| header-click       | 点击表头数据时触发             | column: TableColumnData                    | 0.0.41 |
| form-column-input  | 表单项input值改变时触发        | prop:string,val: any,index:number,item:any | 0.0.43 |
| form-column-focus  | 表单项获得焦点时触发           | prop:string,val: any,index:number,item:any | 0.0.43 |
| form-column-blur   | 表单项失去焦点时触发           | prop:string,val: any,index:number,item:any | 0.0.43 |
| form-column-change | 表单项值改变                   | prop:string,val: any,index:number,item:any | 0.0.43 |

## Slots(插槽)

### Crud Slots

| 插槽名           | 描述                             | 参数                              | 版本 |
| ---------------- | -------------------------------- | --------------------------------- | ---- |
| [prop]Search     | 搜索栏插槽 插槽名：prop+'Search' | scope:{column}                    | -    |
| menuLeftStart    | 菜单左侧前插槽                   | -                                 | -    |
| menuLeftEnd      | 菜单左侧后插槽                   | -                                 | -    |
| menuRightStart   | 菜单右侧前插槽                   | -                                 | -    |
| menuRightEnd     | 菜单右侧后插槽                   | -                                 | -    |
| handleMenu       | 操作栏后插槽                     | scope:{ record }                  | -    |
| handleMenuMiddle | 操作栏中间插槽                   | scope:{ record }                  | -    |
| handleMenuBefore | 操作栏前插槽                     | scope:{ record }                  | -    |
| prop             | 表格Cell插槽 插槽名同prop        | scope:{ record, column, rowIndex} | -    |

## License

Ths project is MIT licensed.
