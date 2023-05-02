<script lang="ts" setup>

</script>

<template>
  <div class="relative mt-[200px]">
    <footer>
      <div class="bg-primary flex flex-col lg:flex-row items-centerlg:items-start justify-around text-white lg:p-20 px-[10px] py-[20px]">
        <div class="lg:w-[200px] w-[150px]">
          <img
            alt="logo macebile"
            class="footer__img"
            src="@/assets/images/macebile_logo.svg"
          >
        </div>
        <h3 class="font-display pb-2 underline">
          ZONE D'INTERVENTION
        </h3>
        <div class="lg:px-8 py-4 flex flex-row">
          <div>
            <h4 class="pb-2 font-display underline">
              ILE DE FRANCE
            </h4>
            <ul>
              <li class="">
                75 - Paris
              </li>
              <li class="">
                77 - Seine-et-Marne
              </li>
              <li class="">
                78 - Yvelines
              </li>
              <li class="">
                91 - Essonne
              </li>
              <li class="">
                92 - Hauts-de-Seine
              </li>
              <li class="">
                93 - Seine-Saint-Denis
              </li>
              <li class="">
                94 - Val-de-Marne
              </li>
              <li class="">
                95 - Val D'oise
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-display underline">
              HAUTS-DE-FRANCE
            </h4>
            <span class="">
              60 - Oise
            </span>
          </div>
        </div>
        <div>
          <div class="flex flex-row">
            <div>
              <h2 class="font-display pb-2 underline">
                SERVICES
              </h2>
              <ul>
                <li class="">
                  <a href="/renovation">Rénovation de toiture</a>
                </li>
                <li class="">
                  <a href="/fuite">Fuite de toit</a>
                </li>
                <li class="">
                  <a href="/demoussage">Démoussage</a>
                </li>
                <li class="">
                  <a href="/velux">Velux</a>
                </li>
                <li class="">
                  <a href="/zinguerie">Zinguerie</a>
                </li>
              </ul>
            </div>
            <div class="px-8">
              <ul>
                <li class="font-display">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="background-footer h-[294px] w-full absolute top-[-205px] z-[-1]" />
  </div>
</template>

<style lang="scss">
.background-footer {
    background-image: url("@/assets/images/town.svg");
    background-repeat: repeat;
}
</style>
