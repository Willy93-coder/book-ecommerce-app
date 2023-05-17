<template>
    <v-menu
        open-on-hover
    >
        <template v-slot:activator="{ props }">
            <v-btn
                class="text-capitalize"
                variant="plain"
                v-bind="props"
            >
                Libros
            </v-btn>
        </template>

        <v-list variant="plain">
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
                <v-btn class="text-capitalize" variant="plain" @click="insertRoute(item.nombre)">{{ item.nombre }}</v-btn>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        data:() => ({
            items: null
        }),
        methods: {
            insertRoute(name){
                this.$router.push({path:`/category/${name}`});
            },
            async dataBookCategoryFetch() {
                const URL = 'http://127.0.0.1:8000/category/'
                const bookCategoryFetch = await fetch(`${URL}`);
                const res = await bookCategoryFetch.json();
                this.items = res.results;
                return this.items;
            }
        },
        async mounted() {
            await this.dataBookCategoryFetch();
        }, 
    }
</script>