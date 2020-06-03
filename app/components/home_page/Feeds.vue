<template>
    <Page>
        <MyActionBar>
            <StackLayout horizontalAlignment="center">
                <Label text="Feed" fontSize="20" class="roboto-slab purple"/>
            </StackLayout>
        </MyActionBar>
        <ListView class="w-full bg-ash-c px-2" for="country in countries" @itemTap="onItemTap" height="100%">
            <v-template>
                <StackLayout class="py-3">
                    <StackLayout orientation="vertical" class="w-full bg-white-c rounded-lg px-3">
                        <Label text="We are pleased to have a team from Andela Kenya who will have a talk about Software Engineers to the Power of X from an Employer's Perspective." class="gray" fontSize="16" textWrap="true"/>
                        <Image src="~/assets/images/img.png" class="w-full rounded-lg"/>
                        <FlexboxLayout justifyContent="space-between">
                            <StackLayout orientation="horizontal" class="text-left">
                                <Image src.decode="font://&#xf017;" class="fas t-36 gray-light mr-1" width="20"></Image>
                                <Label text="10:35 AM" fontSize="13" class="font-bold gray-light uppercase"/>
                            </StackLayout>
                            <StackLayout orientation="horizontal" class="text-right">
                                <Image src.decode="font://&#xf064;" class="fas t-36 gray mr-2" width="20"></Image>
                            </StackLayout>
                        </FlexboxLayout>
                    </StackLayout>
                </StackLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
    import MyActionBar from "~/components/shared/ActionBar";

    export default {
        methods: {
            onItemTap: function (args) {
                console.log('Item with index: ' + args.index + ' tapped');
            },
        }, data() {
            return {
                countries: [
                    {name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"},
                    {name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"},
                    {name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png"},
                    {name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png"},
                    {name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png"},
                    {name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"},
                    {name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"},
                    {name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"},
                    {name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"},
                    {name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"},
                    {name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"},
                    {name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"},
                    {name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"},
                    {name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"},
                    {name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"},
                    {name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"},
                    {name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"},
                ],
            }
        },
        name: "Feeds",
        components: {MyActionBar}
    }
</script>

<style lang="scss" scoped>

</style>
