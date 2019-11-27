<style src="./app.css" scoped></style>

<script>
  export default {
    props: ['data'],
    data: function () {
      return {
        date: '2019-01-01',
        currentValue: 1,
        calculatedValue: 1,
        exchangeFrom: 'USD',
        exchangeTo: 'USD',
        defaultCurrency: 'USD',
        availableCurrencies: ['USD', 'EUR', 'NOK', 'HRK', 'GBP', 'RUB', 'AUD', 'CZK', 'INR', 'JPY', 'CNY']
      }
    },
    methods: {
      calculateCurrencyValue: function () {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }

        this.timer = setTimeout(() => {
            this.getExchangeRate();
        }, 800);
      },

      getExchangeRate: function () {
        const params = `exchangeFrom=${this.exchangeFrom}&exchangeTo=${this.exchangeTo}&date=${this.date}`;
        let exchangeRate = 1;

        //  const response = fetch(`http://localhost:3000/home/calculate_exchange?${params}`)
        //   .then((resp) => resp.json())
        //   .then((data) => {
        //     exchangeRate = data;
        //   })
        //   .then(() => {
        //     this.calculatedValue = (parseInt(this.currentValue, 10) * exchangeRate).toFixed(4);
        //   })
      },
  }
}
</script>

<template>
  <div id="app-container">

    <div class="col">
      <select
        class="select-currency"
        v-model="exchangeFrom"
      >
        <option
          :selected="currency === defaultCurrency"
          v-for="currency in availableCurrencies"
          v-bind:key="currency"
        >
          {{ currency }}
        </option>
      </select>

      <input
        class="input-currency-from"
        type="text"
        v-model="currentValue"
        v-on:keyup="calculateCurrencyValue"
      />
    </div>

    <div class="col">
      <select
        class="select-currency"
        v-model="exchangeTo"
      >
        <option
          :selected="currency === defaultCurrency"
          v-for="currency in availableCurrencies"
          v-bind:key="currency"
        >
          {{ currency }}
        </option>
      </select>

      <input
        class="input-currency-to"
        type="text"
        v-model="calculatedValue"
      />
    </div>

    <!-- <p>{{ data }}</p> -->
  </div>
</template>
