import { iCrudColumnsOption } from "../../../components/crud/constant/crud_interface";

import { iCrudOption } from "../../../components/crud/constant/crud_interface";
import { iFormOptions } from "../../../components/crud/constant/form_interface";

/**
 * 声明Columns项配置
 */
export interface iColumnsOption extends iCrudColumnsOption {
  // key
  key?: string;
  // 图标
  icon?: string;
  // 子集
  children?: Array<iColumnsOption>;
  // 编辑配置
  eidtOption?: Array<string>;
}

/**
 * 声明表单配置
 */
export interface iEditFormOption extends iFormOptions {
  [propName: string]: any;
}
/**
 * 声明CRUD默认配置
 */
export interface iEditCrudOption extends iCrudOption {
  [propName: string]: any;
}
