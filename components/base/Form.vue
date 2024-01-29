<template>
  <Form
    v-slot="slotProps"
    :validation-schema="schema"
    @submit="$emit('submit')"
  >
    <slot :slot-props="slotProps" />
  </Form>
</template>

<script setup>
import { Form } from "vee-validate"

defineProps( {
  schema: Object,
} )

defineEmits( [ "submit" ] )

</script>
