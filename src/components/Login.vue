<template>
    <v-container style="margin-top: 3cm">
        <h1 style="margin-bottom: 1cm; text-align: center; text-decoration: underline">Inicio de sesión</h1>
        <v-form @submit.prevent="iniciarSesion">
            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
            <v-container style="text-align: right;">
                <v-btn type="submit">Iniciar sesión</v-btn>
                <v-container>
                    <a href="/registro">¿No tienes cuenta? Regístrate</a>
                </v-container>
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
            email: '',
            password: '',
            mensaje: ''
        }
    },
    methods: {
        iniciarSesion() {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            })
                .then(response => {
                    if (response.ok) {
                        this.mensaje = 'Inicio de sesión exitoso';
                        // redirigir al usuario a la página principal
                    } else {
                        this.mensaje = 'Inicio de sesión fallido';
                    }
                })
                .catch(error => {
                    this.mensaje = 'Inicio de sesión fallido' + error.message;
                })
        }
    }
}
</script>