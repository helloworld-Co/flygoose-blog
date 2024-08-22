<template>
  <div>
    <BlogTypes
      :type-list="state.typeList"
      :active-type="state.cateId"
      @change-active-type="changeActiveType"
    />
    <div
      v-infinite-scroll="load"
      :infinite-scroll-immediate="false"
      :infinite-scroll-distance="20"
    >
      <ArticleItem
        v-for="(item, index) in state.list"
        :key="index"
        :item="item"
      />
      <el-empty v-if="!state.list.length" description="暂无数据"></el-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
const getTypeList = async () => {
  const { data }: any = await request.post('/blog/getCateList')
  state.cateId = data ? data[0].id : null
  state.typeList = data || []
  load()
}

const changeActiveType = (v: number) => {
  state.cateId = v
  pageNum.value = 1
  state.list = []
  state.hasMore = true
  load()
}

const state = reactive<Record<string, any>>({
  hasMore: true,
  cateId: null,
  list: [],
  typeList: []
})
const pageNum = ref<number>(1)
const load = async () => {
  if (state.cateId == null) return
  if (!state.hasMore) return
  const { data }: any = await request.post('/blog/getCateBlogList', {
    pageNum: pageNum.value,
    pageSize: 10,
    cateId: state.cateId
  })
  pageNum.value++
  state.hasMore = data?.hasMore as boolean
  state.list = state.list.concat(data?.list || [])
}
getTypeList()
</script>

<style scoped></style>
