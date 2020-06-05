<template>
    <Page>
        <MyActionBar>
            <StackLayout horizontalAlignment="center">
                <Label text="Feed" fontSize="20" class="roboto-slab purple" @tap="getFeeds"/>
            </StackLayout>
        </MyActionBar>
        <ListView class="w-full bg-ash-c px-2" for="feed in feeds" height="100%" @loadMoreItems="loadMore">
            <v-template>
                <StackLayout class="py-3">
                    <StackLayout orientation="vertical" class="w-full bg-white-c rounded-lg px-3">
                        <Label :text="feed.body" class="gray" fontSize="15" textWrap="true"/>
                        <Image v-if="feed.image !== null" :src="feed.image" class="w-full rounded-lg"/>
                        <FlexboxLayout justifyContent="space-between">
                            <StackLayout orientation="horizontal" class="text-left">
                                <Image src.decode="font://&#xf017;" class="fas t-36 gray-light mr-1" width="15"></Image>
                                <Label :text="humanReadable(feed.created_at) + ' - '+ hour(feed.created_at)" fontSize="13" class="font-bold gray-light uppercase"/>
                            </StackLayout>
                            <StackLayout orientation="horizontal" class="text-right">
                                <Image src.decode="font://&#xf064;" class="fas t-36 gray mr-2" width="20" @tap="share(feed)"></Image>
                            </StackLayout>
                        </FlexboxLayout>
                    </StackLayout>
                </StackLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
    import MyActionBar from "~/components/shared/ActionBar";
    import { hour, humanReadable, truncateString } from "~/services/helper";
    const SocialShare = require("nativescript-social-share");

    export default {
        name: "Feeds",
        components: {MyActionBar},
        data() {
            return {
                feeds: [],
                paginator: {}
            }
        },
        mounted () {
            this.getFeeds();
        },
        methods: {
            // onItemTap: function (args) {
            //     console.log('Item with index: ' + args.index + ' tapped');
            // const view = args.view;
            // const page = view.page;
            // const tappedItem = view.bindingContext;
            // console.log('ggg');
            // @itemTap="onItemTap"
            // },
            hour,
            humanReadable,
            getFeeds () {
                axios.get(`/events/${process.env.EVENT_SLUG}/feeds?per_page=10`).then((response) => {
                    this.feeds = response.data.data
                    this.paginator = response.data.meta.paginator
                })
            },
            async loadMore () {
                if(this.paginator.next_page !== null) {
                    await axios.get(this.paginator.next_page).then((response) => {
                        this.feeds.push(response.data.data)
                        this.paginator = response.data.meta.paginator
                    })
                }
            },
            share (feed) {
                SocialShare.shareText(truncateString(feed.body, 100) +'\n'+ feed.url, process.env.APP_NAME);
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
