<script setup lang="ts">
import NavBar from '~~/components/NavBar.vue'
import Practices from '~~/components/Practices.vue'

useHead({
  htmlAttrs: {
    lang: 'fr',
  },
})
</script>

<template>
  <div class="screen-mobile lg:h-screen flex flex-col">
    <NavBar />
    <Practices />
  </div>
  <Partners />
  <AboutUsHome />
  <WhyChoose />
  <Services />
  <GetFreeEstimate />
  <Gallery />
  <Location />
  <Footer />
</template>

<style lang="scss" scoped>
.screen-mobile {
  height: 100dvh;
}
</style>
