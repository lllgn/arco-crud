<!--
  - crud_editor_toolbar_header
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <a-page-header
    style="width: 100%"
    title="ArcoCrudEditor"
    subtitle="数据编辑器v1.0"
    :show-back="false"
  >
    <template #subtitle>
      <span>数据编辑器v1.0</span>
      <svg-icon
        name="ic_beta"
        :style="{
          width: '40px',
          height: '30px',
        }"
      ></svg-icon>
      <a-space class="icon-row">
        <a-link href="https://github.com/lllgn/arco-crud" :hoverable="false">
          <svg-icon name="github" class="icon"></svg-icon
        ></a-link>
        <a-link href="https://gitee.com/lllgn/arco-crud" :hoverable="false">
          <svg-icon name="gitee" class="icon"></svg-icon>
        </a-link>
        <a-link
          href="https://www.npmjs.com/package/@lllgn/arco-crud"
          :hoverable="false"
        >
          <svg-icon name="npm" class="icon"></svg-icon>
        </a-link>
      </a-space>
    </template>
    <template #extra>
      <a-space>
        <a-button type="text" @click="toDemo('crud_demo')">表格示例</a-button>
        <a-button type="text" @click="toDemo('form_demo')">表单示例</a-button>
      </a-space>
      <a-space class="icon-row">
        <a-button @click="handelFiles('form')">导出表单数据</a-button>
        <a-button @click="handelFiles('crud')">导出表格数据</a-button>
      </a-space>
    </template>
  </a-page-header>
</template>

<script lang="ts" setup name="toolbar">
import { defineEmits } from "vue";
import { useRouter } from "vue-router";
// 路由
const router = useRouter();

// 声明事件
const emit = defineEmits(["click"]);

// 生成json文件
const handelFiles = (type: string) => {
  emit("click", type);
};
// 跳转至demo
const toDemo = (type: string) => {
  router.push({
    name: type,
  });
};
</script>

<style lang="less" scsoped>
.icon-row {
  margin-left: 50px;

  .icon {
    width: 22px;
    height: 22px;
    margin-left: 20px;

  }
}
</style>
