<template>
  <div class="special-menu">
    <SpecialNav />
  </div>
</template>
<script setup>
import SpecialNav from '@/components/special/specialNav.vue'
</script>
<style scoped lang="less">
.special-menu {
  font-size: 15px;
  margin-top: 60px;
  width: 330px;
  flex-shrink: 0;
  border-right: 1px solid #ececec;
  padding-left: 85px;
}
@media screen and (max-width: 816px) {
  .special-menu {
    display: none;
  }

}
</style>
