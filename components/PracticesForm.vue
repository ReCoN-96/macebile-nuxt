<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toFormValidator } from '@vee-validate/zod'
import * as zod from 'zod'
const validationSchema = toFormValidator(
  zod.object({
    nom: zod.string().nonempty('Le champ est requis').min(4, { message: 'Too short' }),
    email: zod.string().nonempty('Le champ est requis').email({ message: 'Must be a valid email' }),
    message: zod.string().nonempty('Le champ est requis').min(4, { message: 'Too short' }),
  }),
)
const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: nom } = useField('nom')
const { value: email } = useField('email')
const { value: message } = useField('message')
const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="w-[900px] h-[140px] background-form p-6 flex flex-col justify-between">
    <p class="text-white font-display text-[22px]">
      Laissez vos informations de contact et soyez recontacté rapidement !
    </p>
    <form class="flex justify-between" @submit="onSubmit">
      <div class="flex flex-col w-[230px]">
        <input v-model="nom" placeholder="Nom" class="bg-[unset] border-[1px] border-grey h-10 text-grey px-2" name="nom" type="">
        <span class="text-[#DC143C] text-[12px]"> {{ errors.nom }}</span>
      </div>
      <div class="flex flex-col w-[230px]">
        <input v-model="email" placeholder="Email" class="bg-[unset] border-[1px] border-grey h-10 text-grey px-2" name="email" type="email">
        <span class="text-[#DC143C] text-[12px]"> {{ errors.email }}</span>
      </div>
      <div class="flex flex-col w-[230px]">
        <input v-model="message" placeholder="Message" class="bg-[unset] border-[1px] border-grey h-10 text-grey px-2" name="message" type="">
        <span class="text-[#DC143C] text-[12px]">{{ errors.message }}</span>
      </div>
      <button class="h-10 bg-secondary text-white px-[25px] font-display">
        ENVOYER
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.background-form {
  -webkit-backdrop-filter: blur(var(--glass-blur,40px));
  backdrop-filter: blur(var(--glass-blur,40px));
  background-color:rgba(0,0,0,0.4);
}
</style>
