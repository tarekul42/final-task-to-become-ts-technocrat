function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
  return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = ([] as T[]).concat(...arrays);
  return result;
}

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products || products.length === 0) {
    return null;
  } else {
    const mostExpensive = products.reduce((max, current) =>
      max.price > current.price ? max : current
    );
    return mostExpensive;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Monday:
    case Day.Tuesday:
    case Day.Wednesday:
    case Day.Thursday:
    case Day.Friday:
      return "Weekday";
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return `Unknown day value: ${day}. We will add this day on the Calendar soon.`;
  }
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw "Error: Negative number not allowed";
  }
  const result = await new Promise<number>((resolve) => {
    setTimeout(() => resolve(n * n), 1000);
  });
  return result;
}
