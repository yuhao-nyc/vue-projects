<template>
    <div>
        <h3>Edit the User</h3>
        {{$route.query.local}} + {{$route.query.q}}
        <button @click="confirmed == true">
            Confirm your information before you leave
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    // beforeRouteLeave(to, from, next) {
    //     if (confirmed == true) {
    //         next()
    //     } else {
    //         next(false)
    //     }
    // }
}
</script>