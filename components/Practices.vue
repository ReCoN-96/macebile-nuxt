<script setup lang="ts">
import PointIcon from '~/components/icons/Point.vue'
import GoogleIcon from '~/components/icons/Google.vue'
import PracticesForm from '~/components/PracticesForm.vue'
</script>

<template>
  <div class="w-full h-full flex flex-col justify-evenly items-center ">
    <div class="home z-[-1] absolute top-0 left-0 w-full h-full" />
    <h1 class="text-white text-[14px] lg:text-[16px] lg:text-[20px] font-display flex justify-center">
      <ul class="flex justify-center items-center">
        <li>Toiture</li>
        <PointIcon />
        <li>Fuite de toit</li>
        <PointIcon />
        <li>Démoussage</li>
        <PointIcon />
        <li>Velux</li>
        <PointIcon />
        <li>Zinguerie</li>
      </ul>
    </h1>
    <p class="text-[32px] lg:text-[64px] text-white text-center font-display">
      Couvreur - Zingueur. <span class="text-primary"><br class="lg:hidden">Ile de france et Oise.</span>
    </p>
    <p class="text-white w-[90vw] lg:w-full text-[14px] lg:text-[16px] max-w-[650px] mx-auto text-center leading-[25px] background-text p-2">
      De la réparation mineure au remplacement complet de votre toiture, indiquez-nous le travail que vous souhaitez que nous réalisions et recevez rapidement une estimation ! (Il est possible que nous devions nous rendre sur place pour effectuer des mesures, prendre des photos, etc..)
    </p>
    <div class="flex mx-auto w-[130px]">
      <GoogleIcon />
      <div class="ml-2">
        <div class="flex">
          <div class="star bg-[#FFFF00] w-[16px] h-[16px]" />
          <div class="star bg-[#FFFF00] w-[16px] h-[16px]" />
          <div class="star bg-[#FFFF00] w-[16px] h-[16px]" />
          <div class="star bg-[#FFFF00] w-[16px] h-[16px]" />
          <div class="star bg-[#FFFF00] w-[16px] h-[16px]" />
        </div>
        <p class="text-grey text-[12px]">
          5.0 Avis Clients
        </p>
      </div>
    </div>
    <PracticesForm class="hidden lg:block" />
    <div class="custom-shape-divider-bottom-1681142732">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-image: url("~/assets/images/home.jpg");
  filter: brightness(0.6);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
  box-shadow: 0px 95px 71px 4px rgba(0,0,0,0.75) inset;
  -webkit-box-shadow: 0px 95px 71px 4px rgba(0,0,0,0.75) inset;
  -moz-box-shadow: 0px 95px 71px 4px rgba(0,0,0,0.75) inset;
}
.star {
    -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.background-text {
  -webkit-backdrop-filter: blur(var(--glass-blur,10px));
  backdrop-filter: blur(var(--glass-blur,15px));
  background-color: transparent;
}

.custom-shape-divider-bottom-1681142732 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1681142732 svg {
    position: relative;
    display: block;
    width: calc(128% + 1.3px);
    height: 22px;
}

.custom-shape-divider-bottom-1681142732 .shape-fill {
    fill: #A22C0C;
}
</style>
