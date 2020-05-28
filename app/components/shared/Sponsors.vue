<template>
    <StackLayout verticalAlignment="center" androidElevation="3" horizontalAlignment="center" class="rounded-lg shadow-lg bg-white-c p-4 mt-3 mb-3">
        <Label text="Sponsors" fontSize="24" class="w-full roboto-slab black font-bold font-weight-bold mt-5 text-center"/>
        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-full text-center mt-5">
            <Image src="~/assets/images/sponsors/1920px-Google_2015_logo.svg.png"  class="w-40" verticalAlignment="center" />
        </StackLayout>
        <StackLayout orientation="horizontal" horizontalAlignment="center" class="w-full text-center mt-5">
            <StackLayout class="w-1/3 px-3">
                <Image src="~/assets/images/sponsors/Andela-logo-landscape-blue.png"  class="" verticalAlignment="center" />
            </StackLayout>
            <StackLayout class="w-1/3 px-3">
                <Image src="~/assets/images/sponsors/hover_logo.png"  class="" verticalAlignment="center" />
            </StackLayout>
            <StackLayout class="w-1/3 px-3">
                <Image src="~/assets/images/sponsors/jetbrains.png"  class="w-10" verticalAlignment="center" />
            </StackLayout>
        </StackLayout>
        <Label text="Become a Sponsor" fontSize="20" class="w-full text-center mt-5 purple underline font-bold "/>
    </StackLayout>
</template>

<script>
export default {
    name: "Sponsors"
}
</script>

<style lang="scss" scoped>

</style>
