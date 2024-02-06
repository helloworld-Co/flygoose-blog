<!--
 * @Author: Shaoli
 * @Date: 2023-03-08 22:08:21
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-03-08 23:34:23
 * @Description: 通用的专栏组件
-->
<template>
  <div class="special-item">
    <img :src="imgSrc" class="special-cover" title="" />
    <div class="special-content">
      <NuxtLink
        :to="`/specialColumn/${props.item.id}`"
        class="title single-ellipsis"
      >
        {{ props.item.title }}
      </NuxtLink>
      <div class="intro single-ellipsis">
        {{ props.item.intro }}
      </div>
      <div class="name-count">
        <div>{{ props.item.publishedCount }}章节</div>
        <div class="dot">•</div>
        <div>{{ props.item.readCount }}人阅读</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  item: {
    title: string
    cover: string
    id: number
    intro: string
    publishedCount: number
    readCount: number
  }
}>()

const config = useRuntimeConfig()
const normalImg = '@/assets/images/banner.png'
// config.public.ASSETS_URL +
const imgSrc = props.item.cover ? props.item.cover : normalImg
</script>

<style lang="less" scoped>
.special-item {
  padding: 16px 24px;
  text-align: left;
  border-bottom: 1px solid #edeeef;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  .special-cover {
    margin-right: 14px;
    width: 84px;
    height: 84px;
    border-radius: 12px;
    cursor: pointer;
    object-fit: cover;
  }
  .special-content {
    overflow: hidden;
    width: 100%;
    .title {
      color: #21293c;
      font-weight: 500;
      font-size: 19px;
      line-height: 27px;
      color: #21293c;
      cursor: pointer;
      transition: all 0.3s;
      max-width: 100%;
      &:hover {
        color: #1bc47d;
        text-decoration: underline;
      }
    }
    .intro {
      margin: 6px 0 9px;
      color: #67788a;
      font-size: 14px;
      line-height: 20px;
    }
    .name-count {
      display: flex;
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 100%;
      color: #67788a;
      .dot {
        margin: 0 10px;
      }
    }
  }
}
</style>
