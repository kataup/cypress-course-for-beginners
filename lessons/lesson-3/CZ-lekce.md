## **Lekce 3: Řídící struktury a funkce v jazyce JavaScript**

### **1\. Obsahová osnova**

#### **A. Úvod do řídících struktur**

- **Co jsou řídící struktury?**  
  - Mechanismy, které řídí průběh provádění programu.  
  - Umožňují vývojářům určovat pořadí, v jakém se má kód provádět, na základě podmínek nebo iterací.  
- **Typy řídících struktur:**  
  - **Podmíněné věty:** `if`, `else if`, `else`, `switch`.  
  - **Smyčky:** `for`, `while`, `do...while`, `for...of`, `for...in`.

#### **B. Podmíněné výroky**

- **`if` příkazy:**  
  - Provede blok kódu, pokud je zadaná podmínka pravdivá.  
  - Syntaxe a základní použití.  
  - Příklady scénářů v automatizaci testování.  
- **`else if` a `else` příkazy:**  
  - Poskytuje další podmínky a možnosti nouzového řešení.  
  - Zlepšení rozhodování ve skriptech.  
-  **`Swich` příkazy:**  
  - Vyhodnotí výraz vůči více případům.  
  - Zjednodušení vícenásobných podmíněných kontrol.

#### **C. Smyčky**

- **`for` smyčka:**  
  - Iteruje zadaný počet opakování.  
  - Syntaxe a praktické příklady.  
- **`while` smyčka:**  
  - Pokračuje v provádění, dokud je podmínka pravdivá.  
  - Případy použití v automatizaci testů.  
- **`do...while` smyčka:**  
  - Podobně jako `while,` ale zaručuje alespoň jedno provedení.  
- **`for...of` a `for...in` smyčky:**  
  - Iterace nad iterovatelnými objekty (pole, textové řetězce), resp. vlastnostmi objektů.

#### **D. Úvod do funkcí**

- **Co jsou to funkce?**  
  - Opakovaně použitelné bloky kódu určené k provádění konkrétních úloh.  
  - Zlepšení modularity a organizace kódu.  
- **Deklarace funkcí vs. výrazy:**  
  - Rozdíly v syntaxi a hoisting chování.  
  - Kdy použít jednotlivé typy.  
- **Parametry a návratové hodnoty:**  
  - Předávání dat do funkcí a získávání výsledků.  
- **Rozsah a uzávěrky:**  
  - Porozumění přístupnosti proměnných v rámci funkcí.  
  - Úvod do uzávěrek a jejich významu.

#### **E. Osvědčené postupy pro řídící struktury a funkce**

- **Čitelnost a udržovatelnost:**  
  - Psaní jasných a srozumitelných řídících struktur.  
  - Soustředění funkcí na jeden účel.  
- **Vyhnout se hlubokému vnoření:**  
  - Strategie pro prevenci nadměrného odsazení a složitosti.  
- **Pojmenovací konvence:**  
  - Popisné názvy funkcí a proměnných vyjadřující záměr.  
- **Zásada DRY (neopakuj se):**  
  - Omezení duplikace kódu efektivním využíváním funkcí a smyček.

#### **F. Praktické příklady**

- **Implementace podmíněné logiky v testech:**  
  - Použití příkazů `if` pro různé testovací scénáře.  
- **Procházení testovacích dat ve smyčce:**  
  - Iterace nad poli testovacích vstupů pro testování řízené daty.  
- **Vytváření užitečných funkcí:**  
  - Psaní funkcí pro zapouzdření opakujících se testovacích akcí, což zvyšuje možnost opakovaného použití.

---

### **2\. Praktické činnosti: Cvičení a návrhy webových funkcí**

#### **A. Cvičení s podmíněnými výroky**

- **Cvičení:**  
  - Napište funkci JavaScriptu, která přijme jako vstup skóre uživatele a přiřadí známku na základě předem definovaných kritérií pomocí příkazů `if`, `else if` a `else.`  
  - Příklad:  
      
    funkce assignGrade(skóre) {  
      
      if (score \>= 90\) {  
      
        return 'A';  
      
      } else if (score \>= 80\) {  
      
        return 'B';  
      
      } else if (score \>= 70\) {  
      
        return 'C';  
      
      } else if (score \>= 60\) {  
      
        return 'D';  
      
      } else {  
      
        return 'F';  
      
      }  
      
    }

    
