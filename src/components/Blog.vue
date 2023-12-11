<script setup>
import { useRoute } from 'vue-router'

    const props = defineProps({
        entrada: {
            type: Object,
            required: true
        }
    })

const route = useRoute()

</script>
<template>
    <main class="contenedor">
            <article class="entrada">
                <img :src="'/img/' + entrada.imagen" :alt="'imagen entrada' + entrada.nombre" class="entrada_imagen">
                <div class="entrada_contenido">
                    <h3 class="entrada_titulo"> {{ entrada.nombre }}</h3>
                    <p class="entrada_fecha">{{ entrada.fecha }}</p>
                    <p class="entrada_texto">{{ entrada.descripcion }}</p>
                    <!--La entrada completa solo se verá desde EntradaView.vue-->
                    <p class="entrada_texto" v-if="route.name === 'entrada'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante.</p>
                    <p class="entrada_texto" v-if="route.name === 'entrada'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante.</p>
                    <router-link 
                    v-if="route.name !== 'entrada'"
                    :to="{ path: `/entrada/${entrada.id}` }" 
                    class="entrada_enlace">Leer entrada</router-link>
                </div>
            </article>
    </main>
</template>