<template lang="html">
    <Frame id="main-app">
        <Page actionBarHidden="true">
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem class="navigation__item">
                        <Label text="Home"></Label>
                        <Image src.decode="font://&#xf015;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem class="navigation__item">
                        <Label text="Feed"></Label>
                        <Image src.decode="font://&#xf0f3;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem class="navigation__item">
                        <Label text="Sessions"></Label>
                        <Image src.decode="font://&#xf017;" class="fas t-36"></Image>
                    </TabStripItem>
                    <TabStripItem class="navigation__item">
                        <Label text="About"></Label>
                        <Image src.decode="font://&#xf621;" class="fas t-36"></Image>
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
                    <Frame id="sessions" >
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
    </Frame>
</template>

<script>
    import Index from "./home_page/Index.vue"
    import Feeds from "~/components/home_page/Feeds";
    import About from "~/components/home_page/About";
    import Sessions from "~/components/home_page/sessions/Sessions";

export default {
  components: {
      Sessions,
      About,
      Feeds,
    Index
  }
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
