type Result = {
  data: {
    total: number
    list: any[]
  }
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res: Result = await $fetch('/site/getFriendLinkList', {
    method: 'POST',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers
  }).catch((e) => {
    return new Error(e)
  })
  return res.data || {}
})
