// cykly - několikrát, pokud bude splněna nějaká podmínka, for loop - inkrementator implementovat o nějakou hodnotu, aby to mělo konečný stav 

// for (let i = 0; i > 5; i++) { console.log();} např. 

// do x do while - ta podmínka se zkoontroluje až na konci loopu
// for of - pole, a jeden test chci vykonvat vícekrát a chci měnit testovací data 

/* function printNumbersFrom1To100() {
     for (let i = 1; i <= 100; i++) 
/*         console.log(i);
} 

function printOnlyEvenNumbersFrom1To100() {
    for (let i = 1; i <= 100; i++)
    if (i % 2 === 0) {
        console.log(i);
    }
} */

// fce uzavře nějakou logiku do nějakého názvu, parametru,se vstupními hodnotami můžeme opakovat kusy kodu dokola, fce vrací hodnotu přes slovo return (hodnota, která se vytvoří během kódu

// syntax fce: function názevfunkce(parametry(proměnné), oddělujeme čárkou){scope}

/* function mojeFunkce(hodnotaJedna, hodnotaDva, hodnotaTri) {
    console.log(hodnotaJedna)
    console.log(hodnotaDva)
    console.log(hodnotaTri)

    return hodnotaJedna + hodnotaDva
}
const x = 60
const vysledek = mojeFunkce(1,2,x)
console.log(vysledek);
mojeFunkce(1,2,x)

const povezMi = function (pozdrav) {
    console.log(pozdrav)

    return "ahoj" + pozdrav;
}
console.log(povezMi("Katerina"));

// používat tento
const arrowFunction = (parametr, parametr2, paramter3) => {
    return parametr + parametr2;
}
console.log(arrowFunction(5,6));


// cvičení:

const kalkulacka = (cislo1, cislo2, operace) => {
  switch (operace) {
    case '+':
      return cislo1 + cislo2;
    case '-':
      return cislo1 - cislo2;
    case '*':
      return cislo1 * cislo2;
    case '/':
      return cislo1 / cislo2
    default:
        return "Neznámá operace" 
  }
}
console.log(kalkulacka(2,3,'+'))

// const globalVariable = je dostupná v celém javascriptovém souboru

const globalVariable = 'Hello, it is me.'
function vypisNeco() {
    console.log(globalVariable)
}
function lokal() {
    const localVariable = 'hihi'
    console.log(localVariable)// jen v tomto scopu dané funkce, jinak je globální stále ten global
}

// blockvariable, 
if(true) {
const blockVariable = 'haha'
console.log(blockVariable)
}  */


/* const pesGlobal = 'Ben' //globalni

const prvniFunkce = (paramter1, parametr2) => { //funkce s parametry
    const vnitrniFunkce = () => {
        const x = 'Micka'
        console.log(x);
        console.log(paramter1);
        console.log(paramter1);
        console.log(pesGlobal);
    }

    vnitrniFunkce()

    if (true) {
        const y = 'blokova premenna'
        console.log(y)
        console.log(paramter1)
        console.log(parametr2)
        // const x by neprošlo, je dostupná je ve scope vnitrni funkce
    }
    return 'haha'
}

const vysledek = prvniFunkce(1, 2)
console.log(vysledek); */

// deep nesting, jedna funkce slouží na jednu věc 