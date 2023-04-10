<script setup lang="ts">
import NavBar from '~~/components/NavBar.vue'
import Practices from '~~/components/Practices.vue'
import Partners from '~~/components/Partners.vue'
import AboutUsHome from '~~/components/AboutUsHome.vue'
import WhyChoose from '~~/components/WhyChoose.vue'
import Services from '~~/components/Services.vue'
import GetFreeEstimate from '~~/components/GetFreeEstimate.vue'
import Location from '~~/components/Location.vue'
import Footer from '~~/components/Footer.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <Practices />
  </div>
  <Partners />
  <AboutUsHome />
  <WhyChoose />
  <Services />
  <GetFreeEstimate />
  <Location />
  <Footer />
</template>

<style lang="scss" scoped>
</style>
