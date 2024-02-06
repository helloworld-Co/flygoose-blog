/*
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-03-11 22:25:14
 * @Description: 请填写文件描述
 */
import { useCookie } from '#app'

// 获取 UserInfo
export const getUserInfo = () => {
  const UserInfo = useCookie('UserInfo')
  return UserInfo.value || {}
}

// 设置 UserInfo
export const setUserInfo = (val: Record<string, string>) => {
  const UserInfo = useCookie('UserInfo')
  UserInfo.value = JSON.stringify(val)
}

// 清空 UserInfo
export const delUserInfo = () => {
  const UserInfo = useCookie('UserInfo')
  UserInfo.value = JSON.stringify({})
}
