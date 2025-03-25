## **Lekce 6: Instalace a konfigurace aplikace Cypress**

### **1\. Obsahová osnova**

#### **A. Úvod do instalace Cypress**

- **Proč je instalace důležitá:**  
  - Před psaním testů Cypress je třeba správně nastavit prostředí, aby byla zajištěna kompatibilita a bezproblémové provádění těchto testů.  
- **Předpoklady pro instalaci:**  
  - Node.js nainstalovaný v systému.  
  - Základní znalosti správců balíčků, jako je `npm` nebo `yarn`.

#### **B. Postup instalace krok za krokem**

1. **Inicializujte projekt:**  
   - Vytvořte novou složku projektu.  
   - Spusťte `npm init` nebo `yarn init` pro inicializaci souboru `package.json`.  
2. **Instalace Cypress:**  
   - Použijte příkaz `npm install cypress --save-dev` nebo `yarn add cypress --dev`.  
3. **Ověřte instalaci:**  
   - Spusťte `npx cypress open` nebo `yarn cypress open` a otevřete program Cypress Test Runner.

#### **C. Přehled struktury složek Cypress**

- **Výchozí adresáře:**  
  - `cypress/fixtures`: Ukládá soubory JSON pro testovací data.  
  - `cypress/integration`: Zde zapisujte testovací soubory.  
  - `cypress/plugins`: Rozšiřují funkčnost Cypressu.  
  - `cypress/support`: Přidání opakovaně použitelných nástrojů a globální konfigurace.  
- **Účel každého adresáře:**  
  - **`fixtures`:** Centralizujte napodobovaná data pro testy.  
  - **`integration`:** Uspořádává testovací případy podle vlastností nebo funkcí.  
  - **`support`:** Přizpůsobení příkazů a konfigurace globálního chování.

#### **D. Konfigurační soubory**

- **Přehled souboru `cypress.config.js`:**  
  - Konfigurace základní adresy URL, velikosti zobrazení, časových limitů a dalších parametrů.  
  - Příklad:  
      
    const { defineConfig } \= require('cypress');  
      
    module.exports \= defineConfig({  
      
      e2e: {  
      
        baseUrl: 'http://localhost:3000',  
      
        viewportWidth: 1280,  
      
        viewportHeight: 720,  
      
        defaultCommandTimeout: 8000,  
      
        supportFile: 'cypress/support/index.js',  
      
      },  
      
    });

    
- **Nastavení proměnných prostředí:**  
  - Pro citlivá data nebo opakovaně použitelné hodnoty použijte `env` v konfiguračním souboru.  
  - Příklad:  
      
    module.exports \= defineConfig({  
      
      env: {  
      
        apiUrl: 'https://api.example.com',  
      
      },  
      
    });  
      
  - Přístup v testech pomocí `Cypress.env('apiUrl')`.

#### **E. Spuštění testů Cypress**

- **Otevřený režim:**  
  - Ke spuštění uživatelského rozhraní programu Test Runner použijte příkaz `npx cypress open.`  
- **Headless mode:**  
  - Pro spuštění testů v terminálu použijte `npx cypress run.`  
  - Užitečné pro CI/CD pipelines.  
- **Příklad příkazu:**  
    
  npx cypress run \--spec cypress/integration/login.spec.js

#### **F. Osvědčené postupy pro nastavení**

- **Udržujte Cypress aktualizovaný:**  
  - Pravidelně aktualizujte Cypress, abyste měli přístup k novým funkcím a opravám chyb.  
- **Použití řízení verzí pro konfigurační soubory:**  
  - Sledujte změny v `souboru cypress.config.js` a dalších instalačních souborech.  
- **Vytvoření základní adresy URL:**  
  - Definujte základní adresu URL v konfiguračním souboru, abyste zjednodušili testovací příkazy jako `cy.visit()`.

---

### **2\. Praktické činnosti**

#### **A. Instalace cvičení Cypress**

- **Cíl:**  
  - Proveďte studenty instalací Cypressu v jejich prostředí.  
- **Kroky:**  
  1. Nainstalujte Node.js, pokud ještě není nainstalován.  
  2. Inicializace nového projektu pomocí `npm init`.  
  3. Nainstalujte Cypress pomocí `npm install cypress --save-dev`.  
  4. Spusťte `npx cypress open` a prozkoumejte výchozí strukturu složek.  
- **Výsledek:**  
  - Studenti by měli vidět úspěšně otevřený program Cypress Test Runner.

