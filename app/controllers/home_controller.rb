require 'money/bank/open_exchange_rates_bank'

class HomeController < ApplicationController
  def initialize
    super # this calls ActionController::Base initialize

    @oxr = Money::Bank::OpenExchangeRatesBank.new
    @oxr.cache = './exchange_rates_cache.json'    
    @oxr.app_id = 'a52b48990d0a4081b3354e803d5bf633' # This would usually go into ENV variables or secrets
    @oxr.update_rates
    @oxr.source = 'USD' # OpenexchangeratesBank only allows USD as base currency for the free plan users
  end

  def calculate_exchange
    @oxr.date = params[:date]
    @oxr.save_rates # Store in cache

    Money.default_bank = @oxr
    render :json => Money.default_bank.get_rate(params[:exchangeFrom], params[:exchangeTo])
  end
end
