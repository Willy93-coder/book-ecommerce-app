<template>
    <v-app-bar elevation="1">
        <v-container class="d-flex align-center" style="max-width: 64rem;">
            <!-- Logo -->
            <v-btn class="font-weight-black" variant="plain" @click="insertRoute('/')">D-Bks</v-btn>
            <!-- Link Inicio -->
            <v-btn class="text-capitalize" variant="plain" @click="insertRoute('/')">Inicio</v-btn>
            <!-- Dropdown Libros -->
            <BookDropdown />
            <!-- Link Nosotros -->
            <v-btn class="text-capitalize" variant="plain">Nosotros</v-btn>
            <!-- Buscador -->
            <Searcher />
            <!-- Dropdown login -->
            <UserDropdownOut />
            <!-- Link Carrito -->
            <v-btn variant="plain" icon="shopping_cart" @click="insertRoute('/cart')"></v-btn>
        </v-container>
    </v-app-bar>
</template>

<script>
    import BookDropdown from './BookDropdown.vue';
    import UserDropdownOut from './UserDropdownOut.vue';
    import Searcher from './Searcher.vue';

    export default {
        name: 'NavBar',
        components: {
            BookDropdown,
            UserDropdownOut,
            Searcher,
        },
        methods: {
            insertRoute(route){
                this.$router.push(route);
            }
        }
    }
</script>