<!--
 * @Author: Shaoli
 * @Date: 2023-02-26 17:42:44
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-26 21:58:58
 * @Description: 请填写文件描述
-->
<template>
  <div class="tag-container">
    <div class="common-title">
      <i class="iconfont icon-back"></i>
      <div class="title">标签</div>
    </div>
    <div class="tag-name">{{ route.params.id }}</div>
    <div v-infinite-scroll="load" :infinite-scroll-disabled="!state.hasMore">
      <ArticleItem
        v-for="(item, index) in state.list"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
const route = useRoute()
import ArticleItem from '../../components/global/ArticleItem.vue'

let pageNum = ref<number>(1)
const state = reactive({
  list: [],
  hasMore: true
})
const load = async () => {
  if (!state.hasMore) return
  const { data }: any = await request.post('/blog/getBlogListByTag', {
    pageNum: pageNum.value,
    pageSize: 10,
    name: route.params.id
  })
  pageNum.value++
  state.hasMore = data?.hasMore as boolean
  state.list = state.list.concat(data?.list || [])
}
</script>

<style lang="less" scoped>
.tag-container {
  width: 100%;
  .tag-name {
    padding: 0 24px;
    width: 100%;
    height: 72px;
    line-height: 72px;
    border-bottom: 1px solid #edeeef;
    font-weight: 500;
    font-size: 30px;
    color: #21293c;
  }
}
</style>
