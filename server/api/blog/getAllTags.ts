
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { data } = await $fetch('/blog/getAllTags', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers
  })
  return data || []
})
