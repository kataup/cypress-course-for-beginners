const levaStrana = 4
if(levaStrana > 5) {
console.log("Leva strana je větší jak 5")}
else if (levaStrana > 5 && levaStrana < 7) {
    console.log("Leva strana je vetsi jak 5 a mensi jak 7")
}
else {
    console.log("Leva strana neni vetsi jak 5");
}
console.log("konec"); 


// switch bere klíč, hodnota premenné levaStrana, a na zaklade klíče my musíme zadefinovat casy, switch se v testech používá, když máme na webu menu a víme, jaké máme položky v menu
switch (levaStrana) {
    case 1:
        console.log("Leva strana je 1");
        break; // ohraničení, ukončení casu, 
    case 2:
        console.log("Leva strana je 2")
        break;
        default: // else, pokud se nesplní ani jedna podmínka, tak hodíme error
        // throw new Error("Leva strana neni 1 ani 2")
}

  // TODO: Implementujte podmienku
  // Ak je vyska vacsia ako 180 cm tak som vysoky
  // Ak je vyska mensia ako 180 ale vacsia ako 169 cm tak som stredne vysoky
  // Ak je vyska mensia ako 170 ale vacsia ako 159 cm tak som nizky
  // Ak je vyska mensia ako 160 cm tak som malinky
 
let vyska = 151;
if (vyska > 180) {
    console.log("Jsi vysoký.")}
else if (vyska < 180 && vyska > 169) {
    console.log("Jsi středně vysoký.")
}
else if (vyska < 170 && vyska > 159) {
    console.log("Jsi nízký.")
}
else if (vyska <= 160) {
    console.log("Jsi malinký.")
}
else {console.log("Neni zadana vyska")

}
console.log();

