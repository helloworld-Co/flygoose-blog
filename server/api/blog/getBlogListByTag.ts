import type { Result } from '../special/getSpecialList'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  let params = {
    pageNum:'',
    pageSize:'',
    name:''
  }
  if (body && body.pageNum && body.pageSize && body.name) {
    params.pageNum = body.pageNum
    params.pageSize = body.pageSize
    params.name = body.name
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: '请输入参数'
      })
    )
  }
  const res: Result = await $fetch('/blog/getBlogListByTag', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: params
  })
  return res.data || []
})
