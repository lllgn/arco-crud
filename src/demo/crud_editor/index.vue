<!--
  - crud_editor
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div class="editor_container">
    <!-- 头部 -->
    <div class="editor_header">
      <editor-header @click="createJsonFiles" />
    </div>
    <div class="editor_panel">
      <!-- 工具栏 -->
      <tool-bar @click="handleAddColumn" />
      <!-- 面板 -->
      <content-panel
        ref="contentPanelRef"
        :columns="columns"
        :crudOption="crudOption"
        :formOption="formOption"
      />
      <!-- 项面板 -->
      <columns-panel
        v-model:columns="columns"
        v-model:selectColumn="selectColumn"
      />
      <!-- 属性面板 -->
      <props-panel
        :selectColumn="selectColumn"
        :crudOption="crudOption"
        :formOption="formOption"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, toRefs } from "vue";
import EditorHeader from "./components/header/index.vue";
import ToolBar from "./components/toolbar/index.vue";
import ColumnsPanel from "./components/columns_panel/index.vue";
import PropsPanel from "./components/props_panel/index.vue";
import ContentPanel from "./components/content_panel/index.vue";
import {
  iColumnsOption,
  iEditFormOption,
  iEditCrudOption,
} from "./constant/interface";
import { Utils } from "./utils/index";

// 获取内容面板Ref
const contentPanelRef = ref<{ createJsonFiles: Function }>({
  createJsonFiles: () => null,
});

// 定义数据
const datas = reactive<{
  // 显示项面板
  columnsPanelShow: boolean;
  // 项列表
  columns: Array<iColumnsOption>;
  // 当前选中项
  selectColumn: iColumnsOption;
  // crud配置
  crudOption: iEditCrudOption;
  // 表格配置
  formOption: iEditFormOption;
}>({
  columnsPanelShow: true,
  columns: [],
  selectColumn: { label: "", prop: "" },
  crudOption: {},
  formOption: {},
});

// 添加项
const handleAddColumn = (item: any) => {
  const random = Utils.randomChars(4);
  const columnItem = JSON.parse(JSON.stringify(item));
  let column = JSON.parse(JSON.stringify(columnItem));
  column.key = Utils.randomChars(8);
  column.prop = item.type + "_" + random;
  column.label = item.label + "_" + random;
  datas.selectColumn = column;
  datas.columns.push(column);
  console.log(datas.columns);
};

// 生成json文件
const createJsonFiles = (type: string) => {
  contentPanelRef.value.createJsonFiles(type);
};

// 抛出数据到渲染层
const { columns, columnsPanelShow, selectColumn, formOption, crudOption } =
  toRefs(datas);
</script>

<style lang="less" scsoped>
@import "../../assets/style/edit.less";
</style>
