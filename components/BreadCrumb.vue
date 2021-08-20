<template>
  <v-breadcrumbs :items="breadcrumbList" class="pa-0 body-2">
    <template #item="props">
      <nuxt-link
        :to="{ path: props.item.to }"
        :class="[props.item.disabled && 'disabled']"
      >
        {{ props.item.text }}
      </nuxt-link>
    </template>
  </v-breadcrumbs>
</template>

<script>
const containsRequiredKeys = (item) => "text" in item && "disabled" in item;

const containsLinkIfEnabled = (item) =>
  item.disabled || (!item.disabled && "to" in item);

export const breadCrumbValidator = (items) =>
  items.every(
    (item) => containsRequiredKeys(item) && containsLinkIfEnabled(item)
  );

export default {
  name: "BreadCrumb",
  props: {
    breadcrumbList: {
      type: Array,
      required: true,
      validator: breadCrumbValidator,
    },
  },
};
</script>
<style lang="scss">
.v-breadcrumbs {
  .disabled {
    pointer-events: none;
    font-weight: 400;
    color: black;
  }
  &__divider {
    color: black !important;
  }
}
</style>
