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
                            <Label text="Session Details" class="roboto-slab purple mt-3" fontSize="22"/>
                        </StackLayout>
                        <StackLayout verticalAlignment="center">
                            <Avatar/>
                        </StackLayout>
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout width="100%" class="bg-ash-c px-3 py-4">
                    <FlexboxLayout justifyContent="space-between" class="mt-3">
                        <StackLayout orientation="horizontal" verticalAlignment="center">
                            <Image src.decode="font://&#xf017;" class="fas t-36 green mr-2" width="17"></Image>
                            <Label fontSize="15" class="gray uppercase mr-10">
                                {{ hour(session.start_date_time) }} - {{ hour(session.end_date_time) }}
                            </Label>
                            <Image src.decode="font://&#xf277;" class="fas t-36 green mr-2" width="16"></Image>
                            <Label text="Room 1" fontSize="15" class="gray uppercase"/>
                        </StackLayout>
                        <Label textWrap="true" fontSize="13" text="#beginner"
                               class="uppercase white bg-black-c rounded-full py-1 px-2"/>
                    </FlexboxLayout>

                    <GridLayout class="w-full mt-5">
                        <Image src="~/assets/images/other.png" class="w-full rounded-lg"/>
                    </GridLayout>

                    <FlexboxLayout justifyContent="space-between" class="mt-5">
                        <StackLayout orientation="vertical" verticalAlignment="center">
                            <StackLayout orientation="horizontal" verticalAlignment="center">
                                <Image src.decode="font://&#xf17b;" width="16" class="fab gray t-36 mr-2"></Image>
                                <Label :text="'Speaker' + session.speakers.length > 1 ? 's:' : ':'" class="gray" fontSize="14" textWrap="true"/>
                            </StackLayout>
                            <StackLayout orientation="vertical">
                                <Label v-for="(speaker, $s) in session.speakers" :key="$s" :text="speaker.name" class="green roboto-slab -mt-1" fontSize="18" textWrap="true"
                                       @tap="onItemTap(session.speaker)"/>
                            </StackLayout>
                        </StackLayout>
                        <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                    </FlexboxLayout>

                    <StackLayout class="mt-5">
                        <Label text="Description:" fontSize="18" class="gray roboto-slab mt-2 mb-3"/>
                        <Label textWrap="true" fontSize="15" class="gray"
                               :text="session.description"
                        />

                        <StackLayout class="mt-10">
                            <Button text="Session Feedback" fontSize="17" class="purple border-2 border-purple-c rounded-full" @tap="onButtonTap"/>
                        </StackLayout>
                        <FlexboxLayout justifyContent="flex-end" class="mt-5 mb-5 w-full">
                            <StackLayout width="50" height="50" class="bg-white-c rounded-full"
                                         horizontalAlignment="center" verticalAlignment="center" androidElevation="3">
                                <Image src.decode="font://&#xf064;" class="fas t-36 gray" width="20"></Image>
                            </StackLayout>
                        </FlexboxLayout>
                    </StackLayout>
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

    import { hour } from "~/services/helper";

    export default {
        name: "SingleSession",
        components: {Avatar},
        props: ['session'],
        methods: {
            hour,
            onButtonTap() {
                this.$navigateTo(SessionFeedback, {
                    transition: {
                        name: 'fade',
                        duration: 300
                    },
                    props: {
                        session: this.session
                    },
                    frame: "sessions"
                });
            },
            onScroll,
            onItemTap(speaker) {
                this.$navigateTo(SingleSpeaker, {
                    transition: {
                        name: 'fade',
                        duration: 500
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
