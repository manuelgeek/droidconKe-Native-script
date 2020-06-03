<template>
    <FlexboxLayout class="w-full bg-ash-c rounded-lg px-1 py-4" flexWrap="wrap" flexDirection="column">
        <FlexboxLayout class="w-full px-3" justifyContent="space-between">
            <StackLayout orientation="horizontal">
                <Image src.decode="font://&#xf0b0;" width="18" class="fas green t-36 mr-2"></Image>
                <Label class="green roboto-slab " fontSize="18" text="Filter" />
            </StackLayout>
            <Label text="Cancel" fontSize="16" class="uppercase gray" @tap="$modal.close()" />
        </FlexboxLayout>
        <StackLayout orientation="vertical" class="mt-5 w-full px-3">
            <Label text="Level" class="black" fontSize="18" />
            <FlexboxLayout flexWrap="wrap" class="text-center mt-2">
                <Label text="Beginner" fontSize="14" class="border-4 border-purple-600 bg-white-c py-1 px-5 rounded-l-lg gray" />
                <Label text="Intermediate" fontSize="14" class="border-t-2 border-b-2 border-purple-300 py-1 px-5 gray" />
                <Label text="Expert" fontSize="14" class="border-2 border-purple-300 py-1 px-5 rounded-r-lg gray" />
            </FlexboxLayout>
        </StackLayout>

        <StackLayout orientation="vertical" class="mt-5 w-full px-3">
            <Label text="Rooms" class="black" fontSize="18" />
            <FlexboxLayout flexWrap="wrap" class="text-center mt-2">
                <Label text="Room 1" fontSize="14" minWidth="110" class="border-2 border-purple-300 py-1 px-5 rounded-l-lg gray" />
                <Label text="Room 2" fontSize="14" minWidth="110" class="border-t-2 border-b-2 border-purple-300 py-1 px-5 gray" />
                <Label text="Room 3" fontSize="14" minWidth="110" class="border-2 border-purple-300 py-1 px-5 rounded-r-lg gray" />
            </FlexboxLayout>
        </StackLayout>

        <StackLayout orientation="vertical" class="mt-5 w-full px-3">
            <Label text="Session Type" class="black" fontSize="18" />
            <FlexboxLayout flexWrap="wrap" class="text-center mt-2">
                <Label text="Keynote" fontSize="14" class="border-2 border-purple-300 py-1 px-5 rounded-l-lg gray mb-2" />
                <Label text="Codelab/Regular" fontSize="14" class="border-t-2 border-b-2 border-purple-300 py-1 px-5 gray mb-2" />
                <Label text="Workshop" fontSize="14" class="border-2 border-purple-300 py-1 px-5 rounded-r-lg gray mb-2" />

                <Label text="Lightening Talk" fontSize="14" class="border-2 border-purple-300 py-1 px-5 rounded-l-lg gray mb-2" />
                <Label text="Pannel Discussion" fontSize="14" class="border-t-2 border-b-2 border-purple-300 py-1 px-5 gray mb-2 border-r-2" />
            </FlexboxLayout>
        </StackLayout>

        <Button fontSize="18" class="bg-purple-c white rounded-full mt-12" @tap="onButtonTap">
            <FormattedString>
                <Span text="Filter" class="white"/>
            </FormattedString>
        </Button>
    </FlexboxLayout>
</template>

<script>
export default {
    name: 'FilterSessions'
}
</script>

<style lang="scss" scoped>

</style>
