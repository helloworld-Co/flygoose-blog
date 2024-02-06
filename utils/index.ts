/*
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-01-15 11:51:04
 * @Description: 请填写文件描述
 */
const phoneNumReg = /^1[34578]\d{9}$/

export const checkData = {
  phoneNum(num) {
    return phoneNumReg.test(num)
  },
  password(num) {
    num = typeof num === 'string' ? num : String(num)
    return num.length >= 6 && num.length <= 20
  }
}

// 补0函数
export const pad0 = (num: number, length: number) => {
  return num.toString().padStart(length, '0')
}

// 数据过大，单位转换
export const transformUnit = (num: number) => {
  switch (true) {
    case num > 9999:
      return (Math.round(num / 1000) / 10).toFixed(1) + 'w'

    case num > 999:
      return (Math.round(num / 100) / 10).toFixed(1) + 'k'

    default:
      return num
  }
}

// 根据键名获取cookie中的值
export function getCookieByName(cookies, key) {
  if (!cookies) {
    return null
  }
  let target = null
  cookies.split(';').forEach((item) => {
    if (item.includes(key)) {
      target = item.trim().split(`${key}=`)[1]
    }
  })
  return target
}

/**
 * 过滤 Md中的图片和链接写法
 * @param {string} md md字符串
 */
export const removeMdTag = (md) => {
  if (!md) {
    return ''
  }
  const pattern = /(!?)\[(.*?)\]\((.*?)\)/gm
  return md
    .replace(/(#|=|-|\*|_|~|>|\{|\}|`)/gm, '')
    .replace(pattern, '')
    .replace(/\n/g, '')
}

// 匹配汉字
// const chineseRegx = /[\u4E00-\u9FA5]+/g
const htmlRegx = /<[^<>]+>/g
/**
 * 过滤html标签，提取中文
 * @param {string} content 富文本字符串或md字符串
 */
export const getChinese = (content) => {
  const result = content
    .replace(htmlRegx, '')
    .replace(/\n/g, '')
    .replace(/&nbsp;/g, '')
  return removeMdTag(result)
}

/**
 * 获取图片地址
 * @param {string} html 富文本字符串
 */
export const getImgsUrl = (html) => {
  // 匹配图片（g表示匹配所有结果i表示区分大小写）
  const imgReg = /<img.*?(?:>|\/>)/gi
  // 匹配src属性
  const srcReg = /src=['"]?([^'"]*)['"]?/i
  const arr = html.match(imgReg)
  if (!arr) {
    return []
  }
  const urlArr = arr.reduce((p, n) => {
    const src = n.match(srcReg)
    return src[1] ? [...p, src[1]] : p
  }, [])
  return urlArr
}
