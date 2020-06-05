<template>
  <Page>
    <MyActionBar>
      <CountDown />
    </MyActionBar>

    <ScrollView>
      <StackLayout class="bg-ash-c px-3 w-full">
        <ImageCacheIt
          src="~/assets/images/black-friday-twitter.png"
          class="w-full mt-3 mb-3 rounded-lg "
          verticalAlignment="center"
        />
        <StackLayout
          orientation="horizontal"
          verticalAlignment="center"
          class="w-full rounded-lg bg-purple-light-c p-4 mb-3"
        >
          <ImageCacheIt
            src="~/assets/images/oporo.png"
            class="w-1/3"
            verticalAlignment="center"
          />
          <StackLayout
            orientation="horizontal"
            verticalAlignment="center"
            horizontalAlignment="center"
            class="w-2/3"
          >
            <StackLayout class="w-11/12 text-center">
              <Label
                text="Call For Speakers"
                fontSize="20"
                class="w-full black font-bold roboto-slab"
              />
              <Label
                text="Apply to be a speaker"
                fontSize="14"
                class="w-full gray font-bold"
              />
            </StackLayout>
            <Image
              src.decode="font://&#xf04b;"
              class="w-1/12 fas t-36 purple"
              width="20"
            />
          </StackLayout>
        </StackLayout>

        <StackLayout class="w-full border-t-2 border-gray-400 mt-4 mb-2" />

        <SessionsPreview />
        <StackLayout class="w-full border-t-2 border-gray-400 mt-4 mb-3" />
        <SpeakersPreview />

        <StackLayout class="w-full border-t-2 border-gray-400 mt-3 mb-3" />

        <StackLayout
          verticalAlignment="center"
          androidElevation="3"
          horizontalAlignment="center"
          class="rounded-lg shadow-lg bg-white-c p-4 mt-4 mb-3"
        >
          <Label
            text="Keynote Speaker"
            fontSize="20"
            class="w-full black font-bold roboto-slab mt-5 text-center"
          />
          <StackLayout
            orientation="vertical"
            horizontalAlignment="center"
            class="w-full text-center mt-5"
          >
            <ImageCacheIt
              src="~/assets/images/speakers/AlexKoller.png"
              class="w-24 h-24 border-4 border-green-400 rounded-full"
              verticalAlignment="center"
            />
            <Label
              text="Allex Koller"
              fontSize="15"
              class="w-full gray"
            />
          </StackLayout>
          <Label
            text="Become a Speaker"
            fontSize="17"
            class="w-full text-center mt-5 purple underline font-bold "
          />
        </StackLayout>
        <Sponsors />
        <Organizers />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Organizers from '~/components/shared/Organizers';
import Sponsors from '~/components/shared/Sponsors';
import SessionsPreview from '~/components/home_page/partials/SessionsPreview';
import SpeakersPreview from '~/components/home_page/partials/SpeakersPreview';
import MyActionBar from '~/components/shared/ActionBar';
import CountDown from '~/components/home_page/partials/CountDown';

export default {
  components: {
    CountDown, MyActionBar, SpeakersPreview, SessionsPreview, Sponsors, Organizers,
  },
};
</script>

<style lang="scss" scoped>

</style>
