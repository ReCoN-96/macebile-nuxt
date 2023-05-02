<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

onMounted(() => {
  const { width } = useWindowSize()
  const root = window!.document.documentElement
  root.style.setProperty('--durationPartners', `${width.value * 0.02}s`)
})
</script>

<template>
  <div class="h-36 lg:flex justify-around background-partners relative hidden ">
    <img class="" src="@/assets/images/holloco.svg" width="250">
    <img class="" src="@/assets/images/garantie.png">
    <img class="" src="@/assets/images/velux.svg" width="250">
  </div>
  <div class="overflow-hidden background-partners lg:hidden">
    <div class="w-[calc(6*100vw)] flex">
      <div class="h-36 flex lg:justify-around relative w-[calc(3*100vw)] first-partners">
        <div class="w-screen h-full flex items-center justify-center ">
          <img class="" src="@/assets/images/holloco.svg" width="250">
        </div>
        <div class="w-screen h-full flex items-center justify-center second-partners">
          <img class="hidden lg:block" src="@/assets/images/garantie.png" width="200">
          <img class="lg:hidden" src="@/assets/images/garantie.png" width="150">
        </div>
        <div class="w-screen h-full flex items-center justify-center third-partners">
          <img class="" src="@/assets/images/velux.svg" width="250">
        </div>
      </div>
      <div class="h-36 flex lg:justify-around relative w-[calc(3*100vw)] first-partners">
        <div class="w-screen h-full flex items-center justify-center ">
          <img class="" src="@/assets/images/holloco.svg" width="250">
        </div>
        <div class="w-screen h-full flex items-center justify-center second-partners">
          <img class="hidden lg:block" src="@/assets/images/garantie.png" width="200">
          <img class="lg:hidden" src="@/assets/images/garantie.png" width="150">
        </div>
        <div class="w-screen h-full flex items-center justify-center third-partners">
          <img class="" src="@/assets/images/velux.svg" width="250">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.background-partners {
  background: linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);
  background-blend-mode: screen;
}

.first-partners {
    animation: var(--durationPartners) linear slideFirst infinite;
}

@keyframes slideFirst {
  from { transform: translateX(0) }
  to   { transform: translateX(calc(-100vw*3)) }
}
</style>
