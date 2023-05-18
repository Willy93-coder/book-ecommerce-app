<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="plain">
        <v-icon icon="shopping_cart"></v-icon>
        <v-badge color="primary" style="margin-left:-10px;" v-if="cartItems && cartItems.length > 0">
          <template v-slot:badge>
            {{ cartItems.reduce((total, item) => total + item.quantity, 0) }}
          </template>
          <v-icon></v-icon>
        </v-badge>
      </v-btn>
    </template>
    
    <v-list variant="plain" v-if="cartItems && cartItems.length > 0">
      <v-list-item  v-for="(item, index) in cartItems" :key="index" >
        <div  class="cart-item">
          <img :src="item.image" alt="Product Image" class="item-image" />
          <div class="item-info">
            <h4 class="item-name">{{ item.name }}</h4>
            <p>Cantidad: {{ item.quantity }}</p>
            <p>Precio: {{ item.price }}</p>
          </div>
          <div class="item-actions">
            <v-btn v-bind="props" @click.stop="increaseQuantity(index)" variant="plain">
              <v-icon icon="add_circle"></v-icon>
            </v-btn>
            <v-btn v-bind="props" @click.stop="decreaseQuantity(index)" variant="plain">
              <v-icon icon="remove_circle"></v-icon>
            </v-btn>
          </div>
        </div>
      </v-list-item>
      <v-list-item>
          <v-btn variant="plain" @click.stop="buyItem()" class="capitalize">
            <v-icon icon="shopping_bag"></v-icon>
            <p>Comprar</p>
          </v-btn>
      </v-list-item>
      <v-list-item>
          <v-btn variant="plain" @click.stop="deleteCart()" class="capitalize">
            <v-icon icon="shopping_bag"></v-icon>
            <p>Eliminar cesta</p>
          </v-btn>
      </v-list-item>
    </v-list>
    <v-list v-else>
     <p style="margin:10px;">
      Cesta vacía
    </p>
    </v-list>
  </v-menu>
</template>
  
  <script>
  export default {
    data() {
        return {
            cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
        };
      },
    methods: {
      deleteCart() {
        this.cartItems.splice(0, this.cartItems.length);
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      },
      buyItem() {
        // Hacer las llamadas al backend para que se compren todos los items 1-a-1
        // con POST http://127.0.0.1:8000/carrito/
      },
      increaseQuantity(index) {
        this.cartItems[index].quantity++;

        localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      },
      decreaseQuantity(index) {
        this.cartItems[index].quantity--;
        if (this.cartItems[index].quantity <= 0) {
          this.cartItems.splice(index, 1);
        }
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      } 
    },
  };
  </script>
  
  <style>
  
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 300px;
  }
  
  .item-image {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .item-info {
    flex-grow: 1;
  }
  
  .item-name {
    margin: 0;
  }
  .item-actions {
    display:flex;
  }
  .item-actions button {
    margin-right: 5px;
  }
  </style>
  