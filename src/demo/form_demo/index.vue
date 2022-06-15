<!--
  - form-demo
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div>
    <arco-form
      ref="formRef"
      v-model:form="form"
      model="normal"
      :columns="columns"
      :option="option"
      @formColumnInput="onEvent"
    ></arco-form>
    <a-button type="primary" @click="onNext">下一步</a-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from "vue";

// 获取表单Ref
// eslint-disable-next-line @typescript-eslint/ban-types
const formRef = ref<{ validate: Function }>({
  validate: () => null,
});
// 声明表单对象
const searchFormRef = ref(null);

const datas = reactive<{
  form: any;
  // 加载状态
  option: any;
  // 表单列表项
  columns: Array<any>;
}>({
  form: {},
  option: {
    width: "500px",
    // 间距
    padding: "4px",
    // 显示搜索
    showButton: false,
  },
  columns: [
    {
      label: "组织",
      prop: "gz",
      type: "cascader",
      dictData: [],
      placeholder: "请输选择2号人事部组织",
      rules: [
        {
          required: true,
          message: "请输选择2号人事部组织",
        },
      ],
      validateTrigger: ["blur", "change"],
    },
    {
      label: "门店名称",
      prop: "name",
      type: "input",
      placeholder: "请输入类型名称",
      rules: [
        {
          required: true,
          message: "请输入类型名称",
        },
      ],
      validateTrigger: ["blur"],
    },
    {
      label: "开业时间",
      prop: "opentime",
      type: "date",
      placeholder: "请选择开业时间",
      rules: [
        {
          required: true,
          message: "请选择开业时间",
        },
      ],
      validateTrigger: ["blur", "change"],
    },
    {
      label: "生效时间",
      prop: "opentime",
      type: "date",
      placeholder: "请选择生效时间",
      rules: [
        {
          required: true,
          message: "请选择生效时间",
        },
      ],
      validateTrigger: ["blur", "change"],
    },
    {
      label: "门店类型",
      prop: "type",
      type: "radio",
      radioType: "button",
      required: true,
      dictData: [
        {
          label: "A",
          value: "1",
        },
        {
          label: "B",
          value: "0",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择门店类型",
        },
      ],
      validateTrigger: ["blur", "change"],
    },
    {
      label: "状态",
      prop: "status",
      type: "radio",
      align: "center",
      radioType: "button",
      formItemWidth: "none",
      dictData: [
        {
          label: "上架",
          value: "1",
        },
        {
          label: "下架",
          value: "0",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择门店类型",
        },
      ],
      validateTrigger: ["blur", "change"],
      value: "1",
    },
  ],
});
// 抛出数据到渲染层
const { form, option, columns } = toRefs(datas);

// 下一步
const onNext = () => {
  console.log("formRef", formRef);
  // 校验表单
  formRef.value.validate().then((res: any) => {
    console.log("res", res);
  });
};

const onEvent = (val: any) => {
  console.log("valvalvalval", val);
};
</script>

<style lang="less" scsoped></style>