#### **B. Nastavení konfiguračního souboru Cvičení**

- **Cíl:**  
  - Upravte soubor `cypress.config.js` a přidejte základní adresu URL a nastavení zobrazení.  
- **Kroky:**  
  1. Otevřete soubor `cypress.config.js`.  
  2. Přidejte následující:  
       
     module.exports \= {  
       
       e2e: {  
       
         baseUrl: "http://localhost:3000",  
       
         ViewportWidth: 1366,  
       
         viewportHeight: 768,  
       
       },  
       
     };  
       
  3. Uložte soubor a znovu spusťte `npx cypress open`.  
- **Výsledek:**  
  - Studenti by měli být schopni přejít na základní adresu URL spuštěním příkazu `cy.visit('/')` ve svých testech.

---

### **3\. Potenciální otázky studentů**

2. **Co se stane, když nemám nainstalovaný Node.js?**  
     
   - **Odpověď:** Cypress vyžaduje instalaci Node.js, který je spravován pomocí npm (Node Package Manager). Studenti si musí před pokračováním stáhnout a nainstalovat Node.js.

   

3. **Musím nainstalovat Cypress globálně?**  
     
   - **Odpověď:** Ne, Cypress se obvykle instaluje lokálně v rámci projektu kvůli lepší správě verzí a reprodukovatelnosti.

   

4. **Jaký je rozdíl mezi otevřeným režimem a headless módem v Cypress?**  
     
   - **Odpověď:** Otevřený režim spustí interaktivní program Cypress Test Runner, který studentům umožní vizuálně sledovat provádění testu. Režim Headless spouští testy v terminálu bez otevření uživatelského rozhraní, což je vhodné pro automatizační pipeline.

   

5. **Proč bych měl v konfiguraci používat základní adresu URL?**  
     
   - **Odpověď:** Nastavení základní adresy URL zjednodušuje testovací příkazy. Místo příkazu `cy.visit('http://localhost:3000/login')` můžete napsat `cy.visit('/login')`.

   

6. **Mohu používat Cypress se stávajícími projekty?**  
     
   - **Odpověď:** Ano, Cypress lze přidat do jakéhokoli projektu JavaScriptu jeho instalací jako vývojové závislosti.

---

### **4\. Doplňkové materiály**

#### **A. Oficiální dokumentace:**

