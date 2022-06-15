<!--
  - crud_editor_props_panel
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div class="crud_editor_props_panel">
    <div class="menu">
      <a-radio-group v-model="panelType" type="button">
        <a-radio value="columns">项配置</a-radio>
        <a-radio value="form">表单配置</a-radio>
        <a-radio value="crud">表格配置</a-radio>
      </a-radio-group>
    </div>

    <!-- 项配置 -->
    <div class="editor_form" v-show="panelType == 'columns'">
      <arco-form
        v-if="selectFormColumns.length > 0"
        ref="columnFormRef"
        v-model:form="column"
        model="normal"
        :columns="selectFormColumns"
        :option="constant.columnDefultOption"
      />
      <a-empty v-else class="empty" description="请先添加项" />
    </div>
    <!-- 表单配置 -->
    <div class="editor_form" v-show="panelType == 'form'">
      <arco-form
        ref="formRef"
        v-model:form="form"
        model="normal"
        :columns="formOptionsColumns.columns"
        :option="constant.columnDefultOption"
      />
    </div>
    <!-- 表格配置 -->
    <div class="editor_form" v-show="panelType == 'crud'">
      <arco-form
        ref="crudFormRef"
        v-model:form="crud"
        model="normal"
        :columns="crudOptionsColumns.columns"
        :option="constant.columnDefultOption"
      />
    </div>
  </div>
</template>

<script lang="ts" setup name="toolbar">
import { onMounted, watch, reactive, ref, toRefs, computed } from "vue";
import {
  iColumnsOption,
  iEditFormOption,
  iEditCrudOption,
} from "../../constant/interface";
import formOptionsColumns from "../../constant/form_options";
import crudOptionsColumns from "../../constant/crud_options";
import formColumns from "../../constant/form_columns_options";
import constant from "../../constant/props_panel";

// 获取表单Ref
const columnFormRef = ref<{ setForm: Function; validate: Function }>({
  setForm: () => null,
  validate: () => null,
});
// 获取表单Ref
const formRef = ref<{ setForm: Function; validate: Function }>({
  setForm: () => null,
  validate: () => null,
});

// 获取表单Ref
const crudFormRef = ref<{ setForm: Function; validate: Function }>({
  setForm: () => null,
  validate: () => null,
});
// 声明事件
const emit = defineEmits([
  "update:selectColumn",
  "update:crudOption",
  "update:formOption",
]);

// 属性
const props = withDefaults(
  defineProps<{
    // 当前选中项
    selectColumn: iColumnsOption;
    // 表单配置
    crudOption: iEditCrudOption;
    // 表格配置
    formOption: iEditFormOption;
  }>(),
  {}
);

// 定义数据
const datas = reactive<{
  // 面板显示类型
  panelType: string;
  // 项配置
  column: iColumnsOption;
  // 表单配置
  form: iEditFormOption;
  // 表格配置
  crud: iEditCrudOption;
}>({
  panelType: "columns",
  column: {
    label: "",
    prop: "",
  },
  form: {},
  crud: {},
});

watch(
  () => props.selectColumn,
  (newVal: any) => {
    datas.column = props.selectColumn;
    columnFormRef.value.setForm(datas.column);
  },
  {
    deep: true, // 深度监听
    immediate: true, // 立即执行
  }
);

watch(
  () => props.formOption,
  (newVal: any) => {
    datas.form = props.formOption;
    formRef.value.setForm(datas.form);
  },
  {
    deep: true, // 深度监听
    immediate: true, // 立即执行
  }
);
watch(
  () => props.crudOption,
  (newVal: any) => {
    datas.crud = props.crudOption;
    crudFormRef.value.setForm(datas.crud);
  },
  {
    deep: true, // 深度监听
    immediate: true, // 立即执行
  }
);

// 表单项
const selectFormColumns = computed(() => {
  const resColumns: any[] = [];
  props.selectColumn.eidtOption?.forEach((column, index) => {
    const mColumns = formColumns.columns.filter((item) => item.prop === column);
    if (mColumns.length > 0) resColumns.push(mColumns[0]);
  });
  return resColumns;
});

const { panelType, column, form, crud } = toRefs(datas);
</script>

<style lang="less" scsoped>
@import "../../../../assets/style/edit.less";
</style>
