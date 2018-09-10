<template>
    <div>
        <h3>Some User Details: {{ $route.params.id }}</h3>
        <router-link
            tag='button'
            :to="{ name: 'userEdit', params: {id: $route.params.id}, query: { local: 'cn', q: 'xxl'}}"
        >
            Edit
        </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                auth: true
            }
        },
        // beforeRouteEnter(to, from, next) {
        //     if (auth == true) {
        //         console.log('login successful')
        //         next()
        //     } else {
        //         console.log('abort')
        //         next(false)
        //     }
        // }
    }
</script>