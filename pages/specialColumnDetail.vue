<template>
  <div class="special-detail-container">
    <div class="common-title">
      <i class="iconfont icon-back" @click="goback"></i>
      <div class="title">文章</div>
      <i
        class="iconfont draw"
        style="right: 10px; left: auto"
        @click="showDrawer"
        >&#xe62e;</i
      >
    </div>
    <div class="preview-title">
      {{ state.title }}
    </div>

    <div class="preview-time" >
      {{ dayjs(state.time).format('YYYY-MM-DD hh:mm:ss') }}
      <li style="margin-left: 10px;" >阅读: {{ state.readCount }}</li>
    </div>
    <MdPreview
      editor-id="preview-only"
      :model-value="state.content"
      preview-theme="default"
    />
    <el-drawer v-model="state.drawer" :show-close="false" size="50%">
      <SpecialNav />
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import SpecialNav from '@/components/special/specialNav.vue'

import { useCommon } from '@/stores/index'

import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

definePageMeta({
  layout: 'special-detail-layout'
})
const commonStore = useCommon()
const router = useRouter()
const route = useRoute()
const goback = () => {
  router.go(-1)
}

watch(route, () => {
  getDetail()
})

const state = reactive({
  content: '',
  time: '',
  title: '',
  drawer: false,
  readCount: 0
})

const showDrawer = () => {
  state.drawer = true
}
const getDetail = async () => {
  const { data } = await useFetch('/api/special/getSectionDetail', {
    method: 'post',
    body: {
      sectionId: route.query.id
    }
  })
  commonStore.setCurrentSectionId(route.query.id as string)
  state.content = data.value?.content || ''
  state.title = data.value?.title || ''
  state.time = data.value?.updateTime || ''
  state.readCount = data.value?.readCount || 0
}
getDetail()
</script>

<style lang="less" scoped>
.special-detail-container {
  position: relative;
  width: 100%;
}
.el-drawer__body {
  padding: 32px;
}
@media screen and (min-width: 816px) {
  .draw {
    display: none;
  }
}
</style>