- **Návrh webových funkcí:**  
  - Vytvořte jednoduchý formulář HTML, do kterého mohou uživatelé zadat své skóre, a po odeslání funkce JavaScript vypočítá a zobrazí odpovídající známku.

#### **B. Cvičení smyčkování v polích**

- **Cvičení:**  
  - Napište funkci jazyka JavaScript, která pomocí cyklu `for` přijme pole čísel a vrátí nové pole obsahující pouze sudá čísla.  
  - Příklad:  
      
    function filterEvenNumbers(numbers) {  
      
      let evenNumbers \= \[\];  
      
      for (let i \= 0; i \< numbers.length; i++) {  
      
        if (numbers\[i\] % 2 \=== 0\) {  
      
          evenNumbers.push(numbers\[i\]);  
      
        }  
      
      }  
      
      return evenNumbers;  
      
    }

    
- **Návrh webových funkcí:**  
  - Vytvořte malou webovou aplikaci, do které mohou uživatelé zadat seznam čísel a aplikace zobrazí filtrovaný seznam sudých čísel pomocí funkce JavaScript.

#### **C. Cvičení na vytváření a používání funkcí**

- **Cvičení:**  
  - Napište funkci JavaScriptu, která jako parametry přijme dvě čísla a vrátí jejich součet. Tuto funkci pak použijte v cyklu k výpočtu celkového součtu pole dvojic čísel.  
  - Příklad:  
      
    function add(a, b) {  
      
      return a \+ b;  
      
    }  
      
    let pairs \= \[\[1, 2\], \[3, 4\], \[5, 6\]\];  
      
    let totalSum \= 0;  
      
    for (let i \= 0; i \< pairs.length; i++) {  
      
      totalSum \+= add(pairs\[i\]\[0\], pairs\[i\]\[1\]);  
      
    }  
      
    console.log(totalSum); // Výstupy: 21

    
- **Návrh webových funkcí:**  
  - Implementujte na webové stránce funkci, pomocí které mohou uživatelé zadat několik dvojic čísel a aplikace vypočítá a zobrazí celkový součet pomocí funkce `sčítání` v rámci cyklu.

#### **D. Cvičení o rozsahu a uzávěrkách**

- **Cvičení:**  
  - Demonstrujte koncept rozsahu tím, že se napíše funkce do jiné funkce a ukáže se, jak jsou proměnné přístupné.  
  - Příklad:  
      
    function outerFunction() {  
      
      let outerVariable \= 'I am outside\!';  
      
        
      
      function innerFunction() {  
      
        let innerVariable \= 'I am inside\!';  
      
        console.log(outerVariable); // Accessible  
      
        console.log(innerVariable); // Accessible  
      
      }  
      
        
      
      innerFunction();  
      
      console.log(innerVariable); // ReferenceError: innerVariable is not defined  
      
    }  
      
    outerFunction();  
    

    
- **Návrh webových funkcí:**  
  - Vytvoření interaktivního příkladu na webové stránce, který ilustruje rozsah proměnných tím, že uživatelům umožní zjistit, které proměnné jsou přístupné v rámci různých rozsahů funkcí.

---

### **3\. Potenciální otázky studentů**

#### **A. řídící struktury:**

1. **Jaký je rozdíl mezi příkazy `if` a `switch`?**  
     
   - **Odpověď:**   
     Příkazy `if` a `switch` se používají pro podmíněné spuštění,příkazy `if` jsou univerzálnější a mohou zpracovávat širší škálu podmínek, včetně složitých výrazů. Příkazy `switch` jsou stručnější při práci s více diskrétními hodnotami jedné proměnné nebo výrazu.

   

2. **Kdy mám použít cyklus `while` místo cyklu `for`?**  
     
   - **Odpověď:**   
     Smyčka `while` se používá v případě, že počet iterací není předem znám a závisí na splnění podmínky během provádění. Smyčky `for` jsou vhodnější, když je počet iterací předem určen nebo je lze snadno určit.

#### **B. Funkce:**

1. **Jaký je rozdíl mezi deklarací funkce a výrazem funkce?**  
     
   - **Odpověď:**  
     Deklarace funkcí jsou tzv. hoisted, což znamená, že jsou načteny do paměti ve fázi kompilace a mohou být volány před jejich skutečnou deklarací v kódu. Výrazy funkcí se stejným způsobem neukládají a nelze je volat před jejich definicí.

   

