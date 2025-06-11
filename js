document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('site-search-input');
  const searchBtn = document.getElementById('site-search-btn');

  function doSearch() {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      alert('Hai cercato: ' + query);
      // Qui puoi aggiungere la logica vera di ricerca
    }
  }

  searchBtn.addEventListener('click', doSearch);
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      doSearch();
    }
  });
});
