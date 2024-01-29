<template>
  <BaseFormInput
    v-slot="{ inputVal, onChange, errorMessage, resetField, disabled, nameInput, autocomplete, placeholder }"
  >
    <div>
      <label
        class="relative flex h-68 w-full border border-neutral-500 bg-transparent px-16 py-12 hover:border-neutral-10"
        :class="{
          'border-error': !!errorMessage,
        }"
      >
        <input
          :name="nameInput"
          :autocomplete="autocomplete"
          type="text"
          :value="inputVal"
          :disabled="disabled"
          placeholder=" "
          onwheel="return false;"
          class="pointer peer mt-auto w-full grow bg-transparent disabled:text-secondary"
          @keydown.down.prevent
          @keydown.up.prevent
          @input="onChange"
        />

        <span
          :class="[
            'b2-r peer-placeholder-shown:b1-r peer-focus:b2-r pointer-events-none absolute left-20 top-12 text-primary duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-neutral-500 peer-focus:top-12 peer-focus:translate-y-0 peer-focus:text-primary',
            {
              'text-error': !!errorMessage,
            },
          ]"
        >
          {{ placeholder }}
        </span>
      </label>

      <p v-if="!!errorMessage" class="b2-r mt-4 px-16 text-error">{{ errorMessage }}</p>
    </div>
  </BaseFormInput>
</template>

<script setup></script>
