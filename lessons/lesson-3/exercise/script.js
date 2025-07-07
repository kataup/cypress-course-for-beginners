/*
1. vytvorte globalnu premennu
2. vytvorte funkciu, s 2 parametrami
3. vytvorte vnutornu funkciu, ktora vytvorti premennu X, vypise hodnoty premnenej X,
  parametre nadradenej funckie, a globalnuy premennu
4 v nadradenej funkcii vytvorte podmienku, ktora vytvori premennu Y,
  a vypise hodnotu tejto premennej
5. vytvortne arrow funkciu, ktora vrati hodnotu stringu a vypise do console */


const globalnaPremenna = "Som globálna!"

const arrrowFunkcia = (parameter1, parameter2) => {
  const vnutornaFunkcia = () => {
    const X = "Ja som vo vnutornej funkcii"
    console.log(X)
    console.log(parameter1)
    console.log(parameter2)
    console.log(globalnaPremenna)
  }
  vnutornaFunkcia()

  if (true) {
    const Y = "Ja som bloková premenná"
    console.log(Y)
    console.log(parameter1)
    console.log(parameter2)

  }
  return 'Bla bla bla'

}

const vysledok = arrrowFunkcia("parameter1", "parameter2")
console.log(vysledok);