2. **Lze funkce předávat jako argumenty jiným funkcím?**  
     
   - **Odpověď:**  
     Ano, v JavaScriptu jsou funkce “first-class citizens” a mohou být předávány jako argumenty jiným funkcím, vraceny z funkcí a přiřazovány proměnným.

#### **C. Smyčky:**

1. **Jaký je rozdíl mezi smyčkami `for...of` a `for...in?`**  
     
   - **Odpověď:**  
     `for...of` se používá k iteraci hodnot iterovatelného objektu (např. pole, textové řetězce), zatímco `for...in` se používá k iteraci vyjmenovatelných vlastností objektu.

   

2. **Jak mohu zabránit nekonečné smyčce v kódu?**  
     
   - **Odpověď:**  
      Zajistěte, aby byla nakonec splněna ukončovací podmínka smyčky. Pečlivě spravujte čítače a podmínky smyčky, abyste se vyhnuli scénářům, kdy smyčka pokračuje donekonečna.

#### **D. Osvědčené postupy:**

1. **Proč je důležité, aby funkce byly zaměřené a měly jediný účel?**  
     
   - **Odpověď:**  
     Funkce, které provádějí jedinou úlohu, jsou snáze pochopitelné, testovatelné, laditelné a udržovatelné. Podporují znovupoužitelnost kódu a snižují složitost jednotlivých funkcí.

   

