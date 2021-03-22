<template>
  <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
      :id="id"
    />
  <label :for="id" v-if="label">{{ label }}</label>
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
    value: {
      type: [String, Number],
      required: true
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
