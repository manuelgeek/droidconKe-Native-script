<template>
  <Page actionBarHidden="true">
    <ScrollView
      ref="scrollView"
      @scroll="onScroll"
    >
      <StackLayout class="bg-ash-c">
        <StackLayout
          ref="topView"
          verticalAlignment="top"
          height="235"
          style="background-image: url('~/assets/images/Asset-1.png'); background-repeat: no-repeat; background-position: center; background-size: cover;"
          class="px-3 "
        >
          <FlexboxLayout
            justifyContent="space-between"
            verticalAlignment="center"
            class="mt-16"
          >
            <Image
              src.decode="font://&#xf060;"
              class="fas t-36"
              width="20"
              @tap="$navigateBack({frame: 'sessions' })"
            />
            <StackLayout
              orientation="vertical"
              horizontalAlignment="center"
            >
              <ImageCacheIt
                src="~/assets/images/app.png"
                width="40"
                height="40"
              />
            </StackLayout>
            <StackLayout verticalAlignment="center">
              <Avatar />
            </StackLayout>
          </FlexboxLayout>
        </StackLayout>
        <StackLayout
          orientation="horizontal"
          class="w-full px-3"
          marginTop="-55"
        >
          <StackLayout
            class="p-3 bg-green-200 rounded-lg w-1/4 -mt-5"
            height="110"
            width="110"
          >
            <ImageCacheIt
              :src="speaker.avatar"
              class="border-4 border-green-400 rounded-full"
              verticalAlignment="center"
            />
          </StackLayout>
          <StackLayout class="px-3 mt-5">
            <Label
              :text="speaker.name"
              fontSize="20"
              class="roboto-slab purple"
              textWrap="true"
            />
            <Label
              :text="speaker.tagline"
              fontSize="14"
              class="gray"
              textWrap="true"
            />
            <StackLayout orientation="horizontal">
              <Image
                src.decode="font://&#xf099;"
                width="16"
                class="fab green t-36 mr-2"
              />
              <Label
                :text="speaker.twitter.split('.com/').pop()"
                class="purple"
                fontSize="16"
                textWrap="true"
              />
            </StackLayout>
          </StackLayout>
        </StackLayout>
        <StackLayout
          width="100%"
          class="bg-ash-c px-3 py-4"
        >
          <StackLayout>
            <Label
              text="Bio:"
              fontSize="18"
              class="gray roboto-slab mt-2 mb-3"
            />
            <Label
              textWrap="true"
              fontSize="15"
              class="gray"
              :text="speaker.biography"
            />
            <FlexboxLayout class="mt-16 mb-10">
              <Label
                text="Twitter Handle"
                fontSize="16"
                class="purple pr-3"
                textWrap="true"
              />
              <StackLayout>
                <FlexboxLayout
                  justifyContent="space-between"
                  class="rounded-full px-3 py-1 bg-white-c"
                  @tap="copy"
                >
                  <Label
                    :text="'@' + speaker.twitter.split('.com/').pop()"
                    fontSize="15"
                    class="green pr-3"
                    textWrap="true"
                  />
                  <Image
                    src.decode="font://&#xf0c5;"
                    width="16"
                    class="far gray t-36"
                  />
                </FlexboxLayout>
                <Label
                  text="tap to copy handle"
                  class="gray italic px-1"
                  horizontalAlignment="right"
                />
              </StackLayout>
            </FlexboxLayout>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { onScroll } from '~/services/helper';
import Avatar from '~/components/shared/action_bar/Avatar';

const clipboard = require('nativescript-clipboard');

export default {
  name: 'SingleSpeaker',
  components: { Avatar },
  props: ['speaker'],
  methods: {
    onScroll,
    copy() {
      const vm = this;
      clipboard.setText(this.speaker.twitter).then(() => {
        vm.$feedback.success({
          title: 'OK',
          message: 'copied to the clipboard',
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
