<!--
  - crud-demo
  - Author:lllgn
  - 2022-03-17 11:35:50
  - Email:lllgn@qq.com
  -->
<template>
  <div class="padding: 20px;">
    <a-card :style="{ width: '900px' }" title="表格DEMO">
      <arco-crud
        :loading="loading"
        :option="option"
        :columns="columns"
        :table-data="tableData"
        :beforeAddModalOpen="onUpdate"
        @refresh="onRefresh"
        @row-update="onUpdate"
        @row-save="onSave"
        @row-del="onDel"
        @search-change="onSearchChange"
      >
        <template #roadSearch>
          <a-button type="primary">街道插槽</a-button>
        </template>
        <template #roadForm>
          <a-button type="primary">街道插槽</a-button>
        </template>
        <template #status>
          <a-button type="primary">街道插槽</a-button>
        </template>
        <template #menuLeftStart>
          <a-button type="primary">街道插槽</a-button>
        </template>
        <template #handleMenuBefore>
          <a-button type="text">查看 </a-button>
          <a-button type="text">编辑 </a-button>
          <a-button type="text">删除 </a-button>
        </template>
      </arco-crud>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from "vue";

// 声明表单对象
const searchFormRef = ref(null);

const datas = reactive<{
  // 加载状态
  loading: boolean;
  // 加载状态
  option: any;
  // crud列表项
  columns: Array<any>;
  // 表格数据
  tableData: Array<any>;
}>({
  loading: false,
  option: {},
  columns: [
    {
      label: "姓名",
      prop: "name",
      help: "帮助提示",
      width: 140,
      type: "input",
      searchFormShow: true,
      searchSort: 11,
      showWordLimit: true,
      placeholder: "请输入姓名",
      rules: [
        { required: true, message: "name is required" },
        { minLength: 5, message: "must be greater than 5 characters" },
      ],
      validateTrigger: ["blur"],
      maxLength: 10,
    },
    {
      label: "用户信息",
      children: [
        {
          label: "生日",
          prop: "birthday",
        },
        {
          label: "性别",
          prop: "sex",
          type: "radio",
          searchWidth: "500px",
          searchFormShow: true,
          radioType: "button",
          width: 140,
          searchSort: 9,
          formItemWidth: "none",
          showWordLimit: true,
          dictData: [
            {
              label: "男",
              value: "1",
            },
            {
              label: "女",
              value: "0",
            },
            {
              label: "未知",
              value: "2",
            },
          ],
        },
        {
          label: "爱好",
          prop: "hobby",
          searchSort: 6,
          type: "select",
          inputValue: "cc",
          searchFormShow: true,
          width: 140,
          showWordLimit: true,
          dictData: [
            {
              label: "足球",
              value: "1",
            },
            {
              label: "舞蹈",
              value: "0",
            },
            {
              label: "音乐",
              value: "2",
            },
          ],
        },
        {
          label: "地址",
          children: [
            {
              label: "城市",
            },
            {
              label: "街道",
              prop: "road",
            },
            {
              label: "门牌",
              prop: "no",
            },
          ],
        },
        {
          label: "街道",
          prop: "road",
          type: "input",
          searchFormShow: true,
          searchSlot: true,
          formSlot: true,
        },
      ],
    },
    {
      label: "信息",
      children: [
        {
          label: "电子邮箱",
          prop: "email",
        },
        {
          label: "电话",
          prop: "phone",
        },
      ],
    },
    {
      label: "薪资",
      type: "input",
      prop: "salary",
      searchFormShow: true,
      width: 120,
      formItemWidth: "300px",
    },
    {
      label: "状态",
      prop: "status",
      slot: true,
      type: "radio",
      formSort: 13,
      radioType: "button",
      width: 140,
      formItemWidth: "none",
      dictData: [
        {
          label: "启用",
          value: "1",
        },
        {
          label: "禁用",
          value: "0",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择状态",
          trigger: "blur",
        },
      ],
      value: "1",
    },
  ],
  tableData: [
    {
      key: "1",
      name: "Jane Doe",
      salary: 2300,
      birthday: "1994-04-21",
      city: "London",
      road: "Park",
      hobby: "1",
      sex: "1",
      status: "1",
      no: "34",
      phone: "12345678",
      email: "jane.doe@example.com",
    },
    {
      key: "2",
      name: "Alisa Ross",
      salary: 2500,
      birthday: "1994-05-21",
      city: "London",
      road: "Park",
      sex: "0",
      status: "1",
      hobby: "0",
      no: "37",
      phone: "12345678",
      email: "alisa.ross@example.com",
    },
    {
      key: "3",
      name: "Kevin Sandra",
      salary: 2200,
      birthday: "1992-02-11",
      city: "Paris",
      road: "Arco",
      sex: "0",
      status: "0",
      hobby: "0",
      no: "67",
      phone: "12345678",
      email: "kevin.sandra@example.com",
    },
  ],
});
// 抛出数据到渲染层
const { loading, option, columns, tableData } = toRefs(datas);

// 保存
const onSave = (done: any, row: any) => {
  console.log("onSave", row);
  setTimeout(() => {
    done();
  }, 2000);
};

// 删除
const onDel = (done: any, row: any) => {
  console.log("onDel", row);
  setTimeout(() => {
    done();
  }, 2000);
};
// 更新
const onUpdate = (done: any, row: any) => {
  console.log("onUpdate", row);
  setTimeout(() => {
    done();
  }, 2000);
};

// 刷新
const onSearchChange = (val: any) => {
  console.log(val);
};
// 刷新
const onRefresh = () => {};
</script>

<style lang="less" scsoped></style>
