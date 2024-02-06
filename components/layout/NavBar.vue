<!--
 * @Author: Shaoli
 * @Date: 2023-02-11 21:53:10
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-19 15:20:41
 * @Description: 头部导航栏
-->
<template>
  <div class="nav-bar visible">
    <div class="nav-content-box">
      <NuxtLink class="home-link" to="/">
        <div class="header">
          <img :src="headerSrc" class="logo" />
          <span class="nav-title">
            {{ userInfo?.nicker }}
          </span>
        </div>
      </NuxtLink>
      <a-input
        v-model:value="searchVal"
        class="search-input"
        placeholder="探索码农社"
        allow-clear
        @keyup.enter="jumpSearch"
      >
        <template #prefix>
          <i class="iconfont icon-Search1" />
        </template>
      </a-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
const searchVal = ref<string>('')
const router = useRouter()
const jumpSearch = () => {
  router.push({
    path: '/search',
    query: {
      word: searchVal.value
    }
  })
}
let { data } = await useFetch('/api/site/getWebmasterInfo')
let userInfo = ref({
  job: '',
  intro: '',
  email: '',
  wechat: '',
  slogan: '',
  rewardCode: '',
  avatar: '',
  nicker: ''
})
userInfo.value = data.value?.data || {}

const config = useRuntimeConfig()

// config.public.ASSETS_URL +
const headerSrc = computed(() => {
  return userInfo.value?.avatar ? userInfo.value.avatar : ''
})
</script>

<style lang="less" scoped>
.nav-bar {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;
  position: relative;
  &.visible {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s ease-in-out;
  }
  .nav-content-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    max-width: 1366px;
    margin: auto;
  }
  .home-link {
    position: absolute;
    top: 12px;
    left: 88px;
    font-size: 20px;
    color: #000000;
    .header {
      display: flex;
      align-items: center;
    }
    .logo {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      margin-right: 9px;
    }
  }

  .search-input {
    max-width: 700px;
    height: 42px;
    background: #f2f6f9;
    border: none;
    border-radius: 20px;
    padding: 12px 18px;
    :deep(.ant-input) {
      background: transparent;
      padding-left: 14px;
      font-size: 15px;
      &::placeholder {
        color: #67788a;
        font-size: 15px;
      }
    }
    :deep(.anticon.ant-input-clear-icon) {
      font-size: 18px;
    }
  }
}
</style>
