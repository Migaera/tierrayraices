<script setup>
import { ref, onMounted } from 'vue'
import { dbBlog } from '../data/entradas.js'
import Blog from '../components/Blog.vue'
import { useRoute  } from 'vue-router'

const entradas = ref([])

onMounted (() => {
    entradas.value = dbBlog
})

</script>

<template>
    <main class="contenedor">
        <h2 class="heading">Nuestro Blog</h2>
        <div class="blog_contenedor blog_grid blog_grid--pagina">
            <Blog
            v-for="entrada in entradas"
            :entrada="entrada"/>
        </div>
    </main>
</template>
<style scoped>
</style>