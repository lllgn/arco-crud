/**
- 通用表格hook
- Author:lllgn
- 2022-03-17 11:35:50
 */

import { reactive, toRefs } from "vue";

interface iCrudDatas {
  // 表格配置项
  option: any;
  // 加载状态
  loading: boolean;
  // 搜索表单
  searchForm: any;
  // 分页参数
  page: any;
}

/**
 * 创建Crud数据
 *
 * @returns
 */
export default function CreateCrudDatas() {
  const datas = reactive<iCrudDatas>({
    loading: false,
    option: {},
    searchForm: {},
    page: {},
  });

  // 删除
  const onSave = (done: any, row: any) => {
    setTimeout(() => {
      done();
    }, 2000);
  };
  // 删除
  const onDel = (done: any, row: any) => {
    setTimeout(() => {
      done();
    }, 2000);
  };
  // 更新
  const onUpdate = (done: any, row: any) => {
    setTimeout(() => {
      done();
    }, 2000);
  };

  // 刷新
  const onRefresh = () => {};

  return {
    onSave,
    onDel,
    onRefresh,
    onUpdate,
    ...toRefs(datas),
  };
}
