let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};

2 Solutions
let olderDog = Object.assign({}, dog, {age: dog.age + 1})
let olderDog = {...dog, age: dog.age + 1}
