<template>
    <Page>
        <ActionBar>
            <Label text="Star" class="text-left"></Label>
        </ActionBar>

        <GridLayout class="page__content bg-gray-400">
            <Label class="page__content-placeholder text-blue-200" text="AHAHHAHAA" textWrap="true"></Label>
            <Button text="Text" @tap="onButtonTap" />
        </GridLayout>
    </Page>
</template>

<script>
export default {
    methods: {
        onButtonTap () {
            console.log('here')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
