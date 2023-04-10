<script setup lang="ts">
</script>

<template>
  <div class="w-full h-[350px] flex items-center justify-center background-get-free">
    <h2 class="font-display text-[64px] text-white mr-16">
      Estimation<br><span class="text-primary">Gratuite!</span>
    </h2>
    <div>
      <p class="max-w-[500px] text-white mb-4">
        De la réparation mineure au remplacement complet de votre toiture, indiquez-nous le travail que vous souhaitez que nous réalisions et recevez rapidement une estimation ! (Il est possible que nous devions nous rendre sur place pour effectuer des mesures, prendre des photos, etc..)
      </p>
      <button class="h-10 bg-primary text-white px-[25px] font-display">
        Obtenez votre estimation gratuite
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-get-free {
  background: url("@/assets/images/house-get-free.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
}
</style>
