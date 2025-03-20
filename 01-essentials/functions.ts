function add(a: number, b: number): number {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  // Never infers that this function will never run till the end
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function preformJob(cb: (msg: string) => void) {
  //...
  cb('Job done!');
}

preformJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Max',
  age: 34,
  greet() {
    console.log('Hello there');
    return this.name;
  },
};

user.greet();

let a: null | string;

a = null;

a = 'Hi';
