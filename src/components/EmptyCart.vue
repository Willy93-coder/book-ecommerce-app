<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
        <v-card-text>Todavía no has añadido ningún producto a tu carrito.</v-card-text>
        <v-btn color="primary" @click="insertRoute('/')">Ver productos</v-btn>
    </v-container>
</template>

<script>
    export default {
        methods: {
            insertRoute(route){
                this.$router.push(route);
            }
        }
    }
</script>