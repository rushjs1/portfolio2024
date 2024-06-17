export default defineEventHandler(async (event) => {
  const { webhookUrl } = useRuntimeConfig(event)
  const body = await readBody(event)

  const webhookBody = {
    embeds: [{
      title: `Contact Form Submitted - ${body.name}`,
      fields: [
        { name: 'Name', value: body.name },
        { name: 'Email', value: body.email },
        { name: 'Message', value: body.message }
      ]
    }]
  }
  
  try {
    await $fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookBody)
    })
  } catch(e){
    throw createError({
      statusCode: 500,
      statusMessage: 'There was a server error.'
    })
  }

  return { 
    ok: true, 
    body
  }
})
