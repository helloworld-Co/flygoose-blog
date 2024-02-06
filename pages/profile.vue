<!--
 * @Author: Shaoli
 * @Date: 2023-02-26 16:09:43
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-26 17:33:47
 * @Description: 请填写文件描述
-->
<template>
  <div class="profile-container">
    <div class="header">
      <img :src="headerSrc" class="logo" />
      {{ userInfo.nicker }}
    </div>
    <div class="text">
      {{ userInfo.intro }}
    </div>
    <div>
      <p>关于工作</p>
      <div>{{ userInfo.job }}</div>
    </div>
    <div>
      <p>网站宗旨</p>
      <div>{{ userInfo.slogan }}</div>
    </div>

    <div>
      <p>联系方式</p>
      <ul>
        <li>
          邮箱：<span style="color: #1bc47d">{{ userInfo.email }}</span>
        </li>
        <li>微信：{{ userInfo.wechat }}</li>
      </ul>
    </div>
    <div>
      <p>赞助支持</p>
      <img :src="imgSrc" class="rewardCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
const imgSrc = computed(() => {
  return userInfo.value.rewardCode ? userInfo.value.rewardCode : ''
})
// config.public.ASSETS_URL +
const headerSrc = computed(() => {
  return userInfo.value.avatar ? userInfo.value.avatar : ''
})
</script>
<style lang="less" scoped>
.rewardCode {
  width: 150px;
  height: 150px;
}
.profile-container {
  width: 100%;
  padding: 40px 36px;
  color: #4b587c;

  div > p {
    font-size: 18px;
    margin-bottom: 12px;
    margin-top: 48px;
  }
  .header {
    margin-bottom: 20px;
    font-size: 34px;
  }
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 15px;
  }

  .text {
    font-size: 15px;
    line-height: 162.2%;
    margin-bottom: 36px;
  }

  .contact-list {
    display: flex;
    align-items: center;

    .item {
      margin-right: 20px;
      position: relative;

      &:hover {
        .code-box {
          display: block;
        }
      }

      .icon {
        height: 24px;
        width: 24px;
        line-height: 24px;
        border-radius: 50%;
      }
    }

    .code-box {
      position: absolute;
      width: 120px;
      height: 120px;
      padding: 10px;
      left: -50px;
      top: 42px;
      background: #ffffff;
      border: 1px solid #21293c;
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
        0px 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      z-index: 1;
      display: none;

      &::before {
        content: '';
        position: absolute;
        top: -13px;
        left: 53px;
        width: 0;
        height: 0;
        border: solid 8px;
        border-color: transparent transparent #fff transparent;
        z-index: 2;
      }

      &:after {
        content: '';
        position: absolute;
        top: -13px;
        left: 55px;
        width: 0;
        height: 0;
        border: solid 6.8px;
        border-color: transparent transparent #21293c transparent;
        z-index: 1;
      }

      .code {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
