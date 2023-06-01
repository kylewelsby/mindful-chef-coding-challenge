# typed: strict
require 'optparse'
require_relative 'src/robot'

options = {
  start: '0,0'
}

OptionParser.new do |opts|
  opts.on('--start=X,Y', 'Specify the starting position of the robot') do |start|
    options[:start] = start
  end
end.parse!

x, y = options[:start].split(',').map(&:to_i)
commands = ARGV[0].to_s.split(',')
robot = Robot.new(x, y)
robot.process(commands)
puts robot.position.join(',')
