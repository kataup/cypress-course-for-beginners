// Pridaj event listener na vyhľadávacie tlačidlo
document.getElementById('search-button').addEventListener('click', function () {
  const inputAddress = document.getElementById('search-input').value.trim().toLowerCase();

  if (!inputAddress) {
    document.getElementById('no-address').classList.remove('hidden');
    document.getElementById('result-display').classList.add('hidden');
    return;
  }

  // Načítaj dáta z JSON súboru
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Nájdi záznam, ktorý zodpovedá zadanej adrese
      const result = data.find(item => item.address.toLowerCase().includes(inputAddress));
      const resultDisplay = document.getElementById('result-display');
      const ruianCodeElem = document.getElementById('ruian-code');
      const availableTechElem = document.getElementById('available-technologies');

      if (result) {
        ruianCodeElem.innerText = `Ruian kód: ${result.ruian_code}`;
        availableTechElem.innerText = `Dostupné technológie: ${result.available_technologies.join(', ')}`;
        resultDisplay.classList.remove('hidden');
      } else {
        ruianCodeElem.innerText = '';
        availableTechElem.innerText = 'Adresa sa nenašla.';
        resultDisplay.classList.remove('hidden');
      }
    })
    .catch(err => {
      console.error('Chyba pri načítaní dát:', err);
    });
});
