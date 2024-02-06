import type { Result } from '../special/getSpecialList'
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const formData = new FormData()
  const body = await readBody(event)
  if (body && body.pageNum && body.pageSize) {
    formData.append('pageNum', body.pageNum)
    formData.append('pageSize', body.pageSize)
    formData.append('action', body.action)
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: '请输入参数'
      })
    )
  }
  const res: Result = await $fetch('/blog/getBlogListByAction', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: formData
  })
  return res.data || []
})
