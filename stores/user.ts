/*
 * @Author: Shaoli
 * @Date: 2023-02-19 14:33:48
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-19 14:33:53
 * @Description: 请填写文件描述
 */
import { defineStore } from 'pinia'

interface UserState {
  hw_token: string
}

export const useUserStore = defineStore('storeUser', {
  state: (): UserState => {
    return {
      hw_token: 'xxxxxxxxxxxxx'
    }
  },
  actions: {
    setToken(value: string) {
      this.hw_token = value
    }
  },
  persist: {
    enabled: true
  }
})
