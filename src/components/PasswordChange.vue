<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
      <h1 style="margin-bottom: 2rem; text-align: center;">Cambiar Contraseña</h1>
      <div style="min-width: 20rem">
        <v-form @submit.prevent="cambiarContraseña">
          <v-text-field v-model="contraseñaActual" label="Contraseña actual" type="password" required></v-text-field>
          <v-text-field v-model="nuevaContraseña" label="Nueva contraseña" type="password" required></v-text-field>
          <v-text-field v-model="confirmarContraseña" label="Confirmar nueva contraseña" type="password" required></v-text-field>
          <v-container style="text-align: right;">
            <v-btn type="submit">Cambiar contraseña</v-btn>
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
        contraseñaActual: '',
        nuevaContraseña: '',
        confirmarContraseña: '',
        mensaje: ''
      }
    },
    methods: {
      cambiarContraseña() {
        if (this.nuevaContraseña !== this.confirmarContraseña) {
          this.mensaje = 'La confirmación de la contraseña no coincide con la nueva contraseña';
          return;
        }
  
        fetch('/password_reset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contraseñaActual: this.contraseñaActual,
            nuevaContraseña: this.nuevaContraseña
          })
        })
          .then(response => {
            if (response.ok) {
              this.mensaje = 'Cambio de contraseña exitoso';
            } else {
              this.mensaje = 'No se pudo cambiar la contraseña. Verifique que la contraseña actual sea correcta';
            }
          })
          .catch(error => {
            this.mensaje = 'No se pudo cambiar la contraseña.';
          })
      }
    }
  }
  </script>
  