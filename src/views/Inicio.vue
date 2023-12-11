<script setup>
import {ref, onMounted} from 'vue'
import Productos from '../components/Productos.vue'
import Beneficios from '../components/Beneficios.vue'
import Blogview from './BlogView.vue'
import {db} from '../data/productos'

const productos = ref([])


onMounted (() => {
  productos.value = db;
})

</script>

<template>
  <main class="productos productos_contenedor">
    <h2 class="productos_heading">Nuestros productos</h2>

    <div class="productos_grid">
      <Productos 
        v-for="producto in productos"
        :producto="producto"/>
    </div>
  </main>
  
  <section class="beneficios">
    <Beneficios />
  </section>

  <Blogview />

</template>
