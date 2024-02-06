<!--
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-03-11 23:57:32
 * @Description: 请填写文件描述
-->
<template>
  <NavBar class="normal" />
  <div class="content-containter">
    <LeftMenu />
    <NuxtPage class="content-body" />
    <DetailFooter />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/layout/NavBar.vue'
import LeftMenu from '@/components/layout/LeftMenu.vue'
import DetailFooter from '@/components/layout/detailFooter.vue'
</script>

<style lang="less" scoped>
.content-containter {
  padding-top: 60px;
  max-width: 1366px;
  height: calc(100% - 60px);
  min-height: calc(100vh - 70px);
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>
