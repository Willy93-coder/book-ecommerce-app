<template>
    <v-container class="d-flex justify-center align-center" style="max-width: 64rem; min-height: 100vh;">
        <!-- Contenedor del card -->
        <div v-for="data in book" :key="data.id" class="d-flex" style=" column-gap: 2rem;">
            <!-- Portada libro -->
            <v-img 
                :src="data.img"
                height="25rem"
                width="15.625rem"
                cover>
            </v-img>
            <!-- Información libro -->
            <div>
                <div>
                    <!-- Título -->
                    <p class="text-uppercase text-h5 font-weight-bold mb-2 ">{{ data.title }}</p>
                    <!-- Autor -->
                    <p class="text-uppercase text-h6 mb-2 ">{{ data.author }}</p>
                    <!-- Resumen -->
                    <p>{{ data.description }}</p>
                </div>
            </div>
            <!-- Divider -->
            <div class="bg-grey-lighten-2" style="width: .1rem;"></div>
            <!-- Contenedor precio -->
            <div>
                <!-- Precio -->
                <p class="text-h4 font-weight-bold">{{ data.price }}</p>
                    <AddToCart />
            </div>
        </div>
    </v-container>
</template>
<script>
    import AddToCart from './AddToCart.vue'
    export default {
        components: {
            AddToCart
        },
        data:() => ({
            book: [
                {
                    id: 1,
                    title: "Ejemplo de portadas",
                    img: "https://portadascreativas.com/wp-content/uploads/4-13.jpg",
                    author: "Sergio Folgueras",
                    price: "25,4€",
                    description: "Este libro es un ejemplo de como tendría que ser una portada de un libro escrito por S. Folgueras, un master del Front-End."}
            ]
        })
    }
</script>