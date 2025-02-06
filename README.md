# Implicit Type Coercion in TypeScript

This example demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors that are not caught during compilation.

The `add` function is defined to accept two numbers and return their sum. However, the code calls `add` with a string and a number. TypeScript's type system does not prevent this, resulting in string concatenation instead of numerical addition.

## How to fix

The solution is to improve type checking, either by using type guards or by explicitly enforcing types.