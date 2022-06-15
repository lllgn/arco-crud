<!--
  - 选择表头
  - Author:lllgn
  - 2022-03-17 11:35:50
  -->
<template>
  <a-tree
    style="width: 100%; max-height: 600px; min-height: 500px"
    block-node
    checkable
    :data="columns"
    :field-names="fieldNames"
    v-model:checked-keys="allcheckedKeys"
    default-expand-all
    @check="handleCheck"
  />
</template>

<script lang="ts" setup>
import {
  defineProps,
  watch,
  ref,
  onMounted,
  defineEmits,
  defineExpose,
  withDefaults,
} from "vue";
import { iCrudColumnsOption } from "../../constant/crud_interface";

// 属性
const props = withDefaults(
  defineProps<{
    columns: Array<iCrudColumnsOption>;
  }>(),
  {
    columns: () => [],
  }
);

const fieldNames = ref({ key: "prop", title: "label" });
const tableHeaderColumns = ref([] as any[]);
const allcheckedKeys = ref([] as any[]);

// 声明事件
const emit = defineEmits(["update:columns"]);
// 选中
const handleCheck = (e: any) => {
  allcheckedKeys.value = e;
};
// 递归表单项
const recursionColumns = (
  type: string,
  resColumns: Array<string>,
  columns: Array<iCrudColumnsOption>
) => {
  columns.forEach((item) => {
    if (type === "key") {
      if (item.hide) {
        resColumns.push(item.prop);
      }
    } else {
      item.hide =
        allcheckedKeys.value.filter((citem: any) => citem === item.prop)
          .length > 0;
    }

    if (item.children) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      recursionColumns(type, resColumns, item.children);
    }
  });
  if (type === "key") {
    return resColumns;
  }
  return columns;
};

// 监听
watch(
  () => props.columns,
  (newVal: any) => {
    if (newVal) {
      allcheckedKeys.value = recursionColumns(
        "key",
        [],
        tableHeaderColumns.value
      );
    }
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);

// 挂载完成
onMounted(async () => {
  tableHeaderColumns.value = props.columns;
  allcheckedKeys.value = recursionColumns("key", [], tableHeaderColumns.value);
});
// 触发父组件值更新
const update = () => {
  tableHeaderColumns.value = recursionColumns(
    "columns",
    [],
    tableHeaderColumns.value
  );
  emit("update:columns", tableHeaderColumns.value);
};
// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({
  update,
});
</script>
