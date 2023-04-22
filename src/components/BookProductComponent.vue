<template>
    <v-container class="d-flex justify-center align-center" style="max-width: 64rem; min-height: 100vh;">
        <!-- Contenedor del card -->
        <div :key="book.id" class="d-flex" style=" column-gap: 2rem;">
            <!-- Portada libro -->
            <v-img 
                :src="book.img"
                height="25rem"
                width="15.625rem"
                cover>
            </v-img>
            <!-- Información libro -->
            <div>
                <div>
                    <!-- Título -->
                    <p class="text-uppercase text-h5 font-weight-bold mb-2 ">{{ book.title }}</p>
                    <!-- Autor -->
                    <p class="text-uppercase text-h6 mb-2 ">{{ book.author }}</p>
                    <!-- Resumen -->
                    <p>{{ book.description }}</p>
                </div>
            </div>
            <!-- Divider -->
            <div class="bg-grey-lighten-2" style="width: .1rem;"></div>
            <!-- Contenedor precio -->
            <div>
                <!-- Precio -->
                <p class="text-h4 font-weight-bold">{{ book.price }}</p>
                    <AddToCart />
            </div>
        </div>
    </v-container>
</template>
<script>
    import AddToCart from './AddToCart.vue'
    import bookData from '../data.json'
    export default {
        components: {
            AddToCart
        },
        computed: {
            bookId() {
                return parseInt(this.$route.params.id)
            },
            book() {
                return bookData.books.find(book => book.id === this.bookId)
            }
        }
    }
</script>