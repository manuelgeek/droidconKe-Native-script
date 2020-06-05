<template>
  <Page
    actionBarHidden="true"
    class="bg-ash-c"
  >
    <ScrollView
      ref="scrollView"
      @scroll="onScroll"
    >
      <StackLayout>
        <StackLayout
          ref="topView"
          verticalAlignment="center"
          height="170"
          style="background-image: url('~/assets/images/Asset 1.png'); background-repeat: no-repeat; background-position: center; background-size: cover;"
          class="px-3"
        >
          <FlexboxLayout
            justifyContent="space-between"
            verticalAlignment="center"
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
              <Image
                src="~/assets/images/app.png"
                width="40"
                height="40"
              />
              <Label
                text="Session Feedback"
                class="roboto-slab purple mt-3"
                fontSize="22"
              />
            </StackLayout>
            <StackLayout verticalAlignment="center">
              <Avatar />
            </StackLayout>
          </FlexboxLayout>
        </StackLayout>
        <StackLayout
          width="100%"
          class="bg-ash-c px-3 py-4"
        >
          <Label
            text="Kindly leave your honest feedback to help us make it even better. Cheers : )"
            textWrap="true"
            fontSize="20"
            class="gray"
          />
          <TextView
            hint="Type here ..."
            class="gray bg-white-c rounded-lg border-0 placeholder-gray-500 p-3 w-full mt-3"
            fontSize="15"
          />
          <StackLayout
            orientation="vertical"
            horizontalAlignment="center"
            class="w-2/3 mt-10"
          >
            <Label
              text="Rating:"
              fontSize="16"
              class="gray text-center"
            />
            <StarRate
              emptyBorderColor="white"
              emptyColor="white"
              filledBorderColor="#707070"
              filledColor="#FFD54A"
              :value="2"
              :max="5"
              horizontalAlignment="center"
              verticalAlignment="center"
            />

            <Button
              fontSize="18"
              class="bg-purple-c white rounded-full mt-12"
              @tap="onButtonTap"
            >
              <FormattedString>
                <Span
                  text="Submit Feedback"
                  class="white"
                />
                <Image
                  src.decode="font://&#xf621;"
                  class="fas t-36"
                  width="10"
                />
                <!--                                <Span text="&#xf14d;" class="far white t-36" width="16"></Span>-->
              </FormattedString>
            </Button>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { onScroll } from '~/services/helper';
import Avatar from '~/components/shared/action_bar/Avatar';

export default {
  name: 'SessionFeedback',
  components: { Avatar },
  props: ['session'],
  data() {
    return {
      rating: 2,
    };
  },
  methods: {
    onButtonTap() {
      console.log('Button was pressed');
      this.$feedback.success({
        title: 'Awesome',
        message: 'That was great!',
      });
    },
    onScroll,
  },
};
</script>

<style lang="scss" scoped>

</style>
