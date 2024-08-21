<!--
 * @Author: Shaoli
 * @Date: 2023-03-08 22:09:07
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-03-08 22:32:35
 * @Description: 请填写文件描述
-->
<template>
  <div v-infinite-scroll="load" class="special-article-list">
    <SpecialItem v-for="item in state.list" :key="item" :item="item" />
  </div>
  <el-empty v-if="!state.list.length" description="暂无数据"></el-empty>
</template>

<script lang="ts" setup>
import SpecialItem from '../global/SpecialItem.vue'
import request from '@/utils/request'

let currentPage = ref<number>(1)
const state = reactive({
  list: [],
  hasMore: true
})
const load = async () => {
  if (!state.hasMore) return
  const { data }: any = await request.post('/special/getSpecialList', {
    pageNum: currentPage.value,
    pageSize: 10
  })
  currentPage.value++
  state.hasMore = data?.hasMore as boolean
  state.list = state.list.concat(data?.list || [])
}
</script>
