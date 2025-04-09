## **Lekce 5: Úvod do DOM: Vlastnosti, Metody a Globální Objekt `window`**

### **1. Obsah lekce**

#### **A. Úvod do DOM (Document Object Model)**
- **Co je to DOM?**
  - Definice a účel.
  - Reprezentace webové stránky jako stromové struktury.
- **Přístup k prvkům DOM:**
  - `document.getElementById()`.
  - `document.querySelector()` a `document.querySelectorAll()`.
- **Manipulace s prvky DOM:**
  - Změna obsahu (`innerText`, `innerHTML`).
  - Úprava atributů (`setAttribute()`, `getAttribute()`).
  - Přidávání a odstraňování tříd (`classList.add()`, `classList.remove()`).
- **Zpracování událostí:**
  - Přidání posluchačů událostí (`addEventListener()`).
  - Běžné události (kliknutí, vstup, odeslání).


##### Co je to DOM?

**Definice:**
Document Object Model (DOM) je programovací rozhraní, které reprezentuje strukturu HTML nebo XML dokumentu jako strom objektů. Každý prvek, atribut a kus textu se stává objektem, což vývojářům umožňuje programově manipulovat se strukturou, stylem a obsahem stránky.

**Klíčové charakteristiky:**
- **Struktura podobná stromu:** Dokument je reprezentován jako hierarchický uzlový strom.
- **Skriptovací rozhraní:** JavaScript může interagovat s uzly DOM, aby změnil, co je zobrazeno v prohlížeči.
- **Dynamické aktualizace:** Mění prvky, atributy a obsah na cestě bez nutnosti znovu načítat celou stránku.

**Použití v automatizaci testů:**
- Výběr prvků pro ověření jejich existence, atributů nebo textu.
- Simulace uživatelských akcí (kliknutí, psaní) na prvcích DOM.
- Ověření, že prvky se objevují nebo mizí podle očekávání po určitých akcích.


#### Zpracování událostí v DOM

**Definice:**
Zpracování událostí označuje proces detekce a reagování na interakce uživatelů nebo na události poháněné prohlížečem na webové stránce. Události mohou zahrnovat kliknutí, stisknutí kláves, odeslání formuláře, pohyby myši nebo jiné uživatelské akce.

**Klíčové charakteristiky:**
- **Posluchači událostí:** Funkce, které se vykonávají v reakci na konkrétní události.
- **Asynchronní chování:** Události se vyskytují asynchronně, vyvolané uživatelskou interakcí nebo časovanými akcemi.
- **Kontrola nad uživatelskou interakcí:** Umožňuje vývojářům (a testerům) simulovat a ověřovat, jak se aplikace reaguje na uživatelský vstup.

**Použití v automatizaci testů:**
- Testování interakcí uživatelského rozhraní, zajištění, že kliknutí na tlačítko spustí správné chování.
- Ověření logiky odeslání formuláře nebo zpracování chyb.
- Potvrzení, že události vstupu z klávesnice vedou k očekávaným změnám na obrazovce.

#### **B. Vlastnosti a Metody DOM**

**Co jsou vlastnosti prvků DOM?**  
Když je webová stránka načtena do prohlížeče, prohlížeč vytváří Document Object Model (DOM), který reprezentuje strukturu stránky jako strom objektů. Každý prvek HTML na stránce se stává objektem prvku DOM, který má vlastnosti a metody, ke kterým získáte přístup a manipulujete s nimi pomocí JavaScriptu.

- **Vlastnosti prvků DOM:**
  - `innerText`, `textContent`, `innerHTML`: Přístup nebo úprava textového a HTML obsahu prvku.
  - `value`: Pro prvky formuláře, jako jsou vstupy, přístup nebo nastavení hodnoty zadané uživatelským.
  - `style`: Přístup k inline CSS vlastnostem.
  - `classList`: Přidávat, odstraňovat nebo přepínat CSS třídy bez přímé úpravy HTML řetězců.
