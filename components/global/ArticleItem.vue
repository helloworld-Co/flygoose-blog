<!--
 * @Author: Shaoli
 * @Date: 2023-02-13 23:10:31
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-03-08 23:30:35
 * @Description: 通用的文章组件
-->
<template>
  <div class="blog-item">
    <div class="blog-content">
      <div class="item-left">
        <NuxtLink
          :to="`/detail/${props.item.id}`"
          class="title single-ellipsis"
          title="C++中static关键字的作用"
        >
          {{ props.item?.title }}
        </NuxtLink>
        <div class="intro multi-ellipsis-2">
          {{ props.item?.intro }}
        </div>
      </div>
      <img v-if="imgSrc" :src="imgSrc" class="item-right" />
    </div>
    <div class="blog-footer flex">
      <div class="name-count">
        <div>{{ props.item?.readCount }} 阅读</div>
        <div class="dot">•</div>
        <div>
          {{ TimeUtil.timeFormat(+new Date(props.item?.publishTime) / 1000) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimeUtil from '@/utils/time'
const props = defineProps<{
  item: {
    title: string
    thumbnail: string
    id: number
    intro: string
    publishedCount: number
    readCount: number
    publishTime: string
  }
}>()

const config = useRuntimeConfig()
// config.public.ASSETS_URL +
const imgSrc = props.item?.thumbnail ? props.item.thumbnail : ''
</script>

<style lang="less" scoped>
.blog-item {
  padding: 18px 24px;
  text-align: left;
  border-bottom: 1px solid #ececec;
  &:last-child {
    border-bottom: none;
  }
  .blog-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 16px;
    width: 100%;
    .item-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
      width: 100px;
      .title {
        color: #21293c;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
        transition: all 0.3s;
        max-width: 100%;
        &:hover {
          color: #1bc47d;
          text-decoration: underline;
        }
      }
      .intro {
        margin: 12px 0 0;
        color: #4b587c;
        font-weight: 400;
        font-size: 13px;
        line-height: 166%;
      }
    }
    .item-right {
      margin-left: 24px;
      width: 120px;
      height: 80px;
      border-radius: 6px;
      cursor: pointer;
      object-fit: cover;
    }
  }

  .blog-footer {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    color: #4b587c;
    .name-count {
      display: flex;
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 100%;
      color: #4b587c;
      .dot {
        margin: 0 10px;
      }
    }
  }
}
</style>
