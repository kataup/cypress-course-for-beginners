/* const barva = ['zluta', 'modra', 'fialova'] // vypise vsechny do terminalu
barva.forEach((barvicka) => {
console.log(barvicka.toUpperCase())
}) */

/* const userName = ['Katerina', 'Marketa', 'Blazena']
const user = {
    jmeno: 'Pavla',
    prijmeni: 'Makova',
    praxe: ['tester', 'VS'],
    adresa: {
        mesto: 'Praha',
        ulice: 'Horni Dolni'
    }
}
console.log(userName[2])
console.log(user.adresa.ulice)
console.log(user.jmeno)
 */

const users = [{
    jmeno: 'Katerina',
    email: 'email@email.com',
    role: ['hotline', 'tester']},

{   jmeno: 'Pavel',
    email: 'gmail@gmail.com',
    role: ['UX', 'developer']},

{   jmeno: 'Andrea',
    email: 'mail@mail.com',
    role: ['boss', 'team leader']},
]

console.log(users[0])
console.log(users[0].jmeno)
users.forEach((user) => {
    console.log(user.email) }) // všechny maily všech uživatelů 

users.forEach((rolicka) => {
    if(rolicka.role.includes('UX')) {
         console.log(users.role, users.email)
    }
})
console.log(users)

let newUsers = users.push( // novy uzivatel
    {
        jmeno: 'Karolina',
        email: 'kameil@email.com',
        role: ['tester', 'developer']
    }
)

console.log(users)
/* 
// pop metoda, vymaze posledního usera

let lastUser = users.pop()
console.log(users)

JSON.parse - z řetezce urobí JS objekt
JSON.stringify -  z objektu uroví řetězec*/
/* console.log(users)
let parsedUsers = JSON.stringify(users) // zkonvertuje javascript hodnotu do stringu,do řetězce, ten se přes nějakou metodu pošle na server, ten ji zpracuje (např vytvoří nvého usera do DB)
console.log(parsedUsers)

let newUsersN = JSON.parse(parsedUsers)
console.log(newUsersN)
console.log(newUsersN[0].jmeno) */

// catch (error), string není validní, tak skončí chybou

const response = '[{"id":"1","name":"Google Pixel 6 Pro","data":{"color":"Cloudy White","capacity":"128 GB"}},{"id":"2","name":"Apple iPhone 12 Mini, 256GB, Blue","data":null},{"id":"3","name":"Apple iPhone 12 Pro Max","data":{"color":"Cloudy White","capacity GB":512}},{"id":"4","name":"Apple iPhone 11, 64GB","data":{"price":389.99,"color":"Purple"}},{"id":"5","name":"Samsung Galaxy Z Fold2","data":{"price":689.99,"color":"Brown"}},{"id":"6","name":"Apple AirPods","data":{"generation":"3rd","price":120}},{"id":"7","name":"Apple MacBook Pro 16","data":{"year":2019,"price":1849.99,"CPU model":"Intel Core i9","Hard disk size":"1 TB"}},{"id":"8","name":"Apple Watch Series 8","data":{"Strap Colour":"Elderberry","Case Size":"41mm"}},{"id":"9","name":"Beats Studio3 Wireless","data":{"Color":"Red","Description":"High-performance wireless noise cancelling headphones"}},{"id":"10","name":"Apple iPad Mini 5th Gen","data":{"Capacity":"64 GB","Screen size":7.9}},{"id":"11","name":"Apple iPad Mini 5th Gen","data":{"Capacity":"254 GB","Screen size":7.9}},{"id":"12","name":"Apple iPad Air","data":{"Generation":"4th","Price":"419.99","Capacity":"64 GB"}},{"id":"13","name":"Apple iPad Air","data":{"Generation":"4th","Price":"519.99","Capacity":"256 GB"}}]'
console.log(response)
let products = JSON.parse(response)
console.log(products[0].name)
products.forEach((zbozi) => {
    console.log(zbozi.name)})
