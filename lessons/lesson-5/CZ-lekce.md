## **Lekce 5: Úvod do DOM: Vlastnosti, metody a objekt globálního `window`**

### **1\. Obsahová osnova**

#### **A. Co je DOM? (Rekapitulace)**

- **Stručný přehled:**  
  - DOM (Document Object Model) je stromová struktura reprezentující webovou stránku.  
  - Každý uzel (element, text, atribut) v dokumentu je objekt, se kterým lze manipulovat pomocí JavaScriptu.  
- **Vztah k předchozím lekcím:**  
  - Stejně jako manipulujeme s poli a objekty, můžeme manipulovat i s objekty DOM.  
  - Porozumění objektům a jejich vlastnostem/metodám z předchozích lekcí pomáhá efektivně používat rozhraní DOM API.

#### **B. Vlastnosti a metody DOM**

- **Vlastnosti prvků DOM:**  
  - `innerText`, `textContent`, `innerHTML`: Přístup k textovému a HTML obsahu elementu nebo jeho úprava.  
  - `hodnotu`: U formulářových prvků, jako je input, zpřístupněte nebo nastavte hodnotu zadanou uživatelem.  
  - `styl`: Přístup k inline vlastnostem CSS.  
  - `classList`: Přidávání, odebírání nebo přepínání tříd CSS bez přímé změny řetězců HTML.  
- **Běžné metody DOM:**  
    
  - **Metody výběru:**  
      
    - `document.getElementById('id')`: Vybere prvek podle ID.  
    - `document.querySelector('selector')`: Vybere první prvek odpovídající selektoru CSS.  
    - `document.querySelectorAll('selector')`: Vybere všechny prvky odpovídající selektoru CSS a vrátí seznam uzlů.

    

  - **Vlastní atributy:**  
      
    - `data-*`: Atributy jsou vlastní atributy, které umožňují uložit další informace o prvku, aniž by ovlivnily jeho prezentaci nebo chování ve výchozím nastavení. Jsou užitečné zejména v jazyce JavaScript jako způsob, jak prvkům přiřadit další kontext nebo konfiguraci.  
    - Datové atributy mají v automatizaci testů neuvěřitelnou sílu. Přiřazením atributů data-cy, data-test nebo data-testid vytvoříte stabilní selektory, které jsou odolné vůči změnám uživatelského rozhraní. Tyto atributy nejsou pro uživatele viditelné a lze je měnit, aniž by ovlivnily rozvržení nebo styl uživatelského rozhraní. Testovací skripty mohou například spolehlivě vybírat prvky pomocí cy.get('\[data-test="login-button"\]') v Cypressu.

    

  - **Manipulační metody:**  
      
    - `element.appendChild(node)`: Přidá k elementu nový podřízený uzel.  
    - `element.removeChild(node)`: Odstraní podřízený uzel.  
    - `element.setAttribute('name', 'value')`: Nastaví nebo změní atribut elementu.  
    - `element.removeAttribute('name')`: Odstraní atribut.

    

  - **Zpracování událostí (stručná zmínka):**  
      
    - `element.addEventListener('event', callback)`: Připojení posluchačů událostí k prvkům DOM.

    

  - **Použití řídicích a datových struktur:**  
      
    - Smyčky a podmínky pro dynamickou aktualizaci prvků DOM (např. iterace nad polem dat pro vytvoření seznamu položek).  
    - Objekty pro ukládání selektorů nebo odkazů DOM pro opakované použití.  
    - Data ve formátu JSON lze načítat a používat k doplňování prvků, čímž se DOM aktualizuje za chodu.

#### **C. Objekt globální `window`**

- **Co je `window` Objekt?**  
  - Objekt `window` je globální objekt v prostředí prohlížeče.  
  - Reprezentuje okno prohlížeče a poskytuje metody a vlastnosti pro jeho ovládání.  
