<template>
    <div>
        <button @click="navigate">Click me if you wanna go back home</button>
        <br>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        methods: {
            navigate() {
                this.$router.push({ name: 'Home' })
            }
        },
        // watch: {
        //     'route'(to, from) {
        //         this.id = to.param.id
        //     }
        // }
    }
</script>