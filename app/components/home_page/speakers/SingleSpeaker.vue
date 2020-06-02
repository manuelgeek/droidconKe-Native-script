<template>
    <Page actionBarHidden="true">
        <ScrollView ref="scrollView" @scroll="onScroll">
            <StackLayout class="bg-ash-c">
                <StackLayout ref="topView" verticalAlignment="top" height="235" style="background-image: url('~/assets/images/Asset-1.png'); background-repeat: no-repeat; background-position: center; background-size: cover;" class="px-3 ">
                    <FlexboxLayout justifyContent="space-between" verticalAlignment="center" class="mt-16">
                        <Image src.decode="font://&#xf060;" class="fas t-36" width="20" @tap="$navigateBack({frame: 'sessions' })"></Image>
                        <StackLayout orientation="vertical" horizontalAlignment="center">
                            <Image src="~/assets/images/app.png" width="40" height="40" />
                        </StackLayout>
                        <StackLayout verticalAlignment="center">
                            <Avatar />
                        </StackLayout>
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" class="w-full px-3" marginTop="-55">
                    <StackLayout class="p-3 bg-green-200 rounded-lg w-1/4 -mt-5" height="110" width="110">
                        <Image src="~/assets/images/speakers/MichaelBukachi.png"  class="border-4 border-green-400 rounded-full" verticalAlignment="center" />
                    </StackLayout>
                    <StackLayout class="px-3 mt-5">
                        <Label text="Abraham Lincoln" fontSize="20" class="roboto-slab purple" textWrap="true" />
                        <Label text="Qene Technologies, Gebeya | Game Dev, Android Dev & Trainer" fontSize="16" class="gray" textWrap="true" />
                        <StackLayout orientation="horizontal">
                            <Image src.decode="font://&#xf099;" width="16" class="fab green t-36 mr-2"></Image>
                            <Label text="Panel" class="purple" fontSize="15" textWrap="true" />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout width="100%" class="bg-ash-c px-3 py-4">

                    <StackLayout>
                        <Label text="Bio:" fontSize="20" class="gray roboto-slab mt-2 mb-3" />
                        <Label textWrap="true" fontSize="16" class="gray" text="Tart muffin marshmallow marzipan cake. Brownie liquorice marzipan chupa chups wafer jelly beans liquorice candy cake. Lollipop icing halvah marzipan candy canes liquorice. Sesame snaps brownie dessert chocolate bar wafer brownie. Cupcake gingerbread tiramisu jelly liquorice jujubes gummi bears. Cotton candy marshmallow cotton candy tiramisu jelly sweet caramels marshmallow halvah. Chupa chups muffin candy. Tart topping dessert sweet dessert dragée cake cupcake chupa chups. Gummies tootsie roll dragée jelly beans candy canes jelly-o chocolate carrot cake."
                        />

                        <FlexboxLayout class="mt-16 mb-10">
                            <Label text="Twitter Handle" fontSize="17" class="purple pr-3" textWrap="true" />
                           <StackLayout>
                               <FlexboxLayout justifyContent="space-between" class="rounded-full px-3 py-1 bg-white-c">
                                   <Label text="@Dawit AbrahamMB" fontSize="16" class="green pr-3" textWrap="true" />
                                   <Image src.decode="font://&#xf0c5;" width="16" class="far gray t-36"></Image>
                               </FlexboxLayout>
                               <Label text="tap to copy handle" class="gray italic px-1" horizontalAlignment="right" />
                           </StackLayout>
                        </FlexboxLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import {onScroll} from "~/services/helper";
import Avatar from "~/components/shared/action_bar/Avatar";

export default {
    name: 'SingleSpeaker',
    components: {Avatar},
    props: ['speaker'],
    methods: {
        onScroll
    }
}
</script>

<style lang="scss" scoped>

</style>
