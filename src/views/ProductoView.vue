<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../data/productos.js'
import Productos from '../components/Productos.vue'
import { useRoute  } from 'vue-router'

const productos = ref([])
const route = useRoute()


onMounted (() => {
    const id = Number(route.params.id)
    productos.value = db.find(p => p.id === id);
})

</script>

<template>
    <main class="contenedor">
            <Productos 
            :producto="productos"/>
    </main>
</template>
<style scoped>
.contenedor {
    margin-top: 3rem;
}
:deep(.producto_enlace) {
    width: 100%;
}
</style> 