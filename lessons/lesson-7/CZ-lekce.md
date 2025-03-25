### **Lekce 7: Interakce s webovými prvky a zpracování uživatelských vstupů**

---

## **1\. Osnova**

### **A. Úvod**

- **Proč je interakce s webovými prvky důležitá:**  
  - Ověřuje, jak uživatelé interagují s prvky, jako jsou tlačítka, vstupní pole, zaškrtávací políčka, rozevírací seznamy atd.  
  - Zajišťuje, aby se webové aplikace chovaly podle očekávání v reakci na uživatelské vstupy.

### **B. Výběr prvků v Cypressu**

- **Selektory CSS (základní metodika):**  
  - Základní selektory: `.class`, `#id`, `tag`.  
  - Složené selektory: `div > button, input[type="text"]`.  
- **Použití atributů `data-*`:**  
  - Osvědčené postupy pro stabilní selektory v automatizaci:  
      
    cy.get('\[data-testid="login-button"\]');

    
- **Metody procházení (Traversal Methods):**  
  - Vyhledání podřízených prvků: `cy.get('div').find('button')`.  
  - Navigace ve struktuře DOM: `.parent()`, `.children()`, `.next()`, `.prev()`.  
- **Osvědčené postupy:**  
  - Pro stabilitu testů použijte atributy `data-*`.  
  - Vyhněte se křehkým selektorům, jako je `nth-child`.

---

### **C. Webové prvky a možné akce**

1. **Klikání na prvky:**  
     
   - K simulaci kliknutí použijte `funkci cy.click().`  
   - Příklad:  
       
     cy.get('\[data-testid="submit-button"\]').click();

     
2. **Zadávání do vstupních polí:**  
     
   - Pro simulaci psaní použijte `funkci cy.type().`  
   - Příklad:  
       
     cy.get('\[data-testid="username-input"\]').type('testUser');

     
3. **Vymazání vstupních polí:**  
     
   - K odstranění obsahu použijte funkci `.clear().`  
   - Příklad:  
       
     cy.get('\[data-testid="username-input"\]').clear();

     
4. **Výběr rozevíracích možností:**  
     
   - Pro prvky `<select>` použijte funkci `.select().`  
   - Příklad:  
       
     cy.get('\[data-testid="dropdown"\]').select('Option 1');

     
5. **Zaškrtávací políčka a rádiová tlačítka:**  
     
   - `.check()` pro výběr, `.uncheck()` pro zrušení výběru zaškrtávacích políček.  
   - Příklad:  
       
     cy.get('\[data-testid="accept-terms"\]').check();

     
6. **Odesílání formulářů:**  
     
   - K simulaci odeslání formuláře použijte funkci `.submit().`  
   - Příklad:  
       
     cy.get('\[data-testid="login-form"\]').submit();

     
7. **Najetí myší na prvky:**  
     
   - Cypress nemá vyhrazenou akci hover; použijte `.trigger('mouseover')`.  
   - Příklad:  
       
     cy.get('\[data-testid="menu-item"\]').trigger('mouseover');

---

### **D. Ověřování interakcí**

- **Tvrzení:**  
  - Ověřte, zda akce vedou k očekávanému stavu nebo chování.  
  - Příklad:  
      
    cy.get('\[data-testid="success-message"\]')  
      
      .should('be.visible')  
      
      .and('contain', 'Login Successful\!');

    
- **Řetězení příkazů:**  
  - Kombinujte akce a tvrzení pro přehledné a stručné testy.  
  - Příklad:  
      
    cy.get('\[data-testid="submit-button"\]')  
      
      .click()  
      
      .get('\[data-testid="error-message"\]')  
      
      .should('be.visible')  
      
      .and('contain', 'Invalid credentials');

---

### **E. Pokročilá manipulace se vstupy**

- **Nahrávání souborů:**  
    
  - Pro vstupní prvky souboru použijte `cy.selectFile().`  
  - Příklad:  
      
    cy.get('\[data-testid="file-upload"\]').selectFile('cypress/fixtures/sample.pdf');

    
- **Simulace událostí na klávesnici:**  
    
  - Použijte `.type()` se speciálními klávesami, jako je `{enter}`, `{backspace}`.  
  - Příklad:  
      
    cy.get('\[data-testid="search-input"\]').type('Cypress{enter}');

    
