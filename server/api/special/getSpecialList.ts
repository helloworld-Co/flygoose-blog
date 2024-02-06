export type Result = {
  data: {
    hasMore: boolean
    list: []
  }
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const formData = new FormData()
  const body = await readBody(event)
  if (body && body.pageSize && body.pageNum) {
    formData.append('pageSize', body.pageSize)
    formData.append('pageNum', body.pageNum)
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
    body: formData
  })
  return res.data || []
})
