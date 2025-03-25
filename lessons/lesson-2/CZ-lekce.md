## **Lekce 2: Základy jazyka JavaScript pro automatizaci testů**

### **1\. Přehled obsahu**

#### **A. Úvod do jazyka JavaScript**

* **Co je to JavaScript?**  
  * Vysokoúrovňový interpretovaný programovací jazyk.  
  * Používá se především k přidávání interaktivity do webových stránek.  
* **JavaScript v automatizaci testování:**  
  * Důležitost znalosti jazyka JavaScript pro psaní testů Cypress.  
  * Jak se JavaScript integruje se softwarem Cypress pro bezproblémové psaní testovacích skriptů.

#### **B. Proměnné a datové typy**

* **Proměnné:**  
  * Deklarace pomocí var, let a const.  
  * Rozdíly v rozsahu mezi var, let a const.  
  * Osvědčené postupy pro pojmenování proměnných.  
* **Datové typy:**  
  * Primitivní typy: String, Number, Boolean, Null, Undefined.  
  * Složené typy: Object, Array.  
  * Porozumění vynucování typů a kontrole typů.

#### **C. Operátory**

* **Aritmetické operátory:**  
  * sčítání (\+), odčítání (\-), násobení (\*), dělení (/), modul (%).  
* **Operátory porovnávání:**  
  * rovnající se (\==), přísně rovnající se (\===), nerovnající se (\!=), přísně nerovnající se (\!==), větší než (\>), menší než (\<), větší než nebo rovno (\>=), menší než nebo rovno (\<=).  
* **Logické operátory:**  
  * A (&&), NEBO (||), NE (\!).  
* **Operátory přiřazení:**  
  * jednoduché přiřazení (\=), přiřazení sčítání (\+=), přiřazení odčítání (\-=) atd.  
* **Operátory inkrementace a dekrementace:**  
  * \++, \--.

#### **D. Základní syntaxe a kódovací konvence**

* **Psaní a spouštění skriptů v jazyce JavaScript:**  
  * Struktura souboru jazyka JavaScript.  
  * Použití console.log pro výstup.  
