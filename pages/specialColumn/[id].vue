<template>
  <div class="special-detail-container">
    <div class="common-title">
      <i class="iconfont icon-back" @click="goback"></i>
      <div class="title">专栏</div>
    </div>
    <div class="chapter-list">
      <div v-for="(item, index) in specialList" :key="item.id" class="item">
        <NuxtLink
          :to="`/specialColumnDetail?specialId=${route.params.id}&id=${item.id}`"
          class="single-ellipsis title"
        >
          {{ index + 1 }} | {{ item.title }}</NuxtLink
        >
        <div class="time">
          {{ dayjs(item.publishTime).format('YYYY-MM-DD hh:mm:ss') }}
        </div>
      </div>
      <el-empty v-if="!specialList.length" description="暂无数据"></el-empty>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import type { specialItem } from '@/server/api/special/getSpecialDetail'

const router = useRouter()
const route = useRoute()
const goback = () => {
  router.go(-1)
}

let specialList = ref<specialItem[]>([])

const getSpecialDetail = async () => {
  const { data } = await useFetch('/api/special/getSpecialDetail', {
    method: 'post',
    body: {
      specialId: Number(route.params.id)
    }
  })
  specialList.value = data.value?.list || []
}

getSpecialDetail()
</script>

<style lang="less" scoped>
.special-detail-container {
  .chapter-list {
    .item {
      height: 78px;
      padding: 12px 24px;
      transition: all 0.3s;
      border-bottom: 1px solid #edeeef;
      &:hover {
        background: rgba(75, 88, 124, 0.04);
      }
      .title {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #21293c;
        padding-bottom: 16px;
        display: flex;
      }
      .time {
        font-size: 13px;
        color: #4b587c;
        line-height: 100%;
      }
    }
  }
}
</style>
