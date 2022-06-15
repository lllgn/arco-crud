<!--
  - 通用CRUD封装
  - Author:lllgn
  - 2022-03-17 11:35:50
  -->
<template>
  <div>
    <div
      style="
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-flow: column;
      "
    >
      <!-- 搜索栏 -->
      <div v-if="searchColumns.length > 0">
        <arcoForm
          ref="searchFormRef"
          v-model:form="searchForm"
          model="crudSearch"
          :columns="searchColumns"
          :option="searchOption"
          @submit="onSearch"
        >
          <template #crud="{ scope }">
            <slot
              :name="scope.item.prop + 'Search'"
              :scope="{ column: scope.item }"
            >
            </slot>
          </template>
        </arcoForm>
        <!-- 分割线 -->
        <a-divider style="margin-top: 60px" />
      </div>
      <!-- 头部菜单 -->
      <a-row justify="space-between">
        <a-space>
          <!-- 菜单左侧前插槽 -->
          <slot name="menuLeftStart"></slot>
          <!-- 新增按钮 -->
          <a-button
            v-if="crudOptions.addBtn"
            type="primary"
            :size="crudOptions.size"
            long
            @click="handleAddModelOpen"
          >
            {{ crudOptions.addBtnText }}
          </a-button>
          <!-- 菜单左侧后插槽 -->
          <slot name="menuLeftEnd"></slot>
        </a-space>

        <a-space>
          <!-- 菜单右侧前插槽 -->
          <slot name="menuRightStart"></slot>
          <!-- 下载 -->
          <a-button
            v-if="crudOptions.refreshBtn"
            type="dashed"
            :size="crudOptions.size"
            @click="handleRefresh"
          >
            <template #icon>
              <icon-refresh />
            </template>
            <span>刷新</span>
          </a-button>
          <!-- 选择表头-复杂表头模式不显示-->
          <a-button
            v-if="crudOptions.headerBtn"
            type="dashed"
            :size="crudOptions.size"
            @click="showHeaderSelector = true"
            >隐藏表头
          </a-button>
          <!-- 下载 -->
          <!-- <a-button v-if="crudOptions.downloadBtn" type="dashed">
              <template #icon>
                <icon-to-bottom />
              </template>
              <span>下载</span>
            </a-button> -->
          <!-- 菜单右侧后插槽 -->
          <slot name="menuRightEnd"></slot>
        </a-space>
      </a-row>
      <!-- 表格 -->
      <a-table
        :loading="loading"
        style="width: 100%; margin-top: 20px"
        :data="tableData"
        :scroll="scrollPercent"
        :columns="tableColumns"
        :column-resizable="true"
        :table-layout-fixed="true"
        :pagination="tablePagination"
        :bordered="{
          cell: true,
        }"
        @change="onTableChange"
        @page-change="onTablePageChange"
        @page-size-change="onTablePageSizeChange"
        @cell-click="onTableCellClick"
        @row-click="onTableRowClick"
        @header-click="onTableHeaderClick"
        @selection-change="onTableSelectionChange"
        @select-all="onTableSelectAll"
        @select="onTableSelect"
        @expanded-change="onTableExpandedChange"
        @expand="onTableExpand"
        @filter-change="onTableFilterChange"
        @sorter-change="onTableSorterChange"
      >
        <!-- 表格插槽 -->
        <template #crudSlot="{ record, column, rowIndex }">
          <slot :name="column.prop" :scope="{ record, column, rowIndex }" />
        </template>

        <!-- 通用字典项解析-->
        <template #crudDict="{ record, column }">
          <span>{{ formatDictData(record, column) }}</span>
        </template>
        <!-- 级联选择解析-->
        <template #crudCascader="{ record, column }">
          <span>{{ formatDictData(record, column) }}</span>
        </template>

        <!-- 操作栏 -->
        <template #crudHandleMenu="{ record }">
          <a-space
            :style="{ width: record.width + 'px' }"
            :wrap="true"
            align="center"
          >
            <!-- 操作栏前插槽 -->
            <slot name="handleMenuBefore" :scope="{ record }"> </slot>
            <a-button
              type="text"
              v-if="crudOptions.editBtn"
              @click="handleEditModelOpen(record)"
            >
              <template #icon>
                <icon-edit />
              </template>
              {{ crudOptions.editBtnText }}</a-button
            >
            <!-- 操作栏后插槽 -->
            <slot name="handleMenuMiddle" :scope="{ record }"> </slot>
            <a-button
              type="text"
              v-if="crudOptions.delBtn"
              @click="handleDelModelOpen(record)"
            >
              <template #icon>
                <icon-delete />
              </template>
              {{ crudOptions.delBtnText }}</a-button
            >
            <!-- 操作栏后插槽 -->
            <slot name="handleMenu" :scope="{ record }"> </slot>
          </a-space>
        </template>
      </a-table>
    </div>
    <!-- 选择表头 -->
    <a-modal
      title="选择表头"
      title-align="start"
      v-model:visible="showHeaderSelector"
      @ok="handleTableHeaderColumns"
      @cancel="showHeaderSelector = false"
    >
      <tableHeaderSelector
        ref="tableHeaderRef"
        v-model:columns="tableHeaderColumns"
      />
    </a-modal>
    <!-- 新增编辑对话框 -->
    <a-modal
      ref="formModelRef"
      v-model:visible="showModel"
      :title="
        modelType == 'add'
          ? crudOptions.modalAddTitle
          : crudOptions.modalEditTitle
      "
      title-align="start"
      :align-center="crudOptions.modalAlignCenter"
      :width="crudOptions.modalWidth"
      :top="crudOptions.modalTop"
      :on-before-ok="onSaveOrUpdate"
    >
      <div class="arco_crud_model">
        <!-- 新增编辑表单 -->
        <arcoForm
          ref="formRef"
          v-model:form="form"
          model="crudNormal"
          :columns="modelType == 'add' ? addformColumns : editformColumns"
          :option="formOption"
          @input="onFormColumnInput"
          @focus="onFormColumnFocus"
          @change="onFormColumnChange"
          @blur="onFormColumnBlur"
        >
          <template #crud="{ scope }">
            <slot
              :name="scope.item.prop + 'Form'"
              :scope="{
                [scope.item.prop]: form[scope.item.prop],
                prop: scope.item.prop,
                form,
                modelType,
              }"
            >
            </slot>
          </template>
        </arcoForm>
      </div>
      <template #footer>
        <div>
          <a-space align="end">
            <a-button :size="crudOptions.size" @click="showModel = false">{{
              crudOptions.modalCanceText
            }}</a-button>
            <a-button
              :size="crudOptions.size"
              :loading="submitLoading"
              type="primary"
              @click="handleSubmit"
              >{{
                modelType === "add"
                  ? crudOptions.modalAddOkText
                  : crudOptions.modalEditOkText
              }}</a-button
            >
          </a-space>
        </div>
      </template>
    </a-modal>
    <!-- 删除 -->
    <a-modal
      title="删除"
      title-align="start"
      v-model:visible="showDelModel"
      :on-before-ok="onDel"
      @cancel="showDelModel = false"
    >
      <span>{{ crudOptions.delModalText }}</span>
    </a-modal>
  </div>
