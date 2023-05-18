<template>
    <v-container style="max-width: 64rem;">
        <!-- Pagination -->
        <div class="pagination__component-top">
            <!-- Previous page -->
            <button @click="decrementPage"> Prev </button>
            {{ page }}
            <!-- Next page -->
            <button @click="incrementPage"> Next </button>
        </div>
        <div class="grid-container">
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
                    <p class="text">{{ book.descripcion }}</p>
                </v-card-text>
                <div class="mx-4 mb-4 d-flex justify-space-between align-center">
                    <!-- Precio -->
                    <p class="text-red-accent-4 font-weight-bold text-h6">{{ book.precio_unitario }} €</p>
                    <v-btn class="text-black" variant="plain" @click="insertRoute(book.id)">Ver ficha</v-btn>
                </div>
            </v-card>
        </div>
        <!-- Pagination -->
        <div class="pagination__component-bottom">
            <!-- Previous page -->
            <button @click="decrementPage"> Prev </button>
            {{ page }}
            <!-- Next page -->
            <button @click="incrementPage"> Next </button>
        </div>
    </v-container>
</template>

<script>
export default {
        data:() => ({
            books: null
        }),
        props: {
            page: {
                type: Number,
                default: 1,
            },
            category: {
                type: Promise,
            }
        },
        methods: {
            insertRoute(id){
                this.$router.push(`book/${id}`);
            },
            incrementPage() {
                if (this.nextPage != null) {
                    this.page ++
                }
            },
            decrementPage() {
                if (this.page > 1) {
                    this.page --
                }
            },
        },
        async beforeUpdate() {
            this.books = await this.category;
        }
    }
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem
    }
    .pagination__component-top {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        column-gap: 1rem;
    }
    .pagination__component-bottom {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        column-gap: 1rem;
    }

    .text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>