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
      <div v-if="state.noticeInfo?.content" class="notice">
        <div>公告</div>
        <div class="content">{{ state.noticeInfo?.content }}</div>
      </div>

      <img src="@/assets/images/logo.png" class="logo" />
      <p class="intro">
        {{ state.intro }}
      </p>
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
      <MdCatalog editor-id="preview-only" :scroll-element="scrollElement" />

      <div class="corp-links">
        <a
          class="friend-link"
          v-for="item in links"
          target="_blank"
          rel="nofollow"
          :href="item.url"
          :key="item.id"
          >{{ item.title }}</a
        >
      </div>
      <div>
        <a
          target="_blank"
          rel="nofollow"
          href="https://beian.miit.gov.cn"
          class="beian"
          >{{ state.icp }}</a
        >
        <div>{{ state.copyright }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MdCatalog } from 'md-editor-v3'
let scrollElement: HTMLElement | undefined = undefined
if (process.client) {
  scrollElement = document.documentElement
}

const getList = () => {
  const { data } = useFetch('/api/site/getFriendLinkList', {
    method: 'post',
    body: {}
  })

  links.value = data.value?.list || []
  console.log('links.value', links.value)
}
const links = ref<Record<string, string>[]>([])

const state = reactive({
  intro: '',
  icp: '',
  copyright: '',
  tags: [],
  noticeInfo: {
    content: ''
  }
})
const getDetail = async () => {
  const { data } = await useFetch('/api/site/getSiteInfo', {
    method: 'post',
    body: {}
  })
  state.copyright = data.value?.copyright || ''
  state.intro = data.value?.intro || ''
  state.icp = data.value?.icp || ''
}

const getTags = async () => {
  const { data } = await useFetch('/api/blog/getAllTags', {
    method: 'post',
    body: {}
  })
  state.tags = data.value || []
}
const getNoice = async () => {
  const { data } = await useFetch('/api/site/getNoticeList', {
    method: 'post',
    body: {}
  })
  state.noticeInfo = data.value?.list ? data.value?.list[0] : null
}
getNoice()
getDetail()
getTags()
getList()
</script>

<style lang="less" scoped>
.beian {
  display: block;
  line-height: 17px;
  margin: 6px 0;
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
  padding: 24px 0;
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
  .tags {
    margin: 30px 0 0;
    .title {
      font-size: 19px;
      line-height: 27px;
      color: #21293c;
      margin-bottom: 20px;
    }
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
.notice {
  background-color: rgba(255, 149, 0, 0.1);
  padding: 20px;
  font-size: 16px;
  margin-bottom: 20px;
  .content {
    margin-top: 8px;
    font-size: 12px;
  }
}
</style>
