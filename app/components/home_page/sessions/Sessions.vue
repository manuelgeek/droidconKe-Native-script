<template>
    <Page>
        <MyActionBar>
            <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="openModal">
                <Label text="Filter" fontSize="20" class="roboto-slab gray"/>
                <Image src.decode="font://&#xf0b0;" width="20" class="fas purple t-36"></Image>
            </StackLayout>
        </MyActionBar>

        <StackLayout class="w-full bg-ash-c">
            <StackLayout orientation="horizontal" class="w-full mt-5 px-3">
                <FlexboxLayout class="w-3/4">
                    <StackLayout orientation="vertical" class="bg-yellow-c p-1 rounded-lg mr-5">
                        <Label text="06" fontSize="22" class="purple roboto-slab" />
                        <Label text="Day 1" class="font-bold" />
                    </StackLayout>
                    <StackLayout orientation="vertical" class="bg-green-100 p-1 rounded-lg mr-5">
                        <Label text="07" fontSize="22" class="purple roboto-slab" />
                        <Label text="Day 2" class="font-bold green" />
                    </StackLayout>
                    <StackLayout orientation="vertical" class="bg-green-100 p-1 rounded-lg mr-5">
                        <Label text="08" fontSize="22" class="purple roboto-slab" />
                        <Label text="Day 3" class="font-bold green" />
                    </StackLayout>
                </FlexboxLayout>
                <StackLayout orientation="vertical" class="w-1/4">
                    <Switch checked="false" color="#843D95" backgroundColor="#DECFE3" offBackgroundColor="#DECFE3" class="purple bg-purple-light-c" horizontalAlignment="center" />
                    <Label text="My Sessions" class="-mt-3" horizontalAlignment="center" fontSize="10" />
                </StackLayout>
            </StackLayout>
            <ScrollView>
                <StackLayout orientation="vertical" class="mt-3 px-3">
                    <StackLayout orientation="horizontal" class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3" androidElevation="3" @tap="onItemTap(2)">
                        <StackLayout class="w-2/12">
                            <Label text="8:00 AM" lineHeight="-3" textWrap="true" fontSize="20" class="text-right purple roboto-slab" />
                        </StackLayout>
                        <StackLayout class="w-9/12">
                            <StackLayout class="w-full pl-10">
                                <Label text="Arrival" textWrap="true" fontSize="18" class="roboto-slab black" />
                                <Label text="Registration and Breakfast" class="gray" fontSize="16" textWrap="true" />
                            </StackLayout>
                        </StackLayout>
                        <StackLayout verticalAlignment="center" class="w-1/12">
                            <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                        </StackLayout>
                    </StackLayout>

                    <StackLayout orientation="horizontal" class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3" androidElevation="3" @tap="onItemTap(2)">
                        <StackLayout verticalAlignment="top" class="w-2/12">
                            <Label text="8:00 AM" lineHeight="-3" textWrap="true" fontSize="20" class="text-right purple roboto-slab" />
                        </StackLayout>
                        <StackLayout class="w-9/12">
                            <StackLayout class="w-full pl-10">
                                <Label text="Keynote" textWrap="true" fontSize="18" class="roboto-slab black" />
                                <Label text="Community on a Global Scale" class="gray" fontSize="16" textWrap="true" />

                                <Label text="9:30AM - 10:00AM | ROOM 1" class="gray mt-3 uppercase" fontSize="13" textWrap="true" />
                                <StackLayout orientation="horizontal">
                                    <Image src.decode="font://&#xf17b;" width="16" class="fab green t-36 mr-2"></Image>
                                    <Label text="Greg Fawson" class="green" fontSize="13" textWrap="true" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout verticalAlignment="center" class="w-1/12">
                            <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                        </StackLayout>
                    </StackLayout>

                    <StackLayout orientation="horizontal" class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3" androidElevation="3" @tap="onItemTap(2)">
                        <StackLayout verticalAlignment="top" class="w-2/12">
                            <Label text="8:00 AM" lineHeight="-3" textWrap="true" fontSize="20" class="text-right purple roboto-slab" />
                        </StackLayout>
                        <StackLayout class="w-9/12">
                            <StackLayout class="w-full pl-10">
                                <Label text="Android 254" textWrap="true" fontSize="18" class="roboto-slab black" />
                                <Label text="Community on a Global Scale" class="gray" fontSize="16" textWrap="true" />

                                <Label text="9:30AM - 10:00AM | ROOM 1" class="gray mt-3 uppercase" fontSize="13" textWrap="true" />
                                <StackLayout orientation="horizontal">
                                    <Image src.decode="font://&#xf17b;" width="16" class="fab green t-36 mr-2"></Image>
                                    <Label text="Greg Fawson" class="green" fontSize="13" textWrap="true" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout verticalAlignment="center" class="w-1/12">
                            <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                        </StackLayout>
                    </StackLayout>

                    <StackLayout orientation="horizontal" class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3" androidElevation="3" @tap="onItemTap(2)">
                        <StackLayout verticalAlignment="top" class="w-2/12">
                            <Label text="8:00 AM" lineHeight="-3" textWrap="true" fontSize="20" class="text-right purple roboto-slab" />
                        </StackLayout>
                        <StackLayout class="w-9/12">
                            <StackLayout class="w-full pl-10">
                                <Label text="Community Opportunities" textWrap="true" fontSize="18" class="roboto-slab black " />
                                <Label text="What it takes to run a community, the opportunities and available support" class="gray" fontSize="16" textWrap="true" />

                                <Label text="9:30AM - 10:00AM | ROOM 1" class="gray mt-3 uppercase" fontSize="13" textWrap="true" />
                                <StackLayout orientation="horizontal">
                                    <Image src.decode="font://&#xf17b;" width="16" class="fab green t-36 mr-2"></Image>
                                    <Label text="iHub" class="green" fontSize="13" textWrap="true" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout verticalAlignment="center" class="w-1/12">
                            <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                        </StackLayout>
                    </StackLayout>

                    <StackLayout orientation="horizontal" class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3" androidElevation="3" @tap="onItemTap(2)">
                        <StackLayout class="w-2/12">
                            <Label text="8:00 AM" lineHeight="-3" textWrap="true" fontSize="20" class="text-right purple roboto-slab" />
                        </StackLayout>
                        <StackLayout class="w-9/12">
                            <StackLayout class="w-full pl-10">
                                <Label text="Open Forum Panel" textWrap="true" fontSize="18" class="roboto-slab black" />
                                <Label text="9:30AM - 10:00AM | ROOM 1" class="gray mt-3 uppercase" fontSize="13" textWrap="true" />
                                <StackLayout orientation="horizontal">
                                    <Image src.decode="font://&#xf17b;" width="16" class="fab green t-36 mr-2"></Image>
                                    <Label text="Panel" class="green" fontSize="13" textWrap="true" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout verticalAlignment="center" class="w-1/12">
                            <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                        </StackLayout>
                    </StackLayout>

                </StackLayout>
            </ScrollView>
        </StackLayout>
    </Page>
</template>

<script>
    import MyActionBar from "~/components/shared/ActionBar";
    import SingleSession from "~/components/home_page/sessions/SingleSession";
    import FilterSessions from "~/components/home_page/sessions/FilterSessions";

    export default {
        name: 'Sessions',
        components: {MyActionBar},
        methods: {
            onItemTap (args) {
                this.$navigateTo(SingleSession, {
                    transition: {
                        name: 'fade',
                        duration: 500
                    },
                    props: {
                        session: args
                    },
                    frame: "sessions"
                });
            },
            openModal () {
                this.$showModal(FilterSessions, { });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
