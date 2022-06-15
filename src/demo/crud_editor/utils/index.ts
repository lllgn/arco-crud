/**
 * 工具类
 */
export class Utils {
  /**
   * 随机字符
   * @param {Object} n
   */
  static randomChars(n: number) {
    var CHARS =
      // "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      "01234567890123456789012345678901234567890123456789012345678901";
    var res = "";
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 61);
      res += CHARS.charAt(id);
    }
    return res;
  }
}
