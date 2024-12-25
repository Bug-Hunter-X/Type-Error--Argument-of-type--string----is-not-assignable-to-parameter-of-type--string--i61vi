# Type Error in TypeScript: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common type error in TypeScript where a function expecting a string argument is called with an array of strings. The error message can be cryptic, so this example illustrates the problem and provides a clear solution.

## Problem

The `greeter` function expects a single string as input. However, the `user` variable holds an array of strings. Calling `greeter` with `user` results in a type error.

## Solution

The solution involves either modifying the `greeter` function to accept an array of strings or modifying how the `user` variable is used with the function.  The provided solution shows both approaches for demonstration purposes.