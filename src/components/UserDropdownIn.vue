<template>
    <v-menu
        open-on-hover
    >
        <template v-slot:activator="{ props }">
            <v-btn
                variant="plain"
                v-bind="props"
                icon="person" 
            />
        </template>

        <v-list variant="plain">
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
                <v-btn class="text-capitalize" variant="plain">{{ item.title }}</v-btn>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        data:() => ({
            items: [
                {title: "Perfil"},
                {title: "Cambiar Contraseña"},
                {title: "Cerrar sesión"},
            ]
        })
    }
</script>