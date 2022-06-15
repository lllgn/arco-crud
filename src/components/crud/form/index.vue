<!--
  - 通用表单封装
  - Author:lllgn
  - 2022-03-17 11:35:50
  -->
<template>
  <div>
    <!-- 表单 -->
    <a-form
      ref="acroFormRef"
      class="acro_crud_form"
      :model="formData"
      :style="{ width: formOptions.width }"
      :layout="formOptions.layout"
      :size="formOptions.size"
      :label-col-props="formOptions.labelColProps"
      :label-align="formOptions.labelAlign"
      :disabled="formOptions.disabled"
      :auto-label-width="formOptions.autoLabelWidth"
      @submit="onSubmitEvent"
    >
      <div
        v-for="(item, index) in formColumns"
        :key="index"
        :style="{
          'margin-bottom': formOptions.padding,
        }"
      >
        <div class="arco_crud_form_title" v-if="item.type == 'title'">
          {{ item.label }}
        </div>
        <a-form-item
          v-if="!item.hide && item.type != 'title'"
          :style="{ padding: formOptions.padding, width: formOptions.width }"
          :field="item.prop"
          :label="item.label"
          :required="item.required"
          :rules="item.rules"
          :hide-asterisk="item.hideAsterisk"
          :hide-label="item.hideLabel"
          :help="item.help"
          :extra="item.extra"
          :disabled="item.disabled"
          show-colon
        >
          <div
            v-if="!item.slot && !item.searchSlot && !item.formSlot"
            style="width: 100%"
          >
            <!-- input -->
            <a-input
              v-if="item.type == 'input'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :size="formOptions.size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :max-length="item.maxLength"
              :show-word-limit="item.showWordLimit"
              allow-clear
              @focus="onEvent('focus', item, index)"
              @blur="onEvent('blur', item, index)"
              @input="onEvent('input', item, index)"
              @change="onEvent('change', item, index)"
            />

            <!-- password -->
            <a-input-password
              v-if="item.type == 'password'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :size="formOptions.size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              allow-clear
              :max-length="item.maxLength"
              @focus="onEvent('focus', item, index)"
              @blur="onEvent('blur', item, index)"
              @input="onEvent('input', item, index)"
              @change="onEvent('change', item, index)"
            />
            <!-- number -->
            <a-input-number
              v-if="item.type == 'number'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :default-value="item.value"
              :size="formOptions.size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              allow-clear
              :mode="item.mode"
              :step="item.step"
              :formatter="item.formatter"
              :min="item.minLength"
              :max="item.maxLength"
              @focus="onEvent('focus', item, index)"
              @blur="onEvent('blur', item, index)"
              @change="onEvent('change', item, index)"
            />
            <!-- textarea -->
            <a-textarea
              v-if="item.type == 'textarea'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :size="formOptions.size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :max-length="item.maxLength"
              :show-word-limit="item.showWordLimit"
              allow-clear
              @focus="onEvent('focus', item, index)"
              @blur="onEvent('blur', item, index)"
              @input="onEvent('input', item, index)"
              @change="onEvent('change', item, index)"
            />
            <!-- slider -->
            <a-slider
              v-if="item.type == 'slider'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :default-value="item.value"
              :direction="item.direction"
              :disabled="item.disabled"
              :size="formOptions.size"
              :marks="item.marks"
              :show-ticks="item.showTicks"
              :show-input="item.showInput"
              :range="item.range"
              :step="item.step"
              :min="item.minLength"
              :max="item.maxLength"
              @change="onEvent('change', item, index)"
            />
            <!-- radio -->
            <a-radio-group
              v-if="item.type == 'radio'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :default-value="item.value"
              :disabled="item.disabled"
              :type="item.radioType"
              :direction="item.direction"
              :size="formOptions.size"
              @change="onEvent('change', item, index)"
            >
              <a-radio
                v-for="(radioItem, r) in item.dictData"
                :key="r"
                :value="
                  radioItem[item.dictProps ? item.dictProps.value : 'value']
                "
              >
                {{
                  radioItem[item.dictProps ? item.dictProps.label : "label"]
                }}</a-radio
              >
            </a-radio-group>
            <!-- checkbox -->
            <a-checkbox-group
              v-if="item.type == 'checkbox'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :default-value="item.value"
              :disabled="item.disabled"
              :type="item.radioType"
              :direction="item.direction"
              :size="formOptions.size"
              @change="onEvent('change', item, index)"
            >
              <a-checkbox
                v-for="(checkboxItem, c) in item.dictData"
                :key="c"
                :value="
                  checkboxItem[item.dictProps ? item.dictProps.value : 'value']
                "
                >{{
                  checkboxItem[item.dictProps ? item.dictProps.label : "label"]
                }}</a-checkbox
              >
            </a-checkbox-group>
            <!-- select -->
            <a-select
              v-if="item.type == 'select'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :multiple="item.multiple"
              :input-value="
                item.inputValue
                  ? formData[item.prop + '_' + item.inputValue]
                  : null
              "
              :default-input-value="item.defaultInputValue"
              allow-clear
              :allow-create="false"
              @input-value-change="onEvent('input', item, index)"
              @change="onEvent('change', item, index)"
            >
              <a-option
                v-for="(selectItem, s) in item.dictData"
                :key="s"
                :value="
                  selectItem[item.dictProps ? item.dictProps.value : 'value']
                "
                >{{
                  selectItem[item.dictProps ? item.dictProps.label : "label"]
                }}</a-option
              >
            </a-select>
            <!-- cascader -->
            <a-cascader
              v-if="item.type == 'cascader'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :field-names="item.dictProps"
              :options="item.dictData"
              :placeholder="item.placeholder"
              :default-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :multiple="item.multiple"
              :check-strictly="item.checkStrictly"
              :input-value="
                item.inputValue
                  ? formData[item.prop + '_' + item.inputValue]
                  : null
              "
              :default-input-value="item.defaultInputValue"
              allow-clear
              @focus="onEvent('focus', item, index)"
              @blur="onEvent('blur', item, index)"
              @input-value-change="onEvent('input', item, index)"
              @change="onEvent('change', item, index)"
            />
            <!-- date -->
            <a-date-picker
              v-if="item.type == 'date'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-picker-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :show-time="item.showTime"
              :disabled-date="item.disabledDate"
              :disabled-time="item.disabledTime"
              :value-format="item.valueFormat"
              allow-clear
              @change="onEvent('change', item, index)"
            />

            <!-- month -->
            <a-month-picker
              v-if="item.type == 'month'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-picker-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :format="item.format"
              :show-time="item.showTime"
              :disabled-date="item.disabledDate"
              :disabled-time="item.disabledTime"
              :value-format="item.valueFormat"
              allow-clear
              @change="onEvent('change', item, index)"
            />
            <!-- month -->
            <a-year-picker
              v-if="item.type == 'year'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-picker-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :format="item.format"
              :show-time="item.showTime"
              :disabled-date="item.disabledDate"
              :disabled-time="item.disabledTime"
              :value-format="item.valueFormat"
              allow-clear
              @change="onEvent('change', item, index)"
            />
            <!-- quarter -->
            <a-quarter-picker
              v-if="item.type == 'quarter'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-picker-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :format="item.format"
              :show-time="item.showTime"
              :disabled-date="item.disabledDate"
              :disabled-time="item.disabledTime"
              :value-format="item.valueFormat"
              allow-clear
              @change="onEvent('change', item, index)"
            />
            <!-- week -->
            <a-week-picker
              v-if="item.type == 'week'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-picker-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :format="item.format"
              :show-time="item.showTime"
              :disabled-date="item.disabledDate"
              :disabled-time="item.disabledTime"
              :value-format="item.valueFormat"
              allow-clear
              @change="onEvent('change', item, index)"
            />
            <!-- range -->
            <a-range-picker
              v-if="item.type == 'range'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-picker-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :format="item.format"
              :show-time="item.showTime"
              :disabled-date="item.disabledDate"
              :disabled-time="item.disabledTime"
              :value-format="item.valueFormat"
              allow-clear
              @change="onEvent('change', item, index)"
            />
            <!-- time -->
            <a-time-picker
              v-if="item.type == 'time'"
              :id="item.id"
              :ref="item.prop"
              v-model="formData[item.prop]"
              :style="{
                width: item.formItemWidth
                  ? item.formItemWidth
                  : formOptions.itemWidth,
              }"
              :placeholder="item.placeholder"
              :default-value="item.value"
              :disabled="item.disabled"
              :size="formOptions.size"
              :format="item.format"
              :disabled-hours="item.disabledHours"
              :disabled-minutes="item.disabledMinutes"
              :disabled-seconds="item.disabledSeconds"
              :use12-hours="item.use12Hours"
              allow-clear
              @change="onEvent('change', item, index)"
            />
          </div>
          <!-- 表单插槽 -->
          <slot v-if="item.slot" :name="item.prop" :scope="item" />
          <!-- crud搜索插槽 -->
          <slot
            v-if="item.searchSlot || item.formSlot"
            name="crud"
            :scope="{ item }"
          />
        </a-form-item>
      </div>
      <!-- 按钮 -->
      <a-form-item v-if="formOptions.showButton">
        <a-col>
          <a-divider
            v-if="model == 'normal'"
            style="width: 100%"
            direction="horizontal"
          />
          <a-row>
            <a-divider
              v-if="model == 'search' || model == 'crudSearch'"
              style="height: 36px; margin-right: 52px"
              direction="vertical"
            />
            <a-button
              style="margin-right: 10px"
              type="primary"
              @click="onSubmitEvent"
            >
              <template #icon>
                <icon-search />
              </template>
              {{ formOptions.submitButtonText }}
            </a-button>
            <a-button @click="onReset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ formOptions.resetButtonText }}
            </a-button>
          </a-row>
        </a-col>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup name="arco-form">
