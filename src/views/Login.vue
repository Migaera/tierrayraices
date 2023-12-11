<script setup>

import { ref } from 'vue'

const registro = ref(false)

const registrarse = () => {
    registro.value = true
}
</script>

<template>
    <main class="contenedor">
        <h2 class="heading">Login</h2>

        <div class="login">
            <form class="login_formulario">
                <label class="nombre">Correo electrónico</label>
                <input type="email" class="email">
                <label v-if="registro"
                class="nombre">Nombre de usuario</label>
                <input v-if="registro"
                class="email">
                <label class="password">Contraseña</label>
                <input type="password" class="contraseña">
                <label class="password"
                v-if="registro">Repetir contraseña</label>
                <input type="password" class="contraseña"
                v-if="registro">
                <input type="submit" class="login_input" value="Login">
                <input type="submit" value="Regístrate"
                @click.prevent="registrarse"
                class="registro_input"/>
            </form>
        </div>
    </main>
</template>
<style scoped>
.nombre {
    margin-top: 2em;
}
</style>