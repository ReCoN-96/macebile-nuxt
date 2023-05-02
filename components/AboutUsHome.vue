<script setup lang="ts">
</script>

<template>
  <div class="lg:h-[700px] flex  justify-center items-center about-us-bg relative">
    <div class="flex lg:max-w-[1024px] w-full items-center lg:flex-row flex-col lg:justify-between">
      <div class="w-[300px] mt-[100px] h-[300px] lg:w-[350px] lg:h-[350px] relative">
        <div class="background-triangle-repeat absolute left-[-32px] top-[-32px]" />
        <div class="image-container w-full h-full ">
          <img src="@/assets/images/ome.jpg" class="w-full h-full object-cover">
        </div>
        <div class="image-triangle absolute bg-primary w-[60px] h-[60px] bottom-0 right-0" />
      </div>
      <div class="flex flex-col max-w-[500px] px-[10px] lg:px-[0px]">
        <h2 class="font-display text-[32px] lg:text-[64px] w-[fit-content] pb-[12px] border-b-[4px] border-primary mb-6 mt-7 lg:mt-0">
          À propos <span class="text-primary">de Nous.</span>
        </h2><p class="max-w-[360px] lg:max-w-[unset]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum iure autem aliquid nihil quod quibusdam quia in, nemo accusamus quae reiciendis minus harum doloribus tempora totam cupiditate architecto voluptatum.
        </p>
        <a class="h-10 flex justify-center items-center cursor-pointer bg-primary text-white px-[25px] font-display w-[200px] mt-8">
          Voir plus
        </a>
      </div>
    </div>
    <div class="custom-shape-divider-top-1681143112">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6" />
        <rect height="3.6" />
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    .custom-shape-divider-top-1681143112 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1681143112 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 353px;
}

.custom-shape-divider-top-1681143112 .shape-fill {
    fill: #A22C0C;
}
</style>
