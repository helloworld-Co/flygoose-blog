<!--
 * @Author: Shaoli
 * @Date: 2023-02-13 22:38:30
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-26 16:01:47
 * @Description: 首页文章列表
-->
<template>
  <a-tabs
    v-model:activeKey="activeKey"
    class="index-tabs"
    @change="setActiveKey"
  >
    <a-tab-pane key="0" tab="最新"> </a-tab-pane>
    <a-tab-pane key="1" tab="热门"> </a-tab-pane>
  </a-tabs>
  <div v-infinite-scroll="load" :infinite-scroll-immediate="false">
    <ArticleItem
      v-for="(item, index) in state.list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script lang="ts" setup>
import ArticleItem from '../global/ArticleItem.vue'
const activeKey = ref<string>('0')
const pageNum = ref<number>(1)
const state = reactive({
  hasMore: true,
  list: []
})
const load = async () => {
  if (!state.hasMore) return
  const { data } = await useFetch('/api/blog/getBlogListByAction', {
    method: 'post',
    body: {
      pageNum: pageNum.value,
      pageSize: 10,
      action: Number(activeKey.value)
    }
  })
  pageNum.value++
  state.hasMore = data.value?.hasMore as boolean
  state.list = state.list.concat(data.value?.list || [])
}

const setActiveKey = () => {
  state.hasMore = true
  pageNum.value = 1
  state.list = []
  load()
}
load()
</script>

<style lang="less" scoped>
.index-tabs {
  :deep(.ant-tabs-tab) {
    width: 120px;
    height: 50px;
    justify-content: center;
    font-size: 19px;
    line-height: 27px;
    color: #67788a;
    &.ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: #21293c;
      }
    }
  }
  :deep(.ant-tabs-nav) {
    margin-bottom: 0;
  }
  :deep(.ant-tabs-ink-bar) {
    height: 3px;
    background: #21293c;
    border-radius: 12px;
  }
}
</style>
