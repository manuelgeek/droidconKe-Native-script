<template>
    <Page>
        <ActionBar class="bg-ash-c" flat="true">
            <GridLayout orientation="horizontal" class="py-1 w-full px-3">
                <Image src="~/assets/images/app.png" width="40" height="40" alignSelf="flex-start" verticalAlignment="center" horizontalAlignment="left" />
                <StackLayout orientation="horizontal" horizontalAlignment="center" class="mt-2 mb-2 px-0 rounded-full bg-green-100 border-2 border-green-400 roboto-bold">
                    <StackLayout verticalAlignment="center" class="px-3 -mt-3 -mb-3">
                        <Image src.decode="font://&#xf017;" class="fas t-36 green" width="20" height="20" />
                    </StackLayout>
                    <StackLayout orientation="vertical" class="px-3 -mt-3 -mb-3">
                        <Label text="194" fontSize="24" class="black font-bold" />
                        <Label text="Days" fontSize="10" class="-mt-8 green" />
                    </StackLayout>
                    <StackLayout orientation="vertical" class="px-3 -mt-3 -mb-3">
                        <Label text="11" fontSize="24" class="black font-bold" />
                        <Label text="Hrs" fontSize="10" class="-mt-8 green" />
                    </StackLayout>
                    <StackLayout orientation="vertical" class="px-3 -mt-3 -mb-3">
                        <Label text="56" fontSize="24" class="black font-bold" />
                        <Label text="Mins" fontSize="10" class="-mt-8 green" />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="bg-white-c rounded-full px-3" verticalAlignment="center"  horizontalAlignment="right" width="40" height="40" >
                    <Image src.decode="font://&#xf023;" class="fas t-36 green" verticalAlignment="center" />
                </StackLayout>
            </GridLayout>
        </ActionBar>
        <ScrollView>
            <StackLayout class="bg-ash-c px-3 w-full">
                <Image src="~/assets/images/black-friday-twitter.png"  class="w-full mt-3 mb-3 rounded-lg " verticalAlignment="center" />
                <StackLayout orientation="horizontal" verticalAlignment="center" class="w-full rounded-lg bg-purple-light-c p-4 mb-3">
                    <Image src="~/assets/images/oporo.png"  class="w-1/3" verticalAlignment="center" />
                    <StackLayout orientation="horizontal" verticalAlignment="center" horizontalAlignment="center" class="w-2/3">
                        <StackLayout class="w-11/12 text-center">
                            <Label text="Call For Speakers" fontSize="24" class="w-full black font-bold roboto-slab"/>
                            <Label text="Apply to be a speaker" fontSize="14" class="w-full gray font-bold"/>
                        </StackLayout>
                        <Image src.decode="font://&#xf04b;" class="w-1/12 fas t-36 purple" width="20"></Image>
                    </StackLayout>
                </StackLayout>

                <StackLayout class="w-full border-t-2 border-gray-400 mt-4 mb-2" />

                <SessionsPreview />
                <StackLayout class="w-full border-t-2 border-gray-400 mt-4 mb-3" />
                <SpeakersPreview />

                <StackLayout class="w-full border-t-2 border-gray-400 mt-3 mb-3" />

                <StackLayout verticalAlignment="center" androidElevation="3" horizontalAlignment="center" class="rounded-lg shadow-lg bg-white-c p-4 mt-4 mb-3">
                    <Label text="Keynote Speaker" fontSize="24" class="w-full black font-bold roboto-slab mt-5 text-center"/>
                    <StackLayout orientation="vertical" horizontalAlignment="center" class="w-full text-center mt-5">
                        <Image src="~/assets/images/speakers/AlexKoller.png"  class="w-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                        <Label text="Allex Koller" fontSize="16" class="w-full gray font-bold"/>
                    </StackLayout>
                    <Label text="Become a Speaker" fontSize="20" class="w-full text-center mt-5 purple underline font-bold "/>
                </StackLayout>
                <Sponsors/>
                <Organizers/>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Organizers from "~/components/shared/Organizers"
    import Sponsors from "~/components/shared/Sponsors";
    import SessionsPreview from "~/components/home_page/partials/SessionsPreview";
    import SpeakersPreview from "~/components/home_page/partials/SpeakersPreview";
    export default {
        components: {SpeakersPreview, SessionsPreview, Sponsors, Organizers}
    }
</script>

<style lang="scss" scoped>

</style>
