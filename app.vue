<!--
 * @Author: Shaoli
 * @Date: 2023-01-08 22:35:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-01-15 15:16:11
 * @Description: 请填写文件描述
-->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { getUuid, setUuid } from '@/hooks/useUuid'
// 设置设备唯一标识uuid
const uuid = getUuid()
if (!uuid) {
  setUuid(Math.random().toString())
}
</script>

<style lang="less"></style>
