<template>
    <v-app>
        <NavBar />
        <v-main>
            <RouterView />
            <Profile/>
        </v-main>
        <Footer />
    </v-app>
</template>

<script setup>
    import NavBar from "./components/NavBar.vue";
    import Footer from "./components/Footer.vue";
    import Profile from "./components/ProfilePage.vue";
    import { RouterView } from "vue-router"
</script>