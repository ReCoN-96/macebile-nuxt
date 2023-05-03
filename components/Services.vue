<script setup lang="ts">
import image1 from '@/assets/images/ome.jpg'

const services = [
  {
    id: 'service-1',
    img: image1,
    title: 'Réparation <span class=\'text-primary\'>de toiture</span>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque laudantium aliquam officia iusto autem. Consectetur ab officiis pariatur ea magnam odio cum id, exercitationem nulla repellendus facilis nihil voluptates?',
    url: '/reparation-toiture',
  },
  {
    id: 'service-2',
    img: image1,
    title: 'Rénovation <span class=\'text-primary\'>de toiture</span>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque laudantium aliquam officia iusto autem. Consectetur ab officiis pariatur ea magnam odio cum id, exercitationem nulla repellendus facilis nihil voluptates?',
    url: '',
  },
  {
    id: 'service-3',
    img: image1,
    title: 'Installation de <span class=\'text-primary\'>toiture neuve</span>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque laudantium aliquam officia iusto autem. Consectetur ab officiis pariatur ea magnam odio cum id, exercitationem nulla repellendus facilis nihil voluptates?',
    url: '',
  },
  {
    id: 'service-4',
    img: image1,
    title: '<span class=\'text-primary\'> Zinguerie</span>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque laudantium aliquam officia iusto autem. Consectetur ab officiis pariatur ea magnam odio cum id, exercitationem nulla repellendus facilis nihil voluptates?',
    url: '',
  },
  {
    id: 'service-5',
    img: image1,
    title: 'Pose de <span class=\'text-primary\'>Velux</span>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque laudantium aliquam officia iusto autem. Consectetur ab officiis pariatur ea magnam odio cum id, exercitationem nulla repellendus facilis nihil voluptates?',
    url: '',
  },
  {
    id: 'service-6',
    img: image1,
    title: 'Nettoyage et <span class=\'text-primary\'>démoussage</span>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque laudantium aliquam officia iusto autem. Consectetur ab officiis pariatur ea magnam odio cum id, exercitationem nulla repellendus facilis nihil voluptates?',
    url: '',
  },
]
</script>

<template>
  <div class="lg:min-h-[700px] w-full flex flex-col justify-around mt-[60px] lg:mt-0 lg:p-20">
    <h2 class="font-display text-[32px] lg:text-[64px] w-[fit-content] pb-[12px] border-b-[4px] border-primary mb-10 lg:mb-6 mx-auto">
      Nos<span class="text-primary"> Services</span>
    </h2>
    <div
      class="flex w-[90vw] lg:max-w-[1024px] overflow-x-scroll snap-x snap-mandatory scroll-smooth mx-auto hide-scrollbar"
    >
      <div v-for="service in services" :key="service.id" class="w-[260px] mx-4 snap-center box-content">
        <div class="h-[260px] w-[260px] relative">
          <div class="image-container w-full h-full ">
            <img :src="service.img" class="w-full h-full object-cover">
          </div>
          <div class="image-triangle absolute bg-primary w-[45px] h-[45px] bottom-0 right-0" />
        </div>
        <h3 class="font-display text-[24px] mt-4" v-html="service.title" />
        <p class="text-[13px] pl-4 mt-4 border-l-2 border-primary" v-html="service.text" />
        <a class="h-10 w-[125px] bg-primary text-white px-[25px] font-display mt-8 flex justify-center items-center cursor-pointer" :href="service.url">
          Voir plus
        </a>
      </div>
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

.hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
.hide-scrollbar {
  /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
