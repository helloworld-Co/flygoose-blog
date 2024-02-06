type Result = {
  data: SiteInfo
}
type SiteInfo = {
  copyright: string
  cover: string
  extra: string
  icp: string
  id: number
  intro: string
  slogan: string
  status: number
  title: number
  updateTime: string
}


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res: Result = await $fetch('/site/getSiteInfo', {
    method: 'POST',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers
  }).catch((e) => {
    return new Error(e)
  })
  return res.data || {}
})
