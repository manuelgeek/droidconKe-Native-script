<template>
  <StackLayout
    verticalAlignment="center"
    androidElevation="3"
    horizontalAlignment="center"
    class="rounded-lg shadow-lg bg-white-c p-4 mt-3 mb-3"
  >
    <Label
      text="Organized By;"
      fontSize="20"
      class="w-full roboto-slab black font-bold font-weight-bold mt-5 text-center"
    />
    <StackLayout
      orientation="horizontal"
      horizontalAlignment="center"
      class="w-full text-center mt-5"
    >
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/ihub.png"
          class="w-30"
          verticalAlignment="center"
        />
      </StackLayout>
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/Layer 2-3.png"
          width="40"
          class="w-20"
          verticalAlignment="center"
        />
      </StackLayout>
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/kotlin.png"
          class="w-30"
          verticalAlignment="center"
        />
      </StackLayout>
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/unnamed.png"
          class="w-40"
          verticalAlignment="center"
        />
      </StackLayout>
    </StackLayout>
    <StackLayout
      orientation="horizontal"
      horizontalAlignment="center"
      class="w-full text-center mt-5"
    >
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/Layer 2.png"
          width="40"
          class="w-20"
          verticalAlignment="center"
        />
      </StackLayout>
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/Layer 2-1.png"
          width="35"
          class="w-20"
          verticalAlignment="center"
        />
      </StackLayout>
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/Layer 2-2.png"
          class="w-12"
          verticalAlignment="center"
        />
      </StackLayout>
      <StackLayout class="w-1/4 px-3">
        <ImageCacheIt
          src="~/assets/images/orgs/kragt-digital.png"
          class="w-12"
          verticalAlignment="center"
        />
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  name: 'Organizers',
};
</script>

<style lang="scss" scoped>

</style>
