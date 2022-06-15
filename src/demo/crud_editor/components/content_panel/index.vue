<!--
  - crud_editor_content_panel
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div class="crud_editor_content_panel">
    <div class="tabs">
      <a-radio-group v-model="panelType" type="button">
        <a-radio value="form">表单</a-radio>
        <a-radio value="crud">CRUD</a-radio>
        <a-radio value="json">JSON</a-radio>
      </a-radio-group>
    </div>
    <!-- 内容区 -->
    <div class="content_panel_container">
      <!-- 表单 -->
      <div class="form" v-show="panelType == 'form'">
        <arco-form
          v-if="formColumns.length > 0"
          ref="formRef"
          v-model:form="form"
          model="normal"
          :columns="formColumns"
          :option="formOption"
        />
        <a-empty v-else class="empty" description="请先添加表单项" />
      </div>
      <!-- crud -->
      <div class="crud" v-show="panelType == 'crud'">
        <arco-crud
          v-if="crudColumns.length > 0"
          :loading="loading"
          :option="crudOption"
          :columns="crudColumns"
          :table-data="tableData"
          @refresh="onRefresh"
          @row-update="onUpdate"
          @row-save="onSave"
          @row-del="onDel"
        />
        <a-empty v-else class="empty" description="请先添加列表项" />
      </div>
      <div class="json_viewer" v-show="panelType == 'json'">
        <a-radio-group v-model="jsonType" type="button">
          <a-radio value="form">表单JSON数据</a-radio>
          <a-radio value="crud">表格JSON数据</a-radio>
        </a-radio-group>
        <json-viewer
          class="viewer"
          :value="jsonType == 'form' ? formColumns : crudColumns"
          :expand-depth="5"
          copyable
          boxed
          sort
        ></json-viewer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="content_panel">
import { computed, reactive, defineExpose, toRefs, watch } from "vue";
import CreateCrudDatas from "../../hooks/crud";
import { saveAs } from "file-saver";
import {
  iColumnsOption,
  iEditFormOption,
  iEditCrudOption,
} from "../../constant/interface";

// 初始化crud数据
const { loading, onSave, onDel, onRefresh, onUpdate } = CreateCrudDatas();

// 属性
const props = withDefaults(
  defineProps<{
    // 表格配置
    crudOption: iEditCrudOption;
    // 表格配置
    formOption: iEditFormOption;
    // 表格项
    columns: Array<iColumnsOption>;
  }>(),
  {
    columns: () => [],
  }
);

// 定义数据
const datas = reactive<{
  // 面板显示类型
  panelType: string;
  // json数据类型
  jsonType: string;
  // 表单form
  form: iEditFormOption;
  //
  tableDataNum: number;
  // 表格数据
  tableData: Array<any>;
}>({
  panelType: "crud",
  jsonType: "form",
  tableData: [],
  tableDataNum: 2,
  form: {},
});

// crud项
const crudColumns = computed<Array<iColumnsOption>>(() => {
  const popColumns = JSON.parse(JSON.stringify(props.columns));
  const { tableData, columns } = recursionCrudColumns({}, popColumns);
  setTableData(tableData);
  return columns;
});

// 表单项
const formColumns = computed<Array<iColumnsOption>>(() => {
  const popColumns = JSON.parse(JSON.stringify(props.columns));
  return recursionFormColumns([], popColumns);
});

// 生成模拟数据
const setTableData = (data: any) => {
  datas.tableData = [];
  let num: number = 0;
  while (num < datas.tableDataNum) {
    datas.tableData.push(JSON.parse(JSON.stringify(data)));
    num++;
  }
};

// 递归crud项
const recursionCrudColumns = (
  tableData: any,
  columns: Array<iColumnsOption>
) => {
  columns.forEach((item, index) => {
    delete item.eidtOption;
    tableData[item.prop] = item.label + "模拟数据";
    if (item.children) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      recursionCrudColumns(tableData, item.children);
    }
  });

  return { tableData, columns };
};

// 递归表单项
const recursionFormColumns = (
  resColumns: Array<iColumnsOption>,
  columns: Array<iColumnsOption>
) => {
  columns.forEach((item, index) => {
    if (item.type && item.type !== "table") {
      resColumns.push(item);
    }
    if (item.children) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      recursionFormColumns(resColumns, item.children);
    }
  });
  return resColumns || [];
};
// 生成json文件
const createJsonFiles = (type: string) => {
  let data = "";
  if (type === "form") {
    data = JSON.stringify(crudColumns.value);
  } else if (type === "crud") {
    data = JSON.stringify(formColumns.value);
  }
  let str = new Blob([data], { type: "text/plain;charset=utf-8" });
  // 注意这里要手动写上文件的后缀名
  saveAs(str, "arco_crud_" + type + `.json`);
};

watch(
  () => props.formOption,
  (newVal: any) => {
    console.log(" props.formOption--333", props.formOption);
  },
  {
    deep: true, // 深度监听
    immediate: true, // 立即执行
  }
);

// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({
  createJsonFiles,
});
const { panelType, jsonType, tableData, tableDataNum, form } = toRefs(datas);
</script>

<style lang="less" scsoped>
@import "../../../../assets/style/edit.less";
</style>
