<!--
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-03-11 23:57:32
 * @Description: 请填写文件描述
-->
<template>
  <NavBar class="specicalNav" />
  <div class="content-containter">
    <SpecialMenu />
    <NuxtPage class="content-body" />
    <DetailFooter />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/layout/NavBar.vue'
import DetailFooter from '@/components/layout/detailFooter.vue'
import SpecialMenu from '@/components/layout/specialMenu.vue'
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
