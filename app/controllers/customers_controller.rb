# frozen_string_literal: true

class CustomersController < ApplicationController
  PAGE_SIZE = 10

  def index
    @page = (params[:page] || 0).to_i
    @order_by_clause = 'email, last_name, first_name'
    if params[:keywords].present?
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(customer_search_term.where_clause)
                       .order(customer_search_term.order_by_clause)
                       .offset(PAGE_SIZE * @page)
                       .limit(PAGE_SIZE)
    else
      @customers = Customer.all.order(@order_by_clause).offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
    end
    respond_to do |format|
      format.html
      format.json { render json: @customers }
    end
  end
end
