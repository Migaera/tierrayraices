<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

    const props = defineProps({
        producto: {
            type: Object,
            required: true
        }
    })

const route = useRoute()
const store = useStore()
const carrito = computed(() => store.state.carrito)
const showMessage = ref(false)
const messageTope = 'No se pueden añadir más de 10kg'
const messageCarrito = 'El producto ha sido añadido correctamente'
const tope = ref(false)

const agregarCarrito = (producto) => {
    const existeProducto = carrito.value.findIndex(item => item.id === producto.id)
    if (existeProducto >= 0) {
        if (carrito.value[existeProducto].cantidad < 10) {
            showMessage.value = true
            carrito.value[existeProducto].cantidad++
            setTimeout(() => {
                showMessage.value = false
            }, 500)
        }
        else {
            tope.value = true
            setTimeout(() => {
                tope.value = false
            }, 1000)
        }
    } else {
        producto.cantidad = 1
        carrito.value.push(producto)
        showMessage.value = true
        setTimeout(() => {
            showMessage.value = false
        }, 500)
    }
}
</script>

<template>
    <div class="producto">
        <img :src="'/img/' + producto.imagen" :alt="'imagen producto' + producto.nombre" class="producto_imagen">
        <div class="producto_contenido">
            <h3 class="producto_nombre">{{ producto.nombre }}</h3>
            <p class="producto_descripcion"> {{ producto.descripcion }} </p>
            <p class="producto_descripcion"
            v-if="route.name === 'producto'"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante. </p>
            <p class="producto_descripcion"
            v-if="route.name === 'producto'"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, 
                    eleifend ultricies laoreet et, mollis ac ante. </p>
            <p v-if="producto.id < 16"
                class="producto_precio"> {{ producto.precio }}€/kg</p>
            <p v-else-if="producto.id > 15"
                class="producto_precio"> {{ producto.precio }}€</p>
            <router-link 
            v-if="route.name !== 'producto'"
            :to="{ path: `/producto/${producto.id}` }" 
            class="producto_enlace">Ver producto</router-link>
            <button v-else
            @click="agregarCarrito(producto)"
            class="producto_enlace">Agregar al carrito
            </button>
            <p class="producto_aviso"
            :style="{ opacity: showMessage || tope ? 1 : 0, color: tope ? 'red' : 'black' }">{{ showMessage ? messageCarrito : messageTope }}</p>
        </div>
    </div>
</template>
<style>
.producto_aviso {
    text-align: center;
}
</style>