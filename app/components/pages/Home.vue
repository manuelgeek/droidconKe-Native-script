<template>
  <Page
    actionBarHidden="true"
    backgroundSpanUnderStatusBar="true"
    androidStatusBarBackground="#FFD54A"
    statusBarStyle="light"
  >
    <BottomNavigation
      :selectedIndex="index"
      @selectedIndexChanged="tabChange"
    >
      <TabStrip>
        <TabStripItem class="navigation__item">
          <Label text="Home" />
          <Image
            src.decode="font://&#xf015;"
            class="fas t-36"
          />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Feed" />
          <Image
            src.decode="font://&#xf0f3;"
            class="fas t-36"
          />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Sessions" />
          <Image
            src.decode="font://&#xf017;"
            class="fas t-36"
          />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="About" />
          <Image
            src.decode="font://&#xf621;"
            class="fas t-36"
          />
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Frame id="index">
          <Index />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="feeds">
          <Feeds />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="sessions">
          <Sessions />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <!--                    <Frame id="about">-->
        <About />
        <!--                    </Frame>-->
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<script>
import Sessions from '~/components/home_page/sessions/Sessions';
import About from '~/components/home_page/About';
import Feeds from '~/components/home_page/Feeds';
import Index from '~/components/home_page/Index';

export default {
  name: 'Home',
  components: {
    Sessions,
    About,
    Feeds,
    Index,
  },
  data() {
    return {
      index: 0,
    };
  },
  created() {
    const vm = this;
    this.$root.$on('indexChange', (i) => {
      vm.index = i;
    });
    if (this.$store.state.event.length === 0) {
      this.$store.dispatch('getEvent');
    }
  },
  methods: {
    tabChange(i) {
      // console.log(i.newIndex)
      this.index = i.newIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
    TabStrip {
        background-color: var(--black-color-c);

        TabStripItem {
            color: var(--white-color-c);
        }
    }

    TabContentItem {
        background-color: var(--ash-color-c);
    }
</style>
