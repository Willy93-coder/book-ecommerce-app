<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem; min-height: 100vh;">
        <h1 style="margin-bottom: 2rem; text-align: center;">Registro de usuario</h1>
        <div style="min-width: 20rem">
            <v-form @submit.prevent="registrarse">
                <v-text-field v-model="first_name" label="Nombre" required></v-text-field>
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
            first_name: '',
            email: '',
            password: '',
            mensaje: ''
        }
    },
    methods: {
        registrarse() {
            fetch('http://127.0.0.1:8000/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: this.first_name,
                    email: this.email,
                    password: this.password
                })
            })
                .then(response => {
                    if (response.ok) {
                        response.json().then(data => {
                            // Guardar el JSON en sesión
                            data.password = this.password;
                            localStorage.setItem('userData', JSON.stringify(data));
                            // Redirigir al usuario a la página principal
                            window.location.href = '/profile';
                        });
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