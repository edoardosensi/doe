console.log("main.js caricato!");

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM completamente caricato!");

  const searchInput = document.getElementById('site-search-input');
  const searchBtn = document.getElementById('site-search-btn');

  if (!searchInput) {
    console.error("Input di ricerca NON trovato!");
  } else {
    console.log("Input di ricerca trovato.");
  }
  if (!searchBtn) {
    console.error("Bottone di ricerca NON trovato!");
  } else {
    console.log("Bottone di ricerca trovato.");
  }

  function doSearch() {
    const query = searchInput.value.trim();
    console.log("Cliccato cerca o premuto invio, valore:", query);
    if (query.length > 0) {
      const url = `risultati.html?q=${encodeURIComponent(query)}`;
      console.log("Redirect verso:", url);
      window.location.href = url;
    } else {
      console.log("Nessun testo inserito, nessun redirect.");
    }
  }

  if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      doSearch();
    });

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        doSearch();
      }
    });
  }
});
