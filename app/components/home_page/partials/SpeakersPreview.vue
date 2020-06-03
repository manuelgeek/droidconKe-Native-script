<template>
    <StackLayout>
        <StackLayout orientation="horizontal" class="w-full mt-3">
            <StackLayout class="w-2/3">
                <Label text="Speakers" fontSize="24" class="w-full black font-bold roboto-slab text-left"/>
            </StackLayout>
            <StackLayout orientation="horizontal" class="w-1/3 text-right" @tap="onAllTap">
                <Label text="View All" fontSize="15" verticalAlignment="center" class="w-1/2 purple font-bold mr-2"/>
                <Label text="+12" fontSize="13" class="w-1/2 purple bg-purple-light-c text-center rounded-full px-3 py-0 h-6"/>
            </StackLayout>
        </StackLayout>
        <ScrollView orientation="horizontal" class="w-full mt-3 mb-2">
            <StackLayout orientation="horizontal" height="165" class="mb-2">
                <StackLayout orientation="vertical" horizontalAlignment="center" class="w-1/4 text-center mr-2" @tap="onSpeakerTap('speaker')">
                    <StackLayout class="p-3 bg-green-200 rounded-lg">
                        <Image src="~/assets/images/speakers/AlexKoller.png"  class="w-20 h-20 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <Label text="Allex Koller" fontSize="13" textWrap="true" class="w-24 gray font-bold mt-2"/>
                </StackLayout>
                <StackLayout orientation="vertical" horizontalAlignment="center" class="w-1/4 text-center mr-2" @tap="onSpeakerTap('speaker')">
                    <StackLayout class="p-3 bg-green-200 rounded-lg">
                        <Image src="~/assets/images/speakers/MichaelBukachi.png"  class="w-20 h-20 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <Label text="Ahmed Maawy" fontSize="13" textWrap="true" class="w-24 gray font-bold mt-2"/>
                </StackLayout>
                <StackLayout orientation="vertical" horizontalAlignment="center" class="w-1/4 text-center mr-2" @tap="onSpeakerTap('speaker')">
                    <StackLayout class="p-3 bg-green-200 rounded-lg">
                        <Image src="~/assets/images/speakers/CarolWarugongo.png"  class="w-20 h-20 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <Label text="Moyinoluwa Adeyemi" fontSize="13" textWrap="true" class="w-24 gray font-bold mt-2"/>
                </StackLayout>
                <StackLayout orientation="vertical" horizontalAlignment="center" class="w-1/4 text-center mr-2" @tap="onSpeakerTap('speaker')">
                    <StackLayout class="p-3 bg-green-200 rounded-lg">
                        <Image src="~/assets/images/speakers/AlexKoller.png"  class="w-20 h-20 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <Label text="Allex Koller" fontSize="13" textWrap="true" class="w-24 gray font-bold mt-2"/>
                </StackLayout>
                <StackLayout orientation="vertical" horizontalAlignment="center" class="w-1/4 text-center mr-2" @tap="onSpeakerTap('speaker')">
                    <StackLayout class="p-3 bg-green-200 rounded-lg">
                        <Image src="~/assets/images/speakers/MichaelBukachi.png"  class="w-20 h-20 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <Label text="Ahmed Maawy" fontSize="13" textWrap="true" class="w-24 gray font-bold mt-2"/>
                </StackLayout>
                <StackLayout orientation="vertical" horizontalAlignment="center" class="w-1/4 text-center mr-2" @tap="onSpeakerTap('speaker')">
                    <StackLayout class="p-3 bg-green-200 rounded-lg">
                        <Image src="~/assets/images/speakers/CarolWarugongo.png"  class="w-20 h-20 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <Label text="Moyinoluwa Adeyemi" fontSize="13" textWrap="true" class="w-24 gray font-bold mt-2"/>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
import AllSpeakers from "~/components/home_page/speakers/AllSpeakers";
import SingleSpeaker from "~/components/home_page/speakers/SingleSpeaker";

export default {
    name: 'SpeakersPreview',
    methods: {
        onAllTap (args) {
            this.$root.$emit('indexChange', 2)
            this.$navigateTo(AllSpeakers, {
                transition: {
                    name: 'fade',
                    duration: 200
                },
                props: {
                    session: args
                },
                frame: "sessions"
            });
        },
        onSpeakerTap(speaker) {
            this.$root.$emit('indexChange', 2)
            this.$navigateTo(SingleSpeaker, {
                transition: {
                    name: 'fade',
                    duration: 200
                },
                props: {
                    speaker: speaker
                },
                frame: "sessions"
            });
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
