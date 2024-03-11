<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod'

const toast = useToast()
const isDisabled = ref(false)

const { meta, values, errors, defineField, resetForm } = useForm({
  validationSchema: toTypedSchema(
  z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty().email(),
    message: z.string().nonempty()
  })
 )
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [message, messageAttrs] = defineField('message')


async function submit(){
  isDisabled.value = true

  try {
    /* const res = await $fetch('/api/contact', {
      method: 'POST',
      body: values,
      headers: {
        'Content-Type': 'application/json'
      }
    }) */

    const { ok } = await useFetch('/api/contact', {
      method: 'POST',
      body: values,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(ok){
      toast.add({
        title: 'Thank you for your submission!',
        description: 'I will contact you about your inquiry as soon as I can.',
        timeout: 10000,
        icon: "i-heroicons-check-circle-16-solid",
        callback: () => {
          isDisabled.value = false
        }
      })

      resetForm()
    }
  }
  catch(error){
    toast.add({
      title: 'Error submitting inquiry.',
      description: 'Please contact me via a different method, or try again later. <br /> <br/> I apologize for the inconvience.',
      timeout: 10000,
      icon: "i-heroicons-x-circle-16-solid",
      color: 'red',
      callback: () => {
        isDisabled.value = false
      }
    })
    console.error('There was an error', error)
  }
} 
</script>

<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex items-center space-x-4 w-full">
      <BackButton />
      <span class="text-5xl font-bold"> Contact </span>
    </div>
      <div class="w-full p-6 rounded-lg flex-col space-y-4 backdrop-blur-sm bg-white/10 ring-[1px] ring-white/30 mt-6 mb-20 flex items-start">
      <form @submit.prevent="submit" action="#" method="post" class="space-y-4 w-full">
        <div class="space-y-1">
          <label for="name">Full Name*</label>
          <input v-model="name" v-bind="nameAttrs" id="name" class="bg-white/20 ring-[1px] ring-white/30 rounded-md w-full p-2"/>
          <span class="text-xs text-red-500 tracking-wider">{{ errors.name }}</span>
        </div>

        <div class="space-y-1">
          <label for="email">Email*</label>
          <input v-model="email" v-bind="emailAttrs" id="email" class="bg-white/20 ring-[1px] ring-white/30 rounded-md w-full p-2"/>
          <span class="text-xs text-red-500 tracking-wider">{{ errors.email }}</span>
        </div>

        <div class="space-y-1">
          <label for="message"> Message* </label>
          <textarea v-model="message" v-bind="messageAttrs" name="message" id="message" rows="4" class="w-full bg-white/20 ring-[1px] ring-white/30 rounded-md p-2"></textarea>
          <span class="text-xs text-red-500 tracking-wider">{{ errors.message }}</span>
        </div>
        <div class="flex items-end justify-end w-full">
          <button type="submit" class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md ring-[1px] ring-white/30 disabled:cursor-not-allowed" :disabled="isDisabled || meta.valid === false">
            Submit
          </button>
        </div>
      </form>
      </div>
  </div>
</template>
