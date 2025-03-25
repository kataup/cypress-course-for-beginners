## **Lekce 4: Pole, objekty, JSON a DOM**

### **1\. Obsahová osnova**

#### **A. Úvod do polí (Arrays)**

- **Co jsou pole?**  
  - Definice a účel.  
  - Uspořádané kolekce prvků.  
- **Vytváření polí:**  
  - Použití literálů pole (`[])`.  
  - Použití konstruktoru `pole.`  
- **Přístup k prvkům pole:**  
  - Indexování (od 0).  
  - Záporné indexování (není přirozeně podporováno v jazyce JavaScript).  
- **Běžné metody pole:**  
  - `push()`, `pop()`, `shift()`, `unshift()`.  
  - `forEach()`, `map()`, `filter()`, `reduce()`.  
- **Vícerozměrná pole:**  
  - Vytváření vnořených polí a přístup k nim.

#### **B. Úvod do objektů**

- **Co jsou objekty?**  
  - Definice a účel.  
  - Páry klíč-hodnota pro ukládání dat.  
- **Vytváření objektů:**  
  - Použití objektových literálů `({}`).  
  - Použití konstruktoru `Object`.  
- **Přístup k vlastnostem objektu:**  
  - Tečkový zápis.  
  - Zápis v závorkách.  
- **Společné metody objektů:**  
  - `Object.keys()`, `Object.values()`, `Object.entries()`.  
- **Vnořené objekty:**  
  - Vytváření objektů v objektech.  
  - Přístup k vnořeným vlastnostem.

#### **C. Porozumění JSON (JavaScript Object Notation)**

- **Co je JSON?**  
  - Definice a účel.  
  - Lehký formát pro výměnu dat.  
- **Struktura JSON:**  
  - Objekty a pole v JSON.  
  - Datové typy podporované v JSON.  
- **Převod mezi objekty JSON a JavaScript:**  
  - `JSON.stringify()` \- převod objektu JavaScript na řetězec JSON.  
  - `JSON.parse()` \- převod řetězce JSON na objekt JavaScript.  
- **Případy použití v automatizaci testování:**  
  - Ukládání a správa testovacích dat.  
  - Napodobování odpovědí rozhraní API.

#### **D. Úvod do DOM (Document Object Model)**

- **Co je DOM?**  
  - Definice a účel.  
  - Reprezentace webové stránky jako stromové struktury.  
- **Přístup k prvkům DOM:**  
  - `document.getElementById()`.  
  - `document.querySelector()` a `document.querySelectorAll()`.  
- **Manipulace s prvky DOM:**  
  - Změna obsahu (`innerText`, `innerHTML`).  
  - Úprava atributů (`setAttribute()`, `getAttribute()`)`.`  
  - Přidávání a odebírání tříd (`classList.add()`, `classList.remove()`).  
- **Zpracování událostí:**  
  - Přidání posluchačů událostí `(addEventListener()`)`.`  
  - Běžné události (kliknutí, zadání, odeslání).

#### **E. Osvědčené postupy pro používání polí, objektů, JSON a DOM**

- **Čitelnost a udržovatelnost kódu:**  
  - Používejte popisné názvy polí a objektů.  
  - Udržujte struktury JSON jednoduché a konzistentní.  
- **Úvahy o výkonu:**  
  - Vyhněte se zbytečným manipulacím s DOM.  
  - Optimalizace operací s poli pro velké datové sady.  
- **Ověřování dat:**  
  - Ověření dat JSON před jejich rozborem.  
  - Před přístupem se ujistěte, že vlastnosti objektu existují.  
- **Bezpečnostní postupy:**  
  - Zabránit útokům XSS sanitizací uživatelských vstupů při manipulaci s DOM.  
- **Znovupoužitelnost a modularita:**  
  - Zapouzdřete logiku manipulace s DOM do funkcí.  
  - Použití obslužných funkcí pro běžné operace s poli a objekty.

#### **F. Praktické příklady**

- **Implementace testovacích dat pomocí polí a objektů:**  
  - Vytváření a správa sad testovacích dat.  
  - Iterace nad testovacími daty pomocí metod pole.  
- **Zpracování JSON v testech Cypress:**  
  - Napodobování odpovědí API pomocí JSON.  
  - Rozbor a využití dat JSON v testech.  
- **Interakce s DOM v testech:**  
  - Výběr a potvrzení prvků DOM.  
  - Simulace interakcí uživatele pomocí manipulace s DOM.

---

### **2\. Praktické činnosti: Cvičení a návrhy webových funkcí**

#### **A. Práce s poli Cvičení**

- **Cvičení:**  
  - Vytvoří pole objektů uživatelů, z nichž každý obsahuje `jméno`, `e-mail` a `roli`.  
  - Použij metody pole, jako jsou `map()`, `filter()` a `reduce()`, které slouží k provádění operací, jako jsou:  
    - Extrakce všech e-mailových adres.  
    - Filtrování uživatelů podle role (např. "admin").  
    - Výpočet celkového počtu uživatelů.  
  - **Příklad:**  
      
    const users \= \[  
      
      { name: "Alice", email: "alice@example.com", role: "admin" },  
      
      { name: "Bob", email: "bob@example.com", role: "user" },  
      
      { name: "Charlie", email: "charlie@example.com", role: "user" },  
      
      { name: "Dave", email: "dave@example.com", role: "moderator" },  
      
    \];  
      
    const emails \= users.map(user \=\> user.email);  
      
    const admins \= users.filter(user \=\> user.role \=== "admin");  
      
    const totalUsers \= users.reduce((count) \=\> count \+ 1, 0);  
      
    console.log(emails);  
      
    console.log(admins);  
      
    console.log(totalUsers);  
    

#### **B. Cvičení na manipulaci s objekty**

