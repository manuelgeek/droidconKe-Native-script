<template>
  <StackLayout
    orientation="horizontal"
    horizontalAlignment="center"
    class="mt-2 mb-2 px-0 rounded-full bg-green-100 border-2 border-green-400 roboto-bold"
  >
    <StackLayout
      verticalAlignment="center"
      class="px-1 -mt-3 -mb-3"
    >
      <Image
        src.decode="font://&#xf017;"
        class="fas t-36 green"
        width="20"
        height="20"
      />
    </StackLayout>
    <StackLayout
      orientation="vertical"
      class="px-1 -mt-3 -mb-3"
    >
      <Label
        :text="days"
        fontSize="22"
        class="black font-bold"
      />
      <Label
        text="Days"
        fontSize="10"
        class="-mt-8 green"
      />
    </StackLayout>
    <StackLayout
      orientation="vertical"
      class="px-1 -mt-3 -mb-3"
    >
      <Label
        :text="hours"
        fontSize="22"
        class="black font-bold"
      />
      <Label
        text="Hrs"
        fontSize="10"
        class="-mt-8 green"
      />
    </StackLayout>
    <StackLayout
      orientation="vertical"
      class="px-1 -mt-3 -mb-3"
    >
      <Label
        :text="minutes"
        fontSize="22"
        class="black font-bold"
      />
      <Label
        text="Mins"
        fontSize="10"
        class="-mt-8 green"
      />
    </StackLayout>
    <StackLayout
      orientation="vertical"
      class="px-1 -mt-3 -mb-3"
    >
      <Label
        :text="seconds"
        fontSize="22"
        class="black font-bold"
      />
      <Label
        text="Sec"
        fontSize="10"
        class="-mt-8 green"
      />
    </StackLayout>
  </StackLayout>
</template>

<script>

export default {
  name: 'CountDown',
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  created() {
    const vm = this;
    const countDownDate = new Date('Aug 6, 2020').getTime();
    // Update the count down every 1 second
    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      vm.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      vm.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      vm.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      vm.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // If the count down is finished, write some text
      // if (distance < 0) {
      //     clearInterval(x);
      // }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>

</style>
