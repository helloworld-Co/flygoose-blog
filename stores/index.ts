/*
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-19 14:36:18
 * @Description: 请填写文件描述
 */
import { defineStore } from 'pinia'

export const useCommon = defineStore('common', {
  state: () => ({
    currentSectionId: ''
  }),
  actions: {
    setCurrentSectionId(v: string) {
      this.currentSectionId = v
    }
  }
})
