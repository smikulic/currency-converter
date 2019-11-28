<style src="./SelectCurrency.css" scoped></style>

<script>
  export default {
    name: 'SelectCurrency',
    props: ['value', 'availableCurrencies', 'defaultCurrency', 'change-currency', 'name'],
  }
</script>

<template>
  <select
    class="select-currency"
    :value="value"
    v-on:change="$emit('change-currency', $event.target.value, name)"
  >
    <option
      :selected="currency === defaultCurrency"
      v-for="currency in availableCurrencies"
      :value="currency"
      :key="currency"
    >
      {{ currency }}
    </option>
  </select>
</template>
