<template>
  <Page>
    <ActionBar
      title="Sign In"
      class="bg-ash-c px-3"
      flat="true"
    >
      <NavigationButton
        text="Back"
        android.systemIcon="ic_menu_back"
        class="purple"
        @tap="$navigator.back()"
      />
      <StackLayout>
        <Label
          horizontalAlignment="center"
          text="Sign In"
          fontSize="20"
          class="purple roboto-slab"
        />
      </StackLayout>
    </ActionBar>
    <GridLayout>
      <GridLayout
        class="px-3 w-full"
        verticalAlignment="center"
        height="70%"
      >
        <StackLayout horizontalAlignment="center">
          <Image
            src="~/assets/images/app.png"
            width="100"
            height="100"
            horizontalAlignment="center"
          />
          <Image
            src="~/assets/images/google-sign.png"
            width="200"
            class="mt-10"
          />
        </StackLayout>
      </GridLayout>
      <GridLayout verticalAlignment="bottom">
        <Image
          src="~/assets/images/Asset-1.png"
          width="2550"
        />
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="scss" scoped>

</style>