</template>

<script lang="ts" setup name="arco-crud">
import {
  ref,
  watch,
  toRefs,
  reactive,
  computed,
  onMounted,
  withDefaults,
  defineProps,
  defineEmits,
  defineExpose,
} from "vue";
// 挂载搜索栏
import tableHeaderSelector from "./components/table_header_selector/index.vue";
// 挂载搜索栏
import arcoForm from "./form/index.vue";
import constant from "./constant/crud";
import { formatDictData } from "./utils/format";
import { iCrudOption, iCrudColumnsOption } from "./constant/crud_interface";
import { iFormOptions } from "./constant/form_interface";

// 声明事件
const emit = defineEmits([
  "update:formData", // 表单数据
  "refresh", // 刷新
  "onLoad", // 数据加载
  "search", // 点击搜索按钮时触发
  "sizeChange", // 页面条数改变
  "currentChange", // 页面页数改变
  "rowUpdate", // 修改
  "rowSave", // 保存
  "rowDel", // 删除
  "beforeOpen", // 对话框打开前
  "beforeClose", // 对话框关闭前
  "expand", // 点击展开行时触发
  "expandedChange", // 已展开的数据行发生改变时触发
  "select", // 点击行选择器时触发
  "selectAll", // 点击全选选择器时触发
  "selectionChange", // 已选择的数据行发生改变时触发
  "sorterChange", // 排序规则发生改变时触发
  "filterChange", // 过滤选项发生改变时触发
  "pageChange", // 表格分页发生改变时触发
  "pageSizeChange", // 表格每页数据数量发生改变时触发
  "change", // 表格数据发生变化时触发
  "cellClick", // 点击单元格时触发
  "rowClick", // 点击行数据时触发
  "headerClick", // 点击表头数据时触发
  "formColumnChange", // 表单项值改变
  "formColumnFocus", // 表单项获得焦点时触发
  "formColumnBlur", // 表单项失去焦点时触发
  "formColumnInput", // 表单项input值改变时触发
]);

