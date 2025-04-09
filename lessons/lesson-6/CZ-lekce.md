## **Lekce 6: Instalace a konfigurace Cypressu**

### **1. Osnova obsahu**

#### **A. Úvod do instalace Cypressu**
- **Proč je instalace důležitá:**
  - Před psaním testů v Cypressu musí být prostředí správně nastaveno, aby byla zajištěna kompatibilita a hladké provádění testu.
- **Požadavky na instalaci:**
  - Node.js nainstalovaný v systému.
  - Základní znalosti o správě balíčků, jako je `npm` nebo `yarn`.


1. **Nainstalován Node.js:**
   - Cypress vyžaduje Node.js ke správě své instalace a instalace závislostí.
   - Nainstalujte Node.js z oficiálních stránek: [https://nodejs.org/](https://nodejs.org/).
   - Ověřte instalaci pomocí:
     ```bash
     node -v
     npm -v
     ```

2. **Správce balíčků:**
   - Node.js zahrnuje `npm` (Node Package Manager) ve výchozím nastavení. Alternativně můžete použít `yarn`, `pnpm` nebo jiné.

3. **JavaScript projekt inicializován:**
   - Váš projekt by měl mít soubor `package.json`, který je vytvořen pomocí `npm init` nebo `yarn init`. Tento soubor sleduje závislosti jako Cypress a další metadata projektu.

4. **Základní znalosti příkazového řádku:**
   - Budete potřebovat provádět příkazy v terminálu, abyste nainstalovali a spustili Cypress.

##### **Co je npm a jak funguje?**

**Co je npm?**
- `npm` (Node Package Manager) je nástroj, který přichází s Node.js a používá se k správě JavaScriptových balíčků a závislostí.
- Pomáhá vývojářům:
  - Instalovat knihovny a nástroje.
  - Sdílet své vlastní knihovny s komunitou.
  - Spravovat závislosti specifické pro projekt nebo globální závislosti.

**Jak npm funguje:**
1. **Instalace balíčků:**
   - Nainstalujte balíček lokálně (specifický pro projekt):
     ```bash
     npm install package-name
     ```
   - Nainstalujte balíček globálně (přístupný ve všech projektech):
     ```bash
     npm install -g package-name
     ```

2. **Správa závislostí:**
   - Nainstalované balíčky jsou uvedeny v `package.json` v části `dependencies` nebo `devDependencies`.

3. **Automatizace skriptů:**
   - `npm` může spouštět vlastní skripty definované v `package.json`:
     ```json
     {
       "scripts": {
         "start": "node app.js",
         "test": "cypress open"
       }
     }
     ```
   - Spusťte skript:
     ```bash
     npm run test
     ```

---

### **Rozdíl mezi npm, yarn, bun a pnpm**

| Funkce              | **npm**                      | **yarn**                     | **bun**                     | **pnpm**                       |
|---------------------|------------------------------|------------------------------|-----------------------------|--------------------------------|
| **Rychlost**        | Střední                    | Rychlejší než npm           | Nejrychlejší                | Rychlejší než npm/yarn         |
| **Využití disku**   | Vyšší (duplicitní balíčky) | Střední                      | Efektivní                   | Nízké (používá tvrdé odkazy k vyhnutí se duplicitě) |
| **Strom závislostí**| Plochý strom                | Plochý strom                 | Plochý strom                | Hierarchický strom (lepší izolace) |
| **Offline režim**   | Omezený                     | Podporován                   | Podporován                  | Podporován                     |
| **Adopce**          | Široce používané            | Oblíbené ve větších projektech | Nové (emergující)           | Rostoucí adopce v podnicích     |
| **Nejlepší použití**| Obecně                      | Velké nebo výkonově kritické projekty | Rychlé vývojové pracovní toky | Projekty vyžadující efektivní úložiště |


#### **B. Krok za krokem proces instalace**
1. **Inicializace projektu:**
   - Vytvořte novou složku projektu.
   - Spusťte `npm init` nebo `yarn init` pro inicializaci souboru `package.json`.
2. **Instalace Cypressu:**
   - Použijte příkaz `npm install cypress --save-dev` nebo `yarn add cypress --dev`.
3. **Ověření instalace:**
   - Spusťte `npx cypress open` nebo `yarn cypress open`, abyste otevřeli Cypress Test Runner.


##### **Co je `npm init`?**

**Účel:**
`npm init` inicializuje nový projekt Node.js vytvořením souboru `package.json`, který slouží jako konfigurační soubor pro správu závislostí projektu a skriptů.

**Jak to funguje:**
1. Spusťte `npm init` ve své pracovní složce:
   ```bash
   npm init
   ```
2. Odpovězte na výzvy (název projektu, verze, popis atd.) nebo je přeskočte pomocí příznaku `-y` pro standardní hodnoty:
   ```bash
   npm init -y
   ```
3. Bude vytvořen soubor `package.json`, který obsahuje metadata jako:
   ```json
   {
     "name": "my-project",
     "version": "1.0.0",
     "scripts": {},
     "dependencies": {},
     "devDependencies": {}
   }
   ```


#### **C. Přehled struktury složek Cypressu**
- **Výchozí adresáře:**
  - `cypress/fixtures`: Uložte JSON soubory pro testovací data.
  - `cypress/e2e`: Pište testovací soubory zde.
  - `cypress/plugins`: Rozšiřte funkčnost Cypressu.
  - `cypress/support`: Přidejte opakovaně použitelné utility a globální konfigurace.
- **Účel každého adresáře:**
  - **`fixtures`:** Centralizujte mock data pro testy.
  - **`integration`:** Organizujte testovací případy podle funkce nebo funkcionality.
  - **`support`:** Přizpůsobte příkazy a nakonfigurujte globální chování.


##### **Účel složek Cypressu**

1. **`fixtures`:**
   - Uložte mock data ve formátu JSON.
   - Používá se k simulaci odpovědí API nebo poskytování testovacích vstupů.
   - Příklad: `cypress/fixtures/users.json`
     ```json
     [
       { "id": 1, "name": "Alice", "role": "admin" },
       { "id": 2, "name": "Bob", "role": "user" }
     ]
     ```
   - Přístup v testech:
     ```javascript
     cy.fixture('users').then((users) => {
       cy.log(users[0].name); // Zaznamená "Alice"
     });
     ```

2. **`e2e` (nebo `integration` ve starších verzích):**
   - Uložte skutečné testovací soubory, obvykle organizované podle funkce nebo funkcionality.
   - Příklad:
     ```
     cypress/integration/login.spec.js
     cypress/integration/dashboard.spec.js
     ```

3. **`plugins`:**
   - Rozšiřte funkčnost Cypressu, například úpravou chování prohlížeče nebo konfigurací pluginů.
   - Příklad:
     ```javascript
     module.exports = (on, config) => {
       // Upravte konfiguraci nebo nastavte událostní posluchače
     };
     ```

4. **`support`:**
   - Obsahuje opakovaně použitelný kód, jako jsou vlastní příkazy nebo globální konfigurace.
   - Příklad: Přidejte vlastní příkaz pro přihlášení do `cypress/support/commands.js`:
     ```javascript
     Cypress.Commands.add('login', (username, password) => {
       cy.get('[data-testid="username"]').type(username);
       cy.get('[data-testid="password"]').type(password);
       cy.get('[data-testid="login-button"]').click();
     });
     ```


#### **D. Konfigurační soubory**
- **Přehled `cypress.config.js`:**
  - Nakonfigurujte základní adresu URL, velikost pohledu, časové limity a další.
  - Příklad:
    ```javascript
    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      e2e: {
        baseUrl: 'http://localhost:3000',
        viewportWidth: 1280,
        viewportHeight: 720,
        defaultCommandTimeout: 8000,
        supportFile: 'cypress/support/index.js',
      },
    });
    ```

##### **Co je `baseUrl` v kontextu Cypressu?**

**Definice:**
`baseUrl` je konfigurační vlastnost v `cypress.config.js`, která nastavuje výchozí kořenovou adresu URL pro testovanou aplikaci. Zjednodušuje testovací kód tím, že eliminuje potřebu opakovaně uvádět celou adresu URL v příkazech `cy.visit()`.

**Příklad:**
- V `cypress.config.js`:
  ```javascript
  module.exports = {
    e2e: {
      baseUrl: 'http://localhost:3000',
    },
  };
  ```
- Použití v testech:
  ```javascript
  cy.visit('/login'); // Přesně odkazuje na 'http://localhost:3000/login'
  ```

**Výhody:**
- Snižuje redundanci v testovacích souborech.
- Usnadňuje aktualizaci testů, pokud se změní kořenová adresa URL (např. přechod z `localhost` na staging server).


- **Nastavení proměnných prostředí:**
  - Použijte `env` v konfiguračním souboru pro citlivá data nebo opakovaně použitelné hodnoty.
  - Příklad:
    ```javascript
    module.exports = defineConfig({
      env: {
        apiUrl: 'https://api.example.com',
      },
    });
    ```
  - Přístup v testech pomocí `Cypress.env('apiUrl')`.


### **Vlastnost `env` v `cypress.config.js`**

**Definice:**
Vlastnost `env` v `cypress.config.js` uchovává proměnné specifické pro prostředí, jako jsou API koncové body, přihlašovací údaje nebo příznaky. Tyto hodnoty lze přistupovat v testech pomocí `Cypress.env()`.

**Příklad:**
- V `cypress.config.js`:
  ```javascript
  module.exports = {
    e2e: {
      env: {
        apiUrl: 'https://api.example.com',
        userRole: 'admin',
      },
    },
  };
  ```
- Použití v testech:
  ```javascript
  describe('API Tests', () => {
    it('should fetch data from the API', () => {
      const apiUrl = Cypress.env('apiUrl');
      cy.request(`${apiUrl}/users`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  ```

**Výhody:**
- Centralizuje hodnoty specifické pro prostředí, což usnadňuje jejich aktualizaci.
- Udržuje citlivá data (např. API klíče) mimo testovací kód.


#### **E. Spuštění testů Cypressu**
- **Otevřený režim:**
  - Použijte `npx cypress open` pro spuštění uživatelského rozhraní Test Runneru.
- **Bezhlavý režim:**
  - Použijte `npx cypress run` pro provedení testů v terminálu.
  - Užitečné pro CI/CD pipeline.
- **Příklad příkazu:**
  ```bash
  npx cypress run --spec cypress/integration/login.spec.js
  ```

  
**`npx`** je nástroj, který přichází s `npm` (od verze 5.2.0) a používá se k provádění balíčků Node.js přímo z příkazového řádku bez jejich globálního nainstalování. Umožňuje to spouštět binární soubory balíčků, které jsou buď nainstalovány lokálně ve vašem projektu nebo stahovány přímo z npm registru.


##### **Proč používat `npx`?**

1. **Dočasné provádění:**
   - S `npx` můžete spouštět balíček dočasně, aniž byste jej trvale instalovali ve vašem systému.
   - Například:
     ```bash
     npx create-react-app my-app
     ```
     To spouští balíček `create-react-app` bez nutnosti globální instalace.

2. **Vyhněte se globálním instalacím:**
   - Místo instalace balíčku globálně (např. `npm install -g some-package`), `npx` stáhne a provede balíček přímo.
   - To udržuje vaše globální prostředí čisté a vyhýbá se konfliktem verzí.

3. **Spuštění lokálně nainstalovaných balíčků:**
   - Pokud je balíček nainstalován lokálně v vašem projektu (`node_modules`), `npx` jej automaticky spustí bez potřeby odkazovat na celou cestu.
   - Příklad:
     ```bash
     npx cypress open
     ```
     To spouští Cypress z vašeho lokálního adresáře `node_modules`, pokud je již nainstalovaný.

4. **Provádění specifických verzí:**
   - Můžete specifikovat konkrétní verzi balíčku, kterou chcete provést:
     ```bash
     npx some-package@1.2.3
     ```

5. **Generátory a vytváření kostrukcí:**
   - `npx` se běžně používá ke spuštění nástrojů, které generují nové projekty nebo konfigurační soubory, aniž by bylo potřeba instalovat nástroj globálně.
   - Příklad:
     ```bash
     npx eslint --init
     ```


### **Jak `npx` funguje?**
- Když spustíte příkaz pomocí `npx`:
  1. Zkontroluje, zda balíček existuje lokálně ve vašem `node_modules`.
  2. Pokud balíček nebyl nalezen lokálně, dočasně stáhne balíček a provede jej.
  3. Jakmile je balíček proveden, vyčistí se odstraněním dočasných souborů (pokud byl stažen).

---

### **Kdy používat `npx` vs `npm`?**

| **Funkce**              | **`npm`**                                   | **`npx`**                                |
|--------------------------|---------------------------------------------|------------------------------------------|
| **Instalace**           | Nainstaluje balíček lokálně nebo globálně. | Spouští balíček bez instalace.          |
| **Použití**             | Vyžaduje nejprve instalaci balíčku.         | Není nutné instalovat; spouští přímo.   |
| **Globální balíčky**    | Často se používá pro správu globálních nástrojů. | Nahrazuje potřebu globálních instalací.  |
| **Jednorázové použití**  | Není vhodné bez instalace.                  | Ideální pro jednorázové provedení.      |

---

### **Příklady používání `npx`**

1. **Spuštění Cypressu bez globální instalace:**
   ```bash
   npx cypress open
   ```

2. **Vygenerování nové React aplikace:**
   ```bash
   npx create-react-app my-app
   ```

3. **Lintování souborů bez globálního nainstalování ESLint:**
   ```bash
   npx eslint myfile.js
   ```

4. **Spuštění specifických verzí balíčků:**
   ```bash
   npx some-package@2.0.0
   ```

5. **Dočasné provádění pro testování:**
   - Spusťte `npx cowsay` pro zábavný příklad:
     ```bash
     npx cowsay "Hello, World!"
     ```
`npx` je univerzální nástroj, který zjednodušuje provádění balíčků a pomáhá se vyhnout zbytečným globálním instalacím, což je ideální pro vývojáře, kteří často pracují s JavaScriptovými nástroji a frameworky.


#### **F. Nejlepší praxe pro nastavení**
- **Udržujte Cypress aktuální:**
  - Pravidelně aktualizujte Cypress, abyste měli přístup k novým funkcím a opravám chyb.
- **Používejte verzionování konfigurčních souborů:**
  - Sledovat změny v `cypress.config.js` a dalších nastaveních.
- **Vytvořte základní URL:**
  - Definujte základní URL v konfiguračním souboru pro zjednodušení testovacích příkazů jako `cy.visit()`.

---

### **2. Praktické aktivity**

#### **A. Cvičení s instalací Cypressu**
- **Cíl:**
  - Provést studenty instalací Cypressu ve svém prostředí.
- **Kroky:**
  1. Nainstalujte Node.js, pokud ještě není nainstalováno.
  2. Inicializujte nový projekt pomocí `npm init`.
  3. Nainstalujte Cypress pomocí `npm install cypress --save-dev`.
  4. Spusťte `npx cypress open` a prozkoumejte výchozí strukturu složek.
- **Výsledek:**
  - Studenti by měli vidět, že se Cypress Test Runner úspěšně otevřel.

#### **B. Cvičení nastavování konfiguračního souboru**
- **Cíl:**
  - Upravit soubor `cypress.config.js`, aby přidal základní URL a nastavení pohledu.
- **Kroky:**
  1. Otevřete `cypress.config.js`.
  2. Přidejte následující:
     ```javascript
     module.exports = {
       e2e: {
         baseUrl: 'http://localhost:3000',
         viewportWidth: 1366,
         viewportHeight: 768,
       },
     };
     ```
  3. Uložte soubor a znovu spusťte `npx cypress open`.
- **Výsledek:**
  - Studenti by měli být schopni přejít na základní URL spuštěním `cy.visit('/')` ve svých testech.

---

### **3. Potenciální otázky studentů**

1. **Co se stane, pokud nemám nainstalovaný Node.js?**
   - **Odpověď:** Cypress vyžaduje, aby byl Node.js nainstalován, protože je spravován pomocí npm (Node Package Manager). Studenti musí stáhnout a nainstalovat Node.js před pokračováním.

2. **Musím nainstalovat Cypress globálně?**
   - **Odpověď:** Ne, Cypress se obvykle instaluje lokálně v projektu, aby byla zajištěna lepší správa verzí a reprodukovatelnost.

3. **Jaký je rozdíl mezi otevřeným režimem Cypressu a bezhlavým režimem?**
   - **Odpověď:** Otevřený režim spouští interaktivní Cypress Test Runner, což umožňuje studentům vidět vizuální provádění testů. Bezhlavý režim spouští testy v terminálu bez otevřeného uživatelského rozhraní, což je vhodné pro automatizační pipeline.

4. **Proč bych měl používat základní URL v konfiguraci?**
   - **Odpověď:** Nastavení základní URL zjednodušuje testovací příkazy. Místo psaní `cy.visit('http://localhost:3000/login')` můžete napsat `cy.visit('/login')`.

5. **Mohu použít Cypress s existujícími projekty?**
   - **Odpověď:** Ano, Cypress lze přidat do jakéhokoli JavaScriptového projektu instalací jako vývojové závislosti.

---

### **4. Doplnkové materiály**

#### **A. Oficiální dokumentace:**
- [Cypress Instalace](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Cypress Konfigurace](https://docs.cypress.io/guides/references/configuration)

#### **B. Tutoriály a články:**
- [Struktura složek Cypress a nastavení](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)
- [Průvodce pro začátečníky k instalaci Cypressu](https://blog.testproject.io/2021/01/05/getting-started-with-cypress/)

#### **C. Videa:**
- **Traversy Media:** Cypress Crash Course
- **The Net Ninja:** Začínáme s testováním Cypressu

#### **D. Cvičné platformy:**
- Nastavte Cypress v jednoduché aplikaci TodoMVC nebo v online demu jako `http://todomvc.com`. 

---

### **5. Navrhované rozdělení lekce na 3 hodiny**

#### **Hodina 1: Úvod a instalace (60 minut)**
- **Instalace Cypressu (30 minut):**
  - Provádějte studenty krok za krokem instalací.
  - Ověřte nastavení pomocí `npx cypress open`.
- **Přehled struktury složek (20 minut):**
  - Vysvětlete účel každé složky.
  - Diskutujte o tom, kde psát testy a ukládat mock data.
- **Q&A (10 minut):**
  - Odpovězte na jakékoli dotazy týkající se instalace.

#### **Hodina 2: Konfigurace Cypressu (60 minut)**
- **Vytváření a úprava `cypress.config.js` (30 minut):**
  - Nastavte základní URL, velikost pohledu a vlastní proměnné prostředí.
  - Diskutujte o důležitosti konfiguračních souborů.
- **Praktická aktivita (20 minut):**
  - Upravit konfigurační soubor a spustit Test Runner pro potvrzení změn.
- **Q&A (10 minut):**
  - Objasnění jakýchkoli pochybností týkajících se konfigurace.

#### **Hodina 3: Spuštění testů Cypressu (60 minut)**
- **Otevřený a bezhlavý režim (20 minut):**
  - Předveďte oba režimy a vysvětlete jejich použití.
- **Prozkoumání příkladových testů (30 minut):**
  - Spusťte výchozí příkladové testy v Cypressu pro předvedení zabudovaných funkcí.
  - Diskutujte, jak strukturovat vlastní testy ve složce `integration`.
- **Shrnutí a Q&A (10 minut):**
  - Přehled kroků instalace a konfigurace.
  - Odpovědět na závěrečné otázky a připravit studenty na další lekci.

---

### **6. Další doporučení**

#### **Interaktivní demonstrace:**
- Ukázat studentům, jak řešit běžné problémy s instalací (např. oprávnění, chybějící Node.js).
- Demonstrovat živé úpravy `cypress.config.js` a jejich okamžité účinky.

#### **Podporujte účast:**
- Nechte studenty nainstalovat Cypress samostatně a navzájem si pomáhat s problémy se nastavením.
- Umožněte studentům experimentovat s nastavením konfigurace jako časových limitů a velikosti pohledu.

#### **Poskytněte jasné instrukce:**
- Krok za krokem příkazy pro instalaci a konfiguraci.
- Tipy pro organizaci složky `integration` pro škálovatelné testovací případy.

#### **Zaměřte se na praktičnost:**
- Použijte srozumitelné příklady, jako je nastavení základní URL pro ukázkovou aplikaci.
- Vysvětlete, jak správné nastavení ovlivňuje udržovatelnost a škálovatelnost projektů automatizace testů.