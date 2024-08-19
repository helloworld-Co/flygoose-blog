export type Result = {
  data: {
    hasMore: boolean
    list: []
  }
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  let params ={
    pageSize: '',
    pageNum: ''
  }
  if (body && body.pageSize && body.pageNum) {
    params.pageSize = body.pageSize
    params.pageNum = body.pageNum
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: '请增加参数'
      })
    )
  }
  const res: Result = await $fetch('/special/getSpecialList', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: params
  })
  return res.data || []
})
