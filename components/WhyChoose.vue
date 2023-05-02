<script setup lang="ts">
</script>

<template>
  <div class="mt-16 lg:mt-0 lg:min-h-[700px] w-full flex justify-around flex-col background-container relative px-[10px] lg:px-0">
    <h2 class="text-[32px] lg:text-[64px] font-display text-center">
      Pourquoi choisir <span class="text-primary border-b-[4px] border-primary">MACEBILE?</span>
    </h2>
    <div>
      <!-- PART 1 -->
      <div class="flex flex-col lg:flex-row mt-[32px] lg:mt-0 lg:items-center justify-center py-4">
        <div class="flex items-center justify-start lg:w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/poigne.svg">
          </div>
          <h3 class="lg:text-[32px] text-[22px] font-display ml-8">
            Notre <span class="font-[700]">Honnêteté</span>
          </h3>
        </div>
        <p class="max-w-[600px] mt-4 lg:mt-0 lg:ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
      <!-- PART 2 -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-center py-4">
        <div class="flex items-center justify-start lg:w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/baseline-thumb-up.svg">
          </div>
          <h3 class="lg:text-[32px] text-[22px] font-display ml-8">
            Notre <span class="font-[700]">Engagement</span>
          </h3>
        </div>
        <p class="max-w-[600px] mt-4 lg:mt-0 lg:ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
      <!-- PART 3 -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-center py-4">
        <div class="flex items-center justify-start lg:w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/temp-preferences-eco.svg">
          </div>
          <h3 class="lg:text-[32px] text-[22px] font-display ml-8">
            Notre <span class="font-[700]">Réponsabilité</span>
          </h3>
        </div>
        <p class="max-w-[600px] mt-4 lg:mt-0 lg:ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
      <!-- PART 4 -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-center py-4">
        <div class="flex items-center justify-start lg:w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/magic-exchange-rounded.svg">
          </div>
          <h3 class="lg:text-[32px] text-[22px] font-display ml-8">
            Notre <span class="font-[700]">Processus</span>
          </h3>
        </div>
        <p class="max-w-[600px] mt-4 lg:mt-0 lg:ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  clip-path: polygon(100% 0, 100% 78%, 78% 100%, 0 100%, 0 0);
  width: 75px;
  height: 75px;
}
@media (max-width: 1250px) {
  .icon-container {
    clip-path: polygon(100% 0, 100% 78%, 78% 100%, 0 100%, 0 0);
    width: 50px;
    height: 50px;
  }
}
</style>