import {
  ref,
  toRefs,
  watch,
  reactive,
  computed,
  defineProps,
  withDefaults,
  onMounted,
  defineEmits,
  defineExpose,
} from "vue";
import { iFormOptions, iFormColumns } from "../constant/form_interface";
import constant from "../constant/form";

// 声明事件
const emit = defineEmits([
  "update:form",
  "change",
  "focus",
  "blur",
  "input",
  "submit",
]);
// 获取表单Ref
const acroFormRef = ref<{ resetFields: Function; validate: Function }>({
  resetFields: () => null,
  validate: () => null,
});

// 属性
const props = withDefaults(
  defineProps<{
    // 表单绑定数据
    form?: any;
    // 表单配置
    option?: iFormOptions;
    // 表单项列表
    columns?: Array<iFormColumns>;
    // 表单项列表
    model?: string;
  }>(),
  {
    form: {},
    columns: () => [],
    model: "normal",
  }
);

// 配置
const formOptions = computed(() => {
  let model = constant.formModel.normal;
  if (props.model === "search") {
    model = constant.formModel.search;
  } else if (props.model === "crudSearch") {
    model = constant.formModel.crudSearch;
  } else if (props.model === "crudNormal") {
    model = constant.formModel.crudNormal;
  }

  return Object.assign(model, props.option);
});

