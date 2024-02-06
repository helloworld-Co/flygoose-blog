export default class TimeUtil {
  // 数据转化，一位数加前面 0
  static isTwoDigit = (n: string) => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  // 格式时间，格式为几秒前，几天前...
  static timeFormat(timestamp: any) {
    if (!timestamp) {
      return '--'
    }
    timestamp = timestamp.toString()
    timestamp = timestamp.replace(/[-]/g, '/')
    const isTimestamp =
      timestamp.includes('/') ||
      timestamp.includes('-') ||
      timestamp.includes(':') // 判断是不是时间戳格式
    const dateTime: any = !isTimestamp
      ? timestamp * 1000
      : new Date(timestamp * 1000)
    const mistiming = Math.round((Date.now() - dateTime) / 1000)
    const arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒']
    const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1]
    for (let i = 0; i < arrn.length; i++) {
      const inm = Math.floor(mistiming / arrn[i])
      if (inm !== 0) {
        return inm + arrr[i] + '前'
      }
    }
  }

  /**
   * 时间戳转化为年 月 日 时 分 秒
   * @param number: 传入时间戳
   * @param format：返回格式，支持自定义，但参数必须与formateArr里保持一致
   * formatTime(timestamp,'Y-M-D h:m:s'));//转换为日期：2017-03-03 03:03:03
   */
  static formatTime(number, format) {
    if (!number || isNaN(+number)) {
      return '---'
    }
    if (typeof number === 'string') {
      // 字符串转数字
      number = +number
    }
    const formateArr = ['Y', 'M', 'D', 'h', 'm', 's']
    const returnArr = []

    const date = new Date(number * 1000)
    returnArr.push(
      ...[
        date.getFullYear(),
        TimeUtil.isTwoDigit(date.getMonth() + 1),
        TimeUtil.isTwoDigit(date.getDate()),
        TimeUtil.isTwoDigit(date.getHours()),
        TimeUtil.isTwoDigit(date.getMinutes()),
        TimeUtil.isTwoDigit(date.getSeconds())
      ]
    )
    for (const i in returnArr) {
      format = format.replace(formateArr[i], returnArr[i])
    }
    return format
  }

  // UTC转年 月 日 时 分 秒
  static UTCFormat(UTC, format) {
    return TimeUtil.formatTime(+new Date(UTC) / 1000, format)
  }

  // 秒转分秒
  static sec2Minsec(time) {
    const min = Math.floor(time / 60)
    const sec = time % 60
    return min + '分' + ('0' + sec).slice(-2)
  }

  static sec2HMS(time) {
    const h = Math.floor(time / (60 * 60))
    const min = Math.floor((time - h * 60 * 60) / 60)
    const sec = time % 60
    return (
      (h > 0 ? ('0' + h).slice(-2) + ':' : '') +
      ('0' + min).slice(-2) +
      ':' +
      ('0' + sec).slice(-2)
    )
  }
}