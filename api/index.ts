/*
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-01-15 11:55:11
 * @Description: 请填写文件描述
 */
import request from '@/utils/request'

/**
 * 获取标签
 */
export const getTags = (params?: { size?: number; page?: number }) => {
  return request.post('/tag/getHomeTag', params)
}
