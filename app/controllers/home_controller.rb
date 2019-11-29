require 'money/bank/open_exchange_rates_bank'

class HomeController < ApplicationController

  def calculate_exchange
    oxr = Money::Bank::OpenExchangeRatesBank.new
    oxr.cache = './exchange_rates_cache.json'
    
    # This would usually go into ENV variables or secrets.
    oxr.app_id = 'a52b48990d0a4081b3354e803d5bf633'
    oxr.update_rates
    oxr.date = params[:date]

    # OpenexchangeratesBank only allows USD as base currency for the free plan users.
    oxr.source = 'USD'

    # Store in cache
    oxr.save_rates

    Money.default_bank = oxr
    @exchange = Money.default_bank.get_rate(params[:exchangeFrom], params[:exchangeTo])

    render :json => @exchange
  end
end
