<template>
    <v-app>
        <NavBar />
        <v-main>
            <RouterView />
        </v-main>
        <Footer />
    </v-app>
</template>

<script setup>
    import NavBar from "./components/NavBar.vue";
    import Footer from "./components/Footer.vue";
    import { RouterView } from "vue-router"
</script>