/// <reference lib="deno.ns" />
import { parse } from "https://deno.land/std@0.184.0/flags/mod.ts";

import { Robot } from "./src/robot.ts";

const flags = parse(Deno.args, {
  string: ["start"],
  default: { start: "0,0" },
});

const [x, y] = flags.start.split(",").map(Number);

const commands = Deno.args[0].split(",");
const robot = new Robot(x, y);
robot.process(commands);
console.log(robot.position.join(","));
