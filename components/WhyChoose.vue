<script setup lang="ts">
</script>

<template>
  <div class="min-h-[700px] w-full flex justify-around flex-col background-container text-white relative p-20">
    <h2 class="text-[64px] font-display text-center">
      Pourquoi choisir <span class="text-primary border-b-[4px] border-primary">MACEBILE?</span>
    </h2>
    <div>
      <!-- PART 1 -->
      <div class="flex items-center justify-center py-4">
        <div class="flex items-center justify-start w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/poigne.svg">
          </div>
          <h3 class="text-[32px] font-display ml-8">
            Notre <span class="font-[700]">Honnêteté</span>
          </h3>
        </div>
        <p class="max-w-[600px] ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
      <!-- PART 2 -->
      <div class="flex items-center justify-center py-4">
        <div class="flex items-center justify-start w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/baseline-thumb-up.svg">
          </div>
          <h3 class="text-[32px] font-display ml-8">
            Notre <span class="font-[700]">Engagement</span>
          </h3>
        </div>
        <p class="max-w-[600px] ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
      <!-- PART 3 -->
      <div class="flex items-center justify-center py-4">
        <div class="flex items-center justify-start w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/poigne.svg">
          </div>
          <h3 class="text-[32px] font-display ml-8">
            Notre <span class="font-[700]">Réponsabilité</span>
          </h3>
        </div>
        <p class="max-w-[600px] ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
      <!-- PART 4 -->
      <div class="flex items-center justify-center py-4">
        <div class="flex items-center justify-start w-[360px]">
          <div class="icon-container bg-primary flex items-center justify-center">
            <img class="w-[50%]" src="@/assets/images/poigne.svg">
          </div>
          <h3 class="text-[32px] font-display ml-8">
            Notre <span class="font-[700]">Processus</span>
          </h3>
        </div>
        <p class="max-w-[600px] ml-12 pl-4 border-l-[3px] border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat odio sunt sed aut hic aliquid
          earum at qui reprehenderit rem amet, consectetur facilis ex consequuntur ea optio aliquam asperiores!
        </p>
      </div>
    </div>
    <div class="custom-shape-divider-top-1681143907">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-container {
  background: hsla(219, 61%, 44%, 1);
  background: radial-gradient(circle, hsla(219, 61%, 44%, 1) 0%, hsla(219, 100%, 69%, 1) 100%);
}
.icon-container {
  clip-path: polygon(100% 0, 100% 78%, 78% 100%, 0 100%, 0 0);
  width: 75px;
  height: 75px;
}
.custom-shape-divider-top-1681143907 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1681143907 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 37px;
}

.custom-shape-divider-top-1681143907 .shape-fill {
    fill: #FFFFFF;
}
</style>
