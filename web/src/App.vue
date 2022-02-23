<template>
    <div id="main-container">
        <router-view></router-view>
    </div>
</template>

<script>
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export default {
    name: "main-container",
};
</script>

<style lang="scss"></style>
