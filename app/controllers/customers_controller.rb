# frozen_string_literal: true

class CustomersController < ApplicationController
  def index
    @order_by_clause = 'email, last_name, first_name'
    if params[:keywords].present?
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer
                   .where(customer_search_term.where_clause)
                   .order(customer_search_term.order_by_clause)
    else
      @customers = Customer.all.order(@order_by_clause).limit(100)
    end
  end
end
