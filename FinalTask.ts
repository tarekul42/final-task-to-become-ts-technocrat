function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}
formatString("this");

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.0 },
  { title: "Book e", rating: 9.9 },
];

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
  return filteredItems;
}

filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.reduce((acc, arr) => {
    return [...acc, ...arr];
  }, [] as T[]);

  return result;
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

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

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

processValue("hello");
processValue(10);

interface Product {
  name: string;
  price: number;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
  { name: "Mouse", price: 850 },
];

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
getMostExpensiveProduct(products);

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

getDayType(Day.Monday);
getDayType(Day.Sunday);

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw "Error: Negative number not allowed";
  }
  const result = await new Promise<number>((resolve) => {
    setTimeout(() => resolve(n * n), 1000);
  });
  return result;
}

squareAsync(15).then(console.log);
squareAsync(-1).catch(console.error);
