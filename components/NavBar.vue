<script setup lang="ts">
import PhoneIcon from './icons/Phone.vue'
</script>

<template>
  <div class="w-full h-24 relative font-display">
    <div class="w-full flex justify-center items-center h-full">
      <ul class="relative h-full flex items-center justify-around text-white text-[14px]">
        <img src="~/assets/images/macebile_logo_without_sub.svg" width="100" height="86" class="absolute left-[-300px] hidden lg:block">
        <img src="~/assets/images/macebile_logo_without_sub.svg" width="70" class="mr-6">
        <li class="mr-4">
          ACCUEIL
        </li>
        <li class="mr-4">
          SERVICES
        </li>
        <li class="mr-4">
          À PROPOS
        </li>
        <li class="mr-4">
          CONTACT
        </li>
      </ul>
    </div>
    <div class="call-nav flex flex-col justify-center items-center font-bold text-white hidden lg:block">
      <p class="text-[12px] mb-2">
        POUR UN DEVIS GRATUIT!
      </p>
      <div class="flex items-center">
        <PhoneIcon />
        <a href="+33672880507" class="text-[24px] ml-1">06-72-88-05-07</a>
      </div>
    </div>
  </div>
  <!-- <NavBarMenuModal :is-open="isOpen" @close="isOpen = false" /> -->
</template>

<style lang="scss" scoped>
.call-nav {
  position: absolute;
  right: 0;
  top: 0;
  background-color: theme("colors.primary");
  width: 25%;
  height: 100%;
  -webkit-clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 7% 50%, 0% 0%);
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 7% 50%, 0% 0%);
}
</style>