- **Interakce se zakázanými prvky:**  
    
  - Ověřování nebo spouštění událostí u zakázaných prvků:  
      
    cy.get('\[data-testid="submit-button"\]').should('be.disabled');

---

## **2\. Praktická cvičení**

### **A. Cvičení 1: Odeslání formuláře**

- **Cíl:**  
  - Vytvoření přihlašovacího formuláře s atributy `data-testid`.  
  - Simulujte uživatelské vstupy (uživatelské jméno, heslo), klikněte na tlačítko přihlášení a ověřte úspěšnost nebo chybové zprávy.  
- **Návrh webových funkcí:**  
  - Jednoduchý přihlašovací formulář s validací.

### **B. Cvičení 2: Interakce rozbalovacího a zaškrtávacího pole**

- **Cíl:**  
  - Přidejte rozevírací seznam pro výběr role uživatele a zaškrtávací políčko pro souhlas s podmínkami.  
  - Ověřte, že formulář je odeslán pouze tehdy, když jsou vyplněna všechna pole a zaškrtnuto políčko.  
- **Návrh webových funkcí:**  
  - Formulář, který brání odeslání, dokud nejsou splněna validační kritéria.

### **C. Cvičení 3: Simulace událostí na klávesnici**

- **Cíl:**  
  - Vytvořte vyhledávací políčko, které dynamicky filtruje výsledky podle toho, jak uživatel píše.  
  - Otestujte chování funkce vyhledávání pomocí funkcí `.type()` a `.clear()`.  
- **Návrh webových funkcí:**  
  - Vyhledávací pole s vyhledáváním v reálném čase, které zobrazuje odpovídající výsledky.

---

## **3\. Potenciální otázky studentů**

1. **Proč bych měl místo selektorů CSS používat atributy `data-*`?**  
     
   - **Odpověď:** Selektory CSS se mohou změnit kvůli aktualizacím designu, zatímco atributy `data-*` jsou stabilní a vyhrazené pro vývojáře/testování, což zajišťuje spolehlivost testovacích skriptů.

   

2. **Jak mohu simulovat najetí myší na prvek v aplikaci Cypress?**  
     
   - **Odpověď:** Použijte `.trigger('mouseover'),` protože Cypress nemá speciální metodu hover.

   

3. **Mohu interagovat s prvky, které jsou skryté nebo zakázané?**  
     
   - **Odpověď:** Cypress ve výchozím nastavení zabraňuje interakci se skrytými nebo zakázanými prvky, ale můžete použít `.invoke('show')` nebo upravit atributy pro simulaci interakce.

   

4. **Jak ověřím, že formulář funguje správně?**  
     
   - **Odpověď:** Kombinujte akce (např. psaní, klikání) s tvrzeními, abyste potvrdili očekávané výsledky, např. zobrazení zpráv o úspěchu/chybě.

---

## **4\. Doplňkové materiály**

- **Oficiální dokumentace:**  
    
  - [Příkazy Cypress](https://docs.cypress.io/api/commands)  
  - [Osvědčené postupy společnosti Cypress](https://docs.cypress.io/guides/references/best-practices)


- **Videa a výukové programy:**  
    
  - [Traversy Media: Cypress Crash Course](https://www.youtube.com/watch?v=pk4z4k8I8fU)  
  - [The Net Ninja: Výukové programy pro testování Cypress](https://www.youtube.com/watch?v=zLtqULPDuE8)


- **Interaktivní nástroje:**  
    
  - Procvičujte se s nástroji, jako je [TodoMVC](http://todomvc.com).

---

### Navrhované rozdělení lekcí na 3 hodiny

#### **Hodina 1: Základy výběru a interakce s prvky (60 minut)**

- Úvod do selektorů prvků.  
- Provádění základních činností, jako je klikání a psaní.  
- Praktická činnost: Vyplňte a odešlete formulář.

#### **Hodina 2: Pokročilé interakce a zpracování vstupů (60 minut)**

- Zpracování rozevíracích seznamů, zaškrtávacích políček a nahrávání souborů.  
- Simulace událostí klávesnice a zpracování zakázaných prvků.  
- Praktická činnost: Dynamická interakce s rozbalovacím a vyhledávacím řádkem.

#### **Hodina 3: Ověřování akcí uživatele (60 minut)**

- Psaní tvrzení pro různé scénáře.  
- Kombinace akcí a tvrzení v testovacích případech.  
- Praktická činnost: Testování a ověřování chování formuláře na základě zadaných údajů.

