<style src="./app.css" scoped></style>

<script>
  import getFormattedCurrentDate from './utilities/getFormattedCurrentDate.js';
  import delayFunctionExecution from './utilities/delayFunctionExecution.js';
  import DatePicker from './components/DatePicker.vue';
  import SelectCurrency from './components/SelectCurrency.vue';

  export default {
    name: 'app',
    components: {
      DatePicker,
      SelectCurrency,
    },
    data: function () {
      return {
        date: getFormattedCurrentDate(),
        currentValue: 1,
        calculatedValue: 1,
        exchangeFrom: 'USD',
        exchangeTo: 'USD',
        defaultCurrency: 'USD',
        availableCurrencies: ['USD', 'EUR', 'NOK', 'HRK', 'GBP', 'RUB', 'AUD', 'CZK', 'INR', 'JPY', 'CNY'],
        message: 'Select currencies to convert!',
        isConverted: false,
      }
    },
    methods: {
      calculateCurrencyValue: function () {
        this.message = 'Waiting while typing or selecting...';
        this.isConverted = false;
        delayFunctionExecution(this, this.getExchangeRate)
      },

      changeSelect: function (selectValue, selectName) {
        this[selectName] = selectValue;
        this.calculateCurrencyValue();
      },

      swapCurrencies: function () {
        let tempExchangeFrom = this.exchangeFrom;
        this.exchangeFrom = this.exchangeTo;
        this.exchangeTo = tempExchangeFrom;
        this.calculateCurrencyValue();
      },

      // getExchangeRate: function () {
      //   const params = `exchangeFrom=${this.exchangeFrom}&exchangeTo=${this.exchangeTo}&date=${this.date}`;
      //   let exchangeRate = 1;

      //   const response = fetch(`http://localhost:3000/home/calculate_exchange?${params}`)
      //   .then((resp) => resp.json())
      //   .then((data) => {
      //     exchangeRate = data;
      //   })
      //   .then(() => {
      //     const valueWithExchangeRate = this.currentValue * exchangeRate;
      //     this.calculatedValue = valueWithExchangeRate.toFixed(4);
      //     this.message = `${this.currentValue.toFixed(2)} ${this.exchangeFrom} converts to ${valueWithExchangeRate.toFixed(2)} ${this.exchangeTo}`;
      //     this.isConverted = true;
      //   })
      // },
  }
}
</script>

<template>
  <div id="app-container">

    <div class="row">
      <DatePicker v-model="date" @change-date="calculateCurrencyValue" />
    </div>

    <div class="row">
      <div class="col">
        <SelectCurrency
          name="exchangeFrom"
          v-bind:value="exchangeFrom"
          @change-currency="changeSelect"
          v-bind:defaultCurrency="defaultCurrency"
          v-bind:availableCurrencies="availableCurrencies"
        />
        <input
          class="input-currency-from"
          type="text"
          v-model.number="currentValue"
          v-on:keyup="calculateCurrencyValue"
        />
      </div>
      <div class="col">
        <span class="icon-swap" v-on:click="swapCurrencies">
          <FontAwesomeIcon icon="exchange-alt" />
        </span>
      </div>
      <div class="col">
        <SelectCurrency
          name="exchangeTo"
          v-bind:value="exchangeTo"
          @change-currency="changeSelect"
          v-bind:defaultCurrency="defaultCurrency"
          v-bind:availableCurrencies="availableCurrencies"
        />
        <input
          class="input-currency-to"
          type="text"
          v-model.number="calculatedValue"
          disabled
        />
      </div>
    </div>

    <div class="row">
      <span class="message" v-bind:class="{ messageResult: isConverted }">{{ message }}</span>
    </div>
  </div>
</template>
