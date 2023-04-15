<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
        <v-container style="width: 16rem">
            <v-row align="center">
                <v-col cols="8">
                    <v-text-field v-model="cantidad" label="Cantidad" readonly></v-text-field>
                </v-col>
                <v-col cols="2" class="text-center">
                    <v-btn @click="enviar" color="primary">Añadir</v-btn>
                </v-col>
                <v-row>
                    <v-col cols="4" class="text-center">
                        <v-btn @click="decrementar">-</v-btn>
                    </v-col>
                    <v-col cols="2" class="text-center">
                        <v-btn @click="incrementar">+</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    {{ mensaje }}
                </v-row>
            </v-row>
        </v-container>
    </v-container>
</template>
  
  
<script>
export default {
    data() {
        return {
            cantidad: 1,
            mensaje: ''
        };
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
            console.log("Antes de validar el 0")
            if (this.cantidad > 0) {
                fetch('/carrito', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cantidad: this.cantidad
                    })
                })
                    .then(response => {
                        if (response.ok) {
                            this.mensaje = 'Producto añadido con éxito.' + this.cantidad;
                        } else {
                            this.mensaje = 'No se pudo agregar el producto.';
                        }
                    })
                    .catch(error => {
                        this.mensaje = 'Hubo un error inesperado, vuelva a intentarlo.';
                    });
            } else {
                this.mensaje = 'La cantidad mínima es 1.';
            }
        }
    }
};
</script>
  