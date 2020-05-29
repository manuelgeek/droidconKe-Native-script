<template>
    <StackLayout orientation="horizontal" horizontalAlignment="center" class="mt-2 mb-2 px-0 rounded-full bg-green-100 border-2 border-green-400 roboto-bold">
        <StackLayout verticalAlignment="center" class="px-2 -mt-3 -mb-3">
            <Image src.decode="font://&#xf017;" class="fas t-36 green" width="20" height="20" />
        </StackLayout>
        <StackLayout orientation="vertical" class="px-2 -mt-3 -mb-3">
            <Label text="194" fontSize="24" class="black font-bold" />
            <Label text="Days" fontSize="10" class="-mt-8 green" />
        </StackLayout>
        <StackLayout orientation="vertical" class="px-2 -mt-3 -mb-3">
            <Label text="11" fontSize="24" class="black font-bold" />
            <Label text="Hrs" fontSize="10" class="-mt-8 green" />
        </StackLayout>
        <StackLayout orientation="vertical" class="px-2 -mt-3 -mb-3">
            <Label text="56" fontSize="24" class="black font-bold" />
            <Label text="Mins" fontSize="10" class="-mt-8 green" />
        </StackLayout>
    </StackLayout>
</template>

<script>
export default {
    name: 'CountDown'
}
</script>

<style lang="scss" scoped>

</style>
