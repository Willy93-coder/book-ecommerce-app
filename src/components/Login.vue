<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
        <h1 style="margin-bottom: 2rem; text-align: center;">Inicio de sesión</h1>
        <div style="min-width: 20rem">
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
        </div>
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