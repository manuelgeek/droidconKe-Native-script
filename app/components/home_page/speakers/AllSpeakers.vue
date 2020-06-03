<template>
    <Page actionBarHidden="true">
        <ScrollView ref="scrollView" @scroll="onScroll">
            <StackLayout>
                <StackLayout ref="topView" verticalAlignment="center" height="170"
                             style="background-image: url('~/assets/images/Asset 1.png'); background-repeat: no-repeat; background-position: center; background-size: cover;"
                             class="px-3">
                    <FlexboxLayout justifyContent="space-between" verticalAlignment="center">
                        <Image src.decode="font://&#xf060;" class="fas t-36" width="20"
                               @tap="$navigateBack({frame: 'sessions' })"></Image>
                        <StackLayout orientation="vertical" horizontalAlignment="center">
                            <Image src="~/assets/images/app.png" width="40" height="40"/>
                            <Label text="Speakers" class="roboto-slab purple mt-3" fontSize="22"/>
                        </StackLayout>
                        <StackLayout verticalAlignment="center">
                            <Avatar/>
                        </StackLayout>
                    </FlexboxLayout>
                </StackLayout>

                <StackLayout orientation="vertical" class="px-3 mt-3 mb-5">
                    <FlexboxLayout justifyContent="space-around" flexWrap="wrap" flexDirection="row" class="w-full mt-3">
                        <StackLayout orientation="vertical" horizontalAlignment="left" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/AlexKoller.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Allex Koller" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Main man" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/MichaelBukachi.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Ahmed Maawy" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Gang Gang" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/CarolWarugongo.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Moyinoluwa Adeyemi" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Fifa Winner" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>

                        <StackLayout orientation="vertical" horizontalAlignment="left" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/AlexKoller.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Allex Koller" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Main man" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/MichaelBukachi.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Ahmed Maawy" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Gang Gang" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/CarolWarugongo.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Moyinoluwa Adeyemi" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Fifa Winner" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>

                        <StackLayout orientation="vertical" horizontalAlignment="left" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/AlexKoller.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Allex Koller" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Main man" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/MichaelBukachi.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Ahmed Maawy" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Gang Gang" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="center" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <Image src="~/assets/images/speakers/CarolWarugongo.png"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label text="Moyinoluwa Adeyemi" fontSize="15" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label text="Fifa Winner" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>

                    </FlexboxLayout>
                </StackLayout>

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Avatar from "~/components/shared/action_bar/Avatar";
    import {onScroll} from "~/services/helper";
    import SingleSpeaker from "~/components/home_page/speakers/SingleSpeaker";
    import SessionFeedback from "~/components/home_page/sessions/SessionFeedback";

    export default {
        name: "AllSpeakers",
        components: {Avatar},
        props: ['session'],
        methods: {
            onScroll,
        }
    }
</script>

<style lang="scss" scoped>

</style>