- **Běžné metody DOM:**
  - **Metody výběru:**
    - `document.getElementById('id')`: Vybere prvek podle ID.
    - `document.querySelector('selector')`: Vybere první prvek odpovídající CSS selektoru.
    - `document.querySelectorAll('selector')`: Vybere všechny prvky odpovídající CSS selektoru a vrací NodeList.
  - **Vlastní atributy:**
    - `data-*`: Atributy jsou vlastní atributy, které umožňují ukládat další informace o prvku, aniž by to ovlivňovalo jeho prezentaci nebo chování podle výchozího stavu. Jsou zvlášť užitečné v JavaScriptu jako způsob přiřazení dalšího kontextu nebo konfigurace prvkům.
    - Data atributy jsou neuvěřitelně mocné v automatizaci testů. Přiřazením atributů data-cy, data-test nebo data-testid vytváříte stabilní selektory, které jsou odolné vůči změnám UI. Tyto atributy nejsou viditelné pro uživatele a mohou být změněny, aniž by ovlivnily rozložení nebo styl UI. Testovací skripty mohou spolehlivě vybírat prvky pomocí cy.get('[data-test="login-button"]') například v Cypressu.
  
  - **Metody manipulace:**
    - `element.appendChild(node)`: Přidá nový poduzel k prvku.
    - `element.removeChild(node)`: Odstraní poduzel.
    - `element.setAttribute('name', 'value')`: Nastaví nebo změní atribut na prvku.
    - `element.removeAttribute('name')`: Odstraní atribut.
  - **Zpracování událostí (stručný zmínka):**
    - `element.addEventListener('event', callback)`: Připojte posluchače událostí k prvkům DOM.
  - **Použití řídících struktur a datových struktur:**
    - Smyčky a podmínky pro dynamickou aktualizaci prvků DOM (např. iterace přes pole dat pro vytvoření seznamu položek).
    - Objekty pro ukládání selektorů nebo odkazů DOM pro znovupoužitelnost.
    - JSON data mohou být načtena a použita k zaplnění prvků, aktualizující DOM na cestě.


1. **`innerText` / `textContent`:**
   - **Účel:** Přístup nebo změna textového obsahu prvku.
   - **Příklad:**
     ```javascript
     const heading = document.getElementById('main-title');
     console.log(heading.innerText); // Čte zobrazený text nadpisu
     heading.innerText = "Vítejte na řídicím panelu!";
     ```
   - **Rozdíl:** `innerText` respektuje styly a skryté prvky, `textContent` zobrazuje veškerý text včetně skrytých prvků a zalomení řádků.

2. **`innerHTML`:**
   - **Účel:** Přístup nebo změna HTML značkování uvnitř prvku.
   - **Příklad:**
     ```javascript
     const container = document.querySelector('#content');
     container.innerHTML = "<p>Nový odstavec!</p>"; // Vstřikuje HTML kód
     ```
   - **Opatrnost:** Používání `innerHTML` s nedůvěryhodnými daty může vystavit vaši stránku bezpečnostním rizikům jako XSS (Cross-Site Scripting).

3. **`value`:**
   - **Účel:** Pro prvky formuláře (vstupy, textové oblasti), `value` získává nebo nastavuje hodnotu zadanou uživatelským.
   - **Příklad:**
     ```javascript
     const input = document.getElementById('username');
     input.value = "testUser";
     ```

4. **`classList`:**
   - **Účel:** Spravovat CSS třídy prvku bez manuální manipulace s řetězcem atributu `class`.
   - **Příklad:**
     ```javascript
     const button = document.querySelector('.btn');
     button.classList.add('active');
     button.classList.remove('disabled');
     button.classList.toggle('hidden');
     ```

5. **`style`:**
   - **Účel:** Přístup nebo změna inline CSS stylů prvku.
   - **Příklad:**
     ```javascript
     const box = document.querySelector('.box');
     box.style.backgroundColor = "blue";
     box.style.color = "white";
     ```
   - **Poznámka:** Je obvykle lepší manipulovat s třídami a používat externí CSS než nastavovat styly inline pro udržovatelnost.

#### Přístup k prvkům DOM

