type cate = {
  color: string
  createTime: string
  font: string
  icon: string
  id: number
  name: string
  seq: number
  status: number
  updateTime: string
}

type Result = {
  data: cate[]
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res: Result = await $fetch('/blog/getCateList', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers
  })
  return res || []
})
