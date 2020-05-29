<template>
    <ActionBar class="bg-ash-c px-3" flat="true" >
        <GridLayout orientation="horizontal" class="py-1">
            <Image src="~/assets/images/app.png" width="40" height="40" verticalAlignment="center" horizontalAlignment="left" />
            <slot></slot>
            <StackLayout class="bg-white-c rounded-full px-3" verticalAlignment="center"  horizontalAlignment="right" width="40" height="40" >
                <Image src.decode="font://&#xf023;" class="fas t-36 green" verticalAlignment="center" />
            </StackLayout>
        </GridLayout>
    </ActionBar>
</template>

<script>
export default {
    name: 'MyActionBar'
}
</script>

<style lang="scss" scoped>

</style>
