export default defineEventHandler(async (event) => {
  const { webhookUrl } = useRuntimeConfig(event)
  const body = await readBody(event)

  const webhookBody = {
    embeds: [{
      title: 'Contact Form Submitted',
      fields: [
        { name: 'Name', value: body.name },
        { name: 'Email', value: body.email },
        { name: 'Message', value: body.message }
      ]
    }]
  }
  
  await $fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: webhookBody
  })

  return { 
    ok: true, 
    body
  }
})
