<template>
  <FlexboxLayout
    class="w-full bg-ash-c rounded-lg px-1 py-4"
    flexWrap="wrap"
    flexDirection="column"
  >
    <FlexboxLayout
      class="w-full px-3"
      justifyContent="space-between"
    >
      <StackLayout orientation="horizontal">
        <Image
          src.decode="font://&#xf0b0;"
          width="18"
          class="fas green t-36 mr-2"
        />
        <Label
          class="green roboto-slab "
          fontSize="18"
          text="Filter"
        />
        <Label
          class="purple roboto-slab ml-3"
          fontSize="16"
          text="Toggle"
          @tap="toggleFilter"
        />
      </StackLayout>
      <Label
        text="Cancel"
        fontSize="16"
        class="uppercase gray"
        @tap="$modal.close()"
      />
    </FlexboxLayout>
    <StackLayout
      orientation="vertical"
      class="mt-5 w-full px-3"
    >
      <Label
        text="Level"
        class="black"
        fontSize="18"
      />
      <FlexboxLayout
        flexWrap="wrap"
        class="text-center mt-2"
      >
        <Label
          v-for="(level, $index) in sessionLevels"
          :key="$index"
          :text="level"
          fontSize="14"
          :class="['border-purple-300 py-1 px-5 gray mb-2', ($index) % 3 === 0 ? 'rounded-l-lg border-2' : ($index + 1) % 3 === 0 ? 'border-2 rounded-r-lg' : ($index + 1) === sessionLevels.length && ($index + 1) % 3 !== 0 ? 'border-t-2 border-b-2 border-r-2' : 'border-t-2 border-b-2', level === levels ? 'bg-white-c border-4 border-purple-600' : 'border-2 border-purple-300']"
          @tap="levels=level"
        />
      </FlexboxLayout>
    </StackLayout>

    <StackLayout
      orientation="vertical"
      class="mt-5 w-full px-3"
    >
      <Label
        text="Rooms"
        class="black"
        fontSize="18"
      />
      <FlexboxLayout
        flexWrap="wrap"
        class="text-center mt-2"
      >
        <Label
          v-for="(room, $index) in sessionRooms"
          :key="$index"
          :text="room.title"
          fontSize="14"
          minWidth="110"
          :class="['border-purple-300 py-1 px-5 gray mb-2', ($index) % 3 === 0 ? 'rounded-l-lg border-2' : ($index + 1) % 3 === 0 ? 'border-2 rounded-r-lg' : ($index + 1) === sessionRooms.length && ($index + 1) % 3 !== 0 ? 'border-t-2 border-b-2 border-r-2' : 'border-t-2 border-b-2', room.title === rooms ? 'bg-white-c border-4 border-purple-600' : 'border-2 border-purple-300']"
          @tap="rooms=room.title"
        />
      </FlexboxLayout>
    </StackLayout>

    <StackLayout
      orientation="vertical"
      class="mt-5 w-full px-3"
    >
      <Label
        text="Session Type"
        class="black"
        fontSize="18"
      />
      <FlexboxLayout
        flexWrap="wrap"
        class="text-center mt-2"
      >
        <Label
          v-for="(format, $index) in sessionFormats"
          :key="$index"
          :text="format"
          fontSize="13"
          :class="['border-purple-300 py-1 px-5 gray mb-2', ($index) % 2 === 0 ? 'rounded-l-lg border-2' : ($index + 1) % 2 === 0 ? 'border-2 rounded-r-lg' : ($index + 1) === sessionFormats.length && ($index + 1) % 2 !== 0 ? 'border-t-2 border-b-2 border-r-2' : 'border-t-2 border-b-2', format === formats ? 'bg-white-c border-4 border-purple-600' : 'border-2 border-purple-300']"
          @tap="formats=format"
        />
      </FlexboxLayout>
    </StackLayout>

    <Button
      fontSize="18"
      class="bg-purple-c white rounded-full mt-12"
      @tap="filter"
    >
      <FormattedString>
        <Span
          :text="button"
          class="white"
        />
      </FormattedString>
    </Button>
  </FlexboxLayout>
</template>

<script>
export default {
  name: 'FilterSessions',
  data() {
    return {
      rooms: '',
      levels: '',
      formats: '',
      button: 'Filter',
    };
  },
  computed: {
    sessionFormats() {
      if (this.$store.state.event !== undefined) {
        return this.$store.state.event !== '' ? this.$store.state.event.cfs.cfs_settings.session_formats : [];
      }
      return [];
    },
    sessionLevels() {
      if (this.$store.state.event !== undefined) {
        return this.$store.state.event !== '' ? this.$store.state.event.cfs.cfs_settings.session_levels : [];
      }
      return [];
    },
    sessionRooms() {
      if (this.$store.state.event !== undefined) {
        return this.$store.state.event !== '' ? this.$store.state.event.rooms : [];
      }
      return [];
    },
  },
  methods: {
    filter() {
      const vm = this;
      if (this.rooms !== '' || this.levels !== '' || this.formats !== '') {
        this.button = 'Filtering ...';
        this.$store.commit('filterSessions', {
          levels: vm.levels,
          formats: vm.formats,
          rooms: vm.rooms,
        });
        this.button = 'Filter';
        this.$modal.close();
      }
    },
    toggleFilter() {
      this.levels = '';
      this.formats = '';
      this.rooms = '';
      this.$root.$emit('allSessions');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