// 属性
const props = withDefaults(
  defineProps<{
    // 表格配置
    option: iCrudOption;
    // 表格项
    columns: Array<iCrudColumnsOption>;
    // 表格数据
    tableData?: Array<any>;
    // 加载状态
    loading?: boolean;
    // 表单数据
    formData: any;
    // 分页参数
    pagination?: any;
    // 搜索表单配置
    searchOption?: iFormOptions;
    // 表单配置
    formOption?: iFormOptions;
    // 打开新增表单前方法
    beforeAddModalOpen?: Function;
    // 打开编辑表单前方法
    beforeEditModalOpen?: Function;
    // 打开关闭表单前方法
    beforeCloseModalOpen?: Function;
  }>(),
  {
    columns: () => [],
    tableData: () => [],
    loading: false,
  }
);

// 获取表单Ref
const formRef = ref<{ setForm: Function; validate: Function }>({
  setForm: () => null,
  validate: () => null,
});
// 获取搜索表单Ref
const searchFormRef = ref(null);
// 获取表头Ref
const tableHeaderRef = ref<{ update: Function }>({ update: () => null });
// 获取表单对话框Ref
const formModelRef = ref<{ handleOk: Function }>({ handleOk: () => null });

// 定义数据
const datas = reactive<{
  tableHeaderColumns: Array<iCrudColumnsOption>;
  scrollPercent?: any;
  showHeaderSelector: boolean;
  showModel: boolean;
  showDelModel: boolean;
  searchForm: any;
  modelType: string;
  submitLoading: boolean;
  form: any;
}>({
  // 滚动条配置
  // scrollPercent: { x: '100%', y: '100%' },
  // 是否显示表头
  showHeaderSelector: false,
  // 是否显示添加
  showModel: false,
  // 显示删除对话框
  showDelModel: false,
  // 提交时加载
  submitLoading: false,
  // 对话框类型
  modelType: "add",
  // 新增编辑表单数据
  form: {},
  // 表头列表项
  tableHeaderColumns: [],
  // 搜索表单
  searchForm: {},
});