**Výběr prvků:**
```html
<!-- index.html -->
<div id="container">
  <h1 class="title">Ahoj, světe!</h1>
  <button id="clickMeBtn">Klikni na mě</button>
</div>
```

```javascript
// JavaScript
const container = document.getElementById("container");
const title = document.querySelector(".title");
const button = document.querySelector("#clickMeBtn");
```

**Nejlepší praktiky:**
- Používejte `document.getElementById()`, když vybíráte podle ID pro výkon.
- Používejte `document.querySelector()` a `document.querySelectorAll()` pro složité nebo flexibilní selektory.
- Udržujte ID a názvy tříd popisné, aby byly selektory srozumitelnější.

##### Manipulace s prvky DOM

**Změna obsahu:**
```javascript
title.innerText = "Vítejte na testovací stránce!";
```

**Úprava atributů:**
```javascript
button.setAttribute("disabled", "true");
console.log(button.getAttribute("id")); // "clickMeBtn"
```

**Úprava tříd:**
```javascript
title.classList.add("highlight");
title.classList.remove("old-class");
```

**Nejlepší praktiky:**
- Minimalizujte přímou manipulaci s DOM tím, že ukládáte reference na prvky.
- Používejte třídy a CSS pro změny stylu namísto inline stylů.
- Udržujte operace DOM ve skupinách nebo dávkách, aby se snížilo zatížení výkonu.

##### Zpracování událostí

**Přidání posluchačů událostí:**
```javascript
button.addEventListener("click", function () {
  console.log("Tlačítko bylo kliknuto!");
  container.innerHTML += "<p>Tlačítko bylo kliknuto!</p>";
});
```

**Nejlepší praktiky:**
- Používejte nezatěžující zpracování událostí (tj. `addEventListener`) spíše než inline atributy `onclick`.
- Pojmenujte funkce obslužné rutiny událostí popisně:
  
```javascript
function handleButtonClick(event) {
  console.log("Tlačítko kliknuto:", event.target);
}

button.addEventListener("click", handleButtonClick);
```

- Odstraňte posluchače událostí, když již nejsou potřeba, aby se zabránilo únikům paměti:
  
```javascript
button.removeEventListener("click", handleButtonClick);
```


#### **B. Globální Objekt `window`**
**Definice:**  
V webových prohlížečích je objekt `window` globálním objektem, který reprezentuje prohlížečové okno obsahující vaši webovou stránku. Všechny globální proměnné, funkce a objekty se stávají vlastnostmi `window`.

- **Co je to objekt `window`?**
  - Objekt `window` je globálním objektem v prohlížečovém prostředí.
  - Reprezentuje prohlížečové okno a poskytuje metody a vlastnosti pro jeho ovládání.
- **Klíčové vlastnosti a metody `window`:**
  - **Vlastnosti:**
    - `window.document`: Odkazuje na DOM aktuální stránky.
    - `window.location`: Informace o aktuální URL a navigaci.
    - `window.history`: Přístup k historii relace prohlížeče.
    - `window.localStorage` a `window.sessionStorage`: Ukládají a načítají data v prohlížeči.
  - **Metody:**
    - `window.alert('message')`: Zobrazí dialogové okno se zprávou.
    - `window.confirm('message')`: Zobrazí dialogové okno pro potvrzení, které vrátí true nebo false.
    - `window.setTimeout(callback, milliseconds)`: Zpožďuje vykonání kódu.
    - `window.setInterval(callback, milliseconds)`: Periodicky vykonává kód.
  - **Implicitní globální rozsah:**
    - Proměnné deklarované na nejvyšší úrovni (bez `let`, `const` nebo `var` ve starším kódu) se mohou stát vlastnostmi `window`—praktika, které je třeba se vyvarovat.
    - Porozumění rozsahu (z předchozích lekcí) pomáhá vyhnout se znečištění globálního jmenného prostoru.


