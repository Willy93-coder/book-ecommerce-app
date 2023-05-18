<template>
    <!-- Add component container -->
    <div v-if="result" style="min-width: 16rem; margin-top: 2rem;">
        <!-- Quantity input -->
        <div class="d-flex justify-space-between align-center">
            <!-- Decrease button -->
            <v-col class="text-center pl-0">
                <v-btn @click="decrementar" size="large">-</v-btn>
            </v-col>
            <!-- Quantity label -->
            <div style="border-bottom: 2px solid #424242;">
                <input type="text" v-model="cantidad" style="width: 4rem; text-align: center; padding: .5rem; outline: none;background-color: #EEEEEE;" readonly>
            </div>
            <!-- Increase button -->
            <v-col class="text-center pr-0">
                <v-btn @click="incrementar" size="large">+</v-btn>
            </v-col>
        </div>
            <!-- Add button -->
            <v-container class="text-center px-0">
                <v-btn @click="enviar" color="primary" block>Añadir</v-btn>
            </v-container>
            <div class="d-flex justify-center">
                <p>{{ mensaje }}</p>
            </div>
    </div>
    <!-- Product2Buttons component -->
    <div v-else>
        <Product2Buttons />
    </div>
</template>


<script>
import Product2Buttons from './Product2Buttons.vue'
export default {
    props: {
        book: Object,
    },
    data() {
        return {
            cantidad: 1,
            mensaje: '',
            result: true,
        };
    },
    components: {
        Product2Buttons
    },
    methods: {
        incrementar() {
            this.cantidad++;
        },
        decrementar() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        enviar() {
            var cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            cartItems.push({
                id: this.book.id,
                name: this.book.titulo,
                image: this.book.imagen,
                quantity: this.cantidad,
                price: this.cantidad * this.book.precio_unitario,
            });
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
            window.location.href = '/';
        }
    }
};
</script>