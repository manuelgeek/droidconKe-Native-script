<template>
    <StackLayout orientation="horizontal" class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3" androidElevation="3">
        <StackLayout class="w-2/12">
            <Label text="NPE" fontSize="18" class="purple roboto-slab text-right" />
        </StackLayout>
        <StackLayout class="w-9/12">
            <StackLayout class="w-full pl-10">
                <Label text="No sessions for this filter/saved sessions" textWrap="true" fontSize="16" class="roboto-slab black" />
            </StackLayout>
        </StackLayout>
    </StackLayout>
</template>

<script>
export default {
    name: 'NoSession'
}
</script>

<style lang="scss" scoped>

</style>
