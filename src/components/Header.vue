<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { db } from '../data/productos.js'

const route = useRoute()
const store = useStore()
const carrito = computed(() => store.state.carrito)
const id = 17
const suscripcion = db.find(p => p.id === id)

const decrementarCantidad = (id) => {
    const index = carrito.value.findIndex(item => item.id === id)
    if (carrito.value[index].cantidad <= 1) {
        return
    }
    carrito.value[index].cantidad--
}

const incrementarCantidad = (id) => {
    const index = carrito.value.findIndex(item => item.id === id)
    if (carrito.value[index].cantidad == 10) {
        return
    }
    carrito.value[index].cantidad++
}

const eliminarProducto = (id) => {
    const index = carrito.value.findIndex(producto => producto.id === id)
    if (index !== -1) {
        carrito.value.splice(index, 1)
    }
}

const totalPagar = computed(() => {
    const pago = carrito.value.reduce((total, producto) => {
        if (producto.id <= 16) {
            return total + (producto.precio * producto.cantidad)
        } else {
            return total + (producto.cantidad > 1 ? producto.precio : producto.precio * producto.cantidad)
        }
    }, 0)
    return Number(pago.toFixed(2))
})

const vaciarCarrito = () => {
    carrito.value.splice(0, carrito.value.length)
}

</script>

<template>
<header class="header">
    <div class="header_contenedor">
        <div class="header_nav">
            <a href="/">
                <img src="/img/logo.png" alt="imagen logo" class="header_logo">
            </a>
            <nav class="navegacion">
                <RouterLink to="/"
                class="navegacion_enlace">Inicio</RouterLink>
                <RouterLink to="/about"
                class="navegacion_enlace">Nosotros</RouterLink>
                <RouterLink to="/blog"
                class="navegacion_enlace">Blog</RouterLink>
                <RouterLink to="/tienda"
                class="navegacion_enlace">Tienda</RouterLink>
                <RouterLink to="/login"
                class="navegacion_enlace">Login</RouterLink>
                <div class="navegacion_enlace">
                <img src="/img/carrito.png" alt="imagen carrito" class="img_carrito">
                <div class="carrito_productos">
                    <p v-if="carrito.length === 0">El carrito está vacío</p>
                    <table v-else>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="producto in carrito">
                            <td v-if="producto">
                                <img :src="'/img/' + producto.imagen" :alt="'imagen producto' + producto.nombre" class="producto_imagen">
                            </td>
                            <td v-if="producto">{{ producto.nombre }}</td>
                            <td v-if="producto">{{ producto.precio }}€</td>
                            <div class="fila">
                            <td>
                                <button
                                v-if="producto.id <16"
                                class="carrito_boton"
                                type="button"
                                @click="() => decrementarCantidad(producto.id)">
                                    -
                                </button>
                            </td>
                            <td v-if="producto && producto.id < 16">{{ producto.cantidad }}kg</td>
                            <td v-else>Mensual</td>
                            <td>
                                <button
                                v-if="producto.id < 16"
                                class="carrito_boton"
                                type="button"
                                @click="() => incrementarCantidad(producto.id)">+</button>
                            </td>
                            <td>
                                <button
                                type="button"
                                class="carrito_boton--borrar"
                                @click="() => eliminarProducto(producto.id)">X</button>
                            </td>
                        </div>
                        </tr>
                        </tbody>
                    </table>
                    <div v-if="carrito.length > 0">
                        <p>Total a pagar: {{ totalPagar }}€</p>
                        <button class="producto_enlace">Pagar</button>
                        <button class="producto_enlace"
                        @click="vaciarCarrito">Vaciar carrito</button>
                    </div>
                </div>
                </div>
            </nav>
        </div><!--header_nav-->
        <div class="suscripcion"
        v-if="route.name === 'home'">
            <h1 class="suscripcion_nombre">¡Suscríbete hoy!</h1>
            <p class="suscripcion_descripcion">{{suscripcion.descripcion}}</p>
                <p class="suscripcion_precio">{{suscripcion.precio}}€</p>
                <RouterLink to="/producto/17"
                class="suscripcion_enlace">Ver producto</RouterLink>
        </div>
    </div>
    <img v-if="route.name === 'home'"
    src="/img/header_canasta.png" alt="imagen header suscripcion" class="header_suscripcion">
</header>
</template>

<style scoped>
.carrito_boton {
    width: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
}
.carrito_boton:hover {
    background-color: rgb(104, 0, 208);
    color: white;
}
.carrito_boton--borrar {
    background-color: red;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 50%;
}
.carrito_boton--borrar:hover {
    color: black;
}
.carrito_productos {
    display: none;
    position: absolute;
    right: 0;
    padding: 1rem;
    background-color: rgb(244, 240, 240);
}
.carrito_productos th {
    padding: 0 20px;
    text-transform: capitalize;
}
.carrito_productos td {
    text-transform: capitalize;
    color: black;
    font-weight: 400;
}
.fila {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
}
.navegacion_enlace:hover .carrito_productos {
    display: block;
    cursor: pointer;
}
.producto_enlace {
    font-size: 1.5rem;
    border-radius: 0;
    width: 100%;
    margin-right: 20px;
    margin-top: 1rem;
}
.producto_imagen {
    width: 50%;
}
</style>