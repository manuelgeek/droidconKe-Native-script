<template lang="html">
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
            <Frame>
                <Index />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Browse />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Search />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
               <Star />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>

<script>
    import Index from "./home_page/Index.vue"
import Browse from "./Browse.vue";
import Search from "./Search.vue";
import Star from "./Star.vue";

export default {
  components: {
    Browse,
    Search,
    Star,
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
