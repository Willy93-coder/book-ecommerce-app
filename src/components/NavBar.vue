<template>
    <v-app-bar elevation="1">
        <v-container class="d-flex align-center" style="max-width: 64rem;">
            <!-- Logo -->
            <v-btn class="font-weight-black" variant="plain" @click="insertRoute('/')" color="primary">D-Bks</v-btn>
            <!-- Link Inicio -->
            <v-btn class="text-capitalize" variant="plain" @click="insertRoute('/')">Inicio</v-btn>
            <!-- Dropdown Libros -->
            <BookDropdown />
            <!-- Link Nosotros -->
            <v-btn class="text-capitalize" id="nosotros-btn" variant="plain" @click="scrollToBottom">Nosotros</v-btn>            <!-- Buscador -->
            <Searcher />
            <!-- Dropdown login -->
            <UserDropdownOut />
            <!-- Link Carrito -->
            <CartView />
        </v-container>
    </v-app-bar>
</template>

<script>
    import BookDropdown from './BookDropdown.vue';
    import UserDropdownOut from './UserDropdownOut.vue';
    import Searcher from './Searcher.vue';
    import CartView from './CartComponent.vue';

    export default {
        name: 'NavBar',
        components: {
            BookDropdown,
            UserDropdownOut,
            Searcher,
            CartView,
        },
        methods: {
            insertRoute(route){
                this.$router.push(route);
            },
            scrollToBottom() {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>