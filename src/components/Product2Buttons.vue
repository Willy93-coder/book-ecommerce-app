<template>
    <v-container class="pa-0" style="min-width: 16rem; margin-top: 2rem;">
        <!-- Cart button -->
        <div class="mb-4">
            <v-btn @click="insertRoute('/cart')" color="primary" block>Ir al carrito</v-btn>
        </div>
        <!-- continue shopping button -->
        <div>
            <v-btn @click="insertRoute('/')" block>Seguir comprando</v-btn>
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