// 表单项
const formColumns = computed(() => {
  let columns = [];
  if (props.columns) {
    columns = props.columns.map((item: any, index: any) => {
      item.id = `id_${index}`;
      return item;
    });
    // 排序
    columns.sort(function (a, b) {
      if (a.sort === b.sort) {
        //如果id相同，按照age的降序
        return b.id - a.id;
      } else {
        return a.sort - b.sort;
      }
    });
  }

  return columns;
});
// 定义数据
const datas = reactive<{
  formData: any;
}>({
  formData: {},
});
// 监听数据变化
watch(
  () => datas.formData,
  (newVal: any) => {
    emit("update:form", newVal);
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
// 抛出数据到渲染层
const { formData } = toRefs(datas);
// 监听统一事件
const onEvent = (type: any, item: any, index: number) => {
  emit(type, {
    prop: item.prop,
    val: datas.formData[item.prop],
    index,
    item,
  });
};
// 搜索事件
const onSubmitEvent = () => {
  emit("submit", datas.formData);
};

const onReset = () => {
  acroFormRef.value.resetFields();
};

// 公共方法
/**
 * 设置像数据
 */
const setColumnData = (prop: string, key: string, value: any) => {
  props.columns?.map((item: any) => {
    if (item.prop === prop) {
      item[key] = value;
    }
    return item;
  });
};

/**
 * 设置表单数据数据
 */
const setForm = (form: any) => {
  datas.formData = form;
};
/**
 * 重置表单
 */
const reset = () => {
  acroFormRef.value.resetFields();
};
/**
 * 校验表单
 */
const validate = () => {
  return acroFormRef.value.validate();
};
// 挂载完成
onMounted(async () => {
  datas.formData = props.form;
});
// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({
  form: formData,
  columns: formColumns,
  options: formOptions,
  setColumnData,
  setForm,
  reset,
  validate,
});
</script>
<style lang="less" scsoped>
.arco_crud_form_title {
  padding: 12px 0;
  width: 100%;
  text-align: left;
  font-size: large;
  font-weight: bold;
}
</style>
