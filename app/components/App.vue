<template lang="html">
    <Navigator :defaultRoute="'/home'"/>
</template>

<script>
    import Index from "./home_page/Index.vue"
    import Feeds from "~/components/home_page/Feeds";
    import About from "~/components/home_page/About";
    import Sessions from "~/components/home_page/sessions/Sessions";

    export default {

    };
</script>

<style lang="scss" scoped>

</style>
