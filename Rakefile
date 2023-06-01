# typed: false
# frozen_string_literal: true

require "bundler/gem_tasks"
require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << "src"
  t.pattern = 'tests/**/*_test.rb'
end

task default: :test
