<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      'horizontal': !vertical
      }"
    class="p-2"
  >
    <BaseRadio
      :id="id"
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
      class="mr-2"
    />
  </component>
</template>

<script>
import uniqid from 'uniqid'
import BaseRadio from './BaseRadio.vue'
export default {
  components: { BaseRadio },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default () {
        return uniqid()
      }
    }
  }
}
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
