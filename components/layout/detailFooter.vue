<!--
 * @Author: Shaoli
 * @Date: 2023-02-12 12:31:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-26 17:44:03
 * @Description: 右侧footer
-->
<template>
  <div class="footer">
    <div class="footer-fixed">
      <div class="header">
        <div>
          <img :src="imgSrc" />
        </div>
        <div>
          <div class="name">{{ userInfo.nicker }}</div>
          <div class="job">{{ userInfo.job }}</div>
        </div>
      </div>
      <div class="intro">{{ userInfo.intro }}</div>

      <div class="blog-item">
        <div class="title">索引目录</div>
        <MdCatalog editor-id="preview-only" :scroll-element="scrollElement" class="md-catalog"/>
        <div class="tags">
          <div class="title">热门搜索</div>
          <div class="tag-list">
            <nuxt-link
              v-for="item in state.tags"
              :key="item"
              :to="`/tag/${item}`"
              class="item"
            >{{ item }}</nuxt-link
            >
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { MdCatalog } from 'md-editor-v3'
import request from '@/utils/request'
let scrollElement: HTMLElement | undefined = undefined
if (process.client) {
  scrollElement = document.documentElement
}

const { data }: any = await request.post('/site/getWebmasterInfo')
let userInfo = ref({
  job: '',
  intro: '',
  avatar: '',
  nicker: ''
})
userInfo.value = data || {}

const imgSrc = computed(() => {
  return userInfo.value?.avatar ? userInfo.value.avatar : ''
})

const state = reactive({
  intro: '',
  icp: '',
  copyright: '',
  tags: []
})

const getTags = async () => {
  const { data }: any = await request.post('/blog/getAllTags')
  state.tags = data || []
}
getTags()
</script>

<style lang="less" scoped>
.intro {
  margin: 12px 0 44px 0;
  color: #67788a;
  font-size: 15px;
}
.header {
  display: flex;
  gap: 8px;
}
.name {
  font-size: 20px;
  color: #000;
  margin-bottom: 8px;
}
.job {
  color: #4b587c;
  font-size: 13px;
}
img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
:deep(.md-editor-catalog) {
  color: #67788a;
}
.footer {
  width: 330px;
  border-left: 1px solid #ececec;
  padding-left: 20px;
  flex-shrink: 0;
}
.footer-fixed {
  width: 300px;
  padding: 32px 0;
  position: fixed;
  top: 60px;
  .logo {
    height: 36px;
  }
  .intro {
    font-size: 13px;
    line-height: 162.2%;
    text-align: justify;
    color: #21293c;
    margin-top: 12px;
  }
  .corp-links {
    margin-top: 48px;
    color: #67788a;
    font-size: 12px;
    a {
      color: #67788a;
      &:hover {
        color: #f92741;
      }
    }
    .friend-link {
      margin-right: 8px;
    }
  }

  .blog-item {
    padding: 10px 0;
    max-height: calc(100vh - 200px); // 根据视口高度计算
    overflow: auto; // 显示滚动条，根据内容决定是否显示

    /* 隐藏默认的滚动条样式 */
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // IE and Edge

    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, and Opera
    }

    .title {
      font-size: 19px;
      line-height: 27px;
      color: #21293c;
      margin-bottom: 20px;
    }

    .md-catalog {
      max-height: 500px;
      overflow: auto;
    }

    .tags {
      margin: 30px 0 0;

      .tag-list {
        display: flex;
        flex-wrap: wrap;
      }
      .item {
        padding: 10px 16px;
        font-size: 14px;
        color: #4b587c;
        margin: 0 8px 8px 0;
        background: #f2f6f9;
        border-radius: 6px;
      }
    }
  }

}
</style>
