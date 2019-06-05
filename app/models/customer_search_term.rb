# Supports searching for customers.
class CustomerSearchTerm
  attr_reader :where_clause
  attr_reader :order_by_clause

  def initialize(search_term)
    search_term = search_term.downcase
    @where_clause = ''
    @order_by_clause = 'email, last_name, first_name'

    if search_term.include? '@'
      email_search search_term # search for email
    else
      search search_term # search for non-email
    end
  end

  def email_search(search_term)
    @where_clause = "LOWER(email) = '#{search_term}'"
  end

  def search(search_term)
    @where_clause = "LOWER(first_name) LIKE '#{search_term}%'" \
      " OR LOWER(last_name) LIKE '#{search_term}%'"
  end
end