**Klíčové body o `window`:**  
- **Globální rozsah:** Proměnné deklarované globálně (bez `let`, `const`, nebo `var` ve starším kódu) se mohou stát vlastnostmi `window`. Moderní nejlepší praktiky odrazují od spoléhání se na toto chování.
- **Přístup k dokumentu a API prohlížeče:**  
  - `window.document` vám dává DOM pro aktuální stránku.  
  - `window.location` poskytuje informace a metody pro aktuální URL.  
  - `window.history` umožňuje navigaci v historii relace prohlížeče.  
  - `window.alert()`, `window.confirm()`, `window.prompt()` zobrazují dialogy.  
  - `window.setTimeout()` a `window.setInterval()` plánují vykonání kódu.

**Příklad:**
```javascript
console.log(window.location.href); // Vypíše aktuální URL stránky
window.alert("Vítejte na stránce!");
```

**Nejlepší praktika:**  
Vyhněte se připojování zbytečných dat k `window`. Udržujte proměnné v rozsahu funkcí nebo modulů, abyste předešli znečištění globálního jmenného prostoru.

#### **D. Nejlepší praktiky pro práci s DOM a `window`**
- **Udržovatelnost kódu:**
  - Ukládejte reference na často přístupné prvky do proměnných.
  - Používejte popisné názvy proměnných pro odkazy DOM a vyhněte se „magickým řetězcům“.
- **Úvahy o výkonu:**
  - Minimalizujte zbytečné manipulace s DOM—změny dávkujte nebo používejte techniky k nízkému počtu návratů a repaintů.
  - Znovu používejte pole, objekty a JSON data pro generování nebo aktualizaci DOM místo hardcodovaných prvků.
- **Bezpečnost a validace dat:**
  - Vyhněte se nastavení `innerHTML` s nedůvěryhodnými daty (riziko XSS).
  - Validujte JSON a uživatelský vstup před injektáží do DOM.
- **Používání řídících struktur:**
  - Používejte smyčky a podmínky k dynamické aktualizaci DOM na základě uživatelských akcí nebo dat načtených z API.
  - Například, pokud máte JSON pole objektů produktů, můžete je iterovat a vytvářet DOM prvky pro každý produkt.

#### **E. Praktické příklady**

1. **Přístup a aktualizace obsahu prvků:**
   ```javascript
   const title = document.getElementById('page-title');
   title.innerText = "Vítejte na řídicím panelu!";
   ```

2. **Úprava atributů a tříd prvků:**
   ```javascript
   const loginButton = document.querySelector('#login-btn');
   loginButton.setAttribute('disabled', 'true');

   const mainHeader = document.querySelector('h1');
   mainHeader.classList.add('highlighted');
   mainHeader.classList.remove('old-class');
   ```

3. **Dynamické vytváření a přidávání prvků:**
   ```javascript
   const userList = document.getElementById('user-list');
   const users = [
     { name: "Alice", role: "admin" },
     { name: "Bob", role: "user" },
     { name: "Charlie", role: "moderator" }
   ];

   users.forEach(user => {
     const li = document.createElement('li');
     li.innerText = `${user.name} (${user.role})`;
     userList.appendChild(li);
   });
   ```

4. **Načítání JSON dat a aktualizace DOM:**
   
**Co je `fetch()`?**  
`fetch()` je vestavěná JavaScript funkce (součást Fetch API), která vám umožňuje provádět síťové požadavky, jako je načítání dat z URL. Vrací Promise, což usnadňuje manipulaci s asynchronními operacemi bez blokování hlavního vlákna.

   ```javascript
   fetch('users.json')
     .then(response => response.json())
     .then(data => {
       const userContainer = document.querySelector('#user-container');
       data.forEach(user => {
         const div = document.createElement('div');
         div.innerText = `${user.name} - ${user.email}`;
         userContainer.appendChild(div);
       });
     });
   ```


5. **setTimeout**
**Co je `setTimeout()`?**  
`setTimeout()` je funkce poskytovaná prohlížečem (prostřednictvím `window`), která vám umožňuje vykonat specifikovanou funkci po nastaveném zpoždění (v milisekundách).

