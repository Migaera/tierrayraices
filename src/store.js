import { createStore } from "vuex";

export default createStore({
    state: {
        carrito: [],
        producto: null,
    },
    mutations: {
        agregarCarrito(state, producto) {
            producto.cantidad = 1
            state.carrito.push(producto)
        },
        setProducto(state, producto) {
            state.producto = producto
        },
    }
})