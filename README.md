# Mindful Chef Code Challenge

This repository contains the solution to the
[Mindful Chef Code Challenge](./CHALLENGE.md) completed by
[Kyle Welsby](https://github.com/kylewelsby). The challenge involved building a
warehouse robot controller.

## ⚡️ System Dependencies

Before using the warehouse robot controller, make sure you have the following
dependencies installed on your system:

- [Deno](https://deno.land): The runtime environment required to build and run
  the tool.

_At the time of writing the latest stable version of Deno is 1.34.1_

## 🚀 Getting Started

Follow the steps below to get started with the warehouse robot controller:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kylewelsby/mindful-chef-code-challenge.git
   ```

2. Install Deno by visiting the
   [Deno installation guide](https://deno.com/manual@v1.34.1/getting_started/installation)
   and following the instructions provided.

3. Open your terminal or command prompt and navigate to the project directory:

   ```bash
   cd mindful-chef-challenge
   ```

4. Run the following command to execute the robot controller, replacing
   <commands> with the desired sequence of commands:

   ```bash
   deno run mod.ts <commands>
   ```

   | Option            | Description                                                                                                      | Default |
   | ----------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
   | `<commands>`      | Nvigate the robot using compas directions <br> - `N` = North<br> - `S` = South<br> - `E` = East<br> - `W` = West |         |
   | `--start=<n>,<n>` | (optional): Sepecify the starting position of the robot                                                          | 0,0     |

   For example, to navigate the robot to grid position [4,4], use the following
   command: `<commands>`.

   ```bash
   deno run mod.ts 'N,E,N,E,N,E,N,E'
   ```

5. The result will be the final position of the robot within the warehouse grid.

## 🧪 Testing

To ensure the correctness of the tool, unit tests are provided. Follow the
instructions below to run the tests:

```
deno test -A
```

## 🚨 Linting

The warehouse robot controller adheres to coding standards and best practices.
To run the linter and formatter on the codebase, execute the following commands:

- Format the code using Deno's built-in formatter:

  ```bash
  deno fmt
  ```

- Run the Deno linter to check for potential issues and enforce coding
  standards:

  ```bash
  deno lint
  ```

The linter checks your code for potential issues, enforces best practices, and
alerts you to any deviations from the recommended coding standards.

## 🎓 License

MIT: https://kylewelsby.mit-license.org
