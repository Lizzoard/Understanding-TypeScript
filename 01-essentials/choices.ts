// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

type Role = 'admin' | 'editor' | 'guest' | 'reader';

let userRole: Role = 'admin';

// ...

userRole = 'guest';

let possibleResultsNew: [1 | -1, number]; // [1, -1]

possibleResultsNew = [1, -1]