- **Cvičení:**  
  - Vytvoření objektu reprezentujícího produkt s vlastnostmi jako `id`, `název`, `cena` a `skladová zásoba`.  
  - Napište funkce tak, aby se:  
    - Aktualizovalo skladové množství.  
    - Uplatňovala slevu na cenu.  
    - Získaly informace o produktu.  
  - **Příklad:**  
      
      
    const product \= {  
      
      id: 101,  
      
      name: "Wireless Mouse",  
      
      price: 25.99,  
      
      stock: 100,  
      
    };  
      
    function updateStock(product, quantity) {  
      
      product.stock \+= quantity;  
      
      console.log(\`Updated stock: ${product.stock}\`);  
      
    }  
      
    function applyDiscount(product, percentage) {  
      
      product.price \-= product.price \* (percentage / 100);  
      
      console.log(\`Discounted price: $${product.price.toFixed(2)}\`);  
      
    }  
      
    function getProductInfo(product) {  
      
      return \`${product.name} (ID: ${product.id}) \- $${product.price} | Stock: ${product.stock}\`;  
      
    }  
      
    updateStock(product, \-10);  
      
    applyDiscount(product, 10);  
      
    console.log(getProductInfo(product));

#### **C. Práce s JSON v testech Cypress Cvičení**

- **Cvičení:**  
    
  - Vytvoření souboru JSON (`users.json`) obsahujícího pole objektů uživatelů s vlastnostmi jako `jméno`, `e-mail` a `role`.  
      
  - Napište test Cypress, který:  
      
    - Načte data JSON pomocí funkce `cy.fixture()`.  
    - Iteruje nad uživatelskými daty a provádí akce, jako je vytváření uživatelských účtů nebo ověřování uživatelských údajů.

    

  - **Příklad:**  
      
    // users.json  
      
    \[  
      
      { "name": "Alice", "email": "alice@example.com", "role": "admin" },  
      
      { "name": "Bob", "email": "bob@example.com", "role": "user" },  
      
      { "name": "Charlie", "email": "charlie@example.com", "role": "user" }  
      
    \]  
      
    // Cypress Test  
      
    describe('User Registration', () \=\> {  
      
      beforeEach(() \=\> {  
      
        cy.fixture('users').as('usersData');  
      
      });  
      
      it('Registers multiple users from JSON data', function () {  
      
        this.usersData.forEach(user \=\> {  
      
          cy.visit('/register');  
      
          cy.get('\#username').type(user.name);  
      
          cy.get('\#email').type(user.email);  
      
          cy.get('\#role').select(user.role);  
      
          cy.get('\#submit').click();  
      
          cy.contains('Registration Successful\!').should('be.visible');  
      
        });  
      
      });  
      
    });

    
- **Návrh webových funkcí:**  
    
  - Zaveďte registrační formulář, ve kterém:  
    - Testeři mohou automatizovat odesílání registrací více uživatelů pomocí dat ze souboru JSON.  
    - Ověřte, zda je každá registrace úspěšná na základě vstupních dat JSON.

#### **D. Interakce s DOM v testech Cvičení**

- **Cvičení:**  
    
  - Vytvořte stránku HTML s různými prvky, jako jsou tlačítka, vstupní pole a kontejnery.  
      
  - Napište testy Cypress, které umožní:  
      
    - Výběr prvků DOM a interakce s nimi pomocí selektorů.  
    - Potvrzení přítomnosti a obsahu prvků.  
    - Simulaci interakce uživatelů, jako jsou kliknutí a odeslání formuláře.

    

  - **Příklad:**  
      
    \<\!-- index.html \--\>  
      
    \<\!DOCTYPE html\>  
      
    \<html\>  
      
    \<head\>  
      
      \<title\>DOM Interaction Test\</title\>  
      
    \</head\>  
      
    \<body\>  
      
      \<h1 id="title"\>Welcome to the Test Page\</h1\>  
      
      \<button id="changeTitle"\>Change Title\</button\>  
      
      \<input type="text" id="username" placeholder="Enter username" /\>  
      
      \<button id="submitForm"\>Submit\</button\>  
      
      \<div id="output"\>\</div\>  
      
      \<script\>  
      
        document.getElementById('changeTitle').addEventListener('click', () \=\> {  
      
          document.getElementById('title').innerText \= 'Title Changed\!';  
      
        });  
      
        document.getElementById('submitForm').addEventListener('click', () \=\> {  
      
          const username \= document.getElementById('username').value;  
      
          document.getElementById('output').innerText \= \`Hello, ${username}\!\`;  
      
        });  
      
      \</script\>  
      
    \</body\>  
      
    \</html\>  
      
    // Cypress Test  
      
    describe('DOM Interaction Test', () \=\> {  
      
      beforeEach(() \=\> {  
      
        cy.visit('/index.html');  
      
      });  
      
      it('Changes the title when button is clicked', () \=\> {  
      
        cy.get('\#changeTitle').click();  
      
        cy.get('\#title').should('have.text', 'Title Changed\!');  
      
      });  
      
      it('Submits the form and displays greeting', () \=\> {  
      
        cy.get('\#username').type('TestUser');  
      
        cy.get('\#submitForm').click();  
      
        cy.get('\#output').should('have.text', 'Hello, TestUser\!');  
      
      });  
      
    });

    
- **Návrh webových funkcí:**  
    
  - Vytvořte dynamickou webovou stránku, na které mohou uživatelé:  
    - Změnit název stránky kliknutím na tlačítko.  
    - Odeslat formulář s uživatelským jménem, po němž se zobrazí personalizovaný pozdrav.  
  - Napište testy Cypress pro automatizaci a ověření těchto interakcí.

#### **E. Vytvoření interaktivního příkladu z reálného světa: Vizualizace rozsahu proměnné**

- **Cíl:**  
    
  - Vytvořte interaktivní webovou stránku, která umožňuje uživatelům vizualizovat a pochopit rozsah proměnných v jazyce JavaScript pomocí spouštění funkcí a sledování dostupnosti proměnných.


- **Funkce webové stránky:**  
    
  1. **Tlačítka pro spouštění funkcí:**  
       
     - **Funkce globálního rozsahu:** Přístup ke globální proměnné a její zobrazení.  
     - **Rozsah vnější funkce:** Přístup k proměnné a její zobrazení v rámci vnější funkce.  
     - **Rozsah vnitřní funkce (closure):** Přístup k proměnným a jejich zobrazení v rámci vnitřní funkce.  
     - **Pokus o globální přístup k vnitřní proměnné:** demonstrování `ReferenceError`.

     

  2. **Zobrazovací oblastí:**  
       
     - Sekce na webové stránce pro zobrazení výsledků proměnných pokusů o přístup.

     

  3. **Úryvky kódu:**  
       
     - Pro každou funkci zobrazte odpovídající bloky kódu JavaScriptu, abyste získali kontext.


- **Struktura HTML:**  
    
  \<\!DOCTYPE html\>  
    
  \<html\>  
    
  \<head\>  
    
    \<title\>Variable Scope Visualization\</title\>  
    
    \<style\>  
    
      body { font-family: Arial, sans-serif; margin: 20px; }  
    
      .section { margin-bottom: 30px; }  
    
      pre { background-color: \#f4f4f4; padding: 10px; }  
    
      button { margin-top: 10px; }  
    
    \</style\>  
    
  \</head\>  
    
  \<body\>  
    
    \<h1\>Understanding Variable Scope in JavaScript\</h1\>  
    
    \<div class="section"\>  
    
      \<h2\>Global Scope\</h2\>  
    
      \<button onclick="accessGlobalScope()"\>Access Global Variable\</button\>  
    
      \<div id="globalOutput"\>\</div\>  
    
      \<pre\>  
    
        \<code\>  
    
          var globalVar \= "I'm a global variable";  
    
          function accessGlobalScope() {  
    
            console.log(globalVar); // Accessible  
    
            document.getElementById('globalOutput').innerText \= globalVar;  
    
          }  
    
        \</code\>  
    
      \</pre\>  
    
    \</div\>  
    
    \<div class="section"\>  
    
      \<h2\>Outer Function Scope\</h2\>  
    
      \<button onclick="accessOuterScope()"\>Access Outer Function Variable\</button\>  
    
      \<div id="outerOutput"\>\</div\>  
    
      \<pre\>  
    
        \<code\>  
    
          function outerFunction() {  
    
            let outerVar \= "I'm in the outer function";  
    
            function accessOuterScope() {  
    
              console.log(outerVar); // Accessible  
    
              document.getElementById('outerOutput').innerText \= outerVar;  
    
            }  
    
            accessOuterScope();  
    
          }  
    
          outerFunction();  
    
        \</code\>  
    
      \</pre\>  
    
    \</div\>  
    
    \<div class="section"\>  
    
      \<h2\>Inner Function Scope (Closure)\</h2\>  
    
      \<button onclick="accessInnerScope()"\>Access Inner Function Variable\</button\>  
    
      \<div id="innerOutput"\>\</div\>  
    
      \<pre\>  
    
        \<code\>  
    
          function outerFunction() {  
    
            let outerVar \= "I'm in the outer function";  
    
            function innerFunction() {  
    
              let innerVar \= "I'm in the inner function";  
    
              console.log(outerVar); // Accessible  
    
              console.log(innerVar); // Accessible  
    
              document.getElementById('innerOutput').innerText \= outerVar \+ " & " \+ innerVar;  
    
            }  
    
            innerFunction();  
    
          }  
    
          outerFunction();  
    
        \</code\>  
    
      \</pre\>  
    
    \</div\>  
    
    \<div class="section"\>  
    
      \<h2\>Attempt to Access Inner Variable Globally\</h2\>  
    
      \<button onclick="tryAccessInnerVar()"\>Try Accessing Inner Variable from Global Scope\</button\>  
    
      \<div id="closureOutput"\>\</div\>  
    
      \<pre\>  
    
        \<code\>  
    
          function outerFunction() {  
    
            let outerVar \= "I'm in the outer function";  
    
            function innerFunction() {  
    
              let innerVar \= "I'm in the inner function";  
    
              return function() {  
    
                console.log(outerVar); // Accessible  
    
                console.log(innerVar); // Accessible  
    
                document.getElementById('closureOutput').innerText \= outerVar \+ " & " \+ innerVar;  
    
              }  
    
            }  
    
            return innerFunction();  
    
          }  
    
          const getInnerVars \= outerFunction();  
    
          getInnerVars(); // Can access both outerVar and innerVar  
    
          console.log(innerVar); // ReferenceError: innerVar is not defined  
    
        \</code\>  
    
      \</pre\>  
    
    \</div\>  
    
    \<script src="script.js"\>\</script\>  
    
  \</body\>  
    
  \</html\>  
    
- **Funkce JavaScriptu (`script.js)`:**  
    
  var globalVar \= "I'm a global variable";  
    
  function accessGlobalScope() {  
    
    console.log(globalVar); // Accessible  
    
    document.getElementById('globalOutput').innerText \= globalVar;  
    
  }  
    
  function outerFunction() {  
    
    let outerVar \= "I'm in the outer function";  
    
    function accessOuterScope() {  
    
      console.log(outerVar); // Accessible  
    
      document.getElementById('outerOutput').innerText \= outerVar;  
    
    }  
    
    accessOuterScope();  
    
  }  
    
  function innerFunction() {  
    
    let outerVar \= "I'm in the outer function";  
    
    function inner() {  
    
      let innerVar \= "I'm in the inner function";  
    
      console.log(outerVar); // Accessible  
    
      console.log(innerVar); // Accessible  
    
      document.getElementById('innerOutput').innerText \= outerVar \+ " & " \+ innerVar;  
    
    }  
    
    inner();  
    
  }  
    
  function tryAccessInnerVar() {  
    
    function outerFunction() {  
    
      let outerVar \= "I'm in the outer function";  
    
      function innerFunction() {  
    
        let innerVar \= "I'm in the inner function";  
    
        return function() {  
    
          console.log(outerVar); // Accessible  
    
          console.log(innerVar); // Accessible  
    
          document.getElementById('closureOutput').innerText \= outerVar \+ " & " \+ innerVar;  
    
        }  
    
      }  
    
      return innerFunction();  
    
    }  
    
    const getInnerVars \= outerFunction();  
    
    getInnerVars(); // Can access both outerVar and innerVar  
    
    try {  
    
      console.log(innerVar); // ReferenceError: innerVar is not defined  
    
    } catch (error) {  
    
      document.getElementById('closureOutput').innerText \+= "\\n" \+ error.message;  
    
    }  
    
  }  
    
- **Vysvětlení:**  
    
  1. **Globální rozsah:**  
       
     - Proměnná `globalVar` je přístupná kdekoli v kódu.  
     - Kliknutím na tlačítko "Access Global Scope" se vyvolá `accessGlobalScope()`, která zaznamená a zobrazí `globalVar`.

     

  2. **Rozsah vnější funkce:**  
       
     - Proměnná `outerVar` je definována v rámci funkce `outerFunction()` a je přístupná funkcí `accessOuterScope()`.  
     - Kliknutím na tlačítko "Access Outer Function Scope" se vyvolá funkce `accessOuterScope()` prostřednictvím funkce `outerFunction()`, přičemž se zaznamená a zobrazí `outerVar`.

     

  3. **Rozsah vnitřní funkce (closure):**  
       
     - Proměnná `innerVar` je definována v rámci funkce `innerFunction()` a je přístupná vracené vnitřní funkci.  
     - Kliknutím na tlačítko "Access Inner Function Scope (Closure)" se vyvolá funkce `innerFunction()`, která zaznamená a zobrazí jak `outerVar`, tak `innerVar`.

     

  4. **Pokus o globální přístup k vnitřní proměnné:**  
       
     - Kliknutím na tlačítko "Pokus o globální přístup k vnitřní proměnné" se vyvolá funkce `tryAccessInnerVar()`, která vrátí uzávěrku, jenž přistupuje k `outerVar` i `innerVar`.  
     - Pokus o přímý přístup k `innerVar` v globálním oboru vede k chybě `ReferenceError`, což dokazuje zapouzdření, které poskytují uzávěrky.


- **Výsledek:**  
    
  - Uživatelé mohou interagovat s webovou stránkou, aby vizuálně a prakticky pochopili, jak v JavaScriptu fungují obory proměnných a uzávěrky, a upevnit si tak pojmy prostřednictvím praktické interakce.

---

### **3\. Potenciální otázky studentů**

#### **A. Pole a objekty:**

2. **Jaký je rozdíl mezi polem a objektem v jazyce JavaScript?**  
     
   - **Odpověď:**  
     Pole je uspořádaná kolekce prvků, ke které se přistupuje pomocí číselných indexů, vhodná pro ukládání seznamů položek. Objekt je neuspořádaná kolekce dvojic klíč-hodnota, ideální pro reprezentaci složitých datových struktur s pojmenovanými vlastnostmi.

   

3. **Jak mohu iterovat přes prvky pole?**  
     
   - **Odpověď:**  
     Můžete iterovat nad polem pomocí cyklů `(for`, `while)`, metod pole (`forEach()`, `map()`, `filter()`, `reduce()`) nebo novějších syntaxí jako `for...of`.

   

4. **Jaké jsou výhody používání objektů pro ukládání dat v testech?**  
     
   - **Odpověď:**  
     Objekty umožňují strukturovanou a popisnou reprezentaci dat, což usnadňuje správu a přístup ke konkrétním vlastnostem. Zvyšují čitelnost a udržovatelnost, zejména při práci se složitými testovacími daty.

#### **B. JSON:**

1. **Proč se pro výměnu dat ve webových aplikacích upřednostňuje JSON?**  
     
   - **Odpověď:**  
     JSON je lehký, snadno se čte i zapisuje a je ze základu podporován JavaScriptem. Díky své kompatibilitě s různými platformami a jazyky je ideální pro výměnu dat mezi klientem a serverem.

   

2. **Mohu do dat JSON zahrnout funkce?**  
     
   - **Odpověď:**  
     Ne, JSON podporuje pouze datové typy, jako jsou řetězce, čísla, objekty, pole, booleany a null. Funkce nejsou podporovány a nelze je serializovat do JSON.

#### **C. DOM:**

1. **Jaký je rozdíl mezi `document.getElementById()` a `document.querySelector()`?**  
     
   - **Odpověď:**  
     `document.getElementById()` vybírá prvek podle jeho jedinečného ID a je obecně rychlejší`. document.querySelector()` umožňuje vybírat prvky pomocí libovolného CSS selektoru, což poskytuje větší flexibilitu.

   

2. **Jak mohu upravit obsah prvku DOM pomocí JavaScriptu?**  
     
   - **Odpověď:**  
     Můžete upravit obsah pomocí vlastností jako `innerText`, `innerHTML` nebo `textContent`. Například:  
       
     document.getElementById('title').innerText \= 'New Title';

#### **D. Osvědčené postupy:**

1. **Proč je důležité vyhnout se hlubokému vnořování do řídicích struktur?**  
     
   - **Odpověď:**  
     Hluboké vnořování může ztížit čtení, pochopení a údržbu kódu. Zvyšuje složitost a pravděpodobnost výskytu chyb. Použití ochranných klauzulí nebo rozdělení kódu na menší funkce může pomoci vnořování omezit.

   

2. **Jak se princip DRY uplatňuje při psaní funkcí a řídicích struktur?**  
     
   - **Odpověď:**  
     Princip DRY (Don't Repeat Yourself) podporuje eliminaci duplicitního kódu abstrahováním opakujících se úloh do opakovaně použitelných funkcí nebo využitím smyček, což zvyšuje udržovatelnost kódu a snižuje počet chyb.

---

### **4\. Doplňkové materiály: Doporučení**

#### **A. Oficiální dokumentace a příručky:**

- **Pole JavaScriptu:**  
  - [Pole MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
- **Objekty JavaScriptu:**  
  - [Objekty MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)  
- **JSON:**  
  - [MDN JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)  
- **DOM:**  
  - [MDN DOM Úvod](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

#### **B. Výukové materiály a články:**

- **Porozumění polím a objektům v jazyce JavaScript:**  
  - [W3Schools JavaScript Pole](https://www.w3schools.com/js/js_arrays.asp)  
  - [W3Schools JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)  
- **Práce s JSON:**  
  - [FreeCodeCamp JSON Guide](https://www.freecodecamp.org/news/javascript-json-tutorial-how-to-parse-json-with-examples/)  
- **Manipulace s DOM:**  
  - [JavaScript.info DOM Úvod](https://javascript.info/dom-nodes)

#### **C. Interaktivní výukové platformy:**

- **Codecademy:**  
  - [Naučte se pole JavaScriptu](https://www.codecademy.com/learn/introduction-to-javascript/modules/arrays)  
  - [Naučte se objekty JavaScriptu](https://www.codecademy.com/learn/introduction-to-javascript/modules/objects)  
- **FreeCodeCamp:**  
  - [Datové struktury v jazyce JavaScript: .](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/)  
  - [Datové struktury v jazyce JavaScript: Objekty](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/)  
- **JavaScript.info:**  
  - [Objekty JavaScript](https://javascript.info/object)  
  - [JSON](https://javascript.info/json)

#### **D. Videonávody:**

- **Traversy Media:**  
  - [Výukový kurz pro pole jazyka JavaScript](https://www.youtube.com/watch?v=R8rmfD9Y5-c)  
  - [Výukový kurz objektů JavaScript](https://www.youtube.com/watch?v=7yUnN5n2nUc)  
- **Síťový nindža:**  
  - [JavaScript JSON Tutoriál](https://www.youtube.com/watch?v=iiADhChRriM)  
  - [Výukový kurz jazyka JavaScript DOM](https://www.youtube.com/watch?v=0ik6X4DJKCc)  
- **Academind:**  
  - [Pole a objekty v jazyce JavaScript](https://www.youtube.com/watch?v=R8rmfD9Y5-c)

#### **E. Platformy pro praxi:**

- **HackerRank:**  
  - [Výzvy týkající se polí v jazyce JavaScript](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)  
  - [Výzvy pro objekty JavaScript](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)  
- **LeetCode:**  
  - [Problémy s poli v jazyce JavaScript](https://leetcode.com/problemset/all/?language=JavaScript&topicSlugs=array)  
  - [Problémy s objekty JavaScript](https://leetcode.com/problemset/all/?language=JavaScript&topicSlugs=hash-table)  
- **Cvičení:**  
  - [JavaScript Track \- Pole](https://exercism.io/tracks/javascript/exercises?difficulty=all&topic=arrays)  
  - [JavaScript Track \- Objekty](https://exercism.io/tracks/javascript/exercises?difficulty=all&topic=objects)

#### **F. Komunita a podpora:**

- **Stack Overflow:**  
  - [Pole JavaScriptu Otázky](https://stackoverflow.com/questions/tagged/javascript+arrays)  
  - [Otázky k objektům JavaScriptu](https://stackoverflow.com/questions/tagged/javascript+objects)  
  - [Otázky týkající se JSON](https://stackoverflow.com/questions/tagged/json)  
  - [Otázky k DOM](https://stackoverflow.com/questions/tagged/javascript+dom)  
- **Reddit:**  
  - [r/javascript](https://www.reddit.com/r/javascript/)  
  - [r/learnjavascript](https://www.reddit.com/r/learnjavascript/)  
- **Komunity na Discordu:**  
  - Připojte se k serverům Discord zaměřeným na JavaScript a získejte pomoc a diskusi v reálném čase.

---

### **5\. Navrhované rozdělení lekcí na 3 hodiny**

#### **Hodina 1: Pole a objekty (60 minut)**

- **Úvod do polí (25 minut):**  
  - Definice, tvorba, přístup k prvkům.  
  - Běžné metody pole s příklady.  
- **Praktická činnost:**  
  - Žáci vytvářejí pole a manipulují s nimi pomocí různých metod.  
- **Úvod do objektů (25 minut):**  
  - Definice, vytvoření, přístup k vlastnostem.  
  - Běžné metody objektů s příklady.  
- **Praktická činnost:**  
  - Studenti vytvářejí objekty a provádějí operace pomocí objektových metod.  
- **Přestávka (10 minut):**  
  - Krátká pauza na odpočinek a načerpání sil.

#### **Hodina 2: JSON a DOM (60 minut)**

- **Porozumění JSON (20 minut):**  
  - Definice, struktura, převod mezi JSON a objekty.  
  - Případy použití v automatizaci testů.  
- **Praktická činnost:**  
  - Studenti vytvoří soubory JSON a procvičí si rozbor a řetězení dat JSON.  
- **Úvod do DOM (25 minut):**  
  - Definice, přístup a manipulace s prvky DOM.  
  - Základy zpracování událostí.  
- **Praktická činnost:**  
  - Studenti interagují s prvky DOM prostřednictvím jazyka JavaScript a upravují obsah a atributy.  
- **Přestávka (10 minut):**  
  - Krátká pauza na odpočinek a načerpání sil.

#### **Hodina 3: Osvědčené postupy a praktické aplikace (60 minut)**

- **Osvědčené postupy pro používání polí, objektů, JSON a DOM (20 minut):**  
  - Čitelnost kódu, výkonnostní aspekty, validace dat, bezpečnostní postupy.  
  - Znovupoužitelnost a modularita.  
- **Praktická činnost:**  
  - Studenti refaktorizují existující fragmenty kódu tak, aby dodržovali osvědčené postupy.  
- **Praktické příklady (25 minut):**  
  - Implementace testovacích dat pomocí polí a objektů.  
  - Zpracování JSON v testech Cypress.  
  - Interakce s DOM v testech.  
- **Interaktivní ukázka příkladu (10 minut):**  
  - Průchod webovou stránkou pro vizualizaci rozsahu proměnné.  
- **Sekce otázek a odpovědí (5 minut):**  
  - Řešte případné dotazy studentů.  
  - Vyjasněte si pochybnosti a upevněte klíčové pojmy probírané v lekci.

---

### **6\. Další doporučení**

#### **A. Interaktivní ukázky:**

- **Kódování v reálném čase:**  
  - Ukázat vytváření polí a objektů a manipulaci s nimi v reálném čase.  
  - Ukázat, jak analyzovat a řetězcovat data JSON.  
  - Provádění manipulací s DOM a zpracování událostí v přímém přenosu.  
- **Ladění pomocí `console.log`:**  
  - Pomocí `console.log` můžete sledovat operace s poli a objekty.  
  - Kontrola dat JSON a změn DOM v konzoli prohlížeče.

#### **B. Poutavá vizuální stránka:**

- **Diagramy:**  
  - Vizualizace struktury polí a objektů.  
  - Ukázat formát JSON a jeho vztah k objektům JavaScriptu.  
  - Zobrazení stromové struktury DOM pro vysvětlení hierarchie prvků.  
- **Úryvky kódu:**  
  - Prezentovat jasné a stručné příklady kódu pro demonstraci konceptů.  
- **Vývojové diagramy:**  
  - Pomocí vývojových diagramů můžete ukázat, jak data JSON proudí do testů Cypress nebo jak manipulace s DOM ovlivňují webové prvky.

#### **C. Podporovat účast:**

- **Párové programování:**  
  - Nechte studenty pracovat ve dvojicích na řešení úloh na manipulaci s poli a objekty, čímž podpoříte spolupráci.  
- **Živé ankety a kvízy:**  
  - Zařaďte rychlé kvízy, abyste vyhodnotili porozumění a udrželi vysokou angažovanost.  
  - Pomocí živých anket získejte zpětnou vazbu o tom, nakolik jsou studenti s materiálem spokojeni.

#### **D. Poskytněte jasné pokyny:**

- **Průvodci krok za krokem:**  
  - Nabídněte podrobné pokyny ke každé praktické činnosti, abyste zajistili, že všichni studenti budou moci postupovat podle nich.  
- **Tipy pro řešení problémů:**  
  - Předvídat běžné problémy (např. syntaktické chyby v JSON, problémy s výběrem DOM) a poskytovat řešení.

#### **E. Podporovat podpůrné prostředí:**

- **Podporujte otázky:**  
  - Vytvořte otevřenou atmosféru, ve které se studenti budou cítit dobře, když požádají o pomoc.  
- **Uveďte více příkladů:**  
  - Nabídněte různé příklady pro každý koncept, abyste uspokojili různé styly učení a upevnili porozumění.  
- **Odborné recenze:**  
  - Povzbuzujte studenty, aby si navzájem prohlíželi své kódy, a podpořte tak spolupráci při učení a upevnění osvědčených postupů.

#### **F. Využití reálných scénářů:**

- **Správa testovacích dat:**  
  - Ukázat, jak spravovat složitá testovací data pomocí polí a objektů.  
- **Vysmívání API pomocí JSON:**  
  - Předveďte, jak v testech Cypress zesměšňovat odpovědi API pomocí dat JSON.  
- **DOM Assertions:**  
  - Naučte, jak na základě výsledků testů potvrzovat stavy a obsah prvků DOM.

---

Níže jsou uvedeny podrobné definice a vysvětlení jednotlivých požadovaných pojmů spolu s příklady kódu a osvědčenými postupy. Tato vysvětlení a ukázky pomohou upevnit si znalosti a poskytnou praktické odkazy pro psaní čistého a udržovatelného kódu v jazyce JavaScript – zvláště užitečné při automatizaci testů a interakci s DOM webové stránky.

---

## Podrobné definice

### 1\. Co jsou pole?

**Definice:** Pole je uspořádaná struktura podobná seznamu, která se používá k uložení více hodnot v jedné proměnné. Každá hodnota v poli se nazývá prvek a ke každému prvku se přistupuje pomocí číselného indexu začínajícím od 0\.

**Klíčové vlastnosti:**

- **Uspořádání:** Prvky si zachovávají pořadí, v jakém byly vloženy.  
- **Přístup založený na indexech:** První prvek je na indexu 0, druhý na indexu 1 atd.  
- **Dynamická velikost:** Pole v JavaScriptu se mohou dynamicky zvětšovat nebo zmenšovat přidáváním nebo odebíráním prvků.  
- **Heterogenní prvky:** Pole mohou obsahovat prvky různých datových typů (čísla, řetězce, objekty atd.).

**Případy použití v automatizaci testování:**

- Ukládání seznamů testovacích vstupů nebo sad testovacích dat.  
- Iterace nad poli pro provádění podobných testů s různými vstupy.  
- Organizace sbírek výsledků testů nebo chybových hlášení.

---

### 2\. Co jsou to objekty?

**Definice:** Objekt v JavaScriptu je kolekce dvojic klíč-hodnota. Klíče jsou obvykle řetězce (nebo symboly), které slouží jako identifikátory hodnot, a hodnoty mohou být libovolného datového typu – včetně jiných objektů nebo polí.

**Klíčové vlastnosti:**

- **Struktura klíč-hodnota:** Přístup k datům pomocí klíčů namísto číselných indexů.  
- **Neuspořádané vlastnosti:** Pořadí, v jakém jsou vlastnosti definovány, není zaručeno.  
- **Referenční typ:** Objekty jsou referenční typy, což znamená, že na stejný objekt v paměti může odkazovat více proměnných.  
- **Flexibilní struktura:** Objekty lze za běhu rozšiřovat nebo upravovat, přidávat nebo odebírat vlastnosti podle potřeby.

**Případy použití v automatizaci testování:**

- Reprezentace složitých struktur testovacích dat (např. uživatelských profilů, konfiguračních nastavení).  
- Ukládání odpovědí API a snadné načítání konkrétních datových bodů.  
- Správa stavových dat během provádění testu.

---

### 3\. Vnořené objekty

**Definice:** Vnořený objekt je objekt, který obsahuje jiný objekt jako jednu ze svých vlastností. To umožňuje vytvářet hierarchické datové struktury, které představují složitější vztahy.

**Klíčové vlastnosti:**

- **Hierarchická data:** Vlastnosti mohou být samy o sobě objekty, což umožňuje víceúrovňovou reprezentaci dat.  
- **Hluboký přístup k nemovitosti:** Přístup k vnořeným vlastnostem vyžaduje vícenásobné vyhledávání vlastností.  
- **Užitečnost při strukturování dat:** Vnořené objekty jsou vhodné pro modelování entit reálného světa a jejich atributů (např. objekt uživatele obsahující objekt adresy).

**Případy použití v automatizaci testování:**

- Ukládání víceúrovňových konfigurací (např. nastavení prostředí, pověření uživatele s více atributy).  
- Organizace složitých odpovědí API, kdy jeden koncový bod vrací vnořená data (například údaje o uživateli včetně adresy, platebních metod a preferencí).

---

### 4\. Co je JSON?

**Definice:** JSON (JavaScript Object Notation) je odlehčený, jazykově nezávislý formát pro výměnu dat. Používá podmnožinu syntaxe jazyka JavaScript k reprezentaci datových struktur jako textu, což usnadňuje čtení, zápis a přenos.

**Klíčové vlastnosti:**

- **Textový formát:** JSON je uložen jako řetězec, což usnadňuje jeho odesílání po síti.  
- **Dvojice klíč-hodnota a pole:** JSON odráží struktury objektů a polí v JavaScriptu.  
- **Podporované datové typy:** Řetězce, čísla, booleany, null, objekty a pole. Funkce a nedefinované hodnoty nejsou podporovány.  
- **Jazykově nezávislé:** JSON je sice odvozen z JavaScriptu, ale je široce podporován mnoha programovými jazyky.

**Použití JSON v automatizaci testování pro testovací data a API:**

- **Údaje o vybavení:** Ukládejte vstupy testů do souborů JSON, abyste mohli snadno udržovat a aktualizovat testovací scénáře.  
- **Napodobováníí odpovědí API:** V testovacích prostředích můžete simulovat chování backendu pomocí předdefinovaných odpovědí JSON.  
- **Testy řízené daty:** Parsování JSON pro dynamické zadávání více testovacích případů, což snižuje duplicitu a námahu.

---

### 5\. Co je DOM?

**Definice:** Dokumentový objektový model (DOM) je programovací rozhraní, které reprezentuje strukturu dokumentu HTML nebo XML jako strom objektů. Každý prvek, atribut a část textu se stává objektem, což vývojářům umožňuje programově manipulovat se strukturou, stylem a obsahem stránky.

**Klíčové vlastnosti:**

- **Struktura podobná stromu:** Dokument je reprezentován jako hierarchický uzlový strom.  
- **Skriptovací rozhraní:** JavaScript může interagovat s uzly DOM a měnit tak to, co se zobrazuje v prohlížeči.  
- **Dynamické aktualizace:** Upravujte prvky, atributy a obsah za chodu, aniž byste museli načítat celou stránku.

**Případy použití v automatizaci testování:**

- Výběr prvků za účelem ověření jejich přítomnosti, atributů nebo textu.  
- Simulace akcí uživatele (kliknutí, psaní) na prvky DOM.  
- Ujišťování, že se prvky po určitých akcích objeví nebo zmizí podle očekávání.

---

### 6\. Zpracování událostí v DOM

**Definice:** Obsluha událostí označuje proces detekce a reakce na interakce s uživatelem nebo události na webové stránce vyvolané prohlížečem. Události mohou zahrnovat kliknutí, stisknutí kláves, odeslání formuláře, pohyby myší nebo jiné akce uživatele.

**Klíčové vlastnosti:**

- **Posluchači událostí:** Funkce, které se spouštějí v reakci na konkrétní události.  
- **Asynchronní chování:** Události se vyskytují asynchronně, jsou spouštěny interakcí uživatele nebo časově omezenými akcemi.  
- **Kontrola interakce s uživatelem:** Umožňuje vývojářům (a testerům) simulovat a ověřovat, jak aplikace reaguje na vstupy uživatele.

**Případy použití v automatizaci testování:**

- Testování interakcí uživatelského rozhraní (UI), které zajistí, že kliknutí na tlačítko vyvolá správné chování.  
- Ověření logiky odesílání formuláře nebo zpracování chyb.  
- Ověření, zda události zadávané z klávesnice vedou k očekávaným změnám na obrazovce.

---

## Příklady kódu s osvědčenými postupy

### Vytváření polí

**Vytvoření základního pole:**

// Použití literálu pole

const fruits \= \["Apple", "Banana", "Cherry"\];

// Použití konstruktoru pole (méně časté, obecně se nepreferuje)

const numbers \= new Array(1, 2, 3, 4);

**Osvědčené postupy:**

- Pro jednoduchost a čitelnost dávejte přednost literálům pole.  
- Zvolte popisné názvy proměnných, které odrážejí uložená data.

// Dobrá praxe

const userNames \= \["alice", "bob", "charlie"\];

// Vyhněte se nejasným názvům

const arr \= \["data1", "data2"\]; // Není popisné

### Vytváření objektů

**Vytváření základních objektů:**

// Použití objektového literálu

const user \= {

  name: "Alice",

  email: "alice@example.com",

  role: "admin",

};

**Osvědčené postupy:**

- Pro zjednodušení používejte objektové literály.  
- Udržujte názvy vlastností popisné.  
- Vyhněte se příliš složitým objektům; v případě potřeby je rozdělte.

// Dobrá praxe

const product \= {

  id: 101,

  name: "Wireless Mouse",

  price: 29.99,

  stock: 100,

};

// Špatná praxe: nejednoznačné názvy vlastností nebo míchání nesouvisejících dat

const data \= {

  a: "Some value",

  b: 123,

  c: true,

  user: { name: "Bob" }

};

### Vnořené objekty

**Příklad vnořeného objektu:**

const userProfile \= {

  name: "Alice",

  email: "alice@example.com",

  address: {

    street: "123 Main St",

    city: "Townsville",

    zip: "12345"

  }

};

// Accessing nested properties:

console.log(userProfile.address.city); // "Townsville"

**Osvědčené postupy:**

- Strukturovat objekty tak, aby odrážely entity reálného světa.  
- Kvůli udržovatelnosti se vyhněte hluboce vnořeným strukturám přesahujícím několik úrovní.  
- Pokud se složitá data stanou nepřehlednými, zvažte jejich rozdělení na více objektů nebo polí.

### Přístup k vlastnostem objektu

**Tečkovaný zápis:**

console.log(user.name); // "Alice"

**Zápis v závorce:**

console.log(user\["email"\]); // "alice@example.com"

**Osvědčené postupy:**

- Upřednostněte zápis s tečkou, pokud jsou názvy vlastností známé a platné identifikátory.  
- Pokud jsou názvy vlastností dynamické nebo obsahují speciální znaky, použijte zápis v závorkách.

const propertyName \= "role";

console.log(user\[propertyName\]); // "admin"

### Převod mezi objekty JSON a JavaScript

**Převod objektu JavaScript na řetězec JSON `(JSON.stringify()`):**

const userObj \= { name: "Bob", email: "bob@example.com" };

const jsonString \= JSON.stringify(userObj);

console.log(jsonString); // '{"name": "Bob", "email": "bob@example.com"}'

**Převod řetězce JSON na objekt JavaScript (`JSON.parse())`:**

const parsedObj \= JSON.parse(jsonString);

console.log(parsedObj.name); // "Bob"

**Osvědčené postupy:**

- Ověřte nebo upravte JSON před zpracováním (pokud pochází z externího zdroje).  
- Ošetření chyb pomocí try/catch při parsování neznámých dat.

try {

  const safeObj \= JSON.parse(incomingJson);

  // Use safeObj here

} catch (error) {

  console.error("Invalid JSON data:", error);

}

### Přístup k prvkům DOM

**Výběr prvků:**

\<\!-- index.html \--\>

\<div id="container"\>

  \<h1 class="title"\>Hello, World\!\</h1\>

  \<button id="clickMeBtn"\>Click Me\</button\>

\</div\>

// JavaScript

const container \= document.getElementById("container");

const title \= document.querySelector(".title");

const button \= document.querySelector("\#clickMeBtn");

**Osvědčené postupy:**

- Při výběru podle ID použijte kvůli výkonu funkci `document.getElementById().`  
- Pro složité nebo flexibilní selektory použijte `document.querySelector()` a `document.querySelectorAll().`  
- Udržujte ID a názvy tříd popisné, aby byly selektory srozumitelnější.

### Manipulace s prvky DOM

**Změna obsahu:**

title.innerText \= "Welcome to the Test Page\!";

**Úprava atributů:**

button.setAttribute("disabled", "true");

console.log(button.getAttribute("id")); // "clickMeBtn"

**Úprava tříd:**

title.classList.add("highlight");

title.classList.remove("old-class");

**Osvědčené postupy:**

- Minimalizujte přímou manipulaci s DOM pomocí odkazů na prvky v mezipaměti.  
- Pro změny stylů používejte spíše třídy a CSS než inline styly.  
- Operace DOM provádějte dávkově nebo skupinově, abyste snížili výkonnostní režii.

### Zpracování událostí

**Přidání posluchačů událostí:**

button.addEventListener("click", function () {

  console.log("Button was clicked\!");

  container.innerHTML \+= "\<p\>Button Clicked\!\</p\>";

});

**Osvědčené postupy:**

- Používejte nenápadné zpracování událostí (tj. `addEventListener`) namísto řádkových atributů `onclick.`  
- Pojmenujte funkce obsluhy událostí popisně:

function handleButtonClick(event) {

  console.log("Button clicked:", event.target);

}

button.addEventListener("click", handleButtonClick);

- Odstraňte posluchače událostí, pokud již nejsou potřeba, abyste zabránili únikům paměti:

button.removeEventListener("click", handleButtonClick);

---

