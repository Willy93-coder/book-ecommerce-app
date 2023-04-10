<template>
    <v-container style="margin-top:3cm">
        <h1 style="margin-bottom: 1cm; text-align: center; text-decoration: underline">Registro de usuario</h1>
        <v-form @submit.prevent="registrarse">
            <v-text-field v-model="name" label="Nombre" required></v-text-field>
            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
            <v-container style="text-align: right;">
                <v-btn type="submit">Registrarse</v-btn>
                <v-container>
                    {{ mensaje }}
                </v-container>    
            </v-container>
        </v-form>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            mensaje: ''
        }
    },
    methods: {
        registrarse() {
            fetch('/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.nombre,
                    email: this.email,
                    password: this.contraseña
                })
            })
                .then(response => {
                    if (response.ok) {
                        this.mensaje = 'Registro exitoso'
                    } else {
                        this.mensaje = 'Registro fallido'
                    }
                })
                .catch(error => {
                    this.mensaje = 'Registro fallido' + error.message
                })
        }
    }
}
</script>