<style src="./DatePicker.css" scoped></style>

<script>
  export default {
    name: 'DatePicker',
    props: ['value', 'change-date'],
  }
</script>

<template>
  <div class="date-picker">
    <input
      type="date"
      v-bind:value="value"
      v-on:change="$emit('change-date')"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
