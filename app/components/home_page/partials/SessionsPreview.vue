<template>
    <StackLayout>
        <StackLayout orientation="horizontal" class="w-full mt-3">
            <StackLayout class="w-2/3">
                <Label text="Sessions" fontSize="20" class="w-full black font-bold roboto-slab font-weight-bold text-left"/>
            </StackLayout>
            <StackLayout orientation="horizontal" class="w-1/3 text-right" @tap="onAllTap">
                <Label text="View All" fontSize="14" verticalAlignment="center" class="w-1/2 purple font-bold mr-2"/>
                <Label :text="`+${sessions.length}`" fontSize="12" class="w-1/2 purple bg-purple-light-c text-center rounded-full px-3 py-0 h-6"/>
            </StackLayout>
        </StackLayout>
        <ScrollView orientation="horizontal" class="w-full mt-3 mb-3">
            <StackLayout orientation="horizontal" height="290">
                <StackLayout v-for="(session, $index) in sessions" v-if="!session.is_serviceSession && $index <= 10" :key="$index" orientation="vertical" class="w-2/3 rounded-lg bg-white-c mr-3" @tap="onSessionTap(session)">
                    <Image :src="session.session_image"  class="w-full" height="175" verticalAlignment="center" />
                    <DockLayout class="px-3 mt-2">
                        <StackLayout orientation="horizontal" dock="left" class="w-1/2 text-left">
                            <Image src.decode="font://&#xf017;" class="fas t-36 green mr-2" width="16"></Image>
                            <Label :text="hour(session.start_date_time)" fontSize="14" class="gray uppercase"/>
                        </StackLayout>
                        <StackLayout orientation="horizontal" dock="right" class="w-1/2 text-right">
                            <Image src.decode="font://&#xf277;" class="fas t-36 green mr-2" width="16"></Image>
                            <Label v-for="(room, $r) in session.rooms" :key="$r" :text="room.title" fontSize="14" class="gray uppercase"/>
                        </StackLayout>
                    </DockLayout>
                    <StackLayout horizontalAlignment="left" class="px-3 mt-3">
                        <Label :text="session.title" fontSize="16" textWrap="true" width="280" class="gray text-left"/>
                    </StackLayout>
                </StackLayout>

            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
import Sessions from "~/components/home_page/sessions/Sessions";
import SingleSession from "~/components/home_page/sessions/SingleSession";
import { hour } from "~/services/helper";

export default  {
    name: "SessionsPreview",
    created () {
        this.getSessions();
    },
    methods: {
        hour,
        onAllTap () {
            this.$root.$emit('indexChange', 2)
        },
        onSessionTap (args) {
            this.$root.$emit('indexChange', 2)
            this.$navigateTo(SingleSession, {
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
        getSessions () {
            axios.get(`/events/${process.env.EVENT_SLUG}/schedule`).then((response) => {
                this.$store.commit('updateSessions', response.data.data)
            })
        }
    },
    computed: {
        sessions () {
            return this.$store.state.sessions;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
