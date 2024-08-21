<!--
 * @Author: Shaoli
 * @Date: 2023-02-13 21:10:03
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-13 22:26:25
 * @Description: 首页banner
-->
<template>
  <div class="index-banner">
    <el-carousel :interval="5000" arrow="always" height="190px">
      <el-carousel-item v-for="item in state.bannerList" :key="item">
        <img
          :src="item.url"
          alt="banner"
          @click="jump(item)"
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
let { data }: any = await request.post('/site/getBannerList')
const state = reactive({
  bannerList: []
})
state.bannerList = data?.list as []

const jump = (item: { targetUrl: string }) => {
  if (!item.targetUrl) return
  window.open(item.targetUrl)
}
</script>