- [Instalační příručka Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)  
- [Konfigurace Cypress](https://docs.cypress.io/guides/references/configuration)

#### **B. Výukové materiály a články:**

- [Struktura a nastavení složky Cypress](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)  
- [Příručka pro začátečníky k instalaci Cypress](https://blog.testproject.io/2021/01/05/getting-started-with-cypress/)

#### **C. Videa:**

- **Traversy Media:** Cypress Crash Course  
- **The Net Ninja:** Začínáme s testováním Cypress

#### **D. Platformy pro praxi:**

- Nastavte Cypress v jednoduché aplikaci TodoMVC nebo v online ukázce, jako je `http://todomvc.com`.

---

### **5\. Navrhované rozdělení lekcí na 3 hodiny**

#### **Hodina 1: Úvod a instalace (60 minut)**

- **Instalace cypřiše (30 minut):**  
  - Proveďte studenty instalací krok za krokem.  
  - Ověřte nastavení s `otevřenou aplikací npx cypress`.  
- **Přehled struktury složek (20 minut):**  
  - Vysvětlete účel každé složky.  
  - Diskutujte o tom, kde psát testy a ukládat napodobovaná data.  
- **Otázky a odpovědi (10 minut):**  
  - Řešte veškeré dotazy týkající se instalace.

#### **Hodina 2: Konfigurace Cypressu (60 minut)**

- **Vytvoření a úprava `souboru cypress.config.js` (30 minut):**  
  - Nastavení základní adresy URL, velikosti zobrazení a vlastních proměnných prostředí.  
  - Diskuze o významu konfiguračních souborů.  
- **Praktická činnost (20 minut):**  
  - Upravte konfigurační soubor a spusťte Testovací běh, abyste potvrdili změny.  
- **Otázky a odpovědi (10 minut):**  
  - Vyjasněte si veškeré pochybnosti týkající se konfigurace.

#### **Hodina 3: Spuštění testů Cypress (60 minut)**

- **Otevřený a headless režim (20 minut):**  
  - Předveďte oba režimy a vysvětlete případy jejich použití.  
- **Zkoumání příkladových testů (30 minut):**  
  - Spusťte výchozí příkladové testy v Cypressu, abyste ukázali vestavěné funkce.  
  - Diskutujte o tom, jak strukturovat vlastní testy ve složce `integrace`.  
- **Rekapitulace a otázky a odpovědi (10 minut):**  
  - Zkontrolujte kroky instalace a konfigurace.  
  - Odpovězte na závěrečné otázky a připravte studenty na další hodinu.

---

### **6\. Další doporučení**

#### **Interaktivní ukázky:**

- Ukažte studentům, jak řešit běžné problémy s instalací (např. oprávnění, chybějící Node.js).  
- Demonstrace živých úprav `souboru cypress.config.js` a jejich okamžitých účinků.

#### **Podporovat účast:**

- Požádejte studenty, aby Cypress nainstalovali samostatně a vzájemně si pomohli s problémy s nastavením.  
- Nechte studenty experimentovat s konfiguračními nastaveními, jako jsou časové limity a velikosti zobrazení.

#### **Poskytněte jasné pokyny:**

- Příkazy krok za krokem pro instalaci a konfiguraci.  
- Tipy pro uspořádání složky `integration` pro škálovatelné testovací případy.

#### **Zaměřte se na praktičnost:**

- Používejte příklady, které se dají vztáhnout k danému tématu, například nastavení základní adresy URL pro ukázkovou aplikaci.  
- Vysvětlete, jak správné nastavení ovlivňuje udržovatelnost a škálovatelnost projektů automatizace testování.

---

Zde najdete podrobné vysvětlení všech požadovaných bodů, které je přizpůsobeno začátečníkům, s jasnými kroky a příklady pro lepší pochopení:

---

### **Předpoklady pro instalaci**

Před instalací aplikace Cypress se ujistěte, že jsou splněny následující předpoklady:

1. **Nainstalovaný Node.js:**  
     
   - Cypress vyžaduje Node.js pro správu své instalace a závislostí.  
   - Nainstalujte si Node.js z oficiálních webových stránek: [https://nodejs.org/](https://nodejs.org/).  
   - Ověřte instalaci pomocí:  
       
     node \-v  
       
     npm \-v

     
2. **Správce balíčků:**  
     
   - Node.js ve výchozím nastavení obsahuje `npm` (Node Package Manager). Alternativně můžete použít `yarn`, `pnpm` nebo jiné.

   

3. **Inicializace projektu JavaScript:**  
     
   - Váš projekt by měl mít soubor `package.json`, který se vytvoří pomocí `npm init` nebo `yarn init`. Tento soubor sleduje závislosti, jako je Cypress a další metadata projektu.

   

4. **Základní znalosti příkazového řádku:**  
     
   - Pro instalaci a spuštění programu Cypress je třeba spustit příkazy v terminálu.

---

### **Co je npm a jak funguje?**

**Co je npm?**

- `npm` (Node Package Manager) je nástroj dodávaný s Node.js, který slouží ke správě balíčků a závislostí JavaScriptu.  
- Pomáhá vývojářům:  
  - Instalace knihoven a nástrojů.  
  - Sdílet vlastní knihovny s komunitou.  
  - Správa specifických nebo globálních závislostí projektu.

**Jak funguje npm:**

1. **Instalace balíčků:**  
     
   - Nainstalujte balíček lokálně (specifický pro projekt):  
       
     npm install název balíčku  
       
   - Nainstalujte balíček globálně (přístupný ve všech projektech):  
       
     npm install \-g package-name

     
2. **Správa závislostí:**  
     
   - Nainstalované balíčky jsou uvedeny v souboru `package.json` v části `dependencies` nebo `devDependencies`.

   

3. **Automatizace skriptů:**  
     
   - `npm` může spouštět vlastní skripty definované v `souboru package.json`:  
       
     {  
       
       "skripty": {  
       
         "start": "node app.js",  
       
         "test": "cypress open"  
       
       }  
       
     }  
       
   - Spusťte skript:  
       
     npm run test

---

### **Rozdíl mezi npm, yarn, bun a pnpm**

| Funkce | npm | yarn | bun | pnpm |
| :---- | :---- | :---- | :---- | :---- |
| **Rychlost** | Mírná | Rychlejší než npm | Nejrychlejší | Rychlejší než npm/yarn |
| **Využití diskového prostoru** | Vyšší (duplicitní balíčky) | Mírné | Efektivní | Nízké (používá pevné odkazy, aby se zabránilo duplicitě) |
| **Strom závislostí** | Plochý strom | Plochý strom | Plochý strom | Hierarchický strom (lepší izolace) |
| **Režim offline** | Omezený | Podporovaný | Podporovaný | Podporovaný |
| **Adopce** | Široce používané | Oblíbené ve větších projektech | Nové (vznikající) | Stále častější zavádění v podnicích |
| **Nejlepší případ použití** | Obecné | Velké projekty nebo projekty s kritickým výkonem | Rychlé vývojové pracovní postupy | Projekty vyžadující efektivní skladování |

---

### **Co je `npm init`?**

**Účel:** `npm init` inicializuje nový projekt Node.js vytvořením souboru `package.json`, který slouží jako konfigurační soubor pro správu závislostí projektu a skriptů.

**Jak to funguje:**

1. Spusťte `npm init` v adresáři projektu:  
     
   npm init  
     
2. Odpovězte na výzvy (název projektu, verze, popis atd.) nebo je přeskočte pomocí příznaku `-y` pro výchozí hodnoty:  
     
   npm init \-y  
     
3. Vytvoří se soubor `package.json`, který obsahuje metadata jako:  
     
   {  
     
     "name": "my-project",  
     
     "version": "1.0.0",  
     
     "scripts": {},  
     
     "dependencies": {},  
     
     "devDependencies": {}  
     
   }

---

### **Účel složek Cypress**

1. **`příslušenství`:**  
     
   - Uložení napodobujících dat ve formátu JSON.  
   - Slouží k simulaci odpovědí rozhraní API nebo k poskytování testovacích vstupů.  
   - Příklad: `cypress/fixtures/users.json`  
       
     \[  
       
       {"id": 1, "name": "Alice", "role": "admin" },  
       
       {"id": 2, "name": "Bob", "role": "user" }  
       
     \]  
       
   - Přístup v testech:  
       
     cy.fixture('users').then((users) \=\> {  
       
       cy.log(users\[0\].name); //  Logs "Alice"  
       
     });

     
2. **`integrace` (nebo `e2e` v novějších verzích):**  
     
   - Uložení skutečných testovacích souborů, obvykle uspořádaných podle vlastností nebo funkcí.  
   - Příklad:  
       
     cypress/integration/login.spec.js  
       
     cypress/integration/dashboard.spec.js

     
3. **`pluginy`:**  
     
   - Rozšiřte funkce Cypressu, například úpravou chování prohlížeče nebo konfigurací zásuvných modulů.  
   - Příklad:  
       
     module.exports \= (on, config) \=\> {  
       
       // Modify configuration or set up event listeners  
       
     };

     
4. **`podpora`:**  
     
   - Obsahuje opakovaně použitelný kód, například vlastní příkazy nebo globální konfigurace.  
   - Příklad: Přidání vlastního příkazu pro přihlášení do souboru `cypress/support/commands.js`:  
       
     Cypress.Commands.add('login', (username, password) \=\> {  
       
       cy.get('\[data-testid="username"\]').type(username);  
       
       cy.get('\[data-testid="password"\]').type(password);  
       
       cy.get('\[data-testid="login-button"\]').click();  
       
     });  
     

---

### **Co je `baseUrl` v kontextu Cypress?**

**Definice:** `baseUrl` je konfigurační vlastnost v souboru `cypress.config.js,` která nastavuje výchozí kořen URLadresy pro testovanou aplikaci. Zjednodušuje testovací kód tím, že eliminuje nutnost opakovaně zadávat celou adresu URL v příkazech `cy.visit().`

**Příklad:**

- V souboru `cypress.config.js`:  
    
  module.exports \= {  
    
    e2e: {  
    
      baseUrl: "http://localhost:3000",  
    
    },  
    
  };  
    
- Použití v testech:  
    
  cy.visit('/login'); // Resolves to 'http://localhost:3000/login'

**Výhody:**

- Snižuje redundanci testovacích souborů.  
- Usnadňuje aktualizaci testů, pokud se změní kořen URL adresy (např. přesun z `localhostu` na staging server).

---

### **`env` Vlastnost v `cypress.config.js`**

**Definice:** Vlastnost `env` v souboru `cypress.config.js` ukládá proměnné specifické pro dané prostředí, jako jsou koncové body API, pověření nebo příznaky. K těmto hodnotám lze přistupovat v testech pomocí funkce `cypress.env()`.

**Příklad:**

- V souboru `cypress.config.js`:  
    
  module.exports \= {  
    
    e2e: {  
    
      env: {  
    
        apiUrl: 'https://api.example.com',  
    
        userRole: 'admin',  
    
      },  
    
    },  
    
  };  
    
- Použití v testech:  
    
  describe('Testy API', () \=\> {  
    
    it('should fetch data from the API', () \=\> {  
    
      const apiUrl \= Cypress.env('apiUrl');  
    
      cy.request(\`${apiUrl}/users\`).then((response) \=\> {  
    
        expect(response.status).to.eq(200);  
    
      });  
    
    });  
    
  });

**Výhody:**

- Centralizuje hodnoty specifické pro dané prostředí, což usnadňuje jejich aktualizaci.  
- Udržuje citlivá data (např. klíče API) mimo testovací kód.

---

**`npx`** je nástroj dodávaný s aplikací `npm` (od verze 5.2.0), který slouží ke spouštění balíčků Node.js přímo z příkazového řádku bez nutnosti jejich globální instalace. Umožňuje spouštět binární soubory balíčků, které jsou buď nainstalovány lokálně v projektu, nebo jsou načteny přímo z registru npm.

### **Proč používat `npx`?**

1. **Dočasná exekuce:**  
     
   - Pomocí `npx` můžete dočasně spustit balíček, aniž byste jej trvale nainstalovali do systému.  
   - Například:  
       
     npx create-react-app my-app  
       
     Spustí balíček `create-react-app`, aniž by vyžadoval globální instalaci.

     
2. **Vyhněte se globálním instalacím:**  
     
   - Namísto globální instalace balíčku (např. `npm install -g some-package) npx` načte a spustí balíček přímo.  
   - Díky tomu zůstane globální prostředí čisté a nedojde ke konfliktům verzí.

   

3. **Spustit lokálně nainstalované balíčky:**  
     
   - Pokud je balíček nainstalován lokálně v projektu (`node_modules`)`, npx` jej automaticky spustí, aniž by bylo nutné odkazovat na celou cestu.  
   - Příklad:  
       
     npx cypress open  
       
     Tím spustíte Cypress z místní složky `node_modules`, pokud je již nainstalován.

     
4. **Provedení specifické verze:**  
     
   - Můžete zadat konkrétní verzi balíčku, která se má spustit:  
       
     npx some-package@1.2.3

     
5. **Lešení a generátory:**  
     
   - `npx` se běžně používá ke spouštění nástrojů, které generují nové projekty nebo konfigurační soubory, aniž by bylo nutné nástroj globálně instalovat.  
   - Příklad:  
       
     npx eslint \--init

---

### **Jak funguje `systém npx`?**

- Když spustíte příkaz pomocí `npx`:  
  1. Zkontroluje, zda balíček existuje lokálně v `node_modules`.  
  2. Pokud není balíček nalezen lokálně, dočasně jej stáhne a spustí.  
  3. Jakmile je balíček spuštěn, uklidí se odstraněním dočasných souborů (pokud byl načten).

---

### **Kdy použít `npx` vs `npm`?**

| Funkce | `npm` | `npx` |
| :---- | :---- | :---- |
| **Instalace** | Nainstaluje balíček lokálně nebo globálně. | Spustí balíček bez instalace. |
| **Použití** | Vyžaduje nejprve instalaci balíčku. | Není třeba instalovat, spouští se přímo. |
| **Globální balíčky** | Často se používá pro správu globálních nástrojů. | Nahrazuje potřebu globálních instalací. |
| **Jednorázové použití** | Není vhodné bez instalace. | Ideální pro jednorázové spuštění. |

---

### **Příklady použití `npx`**

1. **Spustit Cypress bez globální instalace:**  
     
   npx cypress open  
     
2. **Vytvoření nové aplikace React:**  
     
   npx create-react-app my-app  
     
3. **Soubory Lint bez globální instalace ESLint:**  
     
   npx eslint myfile.js  
     
4. **Spuštění specifických verzí balíčků:**  
     
   npx some-package@2.0.0  
     
5. **Dočasné provedení pro testování:**  
     
   - Spusťte `napřx cowsay` pro zábavný příklad:  
       
     npx cowsay "Hello, World\!"

---

`npx` je všestranný nástroj, který zjednodušuje spouštění balíčků a pomáhá vyhnout se zahlcení systému zbytečnými globálními instalacemi, takže je ideální pro vývojáře, kteří často pracují s nástroji a frameworky JavaScriptu.  
