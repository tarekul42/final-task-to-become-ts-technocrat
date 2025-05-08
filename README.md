# Blog Task

## Interface vs Type Alias in Typescript

-Interface and type alias both of them define object structures, but they have key differences:

- **Type Alias**

  - Represents primitive types.
  - Used for functions and arrays.
  - Cannot merge two Type Aliases.
  - Redeclaring the same "type" name shows an error.

- **Interface**
  - Focused on object shapes.
  - Can merge multiple interfaces with the same name.
  - Can be implemented by classes.

### Key Differences

- Type aliases can define primitives; interfaces cannot.
- Interfaces allow merging multiple declarations; type aliases cannot.
- Interfaces can be implemented by classes; type aliases cannot.

### When to Use

- Use `interface` for objects and class implementations.
- Use `type` for primitives, unions, or functions.
- Both work for objects, but choose based on flexibility and use case.

---

## Union & Intersection Types Example

### Union Type (`|`)

- Use when a value can be one type **or** another.
- Example:
  ```ts
  // This variable can be a string or a number
  let id: string | number;
  id = "123"; // Valid
  id = 456; // Valid
  ```

### Intersection Type (`&`)

- Use when a value must be all combined type **at once**.
- Example:
  ```ts
  // this object must have both "name" and "age"
  type Person = { name: string } & { age: number };
  const user: Person = {
    name: "Persian",
    age: 24,
  };
  ```

## Summary

- **Union(`|`)**: Flexibility(just one type is required).
- **Intersection(`&`)**: Strict combination(all types is required)
