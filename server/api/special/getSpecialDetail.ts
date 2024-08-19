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
  data: {
    list: specialItem[]
    special: Record<string, unknown>
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  let params = {
    specialId: ''
  }
  if (body && body.specialId) {
    params.specialId = body.specialId
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: ' 请输入specialId'
      })
    )
  }
  const res: Result = await $fetch('/special/getSpecialDetail', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: params
  })
  return res.data || []
})
