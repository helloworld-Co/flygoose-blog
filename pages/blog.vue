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
const getTypeList = async () => {
  const { data } = await useFetch('/api/blog/getCateList', {
    method: 'post'
  })
  state.cateId = data.value?.data ? data.value.data[0].id : null
  state.typeList = data.value?.data || []
  load()
}

getTypeList()
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
  if (!state.hasMore) return
  const { data } = await useFetch('/api/blog/getCateBlogList', {
    method: 'post',
    body: {
      pageNum: pageNum.value,
      pageSize: 10,
      cateId: state.cateId
    }
  })
  pageNum.value++
  state.hasMore = data.value?.hasMore as boolean
  state.list = state.list.concat(data.value?.list || [])
}
</script>

<style scoped></style>
