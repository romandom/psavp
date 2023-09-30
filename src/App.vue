<script setup>
import UnderConstruction from "@/components/UnderConstruction.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TitulkaComponent from "@/components/TitulkaComponent.vue";
import PonukaComponent from "@/components/PonukaComponent.vue";
import SluzbyComponent from "@/components/SluzbyComponent.vue";
import BagerComponent from "@/components/BagerComponent.vue";
import PracaComponent from "@/components/PracaComponent.vue";
</script>

<template>
  <!--    <UnderConstruction/>-->
    <div class="flex flex-col max-w-[1920px]">
        <header-component></header-component>
        <titulka-component></titulka-component>
        <ponuka-component></ponuka-component>
        <sluzby-component></sluzby-component>
        <bager-component></bager-component>
        <praca-component></praca-component>
    </div>
</template>

<style scoped>
</style>
