export default defineEventHandler(async (event) => {
  //const { webhookUrl } = useRuntimeConfig(event)
  const body = await readBody(event)
  console.log(body)

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
  console.log("foo")
  
  try {
    console.log("bar")
    await $fetch('https://discord.com/api/webhooks/1216523466992259132/Qj9nl3iZLFdwec3OiYBLHHXibV3jVZ3uMI803A_1AJTRUxPs8KL8OGx1KzkPGJKflg7_', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookBody)
    })
  } catch(e){
    console.log('baz')
    console.log(e)

    throw createError({
      statusCode: 500,
      statusMessage: 'There was a server error.'
    })
  }
    console.log('argghg')

  return { 
    ok: true, 
    body
  }
})
