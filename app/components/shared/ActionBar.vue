<template>
  <ActionBar
    class="bg-ash-c px-3"
    flat="true"
  >
    <GridLayout
      orientation="horizontal"
      class="py-1"
    >
      <Icon />
      <slot />
      <Avatar />
    </GridLayout>
  </ActionBar>
</template>

<script>
import Avatar from '~/components/shared/action_bar/Avatar';
import Icon from '~/components/shared/action_bar/Icon';

export default {
  name: 'MyActionBar',
  components: { Icon, Avatar },
};
</script>

<style lang="scss" scoped>

</style>
