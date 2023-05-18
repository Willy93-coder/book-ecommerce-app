<template>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="plain" icon="person" />
      </template>
  
      <v-list variant="plain">
        <v-list-item v-for="(item, index) in menuOptions" :key="index">
          <v-btn variant="plain" @click="item.action" class="capitalize">{{ item.title }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { title: "Iniciar sesión", url: "/login" },
          { title: "Registrarse", url: "/register" },
        ],
      };
    },
    computed: {
      menuOptions() {
        const userDataStr = localStorage.getItem("userData");
        if (userDataStr) {
          return [
            { title: "Mi perfil", url: "/profile", action: this.redirectToPage },
            { title: "Cerrar sesión", url: "/logout", action: this.logout },
          ];
        } else {
          return this.items.map((item) => ({
            title: item.title,
            url: item.url,
            action: () => this.insertRoute(item.url),
          }));
        }
      },
    },
    methods: {
      insertRoute(route) {
        this.$router.push(route);
      },
      redirectToPage() {
        this.$router.push("/profile");
      },
      logout() {
        localStorage.removeItem("userData");
        this.$router.push("/login");
      },
    },
  };
  </script>

<style scoped>
  .capitalize {
    text-transform: capitalize;
  }
</style>