2. **Co znamená princip DRY (Don't Repeat Yourself) v kontextu psaní funkcí?**  
     
   - **Odpověď:**  
     DRY podporuje vývojáře v tom, aby se vyhýbali duplicitě kódu tím, že opakující se kód abstrahují do opakovaně použitelných funkcí. Díky tomu je kódová základna čistší a snadněji se udržuje.

---

### **4\. Doplňkové materiály: Doporučení**

#### **A. Oficiální dokumentace a příručky:**

- **řídící tok JavaScriptu:**  
  - [řídící tok MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)  
- **Funkce JavaScriptu:**  
  - [Funkce MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)  
- **Smyčky JavaScriptu:**  
  - [Příkazy smyčky MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

#### **B. Výukové materiály a články:**

- **řídící struktury jazyka JavaScript:**  
  - [W3Schools řídící struktury JavaScriptu](https://www.w3schools.com/js/js_if_else.asp)  
- **Porozumění funkcím JavaScriptu:**  
  - [Funkce FreeCodeCampu](https://www.freecodecamp.org/news/javascript-functions-explained/)  
- **Smyčky v jazyce JavaScript:**  
  - [Vysvětlení smyček v jazyce JavaScript](https://www.programiz.com/javascript/for-loop)

#### **C. Interaktivní výukové platformy:**

- **Codecademy:**  
  - [Naučte se řídící tok JavaScriptu](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow)  
- **FreeCodeCamp:**  
  - [řídící struktury jazyka JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)  
- **JavaScript.info:**  
  - [řídící tok JavaScriptu](https://javascript.info/ifelse)

#### **D. Videonávody:**

- **Traversy Media:**  
  - [Výukový kurz řídícího toku JavaScriptu](https://www.youtube.com/watch?v=IsG4vegnf10)  
- **The Net Ninja:**  
  - [Výukový kurz funkcí jazyka JavaScript](https://www.youtube.com/watch?v=Y8KqKUxm_8c)  
- **Academind:**  
  - [JavaScript pro začátečníky: Funkce a tok řízení](https://www.youtube.com/watch?v=PkZNo7MFNFg)

#### **E. Platformy pro praxi:**

- **HackerRank:**  
  - [Výzvy řídících struktur v jazyce JavaScript](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)  
- **LeetCode:**  
  - [Problémy s funkcemi jazyka JavaScript](https://leetcode.com/problemset/all/?search=javascript%20functions)  
- **Cvičení:**  
  - [JavaScript Track \- Funkce](https://exercism.io/tracks/javascript/exercises)

#### **F. Společenství a podpora:**

- **Stack Overflow:**  
  - [řídící struktury jazyka JavaScript](https://stackoverflow.com/questions/tagged/javascript+control-flow)  
  - [Funkce JavaScriptu](https://stackoverflow.com/questions/tagged/javascript+functions)  
- **Reddit:**  
  - [r/javascript](https://www.reddit.com/r/javascript/)  
- **Komunity Discord:**  
  - Připojte se k serverům Discord zaměřeným na JavaScript a získejte pomoc a diskusi v reálném čase.

---

### **5\. Navrhované rozdělení lekcí na 3 hodiny**

#### **Hodina 1: Úvod do řídících struktur (60 minut)**

- **Co jsou řídící struktury? (15 minut):**  
  - Přehled o tom, jak řídící struktury řídí průběh provádění.  
- **Podmíněné výroky (30 minut):**  
  - Podrobné vysvětlení `if`, `else if`, `else` a `switch`.  
  - Praktické příklady relevantní pro automatizaci testování.  
- **Přestávka (5 minut)**

#### **Hodina 2: Smyčky a funkce (60 minut)**

- **Smyčky (25 minut):**  
  - Vysvětlení různých typů smyček: `for`, `while`, `do...while`, `for...of`, `for...in`.  
  - Případy použití v testech Cypress, například iterace nad testovacími daty.  
- **Úvod do funkcí (25 minut):**  
  - Deklarace funkcí vs. výrazy.  
  - Parametry, návratové hodnoty a rozsah.  
- **Přestávka (5 minut)**

#### **Hodina 3: Praktické činnosti a otázky a odpovědi (60 minut)**

- **Praktická cvičení (40 minut):**  
  - **Podmíněné výroky:**  
    - Vytvořte funkci pro přiřazení známky pomocí `if...else if...else`.  
  - **Smyčky:**  
    - Napište cyklus pro filtrování sudých čísel z pole.  
  - **Funkce:**  
    - Vyvinout užitečnou funkci pro provádění opakovaných testovacích akcí.  
- **Sekce otázek a odpovědí (20 minut):**  
  - Řešte případné dotazy studentů.  
  - Vyjasněte si pochybnosti a upevněte klíčové pojmy probírané v lekci.

---

### **6\. Další doporučení**

#### **A. Interaktivní ukázky:**

- **Kódování v reálném čase:**  
  - Ukázka zápisu příkazů `if...else` a cyklů v reálném čase.  
  - Ukázat, jak definovat a vyvolávat funkce, se zvýrazněním rozsahu a parametrů.  
- **Ladění (debugging) pomocí `console.log`:**  
  - Pomocí `console.log` v řídících strukturách a funkcích můžete sledovat průběh provádění a hodnoty proměnných.

#### **B. Poutavá vizuální stránka:**

- **Vývojové diagramy:**  
  - Pomocí vývojových diagramů znázorněte, jak řídící struktury řídí tok programu.  
- **Úryvky kódu:**  
  - Prezentujte jasné a stručné příklady kódu na snímcích, které demonstrují koncepty.  
- **Diagramy:**  
  - Vizuální znázornění rozsahu funkcí a přístupnosti proměnných.

#### **C. Podporovat účast:**

- **Párové programování:**  
  - Nechte studenty pracovat ve dvojicích na řešení cvičení, čímž podpoříte spolupráci a vzájemné učení.  
- **Živé ankety a kvízy:**  
  - Zařaďte rychlé kvízy, abyste vyhodnotili porozumění a udrželi vysokou angažovanost.

#### **D. Poskytněte jasné pokyny:**

- **Průvodci krok za krokem:**  
  - Nabídněte podrobné pokyny ke každé praktické činnosti, abyste zajistili, že se jí budou moci všichni studenti věnovat.  
- **Tipy pro řešení problémů:**  
  - Předvídat běžné problémy (např. syntaktické chyby ve smyčkách nebo funkcích) a poskytovat řešení.

#### **E. Podporovat podpůrné prostředí:**

- **Podporujte otázky:**  
  - Vytvořte otevřenou atmosféru, ve které se studenti budou cítit dobře, když požádají o pomoc.  
- **Uveďte více příkladů:**  
  - Nabídněte různé příklady pro každý koncept, abyste uspokojili různé styly učení a upevnili porozumění.

---

## **Podrobné definice**

### **1\. Co jsou řídící struktury?**

**Definice:** Řídící struktury jsou programové konstrukce, které určují průběh provádění programu. Určují pořadí, v jakém jsou příkazy prováděny, a umožňují vývojářům implementovat do kódu rozhodovací a opakující se úlohy.

**Podrobné vysvětlení:**

- **Účel:** řídící struktury umožňují vytvářet dynamické a flexibilní programy tím, že kód může reagovat různě na základě různých podmínek nebo opakovat určité operace vícekrát.  
    
- **Typy řídících struktur:**  
    
  1. **Podmíněné výroky:** Provádějí různé bloky kódu na základě toho, zda je podmínka pravdivá nebo nepravdivá.  
  2. **Smyčky:** Smyčky: Opakujte blok kódu několikrát, dokud platí zadaná podmínka.


- **Význam v programování:**  
    
  - **Rozhodování:** Umožňuje programům rozhodovat a selektivně provádět kód.  
  - **Opakování:** Usnadňuje provádění opakujících se úloh bez zbytečného kódu.  
  - **Efektivita:** Zvyšuje efektivitu a čitelnost kódu omezením duplicit a stručným zpracováním složité logiky.

**Vizuální reprezentace:**

- **Vývojové diagramy (flowcharts):** Často se používají k vizualizaci řídících struktur a zobrazují průběh provádění na základě podmínek a iterací.

---

### **2\. Podmíněné výroky**

**Definice:** Podmíněné příkazy jsou řídící struktury, které provádějí určité bloky kódu na základě toho, zda je daná podmínka vyhodnocena jako pravdivá nebo nepravdivá.

**Podrobné vysvětlení:**

- **Typy podmíněných příkazů:**  
    
  1. **`if` příkazy:**  
       
     - **Účel:** Provede blok kódu, pokud je zadaná podmínka pravdivá.  
     - **Syntaxe:**  
         
       if (condition) {  
         
         // code to execute if condition is true  
         
       }  
         
     - **Příklad:**  
         
       let score \= 85;  
         
       if (score \>= 80\) {  
         
         console.log("Great job\!");  
         
       }

       
  2. **`else if` příkaz:**  
       
     - **Účel:** Poskytuje další podmínky, pokud je předchozí podmínka `if` nepravdivá.  
     - **Syntaxe:**  
         
       if (condition1) {  
         
         // code if condition1 is true  
         
       } else if (condition2) {  
         
         // code if condition2 is true  
         
       }  
         
     - **Příklad:**  
         
       let score \= 75;  
         
       if (score \>= 90\) {  
         
         console.log("Excellent\!");  
         
       } else if (score \>= 80\) {  
         
         console.log("Great job\!");  
         
       }

       
  3. **`Else` příkaz:**  
       
     - **Účel:** Provede blok kódu, pokud jsou všechny předchozí podmínky false.  
     - **Syntaxe:**  
         
       if (condition1) {  
         
         // code if condition1 is true  
         
       } else if (condition2) {  
         
         // code if condition2 is true  
         
       } else {  
         
         // code if all conditions are false  
         
       }  
         
     - **Příklad:**  
         
       let score \= 55;  
         
       if (score \>= 90\) {  
         
         console.log("Excellent\!");  
         
       } else if (score \>= 80\) {  
         
         console.log("Great job\!");  
         
       } else {  
         
         console.log("Keep trying\!");  
         
       }

       
  4. **Příkaz `switch`:**  
       
     - **Účel:** Vyhodnotí výraz podle více hodnot případů a provede odpovídající bloky kódu.  
     - **Syntaxe:**  
         
       switch (expression) {  
         
         case value1:  
         
           // code to execute if expression \=== value1  
         
           break;  
         
         case value2:  
         
           // code to execute if expression \=== value2  
         
           break;  
         
         default:  
         
           // code to execute if expression doesn't match any case  
         
       }  
         
     - **Příklad:**  
         
       let day \= "Monday";  
         
       switch (day) {  
         
         case "Monday":  
         
           console.log("Start of the work week\!");  
         
           break;  
         
         case "Friday":  
         
           console.log("End of the work week\!");  
         
           break;  
         
         default:  
         
           console.log("Midweek days.");  
         
       }

**Případy použití v automatizaci testování:**

- **Dynamické chování testu:** Úprava testovacích kroků na základě měnících se stavů aplikace nebo uživatelských vstupů.  
- **Zpracování chyb:** Provedení různých akcí, když testy za určitých podmínek projdou nebo neprojdou.

---

### **3\. Smyčky**

**Definice:** Smyčky jsou řídící struktury, které opakovaně provádějí blok kódu, dokud platí zadaná podmínka.

**Podrobné vysvětlení:**

- **Typy smyček:**  
    
  1. **`for` smyčka:**  
       
     - **Účel:** Provede blok kódu s předem stanoveným počtem opakování  
     - **Syntaxe:**  
         
       for (initialization; condition; increment) {  
         
         // code to execute  
         
       }  
         
     - **Příklad:**  
         
       for (let i \= 0; i \< 5; i++) {  
         
         console.log("Iteration:", i);  
         
       }

       
  2. **`while` smyčka:**  
       
     - **Účel:** Pokračuje ve vykonávání bloku kódu, dokud je podmínka pravdivá.  
     - **Syntaxe:**  
         
       while (condition) {  
         
         // code to execute  
         
       }  
         
     - **Příklad:**  
         
       let i \= 0;  
         
       while (i \< 5\) {  
         
         console.log("Iteration:", i);  
         
         i++;  
         
       }

       
  3. **`do...while` smyčka:**  
       
     - **Účel:** Provede blok kódu jednou před ověřením podmínky a poté jej opakuje, dokud je podmínka pravdivá.  
     - **Syntaxe:**  
       do {  
         
         // code to execute  
         
       } while (condition);  
         
     - **Příklad:**  
         
       let i \= 0;  
         
       do {  
         
         console.log("Iteration:", i);  
         
         i++;  
         
       } while (i \< 5);

       
  4. **`for...of` smyčka:**  
       
     - **Účel:** Iteruje nad iterovatelnými objekty (jako jsou pole, řetězce) a přistupuje k jejich hodnotám.  
     - **Syntaxe:**  
         
       for (const element of iterable) {  
         
         // code to execute  
         
       }  
         
     - **Příklad:**  
         
       const fruits \= \["Apple", "Banana", "Cherry"\];  
         
       for (const fruit of fruits) {  
         
         console.log("Fruit:", fruit);  
         
       }

       
  5. **`for...in` smyčka:**  
       
     - **Účel:** Iteruje přes vyjmenovatelné vlastnosti objektu.  
     - **Syntaxe:**  
         
       for (const key in object) {  
         
         // code to execute  
         
       }  
         
     - **Příklad:**  
         
       const user \= { name: "Alice", age: 25, role: "Tester" };  
         
       for (const key in user) {  
         
         console.log(key \+ ":", user\[key\]);  
         
       }

**Případy použití v automatizaci testování:**

- **Testování založené na datech:** Iterace nad poli testovacích dat za účelem provedení opakovaných testovacích případů s různými vstupy.  
- **Dávkové (batch) operace:** Provedení série testovacích kroků vícekrát za různých podmínek nebo konfigurací.

---

### **4\. Rozsah a uzávěrky**

**Definice:**

- **Rozsah:** Přístupnost proměnných a funkcí v různých částech kódu během běhu programu.  
- **Uzávěrky:** Funkce v JavaScriptu, kdy má vnitřní funkce přístup k proměnným v rozsahu své vnější obklopující funkce, a to i po ukončení provádění vnější funkce.

**Podrobné vysvětlení:**

#### **A. Rozsah:**

1. **Globální rozsah:**  
     
   - **Definice:** Proměnné deklarované mimo jakoukoli funkci nebo blok jsou v globálním rozsahu a jsou přístupné kdekoli v kódu.  
   - **Příklad:**  
       
     var globalVar \= "I'm global\!";  
       
     function displayGlobal() {  
       
       console.log(globalVar); // Accessible  
       
     }  
       
     displayGlobal(); // Outputs: I'm global\!  
       
     console.log(globalVar); // Accessible

     
2. **Rozsah funkce:**  
     
   - **Definice:** Proměnné deklarované v rámci funkce jsou přístupné pouze v rámci této funkce a jejich vnořených (vnitřních) funkcí.  
   - **Příklad:**  
       
     function outerFunction() {  
       
       var functionVar \= "I'm inside a function\!";  
       
       function innerFunction() {  
       
         console.log(functionVar); // Accessible  
       
       }  
       
       innerFunction();  
       
       console.log(functionVar); // Accessible  
       
     }  
       
     outerFunction();  
       
     console.log(functionVar); // ReferenceError: functionVar is not defined

     
3. **Rozsah bloku:**  
     
   - **Definice:** Proměnné deklarované v rámci bloku (`{}`) pomocí `let` nebo `const` jsou přístupné pouze v rámci tohoto bloku.  
   - **Příklad:**  
       
     if (true) {  
       
       let blockVar \= "I'm inside a block\!";  
       
       console.log(blockVar); // Accessible  
       
     }  
       
     console.log(blockVar); // ReferenceError: blockVar is not defined

#### **B. Uzávěry:**

1. **Definice:**  
     
   - Uzávěrka vzniká, když si vnitřní funkce zachovává přístup k proměnným své vnější funkce i po ukončení jejího provádění.

   

2. **Příklad:**  
     
   function outerFunction() {  
     
     let outerVar \= "I'm from the outer scope\!";  
     
       
     
     function innerFunction() {  
     
       console.log(outerVar); // Accessing outerVar  
     
     }  
     
       
     
     return innerFunction;  
     
   }  
     
   const myInnerFunction \= outerFunction();  
     
   myInnerFunction(); // Outputs: I'm from the outer scope\!  
     
3. **Případy použití v automatizaci testování:**  
     
   - **Privátní proměnné:** zapouzdření proměnných, které by neměly být globálně přístupné.  
   - **Továrny na funkce (Function Factories):** Vytváření specializovaných funkcí s předkonfigurovanými parametry nebo chováním.

   

4. **Výhody:**  
     
   - **Ochrana dat:** Určité proměnné jsou skryty před globálním rozsahem, což zabraňuje nechtěným úpravám.  
   - **Rozšířená funkčnost:** Umožňuje vytvářet všestrannější a flexibilnější funkce, které mohou udržovat stav při vícenásobném vyvolání.

**Vizuální reprezentace:**

- **Uzavírací schéma:** Znázorňuj, jak si vnitřní funkce zachovává přístup k proměnným vnější funkce i po jejím vykonání.

---

## **Příklady kódu pro "Doporučené postupy pro řídící struktury a funkce"**

Zavedení osvědčených postupů zajistí, že váš kód bude čistý, udržovatelný a efektivní. Níže je uvedeno několik příkladů kódu, které demonstrují tyto postupy v kontextu řídících struktur a funkcí.

### **A. Čitelnost a udržovatelnost**

**Špatná praxe: Hluboké vnořování**

if (isUserLoggedIn) {

  if (user.hasPermission) {

    if (user.isActive) {

      performSensitiveOperation();

    }

  }

}

**Správná praxe: Včasné návraty k omezení vnoření**

funkce performOperation(user) {

  if (\!user.isLoggedIn) return;

  if (\!user.hasPermission) return;

  if (\!user.isActive) return;

  

  performSensitiveOperation();

}

### **B. Soustředění funkcí k jednomu účelu**

**Špatná praxe: Funkce provádějící více úkolů**

function processUserData(user) {

  // Validate user

  if (\!user.email) {

    console.log("Invalid user");

    return;

  }

  

  // Save user to database

  database.save(user);

  

  // Send welcome email

  emailService.sendWelcomeEmail(user.email);

}

**Správná praxe: Oddělené funkce pro každou úlohu**

function validateUser(user) {

  if (\!user.email) {

    console.log("Invalid user");

    return false;

  }

  return true;

}

function saveUser(user) {

  database.save(user);

}

function sendWelcomeEmail(user) {

  emailService.sendWelcomeEmail(user.email);

}

function processUserData(user) {

  if (\!validateUser(user)) return;

  saveUser(user);

  sendWelcomeEmail(user);

}

### **C. Vyhnutí se hlubokému vnoření pomocí ochranných klauzulí**

**Špatná praxe: Více úrovní podmínek**

function checkAccess(user) {

  if (user) {

    if (user.isActive) {

      if (user.hasAccess) {

        grantAccess();

      }

    }

  }

}

**Správná praxe: Používání ochranných doložek**

function checkAccess(user) {

  if (\!user) return;

  if (\!user.isActive) return;

  if (\!user.hasAccess) return;

  

  grantAccess();

}

### **D. Používání popisných názvů**

**Špatná praxe: Vágní názvy proměnných a funkcí**

function doIt(a, b) {

  if (a \> b) {

    return a;

  } else {

    return b;

  }

}

let x \= doIt(5, 10\);

**Správná praxe: Popisné názvy**

function getHigherValue(firstValue, secondValue) {

  if (firstValue \> secondValue) {

    return firstValue;

  } else {

    return secondValue;

  }

}

let higherScore \= getHigherValue(5, 10);

---

### **E. Jak řídící struktury řídí tok programu**

**Příklad scénáře: Ověřování uživatele**

Představte si, že píšete testovací skript pro ověření ověření uživatele ve webové aplikaci. Řídící struktury pomáhají určit tok na základě různých uživatelských vstupů a stavů systému.

**Příklad kódu:**

function authenticateUser(username, password) {

  if (\!username || \!password) {

    console.log("Username and password are required.");

    return;

  }

  if (password.length \< 6\) {

    console.log("Password must be at least 6 characters long.");

    return;

  }

  // Simulate server-side authentication

  let isAuthenticated \= serverAuthenticate(username, password);

  if (isAuthenticated) {

    console.log("User authenticated successfully\!");

    // Proceed to grant access

  } else {

    console.log("Authentication failed. Please check your credentials.");

    // Prompt user to retry or reset password

  }

}

// Simulated server authentication function

function serverAuthenticate(username, password) {

  // For demonstration, any password "password123" authenticates successfully

  return password \=== "password123";

}

// Test cases

authenticateUser("testUser", "password123"); // Successful authentication

authenticateUser("testUser", "pass");        // Password too short

authenticateUser("", "password123");         // Missing username

authenticateUser("testUser", "wrongPass");   // Authentication failed

**Vysvětlení:**

1. **Prvotní kontroly:**  
     
   - Používá příkazy `if` k ověření, zda je zadáno uživatelské jméno i heslo.  
   - Zajistí, aby heslo splňovalo požadavky na minimální délku.

   

2. **Logika ověřování:**  
     
   - Volá `serverAuthenticate` pro simulaci ověření na straně serveru.  
   - Na základě výsledku použije další příkaz `if`, aby určil, zda má uživateli povolit přístup, nebo ho vyzvat k opakování pokusu.

   

3. **Řízení toku:**  
     
   - V závislosti na podmínkách program nasměruje tok na různé bloky kódu, čímž zajistí, že přístup získají pouze platní a ověření uživatelé.

**Výsledek:**

- Demonstruje, jak příkazy `if` a `else` řídí provádění programu na základě různých podmínek, čímž zajišťuje robustní a bezpečné procesy ověřování.

---

## **Ilustrace a reálné příklady**

### **1\. Ukažte, jak řídící struktury řídí tok programu.**

**Příklad scénáře: Automatizované testování odesílání formulářů**

Představte si, že píšete test Cypress pro automatické odeslání registračního formuláře uživatele. Řídící struktury pomáhají řídit různé testovací scénáře na základě uživatelských vstupů a odpovědí aplikace.

**Příklad kódu:**

describe('User Registration Form', () \=\> {

  it('Submits the form with valid data', () \=\> {

    cy.visit('/register');

    // Fill out the form

    cy.get('\#username').type('testUser');

    cy.get('\#email').type('testuser@example.com');

    cy.get('\#password').type('SecurePass123');

    // Conditional Check: Ensure the Submit button is enabled

    cy.get('\#submit').then(($btn) \=\> {

      if (\!$btn.is(':disabled')) {

        cy.wrap($btn).click();

      } else {

        throw new Error('Submit button is disabled');

      }

    });

    // Verify successful registration

    cy.contains('Registration Successful\!').should('be.visible');

  });

  it('Displays error with invalid email', () \=\> {

    cy.visit('/register');

    // Fill out the form with invalid email

    cy.get('\#username').type('testUser');

    cy.get('\#email').type('invalid-email');

    cy.get('\#password').type('SecurePass123');

    // Attempt to submit the form

    cy.get('\#submit').click();

    // Conditional Check: Display error message if email is invalid

    cy.get('.error-message').then(($msg) \=\> {

      if ($msg.is(':visible')) {

        cy.wrap($msg).should('contain', 'Invalid email address');

      } else {

        throw new Error('Error message not displayed for invalid email');

      }

    });

  });

});

**Vysvětlení:**

1. **Podmíněné příkazy (`if)`:**  
     
   - Před kliknutím na tlačítko odeslat test zkontroluje, zda tlačítko není zakázáno.  
   - Pokud je tlačítko povoleno, dojde ke kliknutí; v opačném případě je hlášena chyba.

   

2. **Smyčkové struktury:**  
     
   - Ačkoli to zde není výslovně uvedeno, smyčky lze použít k iteraci více testovacích případů nebo datových sad, což zvyšuje pokrytí testů.

   

3. **Řízení toku:**  
     
   - V závislosti na vstupu uživatele (platný nebo neplatný e-mail) test buď ověří úspěšnou registraci, nebo zkontroluje příslušná chybová hlášení a podle toho nasměruje tok.

**Výsledek:**

- Demonstruje, jak příkazy `if` řídí provádění testů na základě dynamických podmínek a zajišťují, aby testy vhodně reagovaly na různé uživatelské vstupy a stavy aplikace.

