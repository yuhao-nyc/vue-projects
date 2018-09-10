<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <Nav></Nav>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
                <!-- <router-view name="header-top"></router-view>
                <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
    components: {
        Nav
    }
};
</script>
