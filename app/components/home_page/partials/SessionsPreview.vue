<template>
    <StackLayout orientation="horizontal" class="w-full mt-3">
        <StackLayout class="w-2/3">
            <Label text="Sessions" fontSize="24" class="w-full black font-bold font-weight-bold text-left"/>
        </StackLayout>
        <StackLayout orientation="horizontal" class="w-1/3 text-right">
            <Label text="View All" fontSize="16" class="w-1/2 purple font-bold mr-2"/>
            <Label text="+12" fontSize="14" class="w-1/2 purple bg-purple-light-c text-center rounded-full px-3 py-2"/>
        </StackLayout>
    </StackLayout>
</template>

<script>
export default  {
    name: "SessionsPreview"
}
</script>

<style lang="scss" scoped>

</style>
