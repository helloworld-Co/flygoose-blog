import type { Result } from '../special/getSpecialList'
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  let params = {
    pageNum:'',
    pageSize:'',
    cateId:null
  }
  if (body && body.pageNum && body.pageSize) {
    params.pageNum = body.pageNum
    params.pageSize = body.pageSize
    params.cateId = body.cateId
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: '请输入参数'
      })
    )
  }
  const res: Result = await $fetch('/blog/getCateBlogList', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: params
  })
  return res.data || []
})
