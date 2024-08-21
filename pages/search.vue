<!--
 * @Author: Shaoli
 * @Date: 2023-02-19 21:17:04
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-23 22:04:07
 * @Description: 请填写文件描述
-->
<template>
  <div class="blog-container">
    <div v-infinite-scroll="load" :infinite-scroll-disabled="!state.hasMore">
      <ArticleItem
        v-for="(item, index) in state.list"
        :key="index"
        :item="item"
      />
    </div>
    <el-empty v-if="!state.list.length" description="暂无数据"></el-empty>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import ArticleItem from '../components/global/ArticleItem.vue'
const route = useRoute()

watch(route, () => {
  state.hasMore = true
  state.list = []
})
const state = reactive<Record<string, any>>({
  hasMore: true,
  list: [],
  typeList: []
})
const pageNum = ref<number>(1)
const load = async () => {
  if (!state.hasMore) return
  const { data }: any = await request.post('/blog/searchBlog', {
    pageNum: pageNum.value,
    pageSize: 10,
    word: route.query.word
  })
  pageNum.value++
  state.hasMore = data?.hasMore as boolean
  state.list = state.list.concat(data?.list || [])
}
</script>
