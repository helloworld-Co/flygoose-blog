<template>
  <div><i class="iconfont" style="margin-right: 12px">&#xe62e;</i>专栏目录</div>
  <ul>
    <li
      v-for="item in specialList"
      :key="item.id"
      :class="{
        active: item.id.toString() === commonStore.$state.currentSectionId
      }"
      @click="jump(item)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { specialItem } from '@/server/api/special/getSpecialDetail'
import { useCommon } from '@/stores/index'
const route = useRoute()
const router = useRouter()
const commonStore = useCommon()
let specialList = ref<specialItem[]>([])
const getSpecialDetail = async () => {
  const { data } = await useFetch('/api/special/getSpecialDetail', {
    method: 'post',
    body: {
      specialId: Number(route.params.id) || Number(route.query.specialId)
    }
  })
  specialList.value = data.value?.list || []
}

const jump = (item: specialItem) => {
  router.push({
    path: '/specialColumnDetail',
    query: {
      specialId: route.params.id || route.query.specialId,
      id: item.id
    }
  })
}
getSpecialDetail()
</script>
<style scoped>
div {
  color: #4b587c;
  margin-bottom: 30px;
}
li {
  padding-left: 10px;
  margin-bottom: 25px;
  cursor: pointer;
}
.active {
  color: #1bc47d;
}
</style>
