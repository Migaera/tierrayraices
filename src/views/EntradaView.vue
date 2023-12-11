<script setup>
import { ref, onMounted } from 'vue'
import { dbBlog } from '../data/entradas.js'
import Blog from '../components/Blog.vue'
import { useRoute  } from 'vue-router'

const entradas = ref([])
const route = useRoute()


onMounted (() => {
    const id = Number(route.params.id)
    entradas.value = dbBlog.find(p => p.id === id)
})

</script>

<template>
    <main class="contenedor">
        <h2 class="heading">{{ entradas.nombre }}</h2>
        <div class="blog_contenedor blog_grid blog_grid--pagina">
            <Blog
            :entrada="entradas"/>
        </div>
    </main>
</template>
<style scoped>
.blog_contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
}
:deep(.entrada_imagen) {
    width: 100%;
}
:deep(.entrada_titulo) {
    font-size: 3rem;
}
:deep(.entrada_fecha) {
    font-size: 1.5rem;
}
:deep(.entrada_texto) {
    font-size: 1.8rem;
    margin: 2rem 0;
}
</style>