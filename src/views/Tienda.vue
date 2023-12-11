<script setup>
import {ref, reactive, onMounted} from 'vue'
import Productos from '../components/Productos.vue'
import {db} from '../data/productos'

const productos = ref([])


onMounted (() => {
  productos.value = db;
})

</script>

<template>
  <main>
    <main class="productos productos_contenedor">
    <h2 class="productos_heading">Nuestros productos</h2>

    <div class="productos_grid">
      <Productos 
        v-for="producto in productos"
        :producto="producto"/>
    </div>
    </main>
  </main>
</template>
