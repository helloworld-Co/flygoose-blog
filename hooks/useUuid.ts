/*
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-01-15 11:53:29
 * @Description: 请填写文件描述
 */
import { useCookie } from '#app'

// 获取 Uuid
export const getUuid = () => {
  const Uuid = useCookie('hw_uuid')
  return Uuid.value
}

// 设置 Uuid
export const setUuid = (val: string) => {
  const Uuid = useCookie('hw_uuid')
  Uuid.value = val
}

// 清空 Uuid
export const delUuid = () => {
  const Uuid = useCookie('hw_uuid')
  Uuid.value = null
}
