<script setup lang="ts">
</script>

<template>
  <div class="h-[700px] flex justify-center items-center about-us-bg">
    <div class="flex max-w-[1024px] w-full justify-between">
      <div class="min-w-[350px] min-h-[350px] max-h-[350px] max-w-[350px] relative">
        <div class="background-triangle-repeat absolute left-[-32px] top-[-32px]" />
        <div class="image-container w-full h-full ">
          <img src="@/assets/images/ome.jpg" class="w-full h-full object-cover">
        </div>
        <div class="image-triangle absolute bg-primary w-[60px] h-[60px] bottom-0 right-0" />
      </div>
      <div class="flex flex-col max-w-[500px] text-white">
        <h2 class="font-display text-[64px] w-[fit-content] pb-[12px] border-b-[4px] border-primary mb-6">
          À propos <span class="text-primary">de Nous.</span>
        </h2><p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum iure autem aliquid nihil quod quibusdam quia in, nemo accusamus quae reiciendis minus harum doloribus tempora totam cupiditate architecto voluptatum.
        </p>
        <a class="h-10 flex justify-center items-center cursor-pointer bg-secondary text-white px-[25px] font-display w-[200px] mt-8">
          Voir plus
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .about-us-bg {
        background: linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))
    }
    .image-container {
        clip-path: polygon(100% 0, 100% 78%, 78% 100%, 0 100%, 0 0);
    }
    .image-triangle {
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }
    .background-triangle-repeat {
        background-image: url("@/assets/images/corner-upper-left.svg");
        width: 140px;
        height: 140px;
    }
</style>
