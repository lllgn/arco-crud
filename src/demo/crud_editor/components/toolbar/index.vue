<!--
  - crud_editor_toolbar
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div class="crud_editor_toolbar">
    <a-grid class="grid" :cols="3" :colGap="12" :rowGap="16">
      <a-grid-item v-for="item in constant.barList" :key="item.type">
        <div v-if="!item.children" class="item" @click="onClick(item)">
          <svg-icon
            :name="item.type"
            :style="{
              width: '30px',
              height: '30px',
            }"
          ></svg-icon>
          <p>{{ item.label }}</p>
        </div>
        <a-popover v-else position="bottom">
          <div class="item">
            <svg-icon
              :name="item.type"
              :style="{
                width: '30px',
                height: '30px',
              }"
            ></svg-icon>
            <p>{{ item.label }}</p>
          </div>
          <template #content>
            <a-space>
              <a-button
                v-for="citem in item.children"
                :key="citem.type"
                @click="onClick(citem)"
                >{{ citem.label }}</a-button
              >
            </a-space>
          </template>
        </a-popover>
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script lang="ts" setup name="toolbar">
import { defineEmits } from "vue";
import constant from "../../constant/toolbar";

// 声明事件
const emit = defineEmits(["click"]);

// 点击事件
const onClick = (item: any) => {
  emit("click", item);
};
</script>

<style lang="less" scsoped>
@import "../../../../assets/style/edit.less";
</style>
