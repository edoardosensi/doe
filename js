document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('site-search-input');
  const searchBtn = document.getElementById('site-search-btn');

  function doSearch() {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      window.location.href = `risultati.html?q=${encodeURIComponent(query)}`;
    }
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        doSearch();
      }
    });
  }
});