* **Komentáře:**  
  * Jednořádkové (//) a víceřádkové (/\* \*/) komentáře.  
* **Odsazování a čitelnost kódu:**  
  * Důležitost důsledného odsazování.  
  * Pojmenovací konvence a osvědčené postupy pro psaní čistého kódu.

#### **E. Základy ladění (debuggingu)**

* **Použití console.log pro ladění:**  
  * Jak vypisovat proměnné a výrazy.  
  * Běžné scénáře použití console.log.  
* **Úvod do nástrojů pro vývojáře prohlížeče:**  
  * Přístup ke konzoli.  
  * Základní techniky ladění pomocí bodů přerušení a sledovaných výrazů.

#### **F. Praktické příklady**

* **Jednoduché programy v jazyce JavaScript:**  
  * Vytváření proměnných a manipulace s nimi.  
  * Provádění aritmetických a logických operací.  
  * Psaní funkcí pro provádění opakujících se úloh.  
* **Scénáře z reálného světa:**  
  * Příklady použití základů jazyka JavaScript při psaní testů Cypress.

---

### **2\. Praktická cvičení: Cvičení a návrhy webových funkcí.**

#### **A. Cvičení na deklaraci a rozsah proměnných**

* **Cvičení:**  
  * Deklarování proměnných pomocí var, let a const.  
  * Pozorujte a porovnejte jejich rozsah v rámci různých bloků (např. uvnitř cyklů nebo kondicionálů).  
* **Návrh webových funkcí:**  
  * Vytvořte jednoduchou stránku HTML s JavaScriptem, která deklaruje proměnné v různých oborech a zaznamenává jejich hodnoty do konzoly, abyste pochopili chování oborů.

#### **B. Datové typy a vynucování typů Cvičení**

* **Cvičení:**  
  * Přiřaďte proměnným různé datové typy a použijte typeof k jejich identifikaci.  
  * Proveďte operace, které demonstrují vynucení typu (např. přidání textového řetězce k číslu).  
* **Návrh webových funkcí:**  
  * Vypracujte malý skript, který přijme vstup uživatele z formuláře a zpracuje jej pomocí různých datových typů, čímž předvede vynucení typu a kontrolu typu.

#### **C. Procvičování operátorů**

* **Cvičení:**  
  * Napište výrazy v jazyce JavaScript s použitím různých aritmetických, porovnávacích, logických a přiřazovacích operátorů.  
  * Předpovídejte a ověřujte výsledky pomocí console.log.  
* **Návrh webových funkcí:**  
  * Implementujte základní kalkulačku na stránce HTML, která používá JavaScript k provádění operací na základě uživatelského vstupu s využitím různých operátorů.

#### **D. Psaní a spouštění jednoduchých skriptů**

* **Cvičení:**  
  * Vytvořte soubor v jazyce JavaScript, který bude obsahovat deklarace proměnných, operace a funkce.  
  * Spusťte skript pomocí Node.js a sledujte výstup v konzoli.  
* **Návrh webových funkcí:**  
  * Vytvořte jednoduchou aplikaci seznamu úkolů, ve které mohou uživatelé přidávat a odebírat úkoly, a procvičte si manipulaci s proměnnými a základní interakce s DOM.

#### **E. Ladění (debugging) pomocí souboru console.log a vývojářských nástrojů**

* **Cvičení:**  
  * Vložte příkazy console.log do různých částí kódu JavaScriptu a sledujte hodnoty proměnných a flow programu.  
  * Pomocí vývojářských nástrojů prohlížeče nastavte body přerušení a kontrolujte proměnné během provádění.  
* **Návrh webových funkcí:**  
  * Vylepšete aplikaci seznamu úkolů přidáním ladicích příkazů pro sledování interakcí uživatele a změn dat.

### **3\. Potenciální otázky studentů**

#### **A. Obecné otázky týkající se JavaScriptu:**

1. **Jaký je rozdíl mezi var, let a const?**  
   * Pochopení rozsahu a opětovného přiřazení.  
2. **Proč je JavaScript důležitý pro automatizaci testů pomocí Cypressu?**  
   * Jeho role při psaní testovacích skriptů a interakci s webovými aplikacemi.  
3. **Lze v testech Cypress používat JavaScript k provádění složitějších operací?**  
   * Ano, JavaScript umožňuje flexibilní a výkonné psaní testovacích skriptů.

#### **B. Proměnné a datové typy:**

1. **Proč bych měl dát přednost let nebo const před var?**  
   * Abyste se vyhnuli problémům souvisejícím s rozsahem a zvýšili spolehlivost kódu.  
2. **Jak ovlivňuje vynucování typů mé testovací skripty?**  
   * Pokud není správně řízeno, může vést k neočekávaným výsledkům.

#### **C. Operátory:**

1. **Kdy mám použít \=== místo \==?**  
   * Aby bylo zajištěno porovnání hodnoty i typu, čímž se předejde problémům s vynucováním typu.  
2. **Jak lze v testovacích podmínkách efektivně používat logické operátory?**  
   * Ke kombinaci více podmínek pro komplexnější tvrzení.

#### **D. Základní syntaxe a kódovací konvence:**

1. **Jaké jsou osvědčené postupy pro pojmenování proměnných v jazyce JavaScript?**  
   * Používejte popisné a smysluplné názvy, dodržujte konvence camelCase.  
2. **Jak důležitá je čitelnost kódu při automatizaci testů?**  
   * Mimořádně důležitá pro udržování a škálování testovacích sad.

#### **E. Základy ladění (debuggingu):**

1. **Jaké jsou běžné techniky ladění v jazyce JavaScript?**  
   * Používání console.log, bodů přerušení a sledovacích výrazů.  
2. **Jak mohu efektivně používat vývojářské nástroje prohlížeče k ladění testů?**  
   * Kontrolou prvků, sledováním výstupu konzole a postupným procházením kódu.

#### **F. Praktické aplikace:**

1. **Můžete uvést příklad použití funkcí jazyka JavaScript v testech Cypress?**  
   * Funkce mohou zapouzdřit opakující se testovací akce, díky čemuž jsou testy modulárnější a lépe udržovatelné.  
2. **Jak souvisí pole a objekty jazyka JavaScript se správou testovacích dat v Cypressu?**  
   * Lze je použít k efektivnímu ukládání a manipulaci s testovacími daty.

### **4\. Doplňkové materiály: Doporučení**

#### **A. Oficiální dokumentace a příručky:**

* **Základy JavaScriptu:**  
  * [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)  
* **Dokumentace Cypress:**  
  * [Cypress Začínáme](https://docs.cypress.io/guides/getting-started/installing-cypress)  
* **Dokumentace k Node.js:**  
  * [Node.js Oficiální dokumentace](https://nodejs.org/en/docs/)

#### **B. Interaktivní výukové programy a kurzy:**

* **Codecademy:**  
  * [Naučte se JavaScript: Cecademica: Naučte se JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)  
* **FreeCodeCamp:**  
  * [Vyzkoušejte si: JavaScript Algoritmy a datové struktury](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)  
* **JavaScript.info:**  
  * [Moderní výuka JavaScriptu](https://javascript.info/)

#### **C. Video tutoriály:**

* **Traversy Media:**  
  * [JavaScript Crash Course for Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)  
* **Academind:**  
  * [Základy JavaScriptu](https://www.youtube.com/watch?v=W6NZfCO5SIk)  
* **The Net Ninja:**  
  * [JavaScript Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy4G1Nh5kOK0O0_NlZjNv)

#### **D. Cvičné platformy:**

* **LeetCode:**  
  * [JavaScript Challenges](https://leetcode.com/problemset/all/?language=JavaScript)  
* **HackerRank:**  
  * [JavaScript Practice: Hackerank: JavaScript Practice](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)  
* **Exercism:**  
  * [JavaScript Track: cvičení v JavaScriptu](https://exercism.io/tracks/javascript)

#### **E. Komunita a podpora:**

* **Stack Overflow:**  
  * [JavaScript Tag](https://stackoverflow.com/questions/tagged/javascript)  
* **Reddit:**  
  * [R: r/javascript](https://www.reddit.com/r/javascript/)  
* **Komunity Discord:**  
  * Připojte se k serverům Discord zaměřeným na JavaScript nebo Cypress a získejte pomoc a diskusi v reálném čase.

#### **F. Další čtení:**

* **Knihy:**  
  * *Eloquent JavaScript* by Marijn Haverbeke ([Online Version](https://eloquentjavascript.net/))  
  * *JavaScript:* *The Good Parts* by Douglas Crockford  
* **Články:**  
  * [JavaScript Basics](https://www.w3schools.com/js/js_intro.asp) by W3Schools  
  * [Pochopení proměnných v JavaScriptu](https://www.freecodecamp.org/news/variables-in-javascript/) od FreeCodeCamp

### **5\. Navrhované rozdělení lekcí na 3 hodiny**

#### **Hodina 1: Úvod do JavaScriptu (60 minut)**

* **Co je JavaScript?** **(15 minut):**  
  * Přehled jazyka JavaScript a jeho role při vývoji webových stránek.  
  * Význam při automatizaci testů pomocí programu Cypress.  
* **JavaScript v automatizaci testů (15 minut):**  
  * Jak se JavaScript integruje se systémem Cypress.  
  * Výhody použití JavaScriptu pro psaní testů.  
* **Proměnné a datové typy (30 minut):**  
  * Vysvětlení var, let, const.  
  * Přehled různých datových typů.  
  * Příklady a rychlé ukázky.

#### **Hodina 2: Operátory a základní syntaxe (60 minut)**

* **Operátory (30 minut):**  
  * Podrobné vysvětlení aritmetických, porovnávacích, logických a přiřazovacích operátorů.  
  * Praktické příklady s použitím různých operátorů.  
* **Základní syntaxe a kódovací konvence (20 minut):**  
  * Psaní čistého a čitelného kódu v jazyce JavaScript.  
  * Význam komentářů a správného odsazení.  
* **Základy ladění (10 minut):**  
  * Použití console.log pro ladění.  
  * Seznámení s vývojářskými nástroji prohlížeče pro ladění.

#### **Hodina 3: Praktické činnosti a otázky a odpovědi (60 minut)**

* **Praktická cvičení (40 minut):**  
  * **Deklarace a rozsah proměnných:**  
    * Studenti deklarují proměnné pomocí var, let a const a pozorují rozdíly v rozsahu.  
  * **Datové typy a vynucování typů:**  
    * Přiřazení různých datových typů proměnným a provedení operací pro demonstraci typové koerce.  
  * **Procvičení operátorů:**  
    * Napište výrazy s použitím různých operátorů a předpovídejte výsledky.  
* **Sezení s otázkami a odpověďmi (20 minut):**  
  * Řešte případné dotazy studentů.  
  * Objasněte pochybnosti a upevněte klíčové pojmy probírané v lekci.

### **6\. Další doporučení**

#### **A. Interaktivní ukázky:**

* **Kódování v přímém přenosu:**  
  * Ukázka deklarací proměnných, operací a definic funkcí v reálném čase.  
  * Ukažte, jak změna proměnných ovlivňuje výstupy pomocí console.log.  
* **Demonstrace ladění:**  
  * Projděte jednoduchý skript a použijte console.log k ladění problémů.  
  * Představení základních funkcí vývojářských nástrojů prohlížeče.

#### **B. Poutavé vizuální ukázky:**

* **Prezentace s ukázkami kódu:**  
  * K ilustraci konceptů použijte jasné a stručné příklady kódu.  
* **Diagramy:**  
  * Vizuální znázornění rozsahu proměnných a datových typů.  
* **Živé příklady:**  
  * Ukázka reálných scénářů, kde se základy JavaScriptu uplatňují při automatizaci testů Cypress.

#### **C. Podpora účasti:**

* **Programování ve dvojicích:**  
  * Nechte studenty pracovat ve dvojicích na řešení cvičení, čímž podpoříte spolupráci.  
* **Živé ankety a kvízy:**  
  * Použijte rychlé ankety nebo kvízy k posouzení porozumění a udržení vysoké angažovanosti.

#### **D. Poskytněte jasné instrukce:**

* **Průvodce krok za krokem:**  
  * Nabídněte podrobné pokyny ke každé praktické činnosti, abyste zajistili, že všichni studenti budou moci postupovat podle nich.  
* **Tipy pro řešení problémů:**  
  * Předvídejte běžné problémy (např. syntaktické chyby) a nabídněte jejich řešení.

#### **E. Vytvářejte podporující prostředí:**

* **Podporujte otázky:**  
  * Vytvářejte takovou atmosféru, ve které se studenti cítí dobře, když potřebují požádat o pomoc.  
* **Uvádějte příklady:**  
  * Nabídněte více příkladů pro každý koncept, abyste vyhověli různým stylům učení.

---

## **Podrobné definice**

### **1\. Co je to JavaScript?**

**Definice:** JavaScript je vysokoúrovňový interpretovaný programovací jazyk, který se primárně používá k vytváření a ovládání dynamického obsahu webových stránek a umožňuje interaktivní funkce na webových stránkách.

**Podrobné vysvětlení:**

* **Úloha ve vývoji webových stránek:**  
  * JavaScript je nezbytný pro přidávání interaktivity na webové stránky. Umožňuje vývojářům vytvářet funkce, jako jsou posuvníky (slidery), formuláře, animace a interaktivní mapy.  
* **Provádění na straně klienta:**  
  * Typicky se spouští v prohlížeči uživatele, což umožňuje interakce v reálném čase bez nutnosti nepřetržité komunikace se serverem.  
* **Všestrannost:**  
  * Kromě prohlížeče se JavaScript používá také na straně serveru prostřednictvím prostředí, jako je Node.js, což umožňuje vývoj celého balíku pomocí jediného jazyka.  
* **Integrace s HTML a CSS:**  
  * Pracuje společně s jazyky HTML (struktura) a CSS (styly) a umožňuje vytvářet kompletní interaktivní webové prostředí.

### **2\. Proč je JavaScript nejoblíbenějším a nejnenáviděnějším jazykem?**

**Definice: Jaký je důvod pro používání jazyka JavaScript?** JavaScript je proslulý svou univerzálností a širokým využitím, díky čemuž je mezi vývojáři oblíbený. Jeho flexibilita a zvláštnosti však vedou také k frustracím, čímž si v programátorské komunitě vysloužil jak lásku, tak nenávist.

**Podrobné vysvětlení:**

* **Proč je nejoblíbenější:**  
* **Všudypřítomnost:** JavaScript je páteří webu a běží prakticky na všech webových stránkách.  
* **Všestrannost: JavaScript je velmi rozšířený, a to zejména díky své univerzálnosti:** Lze jej použít pro vývoj front-endu i back-endu.  
* **Bohatý ekosystém:** Rozsáhlé knihovny a frameworky (např. React, Angular, Vue.js) zvyšují produktivitu.  
* **Aktivní komunita:** Velká, podpůrná komunita přispívá k neustálému zlepšování a získávání zdrojů.  
* **Interaktivita v reálném čase:** Umožňuje vývojářům vytvářet dynamická a citlivá uživatelská rozhraní.  
* **Proč je nejvíce nenáviděný:**  
* **Nekonzistence:** Neobvyklosti jazyka, jako je vynucování typů a neočekávané chování, mohou vést k chybám a zmatkům.  
* **Volné typování:** Dynamicky typované jazyky mohou ztěžovat správu a ladění rozsáhlých kódových bází.  
* **Rozdíly mezi prohlížeči:** Rozdíly v interpretaci jazyka JavaScript v různých prohlížečích mohou vývoj komplikovat.  
* **Rychlý vývoj:** Časté aktualizace a změny mohou být pro vývojáře zahlcující.  
* **Asynchronní složitost:** Správa asynchronních operací může být náročná, zejména pro začátečníky.

### **3\. Co je to vysokoúrovňový programovací jazyk?**

**Definice:** Vysokoúrovňový programovací jazyk je jazyk, který abstrahuje většinu hardwarových detailů a umožňuje vývojářům psát programy pomocí lidsky čitelné syntaxe a konceptů, místo aby se zabývali přímo strojovým kódem.

**Podrobné vysvětlení:**

* **Abstrakce:**  
  * Vysokoúrovňové jazyky poskytují abstrakce, jako jsou proměnné, cykly a funkce, což usnadňuje psaní složitých programů bez starostí o nízkoúrovňové operace.  
* **Snadné použití:**  
  * Snadné čtení a psaní: navrženy tak, aby se vývojáři mohli soustředit na řešení problémů, a ne na složité hardwarové detaily.  
* **Přenositelnost:**  
  * Programy napsané ve vysokoúrovňových jazycích lze často spustit na různých typech hardwaru bez větších úprav nebo jen s malými úpravami.  
* **Příklady:**  
  * JavaScript, Python, Java, C\# a Ruby jsou vysokoúrovňové programovací jazyky.  
* **Srovnání s nízkoúrovňovými jazyky:**  
  * Na rozdíl od nízkoúrovňových jazyků (např. Assembly) vysokoúrovňové jazyky automaticky zvládají správu paměti, vstupně-výstupní operace a další úlohy na úrovni systému.

---

### **4\. Proč je JavaScript vhodný pro psaní testů?**

**Definice: Jaké jsou výhody JavaScriptu?** JavaScript je vhodný pro psaní testů, zejména pro webové aplikace, díky své nativní integraci s prohlížeči, asynchronním schopnostem a bohatému ekosystému testovacích frameworků, jako je Cypress.

**Podrobné vysvětlení:**

* **Přirozená integrace s prohlížeči:**  
  * Protože JavaScript běží v prohlížeči, může přímo komunikovat s prvky webové stránky, což je ideální pro end-to-end testování.  
* **Asynchronní zpracování:**  
  * JavaScript je schopen bezproblémově zpracovávat asynchronní operace, což umožňuje testovat dynamické webové aplikace, které se spoléhají na asynchronní načítání dat a interakci s uživatelem.  
* **Bohatý ekosystém:**  
  * Nástroje jako Cypress, Jest a Mocha jsou postaveny na JavaScriptu a poskytují robustní funkce pro psaní, spouštění a správu testů.  
* **Znovupoužitelnost:**  
  * Společné testovací vzory a nástroje lze opakovaně používat v různých sadách testů, což zvyšuje efektivitu.  
* **Komunita a podpora:**  
  * Rozsáhlá komunita zajišťuje neustálé zlepšování, dostatek zdrojů a podporu testovacích postupů a nástrojů.  
* **Flexibilita:**  
  * JavaScript umožňuje jak jednotkové, tak integrační testování, čímž vyhovuje různým potřebám testování v rámci jednoho jazyka.

---

### **5\. Jaké jsou rozdíly mezi var, let a const?**

**Definice**: Var, let a const jsou klíčová slova jazyka JavaScript používaná k deklaraci proměnných, přičemž každé z nich má jiný rozsah a vlastnosti proměnlivosti.

**Podrobné vysvětlení:**

* **var:**  
* **Rozsah funkce:** Proměnné deklarované pomocí var mají rozsah nejbližšího bloku funkce.  
* **Hoisting:** Deklarace var jsou vyzdviženy na začátek svého oboru, což znamená, že k nim lze přistupovat před jejich deklarací (ačkoli jsou nedefinované, dokud nejsou přiřazeny).  
* **Opakovaná deklarace a opakované přiřazení:** Proměnné lze v rámci jejich oboru znovu deklarovat a přiřazovat.  
* **let:**  
* **Rozsah bloku:** Deklarace let mají rozsah nejbližšího bloku ({}) v rámci cyklů nebo podmínek.  
* **Žádný Hoisting:** Deklarace let jsou sice vyzdviženy, ale nejsou inicializovány, dokud není vyhodnocena jejich definice, což vede k „časové mrtvé zóně“.  
* **Opětovné přiřazení:** Proměnné lze znovu přiřadit, ale nelze je znovu deklarovat ve stejném rozsahu.  
* **const:**  
* **Rozsah bloku:** Stejně jako let, i const má blokový rozsah.  
* **Žádný Hoisting:** Stejně jako let, deklarace const jsou vyzdviženy, ale nejsou inicializovány, dokud nejsou definovány.  
* **Žádné přeřazování:** Proměnné deklarované pomocí const nelze po jejich prvním přiřazení znovu přiřadit. Pokud je však proměnná objektem nebo polem, lze její vlastnosti nebo prvky stále měnit.  
* **Nezměnitelnost:** Podporuje používání neměnných vazeb, čímž podporuje bezpečnější a předvídatelnější kód.

### **6\. Co jsou to primitivní typy?**

**Definice:** Primitivní typy jsou nejzákladnější datové typy v jazyce JavaScript, které reprezentují jednotlivé, neměnné hodnoty. Nejsou to objekty a nemají metody.

**Podrobné vysvětlení:**

* **Seznam primitivních typů:**  
* **String:** Reprezentuje textová data (např. „Hello, World\!“).  
* **Číslo:** Reprezentuje celá čísla i čísla s pohyblivou řádovou čárkou (např. 42, 3,14).  
* **Boolean (logická hodnota):** Reprezentuje logické hodnoty (true nebo false).  
* **Neurčeno:** Proměnná, která byla deklarována, ale nebyla jí přiřazena hodnota.  
* **Null (nulová):** Představuje záměrnou absenci jakékoli hodnoty objektu.  
* **Symbol:** Reprezentuje jedinečný a neměnný identifikátor (zavedeno v ES6).  
* **BigInt:** Představuje celá čísla s libovolnou přesností (zavedeno v ES2020).

* **Vlastnosti primitivních typů:**  
* **Neměnné:** Jakmile je primitivní hodnota vytvořena, nelze ji změnit. Výsledkem operací nad primitivy jsou nové hodnoty.  
* **Na hodnotě založené:** Primitivní proměnné uchovávají svou skutečnou hodnotu, nikoli odkaz na objekt.

* **Příklady:**

let name \= „Alice“; // String

let age \= 30; // Číslo

let isStudent \= true; // Boolean

let unassigned; // Neurčeno

let emptyValue \= null; // Null

let uniqueId \= Symbol('id'); // Symbol

let largeNumber \= 9007199254740991n; // BigInt

---

### **7\. Co je to console.log a jak jej můžeme použít při ladění?**

**Definice**: console.log je funkce JavaScriptu, která vypisuje informace do webové konzole, běžně se používá pro účely ladění zobrazením hodnot proměnných, zpráv nebo průběhu provádění (flow).

**Podrobné vysvětlení:**

* **Základní použití:**  
* **Výpis hodnot:**  
  Let greeting \= „Hello, World\!“;  
  console.log(greeting); // Výstupy: Ahoj, světe\!  
* **Zobrazení více hodnot:**  
  let user \= „Bob“;  
  let score \= 85;  
  console.log(„Uživatel:“, user, „Skóre:“, score); // Výstupy: Uživatel: Bob Skóre: 85  
* **Protokolování objektů a polí:**  
  let user \= { name: „Charlie“, age: 25 };  
  console.log(user); // Vypíše objekt uživatele  
* **Ladění aplikací:**  
* **Sledování toku provádění:**  
  Funkce add(a, b) {  
  console.log(„Přidávání:“, a, b);  
  return a \+ b;  
  }  
  add(5, 3); // Výstupy: Přidání: 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5: 5 3  
* **Kontrola stavů proměnných:**  
  Nechť total \= 0;  
  for (let i \= 1; i \<= 5; i++) {  
  total \+= i;  
  console.log(„Po přidání“, i, „celkem je“, celkem);  
  }  
  // Výstupy:  
  // Po přičtení 1 je celkový součet 1  
  // Po přičtení 2 je celkový součet 3  
  // Po přičtení 3 je celkový součet 6  
  // Po přičtení 4 je celkový součet 10  
  // Po přičtení 5 je celkový součet 15  
* **Použití s nástroji pro vývojáře:**  
* **Přístup ke konzole:**  
  * Otevřete vývojářské nástroje prohlížeče (obvykle stisknutím kláves F12 nebo Ctrl+Shift+I).  
  * Přejděte na záložku „Konzola“ a zobrazte výstup ze souboru console.log.  
* **Osvědčené postupy:**  
* **Přehledné a popisné zprávy:**  
  * Používejte popisné zprávy, aby byly protokoly srozumitelnější.  
    console.log(„Pokus o přihlášení uživatele:“, uživatelské jméno);  
* **Odstranění nebo okomentování protokolů ve výrobě:**  
  * Nadměrné logování může zahlcovat konzolu a může odhalit citlivé informace.  
* **Pokročilé protokolování:**  
* **Seskupování protokolů:**  
  console.group(„Podrobnosti o uživateli“);  
  console.log(„Jméno:“, user.name);  
  console.log(„Age:“, user.age);  
  console.groupEnd();  
* **Stylování protokolů:**  
  console.log(„%cToto je stylizovaná zpráva“, „color: blue; font-size: 16px;“);

---

### **8\. Co je to typeof?**

**Definice**: typeof je operátor jazyka JavaScript, který vrací řetězec označující typ daného operandu a pomáhá vývojářům identifikovat datové typy při ladění a ověřování.

**Podrobné vysvětlení:**

* **Základní syntaxe:**  
  typeof operand  
* **Operand:** Proměnná nebo hodnota, jejíž typ chcete určit.  
* **Běžné použití:**  
  typeof „Hello“; // Vrací: „string“.  
  typeof 42; // Vrací: „číslo“  
  typeof true; // Vrací: „boolean“  
  typeof undefined; // Vrací: „undefined“  
  typeof null; // Vrací: „object“ (známá zvláštnost v JavaScriptu)  
  typeof { name: „Alice“ }; // Vrací: „objekt“  
  typeof \[1, 2, 3\]; // Vrací: „objekt“  
  typeof function() {}; // Vrací: „function“  
  typeof Symbol('id'); // Vrací: „symbol“  
  typeof 10n; // Vrací: „bigint“  
* **Praktické aplikace:**  
* **Typová kontrola:**  
  * Před provedením operací se ujistěte, že proměnné obsahují očekávané datové typy.

  if (typeof score \=== „number“) {

  console.log(„Score is number“);

  } else {

  console.log(„Score není číslo“);

  }

* **Ověřování argumentů funkce:**  
  * Kontrola typů argumentů předávaných funkcím.

  function greet(name) {

  if (typeof name \!== „string“) {

  console.error(„Jméno musí být řetězec“);

  return;

  }

  console.log(„Ahoj, ‚ \+ jméno \+ ‘\!“);

  }

  greet(„Bob“); // Platí

  greet(123); // Zaznamená chybu

* **Omezení a úvahy:**  
* **null Vrací „objekt“:**  
  * Přestože se jedná o primitivní typ, typeof null vrací „objekt“, což může vést k záměně.  
* **Pole a objekty:**  
  * Jak pole, tak obyčejné objekty vracejí „objekt“. K jejich rozlišení jsou nutné další kontroly, jako je Array.isArray().  
    typeof \[\]; // Vrací: „objekt“.  
    Array.isArray(\[\]); // Vrací: true  
    typeof {}; // Vrací: „objekt“  
    Array.isArray({}); // Vrací: false

## **Odpovědi na klíčové otázky**

### **1\. Proč bych měl dát přednost let nebo const před var?**

**Odpověď:** Doporučuje se dávat přednost let a const před var kvůli jejich schopnostem blokového zápisu, menší pravděpodobnosti výskytu chyb a jasnějšímu záměru v kódu.

**Podrobné vysvětlení:**

* **Rozsah bloku vs. funkční rozsah:**  
* **let a const:**  
  * V případě, že se jedná o nejbližší obklopující blok ({}), například v rámci cyklů nebo podmínek.  
  * Zabraňuje nechtěnému přístupu nebo modifikaci mimo zamýšlený rozsah.  
* **var:**  
  * Funkční rozsah, což může vést k tomu, že proměnné jsou přístupné mimo zamýšlené bloky.  
    if (true) {

    var x \= 10;

    let y \= 20;  
    }  
    console.log(x); // Výstupy: 10  
    console.log(y); // ReferenceError: y není definováno  
* **Hoisting chování:**  
* **let a const:**  
  * Jsou zvednuty na začátek svého rozsahu bloku, ale nejsou inicializovány, což vede k „časové mrtvé zóně“, dokud se nedosáhne jejich deklarace.  
  * Snižuje riziko přístupu k proměnným před jejich deklarací.  
* **var:**   
  * Vyzvednuty a inicializovány pomocí undefined, což umožňuje přístup před deklarací, což může způsobit neočekávané chování.

    console.log(a); // Výstupy: undefined

    var a \= 5;

    console.log(b); // Chyba reference: Nelze přistupovat k 'b' před inicializací

    let b \= 10;

* **Opětovná deklarace a opětovné přiřazení:**  
* **let:**  
  * V rámci stejného oboru nelze znovu deklarovat, čímž se zabrání nechtěným opětovným deklaracím.  
  * Lze znovu přiřadit.  
* **const:**  
  * Nelze znovu deklarovat ani přiřazovat, což zajišťuje neměnnost vazeb.  
* **var:**  
  * Var: Lze znovu deklarovat a přiřazovat ve stejném oboru, což zvyšuje riziko chyb.

* **Přehlednost kódu a záměr:**  
* **const:**  
  * Jasně označuje, že hodnota proměnné by se neměla měnit, což zlepšuje čitelnost a udržovatelnost kódu.  
* **let:**   
  * V tomto případě se hodnota hodnota může změnit, což ostatním vývojářům poskytuje jasný záměr.

**Závěr:** Používání let a const vede k bezpečnějšímu, předvídatelnějšímu a udržovatelnějšímu kódu, protože využívá blokového rozsahu, omezuje problémy spojené s vynášením a jasně vyjadřuje proměnlivost proměnných.

### **2\. Jaké jsou osvědčené postupy pro pojmenování proměnných v jazyce JavaScript?**

**Odpověď: Tyto zásady jsou vhodné pro práci s proměnnými:** Přijetí konzistentních a popisných konvencí pro pojmenování proměnných zvyšuje čitelnost kódu, udržovatelnost a snižuje pravděpodobnost výskytu chyb. Zde je několik osvědčených postupů pro pojmenování proměnných v jazyce JavaScript:

**Podrobné vysvětlení:**

1. **Používejte popisné a smysluplné názvy:**  
* **Přehlednost:** Zvolte názvy, které jasně popisují účel nebo hodnotu proměnné.

  let totalPrice \= 100; // Jasný účel

  let tp \= 100; // Neurčité a nejasné.

* **Vyhněte se nejednoznačnosti:** Vyhněte se obecným názvům jako data nebo value, pokud není jasný jejich kontext.

  let userData \= { jméno: „Alice“, věk: 25 }; // Jasné

  let data \= { jméno: „Alice“, věk: 25 }; // Neurčité

2. **Dodržujte konzistentní konvence pojmenování:**  
* **CamelCase:** Začínáme malým písmenem a první písmeno každého následujícího slova píšeme velkým písmenem.

  let firstName \= „John“;

  let totalAmount \= 250;

* **Vyhněte se Snake\_Case nebo PascalCase:** Pro proměnné a funkce se držte camelCase, abyste zachovali konzistenci a standardy jazyka JavaScript.

  // Preferované

  let userAge \= 30;

  // Nepreferované

  let user\_age \= 30;

  let UserAge \= 30;

3. **Použijte dobře vyslovitelná jména:**  
* **Snadná komunikace:** Vybírejte jména, která se snadno vyslovují a o kterých lze se členy týmu ústně diskutovat.

  let userEmail \= „user@example.com“; // Snadno vyslovitelné

  let u\_e \= „user@example.com“; // Obtížně vyslovitelné

4. **Vyhněte se zkratkám a akronymům:**  
* **Plná slova:** Pro zvýšení srozumitelnosti používejte plná slova, pokud není zkratka dobře známá a všeobecně srozumitelná.

  let maxHeight \= 200; // Jasné

  let mh \= 200; // Nejasné

  let url \= „https://example.com“; // Jasné

  let u \= „https://example.com“; // Nejasné

5. **Pro jednotlivé položky používejte podstatná jména v jednotném čísle a pro kolekce podstatná jména v množném čísle:**  
* **Konzistence v kolekcích:**

  let user \= { name: „Alice“ }; // Jednotlivá položka

  let users \= \[{ name: „Alice“ }, { name: „Bob“ }\]; // Kolekce

6. **Vyhněte se vyhrazeným slovům a speciálním znakům:**  
* **JavaScript Vyhrazená slova:** Nepoužívejte vyhrazená klíčová slova jako class, return, var atd. jako názvy proměnných.

  // Vyhněte se

  let class \= „Mathematics“; // SyntaxError

  // Místo toho použijte

  let className \= „Mathematics“;

* **Žádné speciální znaky:** Používejte pouze písmena, číslice a podtržítka (\_). Vyhněte se mezerám a speciálním znakům.

  // Platné

  let firstName \= „John“;

  // Neplatné

  let first-name \= „John“; // SyntaxError

7. **Označení účelu proměnné pomocí kontextu:**  
* **Kontextová vodítka:** Použijte předpony nebo přípony, které označují roli nebo typ proměnné.

  let isLoggedIn \= true; // Boolean příznak

  let userCount \= 50; // Číselný počet

  let userList \= \[„Alice“, „Bob“\]; // Pole

8. **Udržujte názvy krátké, ale výstižné:**  
* **Vyvažte stručnost a srozumitelnost:** Názvy by měly být popisné, ale neměly by být příliš dlouhé.

  let userProfile \= { jméno: „Alice“, věk: 25 }; // Dobrá rovnováha

  let userProfileInformationDetails \= { name: „Alice“, age: 25 }; // Příliš dlouhé.

9. **Používejte konzistentní pojmenování pro podobné proměnné:**  
* **Jednotnost:** Udržujte konzistentní vzory pojmenování proměnných, které slouží k podobným účelům v celé kódové základně.

  let userName \= „Alice“;

  let adminName \= „Bob“;

  // Obě používají příponu „Name“ k označení účelu.

10. **Vyhněte se používání čísel, pokud to není nutné:**  
* **Smysluplné použití:** Čísla v názvech proměnných používejte pouze tehdy, pokud přispívají k přehlednosti.

  let user2 \= „Charlie“; // Pokud je to možné, vyhněte se tomu.

  let alternateUser \= „Charlie“; // Preferuje se

**Závěr:** Dodržování těchto osvědčených praktik pro pojmenovávání proměnných v jazyce JavaScript vede k čistšímu a lépe udržovatelnému kódu, usnadňuje spolupráci mezi členy týmu a snižuje pravděpodobnost nedorozumění a chyb.

---

## **Shrnutí**

Pochopením těchto základních pojmů a osvědčených postupů jazyka JavaScript budou vaši studenti dobře vybaveni pro psaní přehledných, efektivních a udržovatelných testovacích skriptů s využitím jazyka Cypress. Zdůraznění důležitosti správných deklarací proměnných, datových typů a technik debuggingu položí pevné základy pro jejich cestu k automatizovanému testování.