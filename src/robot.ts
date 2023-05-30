interface Movement {
  [key: string]: () => void;
}
export class Robot {
  public x: number;
  public y: number;

  constructor(startX: number = 0, startY: number = 0) {
    this.x = startX;
    this.y = startY;
  }

  public process(commands: string[]): void {
    const movements: Movement = {
      N: () => this.moveNorth(),
      S: () => this.moveSouth(),
      E: () => this.moveEast(),
      W: () => this.moveWest(),
    };
    for (const command of commands) {
      movements[command.toUpperCase()]?.();
    }
  }

  public get position(): number[] {
    return [this.x, this.y];
  }

  private moveNorth(): void {
    if (this.y < 9) {
      this.y++;
    }
  }

  private moveSouth(): void {
    if (this.y > 0) {
      this.y--;
    }
  }

  private moveEast(): void {
    if (this.x < 9) {
      this.x++;
    }
  }

  private moveWest(): void {
    if (this.x > 0) {
      this.x--;
    }
  }
}