- **Klíčové vlastnosti a metody `window`:**  
  - **Vlastnosti:**  
    - `window.document`: Odkazuje na DOM aktuální stránky.  
    - `window.location`: Místo umístění: informace o aktuální adrese URL a navigaci.  
    - `window.history`: Přístup k historii relací prohlížeče.  
    - `window.localStorage` a `window.sessionStorage`: Ukládání a načítání dat v prohlížeči.  
  - **Metody:**  
    - `window.alert('message')`: Zobrazí dialogové okno s upozorněním.  
    - `window.confirm('message')`: Zobrazí potvrzovací dialogové okno, které vrací hodnoty true nebo false.  
    - `window.setTimeout(zpětné volání, milisekundy)`: Zpoždění spuštění kódu.  
    - `window.setInterval(zpětné volání, milisekundy)`: Provede kód periodicky.  
  - **Implicitní globální rozsah:**  
    - Proměnné deklarované na nejvyšší úrovni (bez `let`, `const` nebo `var` ve starším kódu) se mohou stát vlastnostmi `window` \- této praxi je třeba se vyhnout.  
    - Porozumění oboru (z předchozích lekcí) pomáhá zabránit znečištění globálního jmenného prostoru.

#### **D. Osvědčené postupy pro práci s DOM a `window`**

- **Udržovatelnost kódu:**  
  - Uložení odkazů na často používané prvky do proměnných.  
  - Pro odkazy na DOM používejte popisné názvy proměnných a vyhněte se "magickým řetězcům".  
- **Aspekty výkonu:**  
  - Minimalizujte zbytečné manipulace s DOM \- dávkové změny nebo použijte techniky pro omezení přetékání a překreslování.  
  - Opakované použití polí, objektů a dat JSON pro generování nebo aktualizaci DOM namísto pevného kódování prvků.  
- **Zabezpečení a ověřování dat:**  
  - Vyhněte se nastavení `innerHTML` s nedůvěryhodnými daty (riziko XSS).  
  - Ověřte JSON a uživatelský vstup před vložením do DOM.  
- **Použití řídicích struktur:**  
  - Pomocí smyček a podmínek můžete dynamicky aktualizovat DOM na základě akcí uživatele nebo dat získaných z rozhraní API.  
  - Máte-li například pole JSON objektů produktů, můžete nad nimi ve smyčce vytvořit prvky DOM pro každý produkt.

#### **E. Praktické příklady**

1. **Přístup k obsahu prvků a jeho aktualizace:**  
     
   const title \= document.getElementById('page-title');  
     
   title.innerText \= "Welcome to the Dashboard\!";  
     
2. **Úprava atributů a tříd prvků:**  
     
   const loginButton \= document.querySelector('\#login-btn');  
     
   loginButton.setAttribute('disabled', 'true');  
     
   const mainHeader \= document.querySelector('h1');  
     
   mainHeader.classList.add('highlighted');  
     
   mainHeader.classList.remove('old-class');  
     
