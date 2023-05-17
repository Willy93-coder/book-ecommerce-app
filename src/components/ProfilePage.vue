<template>
    <v-container class="d-flex flex-column justify-center align-center" style="max-width: 64rem;">
        <v-form>
            <v-text-field label="Nombre" v-model="user.first_name" class="ancho"></v-text-field>
            <v-text-field label="Primer apellido" v-model="user.last_name" class="ancho"></v-text-field>
            <v-text-field label="Email" v-model="user.email" class="ancho"></v-text-field>
            <v-text-field label="Dirección" v-model="user.address" class="ancho"></v-text-field>
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
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        password: '',
      },
      mensaje: ''
    }
  },
  mounted() {
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      this.user = userData;
    } else {
      window.location.href = '/login';
    }
  },
  methods: {
    guardarCambios() {
      fetch(`http://127.0.0.1:8000/user/${this.user.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${this.user.email}:${this.user.password}`)}`
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