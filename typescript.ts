// Boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favoriteQuote: string = `I don't feel old, I'm only ${age}`;

// arrray
let pets: string[] = ['cat', 'dog', 'pig'];

// another way to declare arrays
let pets2: Array<string> = ['lion', 'dragon', 'gargoyle'];

// object - lowercase
let wizard: object = {
  a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum (Enumerable) with capital Name
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: number = Size.Small;

// Any - BE CAREFUL!!!!!!!!!!!!
let whatever: any = 'aaaaghhhhhh noooooo!!!';
whatever = basket;

// void - for a function that doesn't return anything
let sing = (): void => {
  console.log('lalalalalal')
}

// never for a function that doesn't return and doesn't have an endpoint.
let error = (): never => {
  throw Error('oops');
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT')
}

// fightRobotArmy({count: 1, type: 'dragon'})

// cuts code like below down by using interface
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT')
}

// Type Assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
}

let dog = {} as CatArmy
dog.count