3. **Dynamické vytváření a přidávání prvků:**  
     
   const userList \= document.getElementById('user-list');  
     
   const users \= \[  
     
     { name: "Alice", role: "admin" },  
     
     { name: "Bob", role: "user" },  
     
     { name: "Charlie", role: "moderator" }  
     
   \];  
     
   users.forEach(user \=\> {  
     
     const li \= document.createElement('li');  
     
     li.innerText \= \`${user.name} (${user.role})\`;  
     
     userList.appendChild(li);  
     
   });  
     
4. **Získávání dat JSON a aktualizace DOM:**  
     
   fetch('users.json')  
     
     .then(response \=\> response.json())  
     
     .then(data \=\> {  
     
       const userContainer \= document.querySelector('\#user-container');  
     
       data.forEach(user \=\> {  
     
         const div \= document.createElement('div');  
     
         div.innerText \= \`${user.name} \- ${user.email}\`;  
     
         userContainer.appendChild(div);  
     
       });  
     
     });  
     
5. **Použití objektu** `window`**:**  
     
   console.log(window.location.href); // Current page URL  
     
   window.setTimeout(() \=\> {  
     
     alert("Time’s up\!");  
     
   }, 2000);

#### **F. Propojení s předchozími lekcemi**

- **Pole a objekty:**  
  - Pomocí polí můžete ukládat seznamy dat a ve smyčce nad nimi dynamicky vytvářet prvky DOM.  
  - Pro snadnější manipulaci s DOM používejte objekty pro uložení selektorů nebo odkazů na DOM.  
- **Interakce JSON a API:**  
  - načtení dat JSON a jejich použití k vyplnění prvků na stránce.  
- **Řídicí struktury:**  
  - Pomocí příkazů `if/else`, cyklů a logických podmínek můžete rozhodnout, jak a kdy aktualizovat DOM, zpracovat určité uživatelské vstupy nebo upravit vlastnosti `window.`  
- **Kombinování konceptů:**  
  - Vše, co jste se naučili \- proměnné, funkce, pole, objekty, JSON, manipulace s DOM, zpracování událostí \- lze nyní integrovat do vytváření interaktivních a dynamických webových zážitků.

---

### **2\. Praktické činnosti: Cvičení a návrhy webových funkcí**

#### **A. Cvičení na aktualizaci obsahu DOM**

- **Cvičení:**  
  - Vytvořte jednoduchou webovou stránku s nadpisem, odstavcem a tlačítkem.  
  - Napište kód JavaScriptu pro:  
    - Změna textu nadpisu pomocí `innerText` při načítání stránky.  
    - Aktualizovat textový obsah odstavce po kliknutí na tlačítko.  
  - **Návrh webových funkcí:**  
    - Stránka "Vítejte", která zpočátku zobrazuje obecnou zprávu a po kliknutí na tlačítko se uvítání personalizuje.

#### **B. Dynamické vytváření seznamů z JSON Cvičení**

- **Cvičení:**  
  - Vytvoření souboru JSON (`products.json`) s polem objektů produktu (`name`, `price`, `category`).  
  - K načtení dat JSON použití funkci `fetch().`  
  - Dynamické vytváření seznamu produktů na webové stránce se zobrazením názvu a ceny každého produktu.  
  - **Návrh webových funkcí:**  
    - Stránka s výpisem produktů, která načítá data produktů a vykresluje je do tabulky nebo seznamu, aktualizovaného při každé změně dat.

#### **C. Cvičení na použití `window` metody**

- **Cvičení:**  
  - Zobrazení upozornění po 2 sekundách pomocí `window.setTimeout()`.  
  - Záznam aktuální adresy URL stránky pomocí `window.location.href`.  
  - Implementace tlačítka "Reload", které pomocí `window.location.reload()` obnoví stránku.  
  - **Návrh webových funkcí:**  
    - Stránka s časovaným oznámením a tlačítkem pro opětovné načtení stránky, která demonstruje manipulaci s `window`.

---

### **3\. Potenciální otázky studentů**

1. **Kdy mám použít `innerText` a kdy `innerHTML`?**  
   **Odpověď:**  
     
   - `innerText` nastaví nebo získá text čitelný pro člověka uvnitř prvku, přičemž ignoruje značky HTML.  
   - `innerHTML` umožňuje přímo přidávat nebo upravovat HTML. S `innerHTML` pracujte opatrně, abyste se vyhnuli bezpečnostním rizikům, jako je XSS.

   

2. **Jak zabráním znečištění globální proměnné objektem `window`?**  
   **Odpověď:**  
     
   - Proměnné vždy deklarujte pomocí `let` nebo `const` uvnitř funkcí nebo bloků.  
   - K lokálnímu rozsahu proměnných používejte moduly nebo uzávěrky.  
   - Nespoléhejte se na připojování dat k `window` \- ukládejte je raději do objektů nebo modulů.

   

3. **Jaký je rozdíl mezi `document.getElementById()` a `document.querySelector()`?**  
   **Odpověď:**  
     
   - `getElementById()` vybere prvek podle jeho jedinečného ID a vrátí jeden prvek.  
   - `querySelector()` používá selektory CSS, může vybrat libovolný prvek odpovídající selektoru a vrátí první shodu.  
   - `querySelector()` je flexibilnější, ale `getElementById()` je rychlejší pro jedno vyhledání ID.

   

4. **Mohu iterovat nad kolekcemi prvků DOM jako nad poli?**  
   **Odpověď:**  
     
   - `querySelectorAll()` vrací seznam uzlů, který lze iterovat pomocí `forEach()`.  
   - Můžete také převést seznamy uzlů nebo kolekcí HTML na pole pomocí funkce `Array.from()` a poté použít metody pole.

---

### **4\. Doplňkové materiály: Doporučení**

#### **A. Oficiální dokumentace a příručky:**

- [Webové dokumenty MDN \- Úvod do DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)  
- [Webové dokumenty MDN \- Objekt okna](https://developer.mozilla.org/en-US/docs/Web/API/Window)  
- [Webové dokumenty MDN \- Manipulace s DOM](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

#### **B. Výukové materiály a články:**

- **Výukový kurz DOM W3Schools:** [https://www.w3schools.com/js/js\_htmldom.asp](https://www.w3schools.com/js/js_htmldom.asp)  
- **JavaScript.info Výukový kurz DOM:** [//javascript.info/document](https://javascript.info/document)

#### **C. Interaktivní výukové platformy:**

- **FreeCodeCamp:** Cvičení na manipulaci s DOM a zpracování událostí.  
- **Codecademy:** Interaktivní lekce práce s DOM.

#### **D. Videonávody:**

- **Traversy Media na YouTube:** Videa o základech manipulace s DOM.  
- **The Net Ninja:** Výukové programy DOM, vysvětlující vlastnosti, metody a použití objektů `window`.

#### **E. Platformy pro praxi:**

- Vytvořte malé ukázkové stránky a experimentujte s různými metodami DOM.  
- Používejte soubory JSON jako zdroje dat a dynamicky vykreslujte prvky uživatelského rozhraní na základě načtených dat.

#### **F. Společenství a podpora:**

- **Stack Overflow** a **Reddit** (`r/javascript`): Skvělé zdroje pro konkrétní dotazy týkající se DOM.  
- **Komunity na Discord:** Připojte se ke kanálům zaměřeným na JavaScript nebo front-end a diskutujte o problémech DOM.

---

### **5\. Navrhované rozdělení lekcí na 3 hodiny**

#### **Hodina 1: Vlastnosti a metody DOM (60 minut)**

- **Shrnutí pojmů DOM (10 minut):**  
  - Zkontrolujte strukturu DOM a způsob, jakým JavaScript vidí webovou stránku.  
- **Vlastnosti a metody DOM (40 minut):**  
  - `innerText`, `innerHTML`, `textContent`.  
  - `classList` a `style`.  
  - Vytváření, úprava a odstraňování prvků.  
- **Krátké otázky a odpovědi (10 minut):**  
  - Řešení okamžitých otázek.

#### **Hodina 2: Objekt globálního okna a integrace (60 minut)**

- **Průzkoumání objektu window (20 minut):**  
  - `window.document`, `window.location`, `window.history`.  
  - Časované akce (`setTimeout`, `setInterval`).  
- **Praktická integrace s daty (20 minut):**  
  - Načtení dat JSON a aktualizace prvků DOM.  
  - Pomocí smyček a podmínek můžete rozhodnout, co se má zobrazit.  
- **Krátké otázky a odpovědi (10 minut):**  
  - Vyjasněte si případné nejasnosti.  
- **Přestávka (10 minut):**  
  - Rychlá pauza.

#### **Hodina 3: Praktické činnosti a osvědčené postupy (60 minut)**

- **Praktická cvičení (40 minut):**  
  - Aktualizace textu a atributů.  
  - Vytváření seznamů z polí nebo JSON.  
  - Použití metody `window` pro zobrazení upozornění nebo opětovné načtení stránky.  
- **Recenze a otázky a odpovědi (20 minut):**  
  - Zopakujte si klíčové koncepty a osvědčené postupy.  
  - Povzbuzujte studenty k experimentování a zkoušení složitějších manipulací s DOM.

---

### **6\. Další doporučení**

#### **A. Interaktivní ukázky:**

- Ukázat živé příklady kódování:  
  - Načtení souboru JSON a zobrazení dat na stránce.  
  - Aktualizace tříd prvků při kliknutí na tlačítko.  
  - Zobrazení časově omezeného upozornění pomocí funkce `setTimeout()`.

#### **B. Poutavá vizuální stránka:**

- Pomocí diagramů zobrazte strom DOM.  
- Vývojové diagramy pro vizualizaci toku dat z JSON do prvků DOM.  
- Zvýrazněte, jak se `window` nachází na nejvyšší úrovni prostředí prohlížeče.

#### **C. Podporovat účast:**

- Požádejte studenty, aby našli a zapsali `window.location.href`.  
- Nechte studenty vytvářet a odstraňovat prvky za chodu.  
- Nechte je vyzkoušet výběr prvků pomocí různých metod a vlastností.

#### **D. Poskytněte jasné pokyny:**

- Minizadání krok za krokem, např. "Změňte text nadpisu a přidejte pod něj nový odstavec."  
- Tipy pro řešení běžných chyb (např. výběr nesprávného ID, chybný zápis selektoru).

#### **E. Podporovat podpůrné prostředí:**

- Vyzvěte studenty, aby se podělili o své úryvky kódu.  
- Nabídněte jim, že jejich přístupy posoudíte a poskytnete jim zpětnou vazbu.

---

Níže jsou uvedena podrobná vysvětlení a objasnění k jednotlivým požadovaným tématům: vlastnosti prvků DOM, objekt `window`, funkce `fetch()` a její použití s daty JSON při automatizaci testů, role funkce `then()` v řetězci slibů `fetch()` a funkce `setTimeout().`

---

## Vlastnosti prvků DOM

**Co jsou vlastnosti prvků DOM?**  
Po načtení webové stránky do prohlížeče vytvoří prohlížeč objektový model dokumentu (DOM), který představuje strukturu stránky jako strom objektů. Každý prvek HTML na stránce se stává objektem prvku DOM, který má vlastnosti a metody, k nimž můžete přistupovat a manipulovat s nimi pomocí jazyka JavaScript.

**Společné vlastnosti DOM:**

1. **`innerText` / `textContent`:**  
     
   - **Účel:** Přístup k textovému obsahu prvku nebo jeho změna.  
   - **Příklad:**  
       
     const heading \= document.getElementById('main-title');  
       
     console.log(heading.innerText); // Reads the displayed text of the heading  
       
     heading.innerText \= "Welcome to the Dashboard\!";  
       
   - **Rozdíl:** `innerText` respektuje styl a skryté prvky, `textContent` zobrazuje celý text včetně skrytých prvků a zalomení řádků.

   

2. **`innerHTML`:**  
     
   - **Účel:** Přístup ke značce HTML uvnitř prvku nebo její změna.  
   - **Příklad:**  
       
     const container \= document.querySelector('\#content');  
       
     container.innerHTML \= "\<p\>New paragraph\!\</p\>"; // Injects HTML code  
       
   - **Upozornění:** Použití `innerHTML` s nedůvěryhodnými daty může vystavit stránku bezpečnostním rizikům, jako je XSS (Cross-Site Scripting).

   

3. **`value`:**  
     
   - **Účel:** Pro formulářové prvky (vstupy, textové pole) v`alue` získává nebo nastavuje hodnotu zadanou uživatelem.  
   - **Příklad:**  
       
     const input \= document.getElementById('username');  
       
     input.value \= "testUser";

     
4. **`classList`:**  
     
   - **Účel:** Správa tříd CSS prvku bez ruční manipulace s řetězcem atributu `class.`  
   - **Příklad:**  
       
     const button \= document.querySelector('.btn');  
       
     button.classList.add('active');  
       
     button.classList.remove('disabled');  
       
     button.classList.toggle('hidden');

     
5. **`style`:**  
     
   - **Účel:** Přístup k řádkovým stylům CSS prvku nebo jejich změna.  
   - **Příklad:**  
       
     const box \= document.querySelector('.box');  
       
     box.style.backgroundColor \= "blue";  
       
     box.style.color \= "white";  
       
   - **Poznámka:** Obecně je lepší manipulovat s třídami a používat externí CSS než nastavovat styly inline kvůli snadné údržbě.

---

## Co je objekt `window`?

**Definice:**  
V prohlížečích je objekt `window` globálním objektem, který představuje okno prohlížeče obsahující webovou stránku. Všechny globální proměnné, funkce a objekty se stávají vlastnostmi objektu `window`.

**Klíčové body o `window`:**

- **Globální rozsah:** Proměnné deklarované globálně (bez `let`, `const` nebo `var` ve starším kódu) se mohou stát vlastnostmi `window`. Moderní osvědčené postupy nedoporučují spoléhat se na toto chování.  
- **Přístup k rozhraním API dokumentů a prohlížeče:**  
  - `window.document` vám poskytne DOM aktuální stránky.  
  - `window.location` poskytuje informace a metody pro aktuální adresu URL.  
  - `window.history` umožňuje navigaci v historii relací prohlížeče.  
  - `window.alert()`, `window.confirm()`, `window.prompt()` zobrazí dialogy.  
  - `window.setTimeout()` a `window.setInterval()` naplánují provádění kódu.

**Příklad:**

console.log(window.location.href); // Logs the current page URL

window.alert("Welcome to the site\!");

**Osvědčené postupy:**  
Vyhněte se připojování nepotřebných dat k `window`. Udržujte proměnné v rozsahu funkcí nebo modulů, abyste zabránili znečištění globálního jmenného prostoru.

---

## Funkce `fetch()` a význam dat JSON v automatizaci testování

**Co je `fetch()`?**  
`fetch()` je vestavěná funkce jazyka JavaScript (součást rozhraní Fetch API), která umožňuje provádět síťové požadavky, například načítat data z adresy URL. Vrací slib, což usnadňuje zpracování asynchronních operací bez blokování hlavního vlákna.

**Syntaxe:**

fetch('https://api.example.com/data')

  .then(response \=\> {

    // handle response

  })

  .catch(error \=\> {

    // handle error

  });

**Význam JSON v automatizaci testování:**  
JSON (JavaScript Object Notation) je lehký datový formát, který je snadno čitelný a zapisovatelný jak pro lidi, tak pro stroje. Je nezávislý na jazyku a široce se používá pro komunikaci mezi klienty a servery. V automatizaci testování:

1. **Přípravky a testovací data:**  
   Vstupy testů a očekávané výsledky můžete ukládat do souborů JSON. Tím se data oddělí od testovací logiky, což usnadňuje aktualizaci, údržbu a opakované použití testovacích scénářů.  
     
2. **Testování API:**  
   Při testování aplikací, které komunikují s backendem (API), jsou odpovědi často ve formátu JSON. Parsování odpovědí JSON a ověřování, zda vrácená data odpovídají očekávání, je jednoduché.  
     
3. **Napodobující reakce:**  
   V automatizovaných testech můžete jako napodobující odpovědi použít předdefinovaná data JSON. To zajistí deterministické testy bez závislosti na externích službách.

**Parsování a zpracování JSON:**

- **metoda `response.json():`**  
  Po zavolání metody `fetch()` často převádíte surovou odpověď na JSON:  
    
  fetch('users.json')  
    
    .then(response \=\> response.json()) // parse JSON from response  
    
    .then(data \=\> {  
    
      console.log(data);  
    
      // data is now a JavaScript object/array you can loop over, assert, or manipulate  
    
    });

---

## Co je `then` ve funkci `fetch()?`

**Vysvětlení:** `then()` je metoda dostupná pro Promises. Když zavoláte `fetch()`, vrátí slib (promise). Metoda `then()` definuje, co se má stát, když je tento slib vyřešen (tj. když asynchronní operace úspěšně skončí).

- **Nejprve `.then()`:** Často se používá ke zpracování surové odpovědi z funkce `fetch()` a její konverzi do použitelného formátu (například JSON).  
- **Druhý příkaz `.then()`:** Jakmile máte analyzovaná data, můžete zřetězit další funkci `then()`, která tato data zpracuje (např. aktualizuje DOM, spustí aserce atd.).

**Příklad:**

fetch('users.json')

  .then(response \=\> response.json())    // Converts the response body to JSON

  .then(data \=\> {

    console.log(data);                  // Use the parsed data here

  })

  .catch(error \=\> console.error(error));

**Klíčový bod:**

- **`then()`** je způsob, jak řetězit operace v asynchronním toku. Každé `then()` vrací nový slib, který umožňuje pokračovat v řetězení.  
- **`catch()`** slouží k ošetření chyb, pokud některá část řetězce selže.

---

## Vysvětlení funkce `setTimeout()`

**Co je to funkce `setTimeout()`?**  
`setTimeout()` je funkce poskytovaná prohlížečem (prostřednictvím `window)`, která umožňuje spustit zadanou funkci po nastavené prodlevě (v milisekundách).

**Syntaxe:**

window.setTimeout(() \=\> {

  console.log("This message appears after 2 seconds");

}, 2000);

**Parametry:**

1. **Funkce zpětného volání:** Funkce, která se má spustit po zpoždění.  
2. **Zpoždění (milisekundy):** Doba čekání před voláním zpětného volání. 1000 ms \= 1 sekunda.

**Chování:**

- Zpětné volání se provede až po uplynutí zadané prodlevy.  
- Kód neblokuje; naplánuje zpětné volání a pokračuje ve zbytku skriptu. Po uplynutí času se provede funkce zpětného volání.

**Případy použití v automatizaci testování:**

- **Simulace čekací doby uživatelů:** Pokud chcete otestovat, jak se uživatelské rozhraní chová po určité prodlevě (např. když po několika sekundách zmizí načítací kolečko).  
- **Plánování asynchronních kontrol:** Spuštění části kódu po určité prodlevě, aby se ověřilo, zda je splněna nějaká podmínka v DOM.

**Zastavení časového limitu:**

- Funkci `setTimeout()` můžete přiřadit proměnné a v případě potřeby ji zrušit pomocí funkce `clearTimeout().`  
    
  const timeoutId \= setTimeout(() \=\> {  
    
    console.log("Will this message appear?");  
    
  }, 5000);  
    
  // Cancel the timeout before it triggers  
    
  clearTimeout(timeoutId);

