<template>
    <v-container class="d-flex justify-center align-center" style="max-width: 64rem; min-height: 100vh;">
        <!-- Contenedor del card -->
        <div v-if="book" :key="book.id" class="d-flex" style=" column-gap: 2rem;">
            <!-- Portada libro -->
            <v-img 
                :src="book.imagen"
                height="25rem"
                width="15.625rem"
                cover>
            </v-img>
            <!-- Información libro -->
            <div>
                <div>
                    <!-- Título -->
                    <p class="text-uppercase text-h5 font-weight-bold mb-2 ">{{ book.titulo }}</p>
                    <!-- Autor -->
                    <p class="text-uppercase text-h6 mb-2 ">{{ book.autor }}</p>
                    <!-- Resumen -->
                    <p>{{ book.descripcion }}</p>
                </div>
            </div>
            <!-- Divider -->
            <div class="bg-grey-lighten-2" style="width: .1rem;"></div>
            <!-- Contenedor precio -->
            <div>
                <!-- Precio -->
                <p class="text-h4 font-weight-bold">{{ book.precio_unitario }}</p>
                    <AddToCart />
            </div>
        </div>
    </v-container>
</template>
<script>
    import AddToCart from './AddToCart.vue'
    export default {
        data() {
            return {
                book: null
            }
        },
        components: {
            AddToCart
        },
        async created() {
            const bookId = this.$route.params.id
            try {
                const bookFetch = await fetch(`http://127.0.0.1:8000/libro/${bookId}/`);
                    const res = await bookFetch.json();
                    this.book = res
            } catch (error) {
                console.error('Error de conexión');
            }
        }
    }
</script>