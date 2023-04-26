<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem; min-height: 100vh;">
        <h1 style="margin-bottom: 2rem; text-align: center;">Registro de usuario</h1>
        <div style="min-width: 20rem">
            <v-form @submit.prevent="registrarse">
                <v-text-field v-model="name" label="Nombre" required></v-text-field>
                <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
                <v-container style="text-align: center;">
                    <v-btn type="submit" color="primary">Registrarse</v-btn>
                    <v-container>
                        {{ mensaje }}
                    </v-container>    
                </v-container>
            </v-form>
        </div>
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
            fetch('/registration', {
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