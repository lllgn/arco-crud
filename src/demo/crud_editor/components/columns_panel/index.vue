<!--
  - crud_editor_columns_panel
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div
    class="crud_editor_columns_panel"
    :class="{ columns_panel_hide: !columnsPanelShow }"
  >
    <a-resize-box
      class="resize"
      v-if="columnsPanelShow"
      :directions="['left']"
      :style="constant.style.resize"
    >
      <div class="menu">
        <div class="title">表单项</div>
        <svg-icon
          name="ic_zd_right"
          :style="constant.style.iconRight"
          @click="columnsPanelShow = false"
        ></svg-icon>
      </div>
      <!-- 树 -->
      <a-tree
        v-if="treeData.length > 0"
        class="tree"
        v-model:selected-keys="selectedKeys"
        :blockNode="true"
        :checkable="false"
        :data="treeData"
        :field-names="constant.fieldNames"
        size="large"
        draggable
        @select="onSelect"
        @drop="onDrop"
      >
        <template #extra="nodeData">
          <a-space>
            <!-- <svg-icon
              name="ic_add"
              :style="constant.style.iconTree"
              @click="() => clickMenu(nodeData, 'add')"
            ></svg-icon>
            <svg-icon
              name="ic_copy"
              :style="constant.style.iconTree"
              @click="() => clickMenu(nodeData, 'copy')"
            ></svg-icon> -->
            <svg-icon
              name="ic_del"
              :style="constant.style.iconTree"
              @click="() => clickMenu(nodeData, 'del')"
            ></svg-icon>
          </a-space>
        </template>
        <template #icon="nodeData">
          <svg-icon
            :name="nodeData.node.icon"
            :style="constant.style.iconTree"
          ></svg-icon>
        </template>
      </a-tree>
      <a-empty v-else class="empty" description="请先添加列表项" />
    </a-resize-box>
    <div
      v-if="!columnsPanelShow"
      class="menu_left"
      @click="columnsPanelShow = true"
    >
      <svg-icon name="ic_zd_left" :style="constant.style.iconLeft"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts" setup name="columns_panel">
import {
  onMounted,
  withDefaults,
  defineProps,
  reactive,
  computed,
  watch,
  ref,
  toRefs,
} from "vue";
import constant from "../../constant/columns_panel";
import { iColumnsOption } from "../../constant/interface";
import { Utils } from "../../utils/index";

// 声明事件
const emit = defineEmits(["update:columns", "update:selectColumn"]);

// 属性
const props = withDefaults(
  defineProps<{
    columns: Array<iColumnsOption>;
    selectColumn: iColumnsOption;
  }>(),
  {
    columns: () => [],
  }
);

let treeData = ref([] as any[]);
// 定义数据
const datas = reactive<{
  columnsPanelShow: boolean;
  selectedKeys: Array<string>;
}>({
  columnsPanelShow: true,
  selectedKeys: [],
});

// 监听
watch(
  () => props.columns,
  (newVal: any) => {
    treeData.value = props.columns;
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
watch(
  () => props.selectColumn,
  (newVal: any) => {
    if (props.selectColumn.key) datas.selectedKeys = [props.selectColumn.key];
  },
  {
    deep: true, // 深度监听
  }
);
// 递归循环
const recursionTableColumns = (
  columns: Array<iColumnsOption> = [],
  type: string,
  column: iColumnsOption
) => {
  // 删除
  if (columns.length > 0) {
    let mColumns = columns.filter((item) => item.prop !== column.prop);
    mColumns.forEach((item: any) => {
      if (item.children) {
        item.children = recursionTableColumns(item.children, type, column);
      }
    });
    console.log("mColumns111", mColumns);
    return mColumns;
  }
  return [];

  // let mColumns = JSON.parse(JSON.stringify(columns));
  // if (type === "del") {
  //   // 删除
  //   mColumns = columns.filter((item) => item.prop !== column.prop);
  //   mColumns.forEach((item: any) => {
  //     if (item.children) {
  //       item.children = recursionTableColumns(item.children, type, column);
  //     }
  //   });
  // } else if (type === "add") {
  //   // 添加
  //   mColumns.forEach((item: any) => {
  //     item.key = Utils.randomChars(8);
  //     if (item.children) {
  //       if (item.prop === column.prop) {
  //         item.children.push(newColumn(column));
  //       }
  //       item.children = recursionTableColumns(item.children, type, column);
  //     } else {
  //       if (item.prop === column.prop) {
  //         item.children = [newColumn(column)];
  //       }
  //     }
  //   });
  // } else if (type === "copy") {
  //   // 复制
  //   mColumns.forEach((item: any) => {
  //     item.key = Utils.randomChars(8);
  //     if (item.prop === column.prop) {
  //       mColumns.push(newColumn(column));
  //     }
  //     if (item.children) {
  //       item.children = recursionTableColumns(item.children, type, column);
  //     }
  //   });
  // }
};
// 新增对象
const newColumn = (column: iColumnsOption) => {
  const random = Utils.randomChars(4);
  const newColumnItem = JSON.parse(JSON.stringify(column));
  const label = column.label.split("_");
  newColumnItem.key = Utils.randomChars(8);
  newColumnItem.prop = column.type + "_" + random;
  if (label.length > 0) {
    newColumnItem.label = label[0] + "_" + random;
  } else {
    newColumnItem.label = column.label + "_" + random;
  }
  return newColumnItem;
};

// 菜单
const clickMenu = async (column: any, type: string) => {
  treeData.value = await recursionTableColumns(treeData.value, type, column);
  emit("update:columns", treeData.value);
};

// 选中
const onSelect = (selectedKeys: Array<string | number>, event: any) => {
  console.log("selectColumn", event.node);
  emit("update:selectColumn", JSON.parse(JSON.stringify(event.node)));
};

// 拖拽
const onDrop = ({ dragNode, dropNode, dropPosition }: any) => {
  const data = treeData.value;
  let dragItem: any = {};
  const loop = (data: any[], key: any, callback: Function) => {
    data.some((item, index, arr) => {
      if (item.key === key) {
        if (item.key == dragNode.key) {
          dragItem = item;
        }
        callback(item, index, arr);
        return true;
      }
      if (item.children) {
        return loop(item.children, key, callback);
      }
      return false;
    });
  };

  loop(data, dragNode.key, (_: any, index: any, arr: any[]) => {
    arr.splice(index, 1);
  });

  if (dropPosition === 0) {
    loop(data, dropNode.key, (item: { children: any[] }) => {
      item.children = item.children || [];
      item.children.push(dragItem);
    });
  } else {
    loop(data, dropNode.key, (_: any, index: number, arr: any[]) => {
      arr.splice(dropPosition < 0 ? index : index + 1, 0, dragItem);
    });
  }
  emit("update:columns", data);
};

// 抛出数据到渲染层
const { columnsPanelShow, selectedKeys } = toRefs(datas);
</script>

<style lang="less" scsoped>
@import "../../../../assets/style/edit.less";
</style>
