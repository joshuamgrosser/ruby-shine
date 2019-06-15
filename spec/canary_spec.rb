require 'rspec'
require 'rails_helper'

describe 'rspec is configured properly' do
  context 'when set up properly' do
    it 'should pass' do
      expect(true).to eq(true)
    end
  end
end