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
        <!-- config.public.ASSETS_URL +  -->
        <img :src="item.url" alt="banner" @click="jump(item)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
let { data } = await useFetch('/api/site/getBannerList')
const config = useRuntimeConfig()
const state = reactive({
  bannerList: []
})
state.bannerList = data.value?.list as []

const jump = (item: { targetUrl: string }) => {
  if (!item.targetUrl) return
  window.open(item.targetUrl)
}
</script>