// 监听columns
watch(
  () => props.columns,
  (newVal: any) => {
    if (newVal) {
      datas.tableHeaderColumns = props.columns || [];
    }
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);

// 监听count
watch(
  () => datas.form,
  (newVal: any) => {
    if (newVal) {
      emit("update:formData", newVal);
    }
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);

// 配置
const crudOptions = computed(() => {
  return Object.assign(constant.crudDefultOption, props.option);
});

// 分页配置
const tablePagination = computed(() => {
  if (!props.pagination) {
    return props.pagination;
  }
  return Object.assign(constant.tableDefultPagination, props.pagination);
});

// 表格列表项
const tableColumns = computed(() => {
  const popColumns = JSON.parse(JSON.stringify(datas.tableHeaderColumns));
  // eslint-disable-next-line no-use-before-define
  const columns = recursionTableColumns(popColumns);
  if (crudOptions.value.handleMenu) {
    // 添加操作栏
    columns.push(constant.handleColumn);
  }
  return columns;
});

// 搜索列表项
const searchColumns = computed(() => {
  const popColumns = JSON.parse(JSON.stringify(props.columns));
  // eslint-disable-next-line no-use-before-define
  return recursionColumns("search", [], popColumns) || [];
});

// 添加表单列表项
const addformColumns = computed(() => {
  const popColumns = JSON.parse(JSON.stringify(props.columns));
  // eslint-disable-next-line no-use-before-define
  return recursionColumns("add", [], popColumns) || [];
});

// 编辑表单列表项
const editformColumns = computed(() => {
  const popColumns = JSON.parse(JSON.stringify(props.columns));
  // eslint-disable-next-line no-use-before-define
  return recursionColumns("edit", [], popColumns) || [];
});

// 递归表格项
const recursionTableColumns = (columns: Array<iCrudColumnsOption> = []) => {
  const mColumns = columns.filter((item) => !item.hide);
  mColumns.forEach((item) => {
    item.dataIndex = item.prop;
    item.title = item.label;

    if (!item.align) {
      item.align = crudOptions.value.defaultAlign;
    }
    if (!item.width) {
      item.width = crudOptions.value.defaultWidth;
    }
    // 通用字典
    if (
      item.type === "radio" ||
      item.type === "select" ||
      item.type === "checkbox"
    ) {
      item.slotName = "crudDict";
    }
    // 级联选择
    if (item.type === "cascader") {
      item.slotName = "crudCascader";
    }

    if (item.slot) {
      item.slotName = "crudSlot";
    }
    // item.titleSlotName = 'crudTableTitle';
    if (item.children) {
      item.children = recursionTableColumns(item.children);
    }
  });

  return mColumns;
};

// 递归表单项
const recursionColumns = (
  type: string,
  resColumns: Array<iCrudColumnsOption>,
  columns: Array<iCrudColumnsOption>
) => {
  columns.forEach((item, index) => {
    if (item.type) {
      if (type === "search") {
        // 搜索表单
        delete item.slot;
        delete item.formSlot;
        delete item.help;
        delete item.extra;
        delete item.required;
        delete item.rules;
        delete item.hide;
        delete item.disabled;
        // 排序
        if (item.searchSort) {
          item.sort = item.searchSort;
        } else {
          item.sort = crudOptions.value.defaultSort;
        }
        if (item.searchWidth) {
          item.formItemWidth = item.searchWidth;
        } else {
          delete item.formItemWidth;
        }

        if (item.searchFormShow) {
          resColumns.push(item);
        }
      } else {
        item.hide = false;
        item.disabled = false;
        if (item.formSort) {
          item.sort = item.formSort;
        } else {
          item.sort = crudOptions.value.defaultSort;
        }
        delete item.searchSlot;
        delete item.slot;
        if (type === "add") {
          // 添加表单
          if (item.addFormHide) {
            item.hide = true;
          }
          if (item.addDisabled) {
            item.disabled = true;
          }
        } else if (type === "edit") {
          // 编辑表单
          if (item.editFormHide) {
            item.hide = true;
          }
          if (item.editDisabled) {
            item.disabled = true;
          }
        }
        resColumns.push(item);
      }
    }
    if (item.children) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      recursionColumns(type, resColumns, item.children);
    }
    return item;
  });
  return resColumns;
};
// 打开新增对话框
const handleAddModelOpen = () => {
  const form = props.beforeAddModalOpen
    ? props.beforeAddModalOpen(props.formData || {})
    : JSON.parse(JSON.stringify(props.formData || {}));
  if (form !== false) {
    datas.form = form ? JSON.parse(JSON.stringify(form)) : {};
    datas.showModel = true;
    datas.submitLoading = false;
    datas.modelType = "add";
    formRef.value.setForm(datas.form);
  }
};
// 打开编辑对话框
const handleEditModelOpen = (row: any) => {
  const form = props.beforeEditModalOpen ? props.beforeEditModalOpen(row) : row;
  if (form !== false) {
    datas.form = form;
    datas.showModel = true;
    datas.submitLoading = false;
    datas.modelType = "edit";
    formRef.value.setForm(datas.form);
  }
};
// 打开删除对话框
const handleDelModelOpen = (row: any) => {
  const form = props.beforeCloseModalOpen
    ? props.beforeCloseModalOpen(row)
    : row;
  if (form !== false) {
    datas.form = row;
    datas.showDelModel = true;
  }
};
// 确定选择表头
const handleTableHeaderColumns = () => {
  tableHeaderRef.value.update();
};

// 提交
const handleSubmit = async (done: any) => {
  datas.submitLoading = true;
  formModelRef.value.handleOk();
};
// 刷新
const handleRefresh = () => {
  emit("refresh", null);
};

// 删除
const onDel = (done: any) => {
  emit("rowDel", done, datas.form);
};

// 保存或更新
const onSaveOrUpdate = (done: any) => {
  // 校验表单
  formRef.value
    .validate()
    .then((res: any) => {
      if (!res) {
        if (datas.modelType === "add") {
          emit("rowSave", done, datas.form);
        } else if (datas.modelType === "edit") {
          emit("rowUpdate", done, datas.form);
        }
      } else {
        datas.submitLoading = false;
      }
    })
    .catch(() => {
      datas.submitLoading = false;
    });
};

// 保存或更新
const onSearch = (val: any) => {
  emit("search", datas.searchForm);
};

// 点击展开行时触发
const onTableExpand = (rowKey: string) => {
  emit("expand", rowKey);
};
// 已展开的数据行发生改变时触发
const onTableExpandedChange = (rowKeys: string[]) => {
  emit("expandedChange", rowKeys);
};
// 点击行选择器时触发
const onTableSelect = (rowKeys: string[], rowKey: string) => {
  emit("select", rowKeys, rowKey);
};
// 点击全选选择器时触发
const onTableSelectAll = (checked: boolean) => {
  emit("selectAll", checked);
};
// 已选择的数据行发生改变时触发
const onTableSelectionChange = (rowKeys: string[]) => {
  emit("selectionChange", rowKeys);
};
// 排序规则发生改变时触发
const onTableSorterChange = (dataIndex: string, direction: string) => {
  emit("sorterChange", dataIndex, direction);
};
// 过滤选项发生改变时触发
const onTableFilterChange = (dataIndex: string, filteredValues: string[]) => {
  emit("filterChange", dataIndex, filteredValues);
};
// 表格分页发生改变时触发
const onTablePageChange = (page: number) => {
  emit("pageChange", page);
};
// 表格每页数据数量发生改变时触发
const onTablePageSizeChange = (pageSize: number) => {
  emit("pageSizeChange", pageSize);
};
// 表格数据发生变化时触发
const onTableChange = (data: any, extra: any) => {
  emit("change", data, extra);
};
// 点击单元格时触发
const onTableCellClick = (record: any, column: any) => {
  emit("cellClick", record, column);
};
// 点击行数据时触发
const onTableRowClick = (record: any) => {
  emit("rowClick", record);
};
// 点击表头数据时触发
const onTableHeaderClick = (column: any) => {
  emit("headerClick", column);
};
// 表单项input值改变时触发
const onFormColumnInput = (form: any) => {
  emit("formColumnInput", form);
};
// 表单项获得焦点时触发
const onFormColumnFocus = (form: any) => {
  emit("formColumnFocus", form);
};
// 表单项失去焦点时触发
const onFormColumnBlur = (form: any) => {
  emit("formColumnBlur", form);
};
// 表单项值改变
const onFormColumnChange = (form: any) => {
  emit("formColumnChange", form);
};

// 抛出数据到渲染层
const {
  tableHeaderColumns,
  scrollPercent,
  showHeaderSelector,
  showModel,
  showDelModel,
  searchForm,
  modelType,
  submitLoading,
  form,
} = toRefs(datas);

// 挂载完成
onMounted(async () => {});

// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({});
</script>

<style lang="less" scsoped>
.arco_crud_model {
  padding: 20px;
  max-height: 600px;
  overflow: hidden;
  overflow-y: scroll;
}
.arco_crud_model::-webkit-scrollbar {
  height: 0;
  width: 0;
  color: transparent;
}
</style>
