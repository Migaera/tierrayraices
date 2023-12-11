<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <footer class="footer">
        <div class="footer_contenedor footer_contenido">
            <nav class="footer_nav">
                <RouterLink to="/"
                class="footer_enlace">Inicio</RouterLink>
                <RouterLink to="/about"
                class="footer_enlace">Nosotros</RouterLink>
                <RouterLink to="/blog"
                class="footer_enlace">Blog</RouterLink>
                <RouterLink to="/tienda"
                class="footer_enlace">Tienda</RouterLink>
                <RouterLink to="/login"
                class="footer_enlace">Login</RouterLink>
            </nav>
            <p class="footer_copyright"> &#169;​ 2023, Tierra y Raíces. All rights reserved.</p>
        </div>
    </footer>
</template>