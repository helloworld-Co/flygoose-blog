type Result = {
  data: {
    blog: {
      content: string
      title: string
      updateTime: string
    }
    list: any[]
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const formData = new FormData()
  const body = await readBody(event)
  if (body && body.id) {
    formData.append('id', body.id)
  } else {
    return sendError(
      event,
      createError({
        statusCode: 200,
        statusMessage: '请输入参数'
      })
    )
  }
  const res: Result = await $fetch('/blog/getBlogDetail', {
    method: 'post',
    baseURL: config.public.BASE_URL,
    headers: event.context.headers,
    body: formData
  })
  return res.data || []
})
