export type specialItem = {
  content: string
  createTime: string
  html: string
  id: number
  intro: string
  isHtml: boolean
  publishTime: string
  readCount: number
  seq: number
  specialId: number
  status: number
  tags: string
  title: string
  updateTime: string
}

type Result = {
  data: specialItem
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  let params = {
    sectionId: ''
  }
  if (body && body.sectionId) {
    params.sectionId = body.sectionId
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: ' 请输入sectionId'
      })
    )
  }
  const res: Result = await $fetch('/special/getSectionDetail', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: params
  })
  return res.data || []
})
