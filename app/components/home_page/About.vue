<template>
<!--    <Page actionBarHidden="true">-->
        <ScrollView>
            <StackLayout orientation="vertical" class="bg-ash-c">
                <Image src="~/assets/images/org.png" class="w-full"/>
                <StackLayout orientation="vertical" class="px-3">
                    <Label text="About" fontSize="20" class="w-full roboto-slab py-3 mt-3 purple" />
                    <TextView fontSize="15" class="w-full gray mt-3" editable="false">{{about}}</TextView>
                </StackLayout>
                <StackLayout orientation="vertical" class="px-3 mt-3 mb-5">
                    <Label text="Organizing Team" fontSize="22" class="w-full text-center roboto-slab py-3 mt-3 purple" />
                    <FlexboxLayout justifyContent="space-around" flexWrap="wrap" flexDirection="row" class="w-full mt-3">
                        <StackLayout v-for="(member, $index) in members" :key="$index" orientation="vertical" horizontalAlignment="left" class="w-32 text-center mb-4">
                            <StackLayout class="p-3 bg-green-200 rounded-lg">
                                <ImageCacheIt :src="member.photo"  class="w-24 h-24 border-4 border-green-400 rounded-full" verticalAlignment="center" />
                            </StackLayout>
                            <Label :text="member.name" fontSize="14" textWrap="true" class="w-32 gray font-bold mt-2"/>
                            <Label :text="member.tagline" fontSize="12" textWrap="true" class="w-32 gray"/>
                        </StackLayout>

                    </FlexboxLayout>
                </StackLayout>

                <StackLayout class="px-3">
                    <Organizers />
                </StackLayout>
            </StackLayout>
        </ScrollView>
<!--    </Page>-->
</template>

<script>
import Organizers from "~/components/shared/Organizers";
export default {
    name: 'About',
    components: {Organizers},
    data () {
        return {
            about: 'Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.' +
                '\n\n' +
                'This two-day developer focused gathering will be held in Nairobi Kenya on August 6th to 8th 2020 and will be the largest of its kind in Africa. ' +
                '\n\n' +
                'It will have workshops and codelabs focused on the building of Android applications and will give participants an excellent chance to learn about the local Android development ecosystem, opportunities and services as well as meet the engineers and companies who work on them.',
            members: []
        }
    },
    mounted () {
        this.getMembers();
    },
    methods: {
        getMembers () {
            axios.get(`/organizers/${process.env.ORG_SLUG}/team?type=individual`).then((response) => {
                this.members = response.data.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
