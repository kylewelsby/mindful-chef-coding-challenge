# typed: true
require 'sorbet-runtime'

class Robot
  extend T::Sig

  attr_accessor :x, :y

  sig { params(start_x: Integer, start_y: Integer).void }
  def initialize(start_x = 0, start_y = 0)
    @x = start_x
    @y = start_y
  end

  sig { params(commands: T::Array[String]).void }
  def process(commands)
    movements = {
      'N' => method(:move_north),
      'S' => method(:move_south),
      'E' => method(:move_east),
      'W' => method(:move_west)
    }

    commands.each do |command|
      movements[command.upcase]&.call
    end
  end

  sig { returns(T::Array[Integer]) }
  def position
    [@x, @y]
  end

  private

  sig { void }
  def move_north
    @y += 1 if @y < 9
  end

  sig { void }
  def move_south
    @y -= 1 if @y > 0
  end

  sig { void }
  def move_east
    @x += 1 if @x < 9
  end

  sig { void }
  def move_west
    @x -= 1 if @x > 0
  end
end
