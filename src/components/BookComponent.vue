<template>
    <v-container class="grid-container" style="max-width: 64rem;">
        <!-- Card -->
        <v-card
        width="14rem"
        v-for="book in books"
        :key="book.id">
        <!-- Portada libro -->
            <v-img 
            :src="book.imagen"
            height="12.5rem"
            class="mt-4"
            ></v-img>
            <!-- Título libro -->
            <v-card-title>
                {{ book.titulo }}
            </v-card-title>
            <!-- Autor -->
            <v-card-subtitle class="mb-1">
                {{ book.autor }}
            </v-card-subtitle>
            <v-divider class="mx-3"></v-divider>
            <!-- Descripción -->
            <v-card-text>
                {{ book.descripcion }}
            </v-card-text>
            <div class="mx-4 mb-4 d-flex justify-space-between align-center">
                <!-- Precio -->
                <p class="text-red-accent-4 font-weight-bold text-h6">{{ book.precio_unitario }}</p>
                <v-btn class="text-black" variant="plain" @click="insertRoute(book.id)">Ver ficha</v-btn>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
        data() {
            return {
                books: null
            }
        },
        methods: {
            insertRoute(id){
                this.$router.push(`book/${id}`);
            },
            async dataBookFetch() {
                const bookFetch = await fetch('127.0.0.1:8000/libro/');
                const res = bookFetch.json();
                const books = res.results;
                console.log(`⛑ ${res}`);
                this.books = books;
            }
        },
        async mounted() {
            this.books = await this.dataBookFetch('127.0.0.1:8000/libro/');
        }
    }
</script>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem
    }
</style>