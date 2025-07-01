// pole [] a prvek je oddělený čárkou, začíná se od 0, pole jsou dynamická (lze zmenšovat, zvětšovat), pole nejsou heterogenní, prvky může být undefined, string, number

const pole = new Array('item1', true, 1, undefined)
const policko = ['item2', true, undefined, 2]

// skupina uživ.
userName.push('Jan')
const userName = ['Josef', 'Maria']

// nad polemi lze vytvaret rucne operace - vlozeni hodnoty na konec pole push, forEach - vykoná akci pro kazdý prvek daného pole, pop

console.log(userName)

userName.forEach((jmeno)=> {
    console.log(jmeno.toUpperCase())
})


// objekty - klíč má svou hodnotu, složené závorky
const user = {
    jmeno: 'Peter',
    prijmeni: 'Movanek',
    praxe: ['Javascript', 'HTML'],
    adresa: {
        ulice: 'Terezinska'
    }
}
console.log(userName[0]) // přes index, bere to z mého definovaného pole, index0 je hodnota 'Josef'
console.log(user['jmeno']) // dynamická data
console.log(user.name)