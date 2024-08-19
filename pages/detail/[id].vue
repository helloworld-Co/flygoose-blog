<template>
  <div class="detail">
    <div class="special-detail-container">
      <div class="common-title">
        <i class="iconfont icon-back" @click="goback"></i>
        <div class="title">文章</div>
      </div>
      <div class="preview-title">
        {{ state.title }}
      </div>

      <div class="preview-time">
        {{ dayjs(state.time).format('YYYY-MM-DD hh:mm:ss') }}
      </div>
      <MdPreview
        class="preview"
        editor-id="preview-only"
        :model-value="state.content"
        preview-theme="default"
      />
    </div>

    <div class="blog">
      <div class="title">作者的其他文章</div>
      <div>
        <ArticleItem
          v-for="(item, index) in state.list"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'detail-layout'
})

import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import dayjs from 'dayjs'

const router = useRouter()
const route = useRoute()
const goback = () => {
  router.go(-1)
}
const state = reactive({
  content: '',
  time: '',
  title: '',
  list: []
})

const getDetail = async () => {
  const { data } = await useFetch('/api/blog/getBlogDetail', {
    method: 'post',
    body: {
      id: Number(route.params.id)
    }
  })
  state.content = data.value?.blog.content || ''
  state.time = data.value?.blog.updateTime || ''
  state.title = data.value?.blog.title || ''
  state.list = (data.value?.list as []) || []
}
getDetail()
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
}
.special-detail-container {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #ececec;
}
.blog {
  margin-top: 20px;
  .title {
    font-size: 19px;
    padding: 10px 20px;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
  }
}
</style>
