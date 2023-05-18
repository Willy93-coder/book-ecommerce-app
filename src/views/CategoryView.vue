<template>
    <CategoryComponent :category="dataBookFetch(this.$route.params.name, 1)"/>
</template>

<script setup>
    import CategoryComponent from '../components/CategoryComponent.vue'
    import dataBookFetch from '../utils/fetchData'
</script>