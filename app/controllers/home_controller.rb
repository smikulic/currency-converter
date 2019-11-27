require 'money/bank/open_exchange_rates_bank'

class HomeController < ApplicationController
  def index
    @demo_data = 'demo data!!'

    @data = {
      demo_data: @demo_data,
    }
  end

  def calculate_exchange(exchangeFrom = "USD", exchangeTo = "EUR", date = "2019-01-01")
    oxr = Money::Bank::OpenExchangeRatesBank.new
    oxr.app_id = 'a52b48990d0a4081b3354e803d5bf633'
    oxr.update_rates

    # puts date.class
    # puts params[:date].class

    oxr.date = params[:date]
    oxr.source = params[:exchangeFrom]

    # exchangeFrom = params[:exchangeFrom].upcase
    # exchangeTo = params[:exchangeTo].upcase
    # date = params[:date] || "2019-01-01"

    Money.default_bank = oxr
    @exchange = Money.default_bank.get_rate(params[:exchangeFrom], params[:exchangeTo])

    render :json => @exchange
  end
end
