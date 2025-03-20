function gemerateError(msg?: string) {
  throw new Error(msg);
}

gemerateError('An error occured');

type UserType = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

// in this case ? marks a value as optional

let input = '';
const didProvideInout = input ?? false;
