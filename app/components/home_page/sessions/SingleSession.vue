<template>
    <Page actionBarHidden="true">

        <ScrollView ref="scrollView" @scroll="onScroll">
            <StackLayout>
                <StackLayout ref="topView" verticalAlignment="center" height="170" style="background-image: url('~/assets/images/Asset 1.png'); background-repeat: no-repeat; background-position: center; background-size: cover;" class="px-3">
                    <FlexboxLayout justifyContent="space-between" verticalAlignment="center">
                        <Image src.decode="font://&#xf060;" class="fas t-36" width="20" @tap="$navigateBack({frame: 'sessions' })"></Image>
                        <StackLayout orientation="vertical" horizontalAlignment="center">
                            <Image src="~/assets/images/app.png" width="40" height="40" />
                            <Label text="Session Details" class="roboto-slab purple mt-3" fontSize="22" />
                        </StackLayout>
                        <StackLayout verticalAlignment="center">
                            <Avatar />
                        </StackLayout>
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout width="100%" class="bg-ash-c px-3 py-4">
                    <FlexboxLayout justifyContent="space-between" class="mt-3">
                        <StackLayout orientation="horizontal" verticalAlignment="center">
                            <Image src.decode="font://&#xf017;" class="fas t-36 green mr-2" width="17"></Image>
                            <Label text="10:30 AM" fontSize="16" class="gray uppercase mr-10"/>
                            <Image src.decode="font://&#xf277;" class="fas t-36 green mr-2" width="17"></Image>
                            <Label text="Room 1" fontSize="16" class="gray uppercase"/>
                        </StackLayout>
                        <Label textWrap="true" fontSize="15" text="#beginner" class="uppercase white bg-black-c rounded-full py-1 px-2" />
                    </FlexboxLayout>

                    <GridLayout class="w-full mt-5">
                        <Image src="~/assets/images/other.png" class="w-full rounded-lg" />
                    </GridLayout>

                    <FlexboxLayout justifyContent="space-between" class="mt-5">
                        <StackLayout orientation="vertical" verticalAlignment="center">
                            <StackLayout orientation="horizontal" verticalAlignment="center">
                                <Image src.decode="font://&#xf17b;" width="16" class="fab gray t-36 mr-2"></Image>
                                <Label text="Speaker:" class="gray" fontSize="14" textWrap="true" />
                            </StackLayout>
                            <Label text="Greg Fawson" class="green roboto-slab -mt-1" fontSize="20" textWrap="true" @tap="onItemTap('speaker')" />
                        </StackLayout>
                        <Image src.decode="font://&#xf005;" width="20" class="far gray t-36"></Image>
                    </FlexboxLayout>

                    <StackLayout class="mt-5">
                        <Label text="Description:" fontSize="20" class="gray roboto-slab mt-2 mb-3" />
                        <Label textWrap="true" fontSize="16" class="gray" text="Tart muffin marshmallow marzipan cake. Brownie liquorice marzipan chupa chups wafer jelly beans liquorice candy cake. Lollipop icing halvah marzipan candy canes liquorice. Sesame snaps brownie dessert chocolate bar wafer brownie. Cupcake gingerbread tiramisu jelly liquorice jujubes gummi bears. Cotton candy marshmallow cotton candy tiramisu jelly sweet caramels marshmallow halvah. Chupa chups muffin candy. Tart topping dessert sweet dessert dragée cake cupcake chupa chups. Gummies tootsie roll dragée jelly beans candy canes jelly-o chocolate carrot cake."
                        />

                        <FlexboxLayout justifyContent="flex-end" class="mt-5 mb-5">
                           <StackLayout width="50" height="50" class="bg-white-c rounded-full" horizontalAlignment="center" verticalAlignment="center" androidElevation="3">
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
    import { onScroll } from "~/services/helper";
    import SingleSpeaker from "~/components/home_page/speakers/SingleSpeaker";

    export default {
        name: "SingleSession",
        components: {Avatar},
        props: ['session'],
        methods: {
            onScroll,
            onItemTap (speaker) {
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
