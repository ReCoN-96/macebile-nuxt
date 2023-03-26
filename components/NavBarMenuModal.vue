<script lang="ts" setup>
import CloseIcon from '~/components/icons/Close.vue'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div v-if="props.isOpen" class="h-screen w-screen fixed bg-black bg-opacity-50 z-50 ">
    <div class="w-[250px] absolute right-0 bg-white h-full">
      <CloseIcon @click="emit('close')" />
      <ul>
        <li>lol</li>
      </ul>
      <div />
    </div>
  </div>
</template>

<style lang="scss">
</style>
