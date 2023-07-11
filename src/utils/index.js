import { ElMessage, ElMessageBox } from "element-plus";
import moment from "moment"; // Vue3打印Execl

/** ------------------------------------- LocalStorage存储处理 ------------------------------------- **/

/**
 * 本地存储 - 存储
 * @param {*} key 键
 * @param {*} value 值
 */
export function LocalSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 本地存储 - 读取
 * @param {*} key 需要获取值的键
 * @returns
 */
export function LocalGet(key) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return value;
  }
}

/**
 * 本地存储 - 删除
 * @param {*} key 键
 */
export function LocalRemove(key) {
  window.localStorage.removeItem(key);
}

/**
 * 本地存储 - 清空
 */
export function LocalClear() {
  window.localStorage.clear();
}

/** ------------------------------------- ElementUI Plus 弹出信息 ------------------------------------- **/

/**
 * 弹出成功信息
 * @param {string} msg 显示内容
 */
export function successMsg(msg) {
  ElMessage.success(msg);
}

/**
 * 弹出错误信息
 * @param {string} msg 显示内容
 */
export function errorMsg(msg) {
  ElMessage.error(msg);
}

/**
 * 弹出提示信息
 * @param {string} msg 显示内容
 */
export function warningMsg(msg) {
  ElMessage.warning(msg);
}

/** ------------------------------------- 日期处理（使用moment.js） ------------------------------------- **/

/**
 * 根据时间戳（秒）获取到指定日期格式的字符串
 * @param { number } date 时间戳（秒）
 * @param { string } type 需要处理的日期格式
 * @returns
 */
export function GetFormatDateBySeconds(date, type = "yyyy-MM-DD HH:mm:ss") {
  return moment.unix(date).utc().format(type);
}

/**
 * 根据时间戳（豪秒）获取到指定日期格式的字符串
 * @param { number } date 时间戳（豪秒）
 * @param { string } type 需要处理的日期格式
 * @returns
 */
export function GetFormatDateByMillSeconds(date, type = "yyyy-MM-DD HH:mm:ss") {
  return moment(date).format(type);
}

/**
 * 根据当前时间，获取前 X 天前的时间
 * @param { number } days 前几天
 * @param { string } type 需要处理的日期格式
 * @returns
 */
export function GetBeforeDate(days = 1, type = "yyyy-MM-DD") {
  return moment().subtract(days, "days").format(type);
}

/**
 * 根据传入的日期，返回（秒数）时间戳
 * @param { number } date 日期
 * @returns
 */
export function GetTimestampBySeconds(date) {
  return moment(date).unix();
}

/**
 * 获取DatePicker的筛选时间
 * @param { number } diffDays 相距多少时间
 * @param { string } type 需要处理的日期格式
 * @returns
 */
export function GetDatePickerValue(diffDays = 0, type = "yyyy-MM-DD") {
  let now = moment().format(type);
  let before = GetBeforeDate(diffDays, type);
  return [before, now];
}

/* ------------------------------------ 数据筛选处理 ----------------------------------------- */
/**
 * 根据 id 找出列表里对应 id 的 name
 * @param { Array } list 需要索引的列表
 * @param { any } id 需要查找的值
 * @returns
 */
export function FilterLabelById(list, id) {
  let findItem = list.find((item) => item.id == id);
  return findItem ? findItem.name : id;
}

/**
 * 根据 value 找出列表里对应 value 的 label
 * @param { Array } list 需要索引的列表
 * @param { any } value 需要查找的值
 * @returns
 */
export function FilterLabelByValue(list, value) {
  let findItem = list.find((item) => item.value === value);
  return findItem ? findItem.label : value;
}
