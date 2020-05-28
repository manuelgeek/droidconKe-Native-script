<template>
    <StackLayout>
        <StackLayout orientation="horizontal" class="w-full mt-3">
            <StackLayout class="w-2/3">
                <Label text="Sessions" fontSize="24" class="w-full black font-bold roboto-slab font-weight-bold text-left"/>
            </StackLayout>
            <StackLayout orientation="horizontal" class="w-1/3 text-right">
                <Label text="View All" fontSize="15" verticalAlignment="center" class="w-1/2 purple font-bold mr-2"/>
                <Label text="+12" fontSize="13" class="w-1/2 purple bg-purple-light-c text-center rounded-full px-3 py-0 h-6"/>
            </StackLayout>
        </StackLayout>
        <ScrollView orientation="horizontal" class="w-full mt-3 mb-3">
            <StackLayout orientation="horizontal" height="270">
                <StackLayout orientation="vertical" class="w-2/3 rounded-lg bg-white-c mr-3">
                    <Image src="~/assets/images/Greg Keynote.png"  class="w-full" height="160" verticalAlignment="center" />
                    <DockLayout class="px-3 mt-2">
                        <StackLayout orientation="horizontal" dock="left" class="w-1/2 text-left">
                            <Image src.decode="font://&#xf017;" class="fas t-36 green mr-2" width="20"></Image>
                            <Label text="10:30 AM" fontSize="16" class="font-bold gray uppercase"/>
                        </StackLayout>
                        <StackLayout orientation="horizontal" dock="right" class="w-1/2 text-right">
                            <Image src.decode="font://&#xf277;" class="fas t-36 green mr-2" width="20"></Image>
                            <Label text="Room 1" fontSize="16" class="font-bold gray uppercase"/>
                        </StackLayout>
                    </DockLayout>
                    <StackLayout horizontalAlignment="left" class="px-3 mt-3">
                        <Label text="Community on a global scale." fontSize="18" textWrap="true" width="280" class="font-bold gray text-left"/>
                    </StackLayout>
                </StackLayout>

                <StackLayout orientation="vertical" class="w-2/3 rounded-lg bg-white-c mr-3">
                    <Image src="~/assets/images/Dawit Abraham.png"  class="w-full" height="160" verticalAlignment="center" />
                    <DockLayout class="px-3 mt-2">
                        <StackLayout orientation="horizontal" dock="left" class="w-1/2 text-left">
                            <Image src.decode="font://&#xf017;" class="fas t-36 green mr-2" width="20"></Image>
                            <Label text="10:30 AM" fontSize="16" class="font-bold gray uppercase"/>
                        </StackLayout>
                        <StackLayout orientation="horizontal" dock="right" class="w-1/2 text-right">
                            <Image src.decode="font://&#xf277;" class="fas t-36 green mr-2" width="20"></Image>
                            <Label text="Room 1" fontSize="16" class="font-bold gray uppercase"/>
                        </StackLayout>
                    </DockLayout>
                    <StackLayout horizontalAlignment="left" class="px-3 mt-3">
                        <Label text="Launching your app for the African market." textWrap="true" width="280" fontSize="18" class="font-bold gray text-left"/>
                    </StackLayout>
                </StackLayout>

                <StackLayout orientation="vertical" class="w-2/3 rounded-lg bg-white-c mr-3">
                    <Image src="~/assets/images/Greg Keynote.png"  class="w-full" height="160" verticalAlignment="center" />
                    <DockLayout class="px-3 mt-2">
                        <StackLayout orientation="horizontal" dock="left" class="w-1/2 text-left">
                            <Image src.decode="font://&#xf017;" class="fas t-36 green mr-2" width="20"></Image>
                            <Label text="10:30 AM" fontSize="16" class="font-bold gray uppercase"/>
                        </StackLayout>
                        <StackLayout orientation="horizontal" dock="right" class="w-1/2">
                            <Image src.decode="font://&#xf277;" class="fas t-36 green mr-2" width="20"></Image>
                            <Label text="Room 1" fontSize="16" class="font-bold gray uppercase"/>
                        </StackLayout>
                    </DockLayout>
                    <StackLayout horizontalAlignment="left" class="px-3 mt-3">
                        <Label text="Community on a global scale." fontSize="18" textWrap="true" width="280" class="font-bold gray text-left"/>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
export default  {
    name: "SessionsPreview"
}
</script>

<style lang="scss" scoped>

</style>
