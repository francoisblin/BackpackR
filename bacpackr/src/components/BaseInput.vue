<template>
  <label class="text-sm text-green-300 mt-1" :for="id">{{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="label"
      class="rounded-lg shadow pr-2"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    >
</template>

<script>
import uniqid from 'uniqid'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
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
