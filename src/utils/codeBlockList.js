const codeBlocks = [
  {
    title: "Array Manipulation",
    code: `const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);`,
    solution: `// Output: [2, 4, 6, 8, 10, 12]`,
  },
  {
    title: "String Concatenation",
    code: `const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(fullName);`,
    solution: `// Output: "John Doe"`,
  },
  {
    title: "Object Destructuring",
    code: `const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, age } = person;
console.log(name, age);`,
    solution: `// Output: "Alice 25"`,
  },
  {
    title: "Function Closure",
    code: `function outerFunction() {
  const message = 'Hello, ';
  function innerFunction(name) {
    console.log(message + name);
  }
  return innerFunction;
}

const greet = outerFunction();
greet('Bob');`,
    solution: `// Output: "Hello, Bob"`,
  },
  {
    title: "Map Function",
    code: `const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);`,
    solution: `// Output: [1, 4, 9, 16, 25]`,
  },
  {
    title: "Set Usage",
    code: `const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
console.log([...uniqueNumbers]);`,
    solution: `// Output: [1, 2, 3, 4, 5]`,
  },
  {
    title: "Async Function",
    code: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}`,
    solution: `// Assumes valid API response`,
  },
  {
    title: "Event Handling",
    code: `document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});`,
    solution: `// Shows alert on button click`,
  },
  {
    title: "Promise Usage",
    code: `const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
};

fetchData().then(data => console.log(data));`,
    solution: `// Output: "Data fetched successfully"`,
  },
  {
    title: "Class Definition",
    code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic animal sound');
  }
}

const cat = new Animal('Whiskers');
cat.makeSound();`,
    solution: `// Output: "Generic animal sound"`,
  },
];
