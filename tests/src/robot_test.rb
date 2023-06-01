# typed: true
require 'minitest/autorun'

require_relative '../../src/robot'

class RobotTest < Minitest::Test
  def test_process_to_origin
    commands = %w[N E S W]
    robot = Robot.new
    robot.process(commands)
    assert_equal [0, 0], robot.position
  end

  def test_process_to_coordinates
    commands = %w[N E N E N E N E]
    robot = Robot.new(0, 0)
    robot.process(commands)
    assert_equal [4, 4], robot.position
  end

  def test_process_to_edge
    commands = []
    9.times do
      commands.push('N', 'E')
    end
    robot = Robot.new(0, 0)
    robot.process(commands)
    assert_equal 9, robot.x
    assert_equal 9, robot.y
    assert_equal [9, 9], robot.position
  end

  def test_process_back_to_origin
    commands = []
    9.times do
      commands.push('S', 'W')
    end
    robot = Robot.new(9, 9)
    robot.process(commands)
    assert_equal 0, robot.x
    assert_equal 0, robot.y
    assert_equal [0, 0], robot.position
  end

  def test_process_unknown_commands
    commands = %w[X Y Z]
    robot = Robot.new
    robot.process(commands)
    assert_equal [0, 0], robot.position
  end
end
