<template>
  <div class="blog-types">
    <div
      class="prev-btn"
      @mousedown="scrollLeft"
      @mouseup="stopScroll"
      @mouseleave="stopScroll"
    >
      <i class="iconfont icon-arrow_left"></i>
    </div>
    <div
      class="next-btn"
      @mousedown="scrollRight"
      @mouseup="stopScroll"
      @mouseleave="stopScroll"
    >
      <i class="iconfont icon-arrow_right"></i>
    </div>
    <div id="tab">
      <div
        v-for="item in props.typeList"
        :key="item.id"
        class="item"
        :class="{ active: item.id === props.activeType }"
        @click="checkType(item.id)"
      >
        <i
          class="iconfont"
          :class="item.font"
          :style="{ color: item.color || '#1bc47d' }"
        ></i>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  activeType: number
  typeList: any[]
}>()
let timer: any = null
const stopScroll = () => {
  clearInterval(timer)
}
const scrollLeft = () => {
  stopScroll()
  timer = setInterval(() => {
    document.getElementById('tab')!.scrollLeft -= 10
  }, 100)
}
const scrollRight = () => {
  stopScroll()
  timer = setInterval(() => {
    document.getElementById('tab')!.scrollLeft += 10
  }, 100)
}
const activeType = ref(props.activeType)
const emit = defineEmits(['changeActiveType'])
const checkType = (id: number) => {
  activeType.value = id
  emit('changeActiveType', id)
}
</script>

<style lang="less" scoped>
#tab {
  display: flex;
  overflow: auto;
  height: 100%;
  align-items: center;
  padding-top: 6px;
}
.blog-types {
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  height: 72px;
  background: #fff;
  border-bottom: 1px solid #ececec;
  padding: 0 40px;
  position: relative;
  .item {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #21293c;
    padding: 10px 20px;
    height: 48px;
    border-radius: 90px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: rgba(75, 88, 124, 0.08);
    }
    &.active {
      background: rgba(75, 88, 124, 0.08);
    }
    .iconfont {
      font-size: 30px;
      color: #1bc47d;
      margin-right: 12px;
    }
  }
  .prev-btn,
  .next-btn {
    width: 40px;
    height: 70px;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    cursor: pointer;
    .iconfont {
      color: #21293c;
      font-size: 30px;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 50%;
      text-align: center;
    }
    .iconfont:hover {
      background: #4b587c14;
    }
  }
  .next-btn {
    background: linear-gradient(
      271.39deg,
      #ffffff 62.1%,
      rgba(255, 255, 255, 0) 98.81%
    );
    right: 0;
  }
  .prev-btn {
    background: linear-gradient(
      91.39deg,
      #ffffff 62.1%,
      rgba(255, 255, 255, 0) 98.81%
    );
    left: 0;
  }
}
</style>