**Syntaxe:**
```javascript
window.setTimeout(() => {
  console.log("Tato zpráva se zobrazuje po 2 sekundách");
}, 2000);
```

**Parametry:**
1. **Callback Funkce:** Funkce, kterou chcete spustit po zpoždění.
2. **Zpoždění (milisekundy):** Čas, který se má čekat před zavoláním callbacku. 1000 ms = 1 sekunda.

**Chování:**
- Callback není vykonáván, dokud nenastane stanovené zpoždění.
- Kód nepřekáží; naplánuje callback a pokračuje v běhu zbytku skriptu. Když vyprší čas, callbacková funkce se vykoná.

**Použití v automatizaci testů:**
- **Simulace čekací doby uživatele:** Pokud chcete otestovat, jak se uživatelské rozhraní chová po zpoždění (jako zmizení načítacího indikátoru po několika sekundách).
- **Plánování asynchronních kontrol:** Spuštění části kódu po zpoždění pro ověření, zda je splněna nějaká podmínka v DOM.

**Zastavení timeoutu:**
- Můžete přiřadit `setTimeout()` k proměnné a použít `clearTimeout()`, abyste jej v případě potřeby zrušili.
  ```javascript
  const timeoutId = setTimeout(() => {
    console.log("Bude tato zpráva zobrazena?");
  }, 5000);

  // Zrušte timeout před jeho spuštěním
  clearTimeout(timeoutId);
  ```
   
**Důležitost JSON v automatizaci testů:**  
JSON (JavaScript Object Notation) je lehký datový formát, který je snadno čitelný jak pro lidi, tak pro stroje. Je nezávislý na jazyce a široce používaný pro komunikaci mezi klienty a servery. V automatizaci testů:

1. **Fixture a testovací data:**  
   Můžete uložit testové vstupy a očekávané výsledky v JSON souborech. To odděluje data od testovací logiky, což usnadňuje aktualizaci, údržbu a znovupoužívání testovacích scénářů.

2. **Testování API:**  
   Při testování aplikací, které komunikují s back-endy (API), jsou odpovědi často v JSON. Parsování odpovědí JSON a ověření, že vracená data odpovídají očekávání, je snadné.

3. **Mockování odpovědí:**  
   V automatizovaných testech můžete zajišťovat předdefinovaná JSON data jako mock odpovědi. To zajišťuje deterministické testy bez spoléhání se na externí služby.

**Parsování a zpracování JSON:**
- **`response.json()` metoda:**  
  Po zavolání `fetch()` často převádíte surovou odpověď na JSON:
  ```javascript
  fetch('users.json')
    .then(response => response.json()) // převod JSON z odpovědi
    .then(data => {
      console.log(data);
      // data je nyní JavaScriptový objekt/pole, které můžete iterovat, ověřovat nebo manipulovat
    });
  ```

#### Co je `then` v `fetch()` funkci?

**Vysvětlení:**
`then()` je metoda dostupná na Promise. Když zavoláte `fetch()`, vrátí Promise. Metoda `then()` definuje, co se má stát, když je tato Promise vyřešena (tj. když asynchronní operace úspěšně dokončí).

- **První `.then()`:** Často se používá pro zpracování surové odpovědi z `fetch()` a převod do použitelného formátu (jako JSON).
- **Druhý `.then()`:** Jakmile máte zpracovaná data, můžete připojit další `then()` pro zpracování těchto dat (např. aktualizaci DOM, provedení asercí atd.).

**Příklad:**
```javascript
fetch('users.json')
  .then(response => response.json())    // převádí tělo odpovědi na JSON
  .then(data => {
    console.log(data);                  // Zpracujte zde zpracovaná data
  })
  .catch(error => console.error(error));
```

**Klíčový bod:**  
- **`then()`** je, jak řetězíte operace v asynchronním toku. Každý `then()` vrací novou Promise, což vám umožňuje pokračovat v řetězci.
- **`catch()`** se používá k zpracování chyb, pokud část řetězce selže.


