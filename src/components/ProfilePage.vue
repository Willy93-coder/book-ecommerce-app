<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
        <v-form>
            <v-text-field label="Nombre" v-model="user.nombre" class="ancho"></v-text-field>
            <v-text-field label="Primer apellido" v-model="user.apellido1" class="ancho"></v-text-field>
            <v-text-field label="Segundo apellido" v-model="user.apellido2" class="ancho"></v-text-field>
            <v-text-field label="Dirección" v-model="user.direccion" class="ancho"></v-text-field>
            <v-btn @click="guardarCambios">Guardar cambios</v-btn>
        </v-form>
        {{ mensaje }}
    </v-container>
</template>
<script>
export default {
  data() {
    return {
      user: {
        nombre: '',
        apellido1: '',
        apellido2: '',
        direccion: ''
      },
      mensaje: ''
    }
  },
  mounted() {
    fetch('/perfil')
      .then(response => response.json())
      .then(data => {
        this.user = data;
      })
      .catch(error => {
        console.log('Error al cargar información del usuario', error);
      });
  },
  methods: {
    guardarCambios() {
      fetch('/perfil', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      })
        .then(response => {
          if (response.ok) {
            this.mensaje = 'Cambios guardados';
          } else {
            this.mensaje = 'Error al guardar cambios';
          }
        })
        .catch(error => {
          this.mensaje = 'Error al guardar cambios';
        });
    }
  }
}
</script>
<style>
    .ancho{
        width: 25rem;
        text-align: center;
    }
</style>