<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
        <!-- Título -->
        <h1 style="margin-bottom: 2rem; text-align: center;">Inicio de sesión</h1>
        <!-- Login Container -->
        <div style="min-width: 20rem">
            <!-- Form -->
            <v-form @submit.prevent="iniciarSesion">
                <!-- Email label -->
                <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                <!-- Password label -->
                <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
                <!-- Link register -->
                <a href="/register" class="text-subtitle-1">¿No tienes cuenta? Regístrate</a>
                <!-- Button Container -->
                <v-container style="text-align: center; margin-top: 1rem;">
                    <!-- Button Login -->
                    <v-btn type="submit">Iniciar sesión</v-btn>
                    <!-- Message -->
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