5. **Používání objektu `window`:**
   ```javascript
   console.log(window.location.href); // Aktuální URL stránky
   window.setTimeout(() => {
     alert("Čas je vypršel!");
   }, 2000);
   ```

#### **F. Spojení s předchozími lekcemi**
- **Pole a objekty:**
  - Používejte pole k ukládání seznamů dat a iterujte přes ně pro dynamickou výrobu DOM prvků.
  - Používejte objekty k uchování selektorů nebo odkazů DOM pro snazší manipulaci s DOM.
- **JSON a interakce s API:**
  - Načtěte JSON data a použijte je k zaplnění prvků na stránce.
- **Řídící struktury:**
  - Používejte `if/else` prohlášení, smyčky a logické podmínky, abyste určili jak a kdy aktualizovat DOM, zpracovávat určité uživatelské vstupy nebo měnit vlastnosti `window`.
- **Kombinování konceptů:**
  - Vše, co bylo naučeno—proměnné, funkce, pole, objekty, JSON, manipulace s DOM, zpracování událostí—nyní může být integrováno pro vytvoření interaktivních a dynamických webových zážitků.

---

### **2. Praktické aktivity: Cvičení a návrhy webových funkcionalit**

#### **A. Interakce s DOM v testech cvičení**
- **Cvičení:**
  - Vytvořte HTML stránku s různými prvky, jako jsou tlačítka, vstupní pole a kontejnery.
  - Napište testy pro Cypress, které:
    - Vyberte a interagujte s prvky DOM pomocí selektorů.
    - Ověřte přítomnost a obsah prvků.
    - Simulujte uživatelské interakce, jako jsou kliknutí a odeslání formulářů.
  - **Příklad:**
    ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html>
    <head>
      <title>Test interakce DOM</title>
    </head>
    <body>
      <h1 id="title">Vítejte na testovací stránce</h1>
      <button id="changeTitle">Změnit název</button>
      <input type="text" id="username" placeholder="Zadejte uživatelské jméno" />
      <button id="submitForm">Odeslat</button>
      <div id="output"></div>

      <script>
        document.getElementById('changeTitle').addEventListener('click', () => {
          document.getElementById('title').innerText = 'Název změněn!';
        });

        document.getElementById('submitForm').addEventListener('click', () => {
          const username = document.getElementById('username').value;
          document.getElementById('output').innerText = `Ahoj, ${username}!`;
        });
      </script>
    </body>
    </html>
    ```

    ```javascript
    // Test Cypress
    describe('Test interakce DOM', () => {
      beforeEach(() => {
        cy.visit('/index.html');
      });

      it('Změní název po kliknutí na tlačítko', () => {
        cy.get('#changeTitle').click();
        cy.get('#title').should('have.text', 'Název změněn!');
      });

      it('Odešle formulář a zobrazí pozdrav', () => {
        cy.get('#username').type('TestUser');
        cy.get('#submitForm').click();
        cy.get('#output').should('have.text', 'Ahoj, TestUser!');
      });
    });
    ```

- **Návrh webové funkcionality:**
  - Vyvinout dynamickou webovou stránku, na které uživatelé mohou:
    - Změnit název stránky kliknutím na tlačítko.
    - Odeslat formulář se svým uživatelským jménem a zobrazit personalizovaný pozdrav.
  - Napište testy pro Cypress, abyste automatizovali a ověřili tyto interakce.


#### **B. Cvičení aktualizace obsahu DOM**
- **Cvičení:**
  - Vytvořte jednoduchou webovou stránku s titulkem, odstavcem a tlačítkem.
  - Napište JavaScript kód, který:
    - Změní text titulku pomocí `innerText`, když se stránka načte.
    - Aktualizuje textový obsah odstavce, když je tlačítko kliknuto.
  - **Návrh webové funkcionality:**
    - „Vítejte“ stránka, která nejprve zobrazuje obecnou zprávu a personalizuje pozdrav, když uživatel klikne na tlačítko.

#### **C. Dynamické vytváření seznamu z JSON cvičení**
- **Cvičení:**
  - Vytvořte JSON soubor (`products.json`) s polem objektů produktů (`name`, `price`, `category`).
  - Použijte `fetch()`, abyste načetli JSON data.
  - Dynamicky vytvořte seznam produktů na webové stránce, zobrazující jméno každého produktu a cenu.
  - **Návrh webové funkcionality:**
    - Stránka s výpisem produktů, která načítá data o produktech a zobrazuje je v tabulce nebo seznamu, aktualizovaná vždy, když se data změní.

#### **D. Používání metod `window` cvičení**
- **Cvičení:**
  - Zobrazte upozornění po 2 sekundách pomocí `window.setTimeout()`.
  - Vypište aktuální URL stránky pomocí `window.location.href`.
  - Implementujte tlačítko „Načíst“ pomocí `window.location.reload()`, které stránku obnoví.
  - **Návrh webové funkcionality:**
    - Stránka s časovanou notifikací a tlačítkem, které obnovuje stránku, demonstrující manipulace s `window`.

---

### **3. Potenciální otázky studentů**

1. **Jaký je rozdíl mezi `document.getElementById()` a `document.querySelector()`?**
   - **Odpověď:**  
     `document.getElementById()` vybírá prvek podle jeho unikátního ID a je obecně rychlejší. `document.querySelector()` umožňuje výběr prvků pomocí jakéhokoli CSS selektoru, což poskytuje větší flexibilitu.

2. **Jak mohu upravit obsah prvku DOM pomocí JavaScriptu?**
   - **Odpověď:**  
     Můžete upravit obsah pomocí vlastností jako jsou `innerText`, `innerHTML` nebo `textContent`. Například:
     ```javascript
     document.getElementById('title').innerText = 'Nový název';
     ```

3. **Kdy bych měl použít `innerText` vs. `innerHTML`?**  
   **Odpověď:**  
   - `innerText` nastavuje nebo získává čitelný text uvnitř prvku, ignoruje HTML značky.
   - `innerHTML` vám umožňuje přidávat nebo upravovat HTML přímo. Používejte opatrně `innerHTML`, abyste se vyhnuli bezpečnostním rizikům jako XSS.

4. **Jak se vyhnout znečištění globální proměnné pomocí objektu `window`?**  
   **Odpověď:**  
   - Vždy deklarujte proměnné pomocí `let` nebo `const` uvnitř funkcí nebo bloků.
   - Používejte moduly nebo uzávěry k udržení proměnných v místním rozsahu.
   - Nespoléhejte se na připojování dat k `window`—ukládejte je do objektů nebo modulů místo toho.

5. **Jaký je rozdíl mezi `document.getElementById()` a `document.querySelector()`?**  
   **Odpověď:**  
   - `getElementById()` vybírá prvek podle jeho unikátního ID a vrací jediný prvek.
   - `querySelector()` používá CSS selektory a může vybrat jakýkoli prvek odpovídající selektoru a vrátí první shodu.
   - `querySelector()` je flexibilnější, ale `getElementById()` je rychlejší pro vyhledání jednoho ID.

6. **Mohu iterovat přes kolekce prvků DOM jako přes pole?**  
   **Odpověď:**  
   - `querySelectorAll()` vrací NodeList, přes který lze iterovat pomocí `forEach()`.
   - Můžete také převést NodeLists nebo HTMLCollections na pole pomocí `Array.from()` a poté použít metody pole.

---

### **4. Doplňkové materiály: Doporučení**

#### **A. Oficiální dokumentace a průvodci:**
- [MDN Web Docs - Úvod do DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN Web Docs - Objekt Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [MDN Web Docs - Manipulace s DOM](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

#### **B. Tutoriály a články:**
- **Tutoriál DOM W3Schools:** [https://www.w3schools.com/js/js_htmldom.asp](https://www.w3schools.com/js/js_htmldom.asp)
- **Tutoriál DOM na JavaScript.info:** [https://javascript.info/document](https://javascript.info/document)

#### **C. Interaktivní výukové platformy:**
- **FreeCodeCamp:** Cvičení o manipulaci s DOM a zpracování událostí.
- **Codecademy:** Interaktivní lekce o práci s DOM.

#### **D. Video tutoriály:**
- **Traversy Media na YouTube:** Videá o základech manipulace s DOM.
- **Net Ninja:** Tutoriály o DOM, vysvětlující vlastnosti, metody a použití objektu `window`.

#### **E. Platformy pro procvičování:**
- Vytvořte malé demo stránky pro experimentování s různými metodami DOM.
- Používejte JSON soubory jako datové zdroje a dynamicky vykreslujte UI prvky založené na načtených datech.

#### **F. Komunita a podpora:**
- **Stack Overflow** a **Reddit** (`r/javascript`): Skvělé zdroje pro konkrétní otázky týkající se DOM.
- **Diskuzní komunity:** Připojte se k kanálům zaměřeným na JavaScript nebo front-end, abyste diskutovali o výzvách s DOM.

---

### **5. Navrhovaný rozvrh lekce na 3 hodiny**

#### **Hodina 1: Vlastnosti a Metody DOM (60 minut)**
- **Shrnutí konceptů DOM (10 minut):**
  - Přezkoumání struktury DOM a jak JavaScript vidí webovou stránku.
- **Vlastnosti a Metody DOM (40 minut):**
  - `innerText`, `innerHTML`, `textContent`.
  - `classList` a `style`.
  - Vytváření, úprava a odstraňování prvků.
- **Krátké Q&A (10 minut):**
  - Odpovězení na okamžité dotazy.

#### **Hodina 2: Globální Objekt Window a Integrace (60 minut)**
- **Prozkoumání `window` (20 minut):**
  - `window.document`, `window.location`, `window.history`.
  - Časované akce (`setTimeout`, `setInterval`).
- **Praktická integrace s daty (20 minut):**
  - Načtěte JSON data a aktualizujte DOM prvky.
  - Používejte smyčky a podmínky k určení, co se má zobrazit.
- **Krátké Q&A (10 minut):**
  - Vyjasnění jakýchkoliv nejasností.
- **Pauza (10 minut):**
  - Rychlá přestávka.

#### **Hodina 3: Praktické aktivity a nejlepší praktiky (60 minut)**
- **Praktické cvičení (40 minut):**
  - Aktualizace textu a atributů.
  - Vytváření seznamů z polí nebo JSON.
  - Používání metod `window` k zobrazení upozornění nebo obnovení stránky.
- **Shrnutí a Q&A (20 minut):**
  - Přehled klíčových konceptů a nejlepších praktik.
  - Povzbuzení studentů k experimentování a pokusu o složitější manipulace s DOM.

---

### **6. Další doporučení**

#### **A. Interaktivní demonstrace:**
- Zobrazte živé kódovací příklady:
  - Načtěte JSON soubor a zobrazte data na stránce.
  - Aktualizujte třídy prvků při kliknutích na tlačítka.
  - Zobrazte časované upozornění pomocí `setTimeout()`.

#### **B. Poutavé vizuály:**
- Použijte diagramy pro zobrazení stromu DOM.
- Tokové diagramy pro vizualizaci, jak se data dostávají z JSON do prvků DOM.
- Zvýrazněte, jak `window` sedí na nejvyšší úrovni prohlížečového prostředí.

#### **C. Povzbuďte účast:**
- Požádejte studenty, aby našli a vypsali `window.location.href`.
- Nechte studenty vytvářet a odstraňovat prvky na cestě.
- Dovolte jim vyzkoušet výběr prvků pomocí různých metod a vlastností.

#### **D. Poskytněte jasné pokyny:**
- Po krokové mini úkoly, např. „Změňte text nadpisu a přidejte nový odstavec pod něj.“
- Tipy pro odstraňování problémů pro běžné chyby (např. výběr špatného ID, překlep v selektoru).

#### **E. Podporujte podpůrné prostředí:**
- Povzbuďte studenty, aby sdíleli své kódové úryvky.
- Nabídněte, že zkontrolujete a poskytnete zpětnou vazbu na jejich přístupy.