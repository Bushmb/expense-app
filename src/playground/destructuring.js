//
// Object Desstructuring
//

// const person = {
//   name: 'Mike',
//   age: 40,
//   location: {
//     city: 'San Diego',
//     temp: 72
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);



//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];
const [street, city, state = 'Michigan', zip] = address;
console.log(`You are in ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);