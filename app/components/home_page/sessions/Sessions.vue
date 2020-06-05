<template>
  <Page>
    <MyActionBar>
      <StackLayout
        orientation="horizontal"
        horizontalAlignment="center"
        @tap="openModal"
      >
        <Label
          text="Filter"
          fontSize="18"
          class="roboto-slab gray"
        />
        <Image
          src.decode="font://&#xf0b0;"
          width="18"
          class="fas purple t-36"
        />
      </StackLayout>
    </MyActionBar>

    <StackLayout class="w-full bg-ash-c">
      <StackLayout
        orientation="horizontal"
        class="w-full mt-2 mb-1 px-3"
      >
        <FlexboxLayout class="w-3/4">
          <StackLayout
            v-for="(days, $index, $key) in schedule"
            :key="$key"
            orientation="vertical"
            :class="['p-1 rounded-lg mr-5', currentTab === $key ? 'bg-yellow-c' : 'bg-green-100']"
            @tap="showTab($key)"
          >
            <Label
              :text="timeDay($index)"
              fontSize="20"
              class="purple roboto-slab"
            />
            <Label
              :text="'Day ' + ($key+1)"
              :class="['font-bold', currentTab === $key ? 'black' : 'green']"
            />
          </StackLayout>
        </FlexboxLayout>
        <StackLayout
          orientation="vertical"
          class="w-1/4"
        >
          <Switch
            checked="false"
            color="#843D95"
            backgroundColor="#DECFE3"
            offBackgroundColor="#DECFE3"
            class="purple bg-purple-light-c"
            horizontalAlignment="center"
          />
          <Label
            text="My Sessions"
            class="-mt-3"
            horizontalAlignment="center"
            fontSize="10"
          />
        </StackLayout>
      </StackLayout>
      <ScrollView>
        <StackLayout class="w-full">
          <StackLayout
            v-for="(days, $index, $key) in schedule"
            :id="$index"
            :key="$key"
            orientation="vertical"
            class="mt-3 px-3"
          >
            <StackLayout
              v-if="currentTab === $key"
              :id="`tabs-${$key}`"
              class="w-full"
            >
              <StackLayout v-if="days.length > 0">
                <StackLayout
                  v-for="(session, $ind) in days"
                  :key="$ind"
                  orientation="horizontal"
                  class="w-full bg-white-c rounded-lg py-3 mt-3 mb-3"
                  androidElevation="3"
                  @tap="session.is_serviceSession ? '' : onItemTap(session)"
                >
                  <StackLayout class="w-2/12">
                    <Label
                      :text="hour(session.start_date_time)"
                      lineHeight="-3"
                      textWrap="true"
                      fontSize="18"
                      class="text-right uppercase purple roboto-slab"
                    />
                  </StackLayout>
                  <StackLayout class="w-9/12">
                    <StackLayout class="w-full pl-10">
                      <Label
                        :text="session.title"
                        textWrap="true"
                        fontSize="16"
                        class="roboto-slab black"
                      />
                      <Label
                        :text="truncateString(session.description, 100)"
                        class="gray"
                        fontSize="15"
                        textWrap="true"
                      />
                      <StackLayout v-if="!session.is_serviceSession">
                        <FlexboxLayout>
                          <Label
                            class="gray mt-3 uppercase"
                            fontSize="13"
                            textWrap="true"
                          >{{ hour(session.start_date_time) }} - {{ hour(session.end_date_time) }} | </Label>
                          <Label
                            v-for="(room, $r) in session.rooms"
                            :key="$r"
                            :text="room.title"
                            fontSize="13"
                            class="gray uppercase mt-3"
                          />
                        </FlexboxLayout>
                        <StackLayout orientation="horizontal">
                          <Image
                            src.decode="font://&#xf17b;"
                            width="16"
                            class="fab green t-36 mr-2"
                          />
                          <Label
                            v-for="(speaker, $s) in session.speakers"
                            :key="$s"
                            :text="speaker.name + ( $s+1 < session.speakers.length ? ', ' : '')"
                            class="green"
                            fontSize="13"
                            textWrap="true"
                          />
                        </StackLayout>
                      </StackLayout>
                    </StackLayout>
                  </StackLayout>
                  <StackLayout
                    verticalAlignment="center"
                    class="w-1/12"
                  >
                    <Image
                      src.decode="font://&#xf005;"
                      width="20"
                      :class="['gray t-36', session.is_bookmarked ? 'fas' : 'far']"
                    />
                  </StackLayout>
                </StackLayout>
              </StackLayout>
              <NoSession v-else />
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import MyActionBar from '~/components/shared/ActionBar';
import SingleSession from '~/components/home_page/sessions/SingleSession';
import FilterSessions from '~/components/home_page/sessions/FilterSessions';

import { truncateString, timeDay, hour } from '~/services/helper';
import NoSession from '~/components/home_page/sessions/NoSession';

export default {
  name: 'Sessions',
  components: { NoSession, MyActionBar },
  data() {
    return {
      currentTab: 0,
    };
  },
  computed: {
    schedule() {
      return this.$store.state.schedule;
    },
  },
  mounted() {
    const vm = this;
    this.$root.$on('allSessions', () => {
      vm.getSchedule();
    });
    this.getSchedule();
  },
  methods: {
    truncateString,
    hour,
    timeDay,
    onItemTap(args) {
      this.$navigateTo(SingleSession, {
        transition: {
          name: 'fade',
          duration: 300,
        },
        props: {
          session: args,
        },
        frame: 'sessions',
      });
    },
    openModal() {
      this.$showModal(FilterSessions, { });
    },
    getSchedule() {
      axios.get(`/events/${process.env.EVENT_SLUG}/schedule?grouped=true`).then((response) => {
        this.$store.commit('updateSchedule', response.data.data);
      });
    },
    showTab(id) {
      this.currentTab = id;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
