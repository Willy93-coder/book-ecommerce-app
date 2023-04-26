<template>
    <v-container class="d-flex justify-center" style="max-width: 64rem; min-height: 100vh;">
        <div style="text-align: center;">
            <v-card-text>Todavía no has añadido ningún producto a tu carrito.</v-card-text>
            <v-btn color="primary" @click="insertRoute('/')">Ver productos</v-btn>
        </div>
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