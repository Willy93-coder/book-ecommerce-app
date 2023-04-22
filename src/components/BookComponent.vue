<template>
    <v-container class="grid-container" style="max-width: 64rem;">
        <!-- Card -->
        <v-card
        width="14rem"
        v-for="book in books"
        :key="book.id">
        <!-- Portada libro -->
            <v-img 
            :src="book.img"
            height="12.5rem"
            class="mt-4"
            ></v-img>
            <!-- Título libro -->
            <v-card-title>
                {{ book.title }}
            </v-card-title>
            <!-- Autor -->
            <v-card-subtitle class="mb-1">
                {{ book.author }}
            </v-card-subtitle>
            <v-divider class="mx-3"></v-divider>
            <!-- Descripción -->
            <v-card-text>
                {{ book.description }}
            </v-card-text>
            <div class="mx-4 mb-4 d-flex justify-space-between align-center">
                <!-- Precio -->
                <p class="text-red-accent-4 font-weight-bold text-h6">{{ book.price }}</p>
                <v-btn class="text-black" variant="plain" @click="insertRoute(book.id)">Ver ficha</v-btn>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
        data:() => ({
            books: [
                {
                    id: 1,
                    title: "Ejemplo de portadas",
                    img: "https://portadascreativas.com/wp-content/uploads/4-13.jpg",
                    author: "Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."},
                {
                    id: 2,
                    title: "Ejemplo de portadas",
                    img: "https://gtechdesign.net/images/articu-2/portada-libro-3.jpg",
                    author: "Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."},
                {
                    id: 3,
                    title: "Ejemplo de portadas",
                    img: "https://portadascreativas.com/wp-content/uploads/4-13.jpg",
                    author: "Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."},
                {
                    id: 4,
                    title: "Ejemplo de portadas",
                    img: "https://portadascreativas.com/wp-content/uploads/4-13.jpg",
                    author: "Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."},
                {
                    id: 5,
                    title: "Ejemplo de portadas",
                    img: "https://portadascreativas.com/wp-content/uploads/4-13.jpg",
                    author:"Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."},
                {
                    id: 6,
                    title: "Ejemplo de portadas",
                    img: "https://portadascreativas.com/wp-content/uploads/4-13.jpg",
                    author:"Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."
                }
            ]
        }),
        methods: {
            insertRoute(id){
                this.$router.push(`book/${id}`);
            }
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