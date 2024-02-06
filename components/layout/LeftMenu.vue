<!--
 * @Author: Shaoli
 * @Date: 2023-02-12 12:31:28
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-02-26 21:40:18
 * @Description: 左侧菜单
-->
<template>
  <div class="left-menu">
    <div class="left-menu-fixed">
      <NuxtLink
        v-for="item in menus"
        :key="item.name"
        class="menu-item"
        :to="item.url"
        active-class="active"
      >
        <i :class="`iconfont ${item.icon}`"></i>
        <span class="name">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 菜单列表数据
const menus = ref<Record<string, string>[]>([
  {
    icon: 'icon-home',
    name: '首页',
    url: '/'
  },
  {
    icon: 'icon-blog',
    name: '博客',
    url: '/blog'
  },
  {
    icon: 'icon-zhuanlan',
    name: '专栏',
    url: '/specialColumn'
  },
  {
    icon: 'icon-data',
    name: '关于',
    url: '/profile'
  }
])
</script>

<style lang="less">
.content-body {
  flex: 1;
  max-width: calc(100% - 660px);
}
.left-menu {
  width: 330px;
  border-right: 1px solid #ececec;
  padding: 24px 0 24px 50px;
  flex-shrink: 0;
}
.left-menu-fixed {
  padding: 24px 0;
  position: fixed;
  top: 60px;
  .menu-item {
    display: flex;
    align-items: center;
    height: 51px;
    border-radius: 40px;
    font-size: 19px;
    color: #21293c;
    transition: all 0.3s;
    margin-bottom: 8px;
    padding: 0 20px;
    &:hover {
      background: rgba(75, 88, 124, 0.04);
    }
    &.active {
      color: #f92741;
      .iconfont {
        color: #f92741;
      }
    }

    .iconfont {
      font-size: 22px;
      color: #21293c;
      margin: 0 22px;
    }
  }
}

@media screen and (min-width: 1280px) and (max-width: 1365px) {
  .normal .search-input {
    max-width: none !important;
    position: absolute !important;
    left: 180px !important;
    width: calc(100% - 510px) !important;
  }
  .name {
    display: none;
  }
  .nav-title {
    display: none;
  }
  .normal .home-link {
    left: 108px !important;
  }
  .left-menu-fixed {
    left: 74px;
    z-index: 10000;
  }
  .left-menu {
    width: 180px;
  }
  .content-body {
    max-width: calc(100% - 510px);
  }
}
@media screen and (min-width: 816px) and (max-width: 1279px) {
  .normal .search-input {
    max-width: none !important;
    position: absolute !important;
    left: 100px !important;
    width: calc(100% - 100px) !important;
  }
  .name {
    display: none;
  }
  .nav-title {
    display: none;
  }
  .normal .home-link {
    left: 38px !important;
  }
  .left-menu {
    width: 100px;
  }
  .left-menu-fixed {
    left: 20px;
    z-index: 10000;
  }
  .left-menu-fixed .menu-item {
    padding: 0;
  }
  .content-body {
    max-width: calc(100% - 430px);
  }
}

@media screen and (min-width: 1117px) {
  .normal .search-input {
    width: calc(100% - 430px) !important;
  }
}

@media screen and (max-width: 1116px) {
  .footer {
    display: none;
  }
  .content-body {
    max-width: calc(100% - 100px) !important;
  }
  .index-banner {
    width: 100% !important;
  }
  .specicalNav .search-input {
    max-width: none !important;
    position: absolute !important;
    left: 330px !important;
    width: calc(100% - 330px) !important;
  }
}
@media screen and (max-width: 816px) {
  .content-body {
    max-width: 100% !important;
  }
  .specicalNav .search-input,
  .normal .search-input {
    position: absolute !important;
    left: 90px !important;
    width: calc(100% - 90px) !important;
  }

  .nav-title {
    display: none;
  }
  .home-link {
    left: 30px !important;
  }
  .left-menu {
    position: fixed;
  }
  .left-menu-fixed {
    display: flex;
    bottom: 0;
    top: calc(100% - 80px);
    z-index: 10000;
    padding: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #fbfcfc 2.66%, #f6f7f8 60.11%);
  }
  .left-menu-fixed .menu-item {
    display: flex;
    flex-direction: column;
    padding: 0;
    flex: 1;
    font-size: 10px;
    color: #cfd9de;
    padding-top: 10px;
  }

  .left-menu-fixed .menu-item.active {
    color: #273b4a;
  }
  .left-menu-fixed .menu-item.active .iconfont {
    color: #273b4a;
  }
  .left-menu-fixed .menu-item .iconfont {
    color: #cfd9de;
    font-size: 20px;
  }
  .left-menu-fixed .menu-item:hover {
    background: none;
  }
}
</style>
