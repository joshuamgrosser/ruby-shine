# frozen_string_literal: true

# The company_email_constraint verifies that email addresses in the table are all
# post-fixed with @example.com.
class AddEmailConstraintToUsers < ActiveRecord::Migration[5.2]
  def up
    execute %{
        ALTER TABLE
        users
        ADD CONSTRAINT
        company_email_constraint
        CHECK ( email ~*'^[^@]+@example\\.com')
    }
  end

  def down
    execute %(
        ALTER TABLE
        users
        DROP CONSTRAINT
        company_email_constraint
    )
  end
end
