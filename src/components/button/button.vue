<template>
  <button class="my-lib-button">
    <slot>
      <span v-if="label" class="my-lib-button__label" v-text="label" />
    </slot>
  </button>
</template>

<script>
export default {
  name: "DSButton",
  props: {
    label: {
      type: String,
      required: false,
    }
  }
}
</script>