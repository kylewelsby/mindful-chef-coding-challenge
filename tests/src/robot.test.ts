import { Robot } from "../../src/robot.ts";

import { assertEquals } from "../../tests/deps.ts";

Deno.test("robot", async (t) => {
  await t.step("process to [0,0]", () => {
    const commands = "N,E,S,W".split(",");
    const robot = new Robot();
    robot.process(commands);
    assertEquals(robot.position, [0, 0]);
  });

  await t.step("process to [4,4]", () => {
    const commands = "N,E,N,E,N,E,N,E".split(",");
    const robot = new Robot(0, 0);
    robot.process(commands);
    assertEquals(robot.position, [4, 4]);
  });

  await t.step("process to [9,9]", () => {
    const commands = [];
    for (let i = 0; i < 9; i++) {
      commands.push("N");
      commands.push("E");
    }
    const robot = new Robot(0, 0);
    robot.process(commands);
    assertEquals(robot.x, 9);
    assertEquals(robot.y, 9);
    assertEquals(robot.position, [9, 9]);
  });

  await t.step("process to [0,0] from [9,9]", () => {
    const commands = [];
    for (let i = 0; i < 9; i++) {
      commands.push("S");
      commands.push("W");
    }
    const robot = new Robot(9, 9);
    robot.process(commands);
    assertEquals(robot.x, 0);
    assertEquals(robot.y, 0);
    assertEquals(robot.position, [0, 0]);
  });

  await t.step("process does nothing when given unknwon commands", () => {
    const commands = "X,Y,Z".split(",");
    const robot = new Robot();
    robot.process(commands);
    assertEquals(robot.position, [0, 0]);
  });
});
