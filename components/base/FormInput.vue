<template>
  <slot
    :input-val="inputVal"
    :error-message="errorMessage"
    :meta="meta"
    :handle-blur="handleBlur"
    :handle-change="handleChange"
    :reset-field="resetField"
    :set-errors="setErrors"
    :errors="errors"
    :on-blur="onBlur"
    :on-change="onChange"
    :id="id"
    :placeholder="placeholder"
    :modelValue="modelValue"
    :disabled="disabled"
    :autocomplete="autocomplete"
    :nameInput="name"
    :type="type"
    :rules="rules"
    :validateOnMount="validateOnMount"
    :bails="bails"
    :label="label"
    :standalone="standalone"
    :keepValue="keepValue"
    :validateOnValueUpdate="validateOnValueUpdate"
    :statusApi="statusApi"
    :statusApiErrorMessage="statusApiErrorMessage"
  >
    <input
      :id="id"
      :name="name"
      :autocomplete="autocomplete"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="inputVal"
      :class="[helpers.mergeClass('Text-M-med', $attrs.class)]"
      onwheel="return false;"
      @keydown.down.prevent
      @keydown.up.prevent
      @input="onChange"
      @blur="onBlur"
      @focus="onFocus"
    />
  </slot>
</template>

<script setup>
import { useField } from "vee-validate"

const props = defineProps({
  id: String,
  placeholder: String,
  modelValue: [String, Number],
  disabled: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: "off",
  },
  name: String,
  type: {
    type: String,
    default: "text",
  },
  rules: [String, Object, Function],
  validateOnMount: {
    type: Boolean,
    default: false,
  },
  bails: {
    type: Boolean,
    default: true,
  },
  label: String,
  standalone: {
    type: Boolean,
    default: false,
  },
  keepValue: Boolean,
  validateOnValueUpdate: {
    type: Boolean,
    default: false,
  },
  statusApi: String,
  statusApiErrorMessage: {
    type: String,
    default: "Wrong password",
  },
})

const emit = defineEmits(["update:modelValue", "onBlur", "onFocus", "onError"])

const {
  value: inputVal,
  errorMessage,
  meta,
  handleBlur,
  handleChange,
  resetField,
  setErrors,
  errors,
} = useField(toRef(props, "name"), props.rules, {
  initialValue: props.modelValue,
  validateOnValueUpdate: props.validateOnValueUpdate,
  bails: props.bails,
  label: props.label,
  standalone: props.standalone,
  keepValueOnUnmount: props.keepValue,
  validateOnMount: props.validateOnMount,
})

watch(errorMessage, (newValue) => {
  emit("onError", newValue)
})

watch(
  () => props.modelValue,
  (nVal) => {
    handleChange(nVal, props.validateOnValueUpdate)
  },
)

function onChange(e) {
  setErrors([])
  handleChange(e.target.value, props.validateOnValueUpdate)
  emit("update:modelValue", e.target.value)
}

function onBlur() {
  handleBlur()
  emit("onBlur")
}

function onFocus() {
  emit("onFocus")
}
</script>
