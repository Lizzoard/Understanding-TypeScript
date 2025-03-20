const inputEl = document.getElementById('user-name') as HTMLInputElement | null; //!; with the as keyword you convert a return type so that the properties could be accessed

// Use ! careful because you must be shure that the value is defenetly not null

// if (!inputEl) {
//   throw new Error('Item not found');
// }

console.log(inputEl?.value);

// ? is an JavaScript element that checks if the value is not null and if so will not continue
