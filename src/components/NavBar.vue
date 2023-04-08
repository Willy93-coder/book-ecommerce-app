<template>
    <v-app-bar elevation="1">
        <v-container class="d-flex align-center" style="max-width: 64rem;">
            <!-- Logo -->
            <v-btn class="font-weight-black" variant="plain">D-Bks</v-btn>
            <!-- Link Inicio -->
            <v-btn class="text-capitalize" variant="plain">Inicio</v-btn>
            <!-- Dropdown Libros -->
            <BookDropdown />
            <!-- Link Nosotros -->
            <v-btn class="text-capitalize" variant="plain">Nosotros</v-btn>
            <!-- Buscador -->
            <Searcher />
            <!-- Dropdown login -->
            <UserDropdownOut />
            <!-- Link Carrito -->
            <v-btn variant="plain" icon="shopping_cart" ></v-btn>
        </v-container>
    </v-app-bar>
</template>

<script setup>
    import BookDropdown from './BookDropdown.vue';
    import UserDropdownOut from './UserDropdownOut.vue';
    import Searcher from './Searcher.vue';
</script>