<template>
    <StackLayout class="bg-white-c rounded-full px-3" verticalAlignment="center"  horizontalAlignment="right" width="40" height="40" @tap="onItemTap" >
        <Image src.decode="font://&#xf023;" class="fas t-36 green" verticalAlignment="center" />
    </StackLayout>
</template>

<script>
import Login from "~/components/Login";

export default {
    name: 'Avatar',
    methods: {
        onItemTap() {
            this.$navigateTo(Login, {
                transition: {
                    name: 'fade',
                    duration: 300
                },
                frame: "main-app",
                // clearHistory: true
            });
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
