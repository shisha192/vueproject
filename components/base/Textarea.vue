<template>
  <label class="relative flex border border-neutral-500 px-16 pb-12 pt-32 hover:border-neutral-10">
    <textarea
      :id="id ?? name"
      class="peer grow resize-none bg-transparent"
      :rows="rows"
      :value="inputValue"
      :name="name"
      :disabled="disabled"
      placeholder=" "
      @input="f_handleChange"
    />

    <span
      class="b2-r peer-placeholder-shown:b1-r peer-focus:b2-r absolute left-16 top-12 cursor-pointer text-primary duration-300 peer-placeholder-shown:text-neutral-500 peer-focus:text-primary"
    >
      {{ placeholder }}
    </span>
  </label>
</template>

<script setup>
import { useField } from "vee-validate"

const props = defineProps({
  rows: {
    type: [String, Number],
    default: 7,
  },
  id: String,
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rules: [String, Object, Function],
})

const emit = defineEmits(["update:modelValue"])

const {
  value: inputValue,
  handleChange,
  setErrors,
} = useField(toRef(props, "name"), props.rules, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
})

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue
  },
)

function f_handleChange(event) {
  setErrors([])
  handleChange(event.target.value, false)
  emit("update:modelValue", event.target.value)
}
</script>
