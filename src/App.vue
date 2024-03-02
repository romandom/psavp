<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TitulkaComponent from "@/components/TitulkaComponent.vue";
import PonukaComponent from "@/components/PonukaComponent.vue";
import SluzbyComponent from "@/components/SluzbyComponent.vue";
import BagerComponent from "@/components/BagerComponent.vue";
import PracaComponent from "@/components/PracaComponent.vue";
import {onMounted, onUnmounted } from 'vue';

window.addEventListener('scroll', function() {
    var divs = document.querySelectorAll('.scroll-section');
    var currentDivId = '';

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var rect = div.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentDivId = div.id;
            break;
        }
    }

    // Aktualizácia hash tagu v URL adrese na základe aktuálneho divka
    if (currentDivId) {
        window.history.replaceState({}, '', `/#${currentDivId}`);
    }
});

// Funkcia na sledovanie zmeny hash tagu
function handleHashChange() {
    // Získajte aktuálny hash tag z URL adresy
    const currentHash = window.location.hash;

    // Tu môžete reagovať na zmenu hash tagu
    console.log('Aktuálny hash tag:', currentHash);
}

// Spúšťanie funkcií po načítaní a pred odstránením komponentu
onMounted(() => {
    window.addEventListener('hashchange', handleHashChange);
    // Vykonajte inicializáciu na základe aktuálneho hash tagu, ak je to potrebné
    handleHashChange();
});

onUnmounted(() => {
    window.removeEventListener('hashchange', handleHashChange);
});

</script>



<template>
  <!--    <UnderConstruction/>-->
    <div class="flex flex-col max-w-[1920px]">
        <header-component id="uvod" class="scroll-section"></header-component>
        <titulka-component id="uvod" class="scroll-section"></titulka-component>
        <ponuka-component id="ponuka" class="scroll-section"></ponuka-component>
        <sluzby-component id="sluzby" class="scroll-section"></sluzby-component>
        <bager-component id="vozovy-park" class="scroll-section"></bager-component>
        <praca-component id="kontakt" class="scroll-section"></praca-component>
    </div>
</template>

<style scoped>
</style>
