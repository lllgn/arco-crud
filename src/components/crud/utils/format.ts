/**
 * 格式化 通用数据字典
 * @param row
 * @param column
 * @returns
 */
const formatDictData = (row: any, column: any) => {
  let key = "label";
  let value = "value";
  if (column.dictProps != null) {
    key = column.dictProps.key;
    value = column.dictProps.value;
  }
  const item = column.dictData.filter(
    (item: any) => item[value] === row[column.prop]
  );
  if (item.length > 0) {
    return item[0][key];
  } else {
    return "";
  }
};

export { formatDictData };
