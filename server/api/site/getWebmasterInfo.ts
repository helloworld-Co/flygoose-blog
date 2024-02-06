export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res = await $fetch('/site/getWebmasterInfo', {
    method: 'POST',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers
  }).catch((e) => {
    return new Error(e)
  })
  return res || {}
})
