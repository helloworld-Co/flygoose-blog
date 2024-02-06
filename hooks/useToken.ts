/*
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-01-15 11:58:28
 * @Description: 请填写文件描述
 */
import { useCookie } from '#app'

// 获取 Token
export const getToken = () => {
  const Token = useCookie('hw_token')
  return Token.value
}

// 设置 Token
export const setToken = (val: string) => {
  const Token = useCookie('hw_token')
  Token.value = val
}

// 清空 Token
export const delToken = () => {
  const Token = useCookie('hw_token')
  Token.value = null
}
