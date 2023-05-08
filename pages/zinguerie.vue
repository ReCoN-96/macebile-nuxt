<script setup lang="ts">
import ArticleRefectionToiture from '~~/components/renovation/ArticleRefectionToiture.vue'
import ArticleIsolation from '~~/components/renovation/ArticleIsolation.vue'
import Footer from '~~/components/Footer.vue'
import GetFreeEstimate from '~~/components/GetFreeEstimate.vue'
import Header from '~~/components/renovation/Header.vue'
</script>

<template>
  <div class="reparation-background">
    <NavBar />
    <Header />
  </div>
  <ArticleRefectionToiture />
  <Divider />
  <ArticleIsolation />
  <div class="lg:my-[100px]">
    <GetFreeEstimate />
  </div>
  <Footer />
  <CallMobile />
</template>

<style lang="scss" scoped>
.reparation-background {
  background-image: url('~~/assets/images/tuiles-eau.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 1024px) {
  .reparation-background {
    background-image: url('~~/assets/images/tuiles-eau-lg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
