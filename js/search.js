const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const dataset = [
  { name: 'Energy Solutions', keywords: ['renewable', 'efficiency', 'sustainability', 'green practice', 'tax rebate' ], url: '/solutions.html' },
  { name: 'About Us', keywords: ['company', 'mission', 'team', 'Leadership'], url: '/resources.html' },
  { name: 'Effects', keywords: ['impact', 'results', 'outcomes', 'survey'], url: '/Effects.html' },
  { name: 'News', keywords: ['updates', 'announcements', 'press', 'articles'], url: '/news.html' },
  { name: 'Plan a Home', keywords: ['design', 'architecture', 'construction', 'green practice'], url: '/buildhome.html' },
  { name: 'Sign In', keywords: ['access', 'credentials', 'authentication', 'log in'], url: '/sign-up.html' },

  { name: 'Geothermal', keywords: ['green practice', 'tax rebate', 'earth', 'renewable', 'heat energy'], url: '/geoSUB.html' },
  { name: 'Appliances', keywords: ['green practice', 'tax rebate', 'utilities', 'Home-Use', 'tips'], url: '/AppliancesSUB.html' },
  { name: 'Solar', keywords: ['green practice', 'tax rebate', 'renewable', 'sun', 'light'], url: '/solarSUB.html' },
  { name: 'Electric Vehicles', keywords: ['green practice', 'tax rebate', 'EV', 'chargers', 'car'], url: '/evSUB.html' },
  { name: 'Wind Energy', keywords: ['green practice', 'tax rebate', 'renewable', 'air'], url: '/windSUB.html' },
  { name: 'Green Roofs', keywords: ['green practice', 'credentials', 'house', 'installation'], url: '/solutions.html' },
  { name: 'Thermostats', keywords: ['green practice', 'tax rebate', 'utilities', 'installation'], url: '/ThermosSUB.html' },
  { name: 'Sustainable Materials', keywords: ['green practice', 'renewable', 'green examples', 'solutions'], url: '/solutions.html' },
  { name: 'HVAC', keywords: [ 'green practice', 'appliances', 'AC'], url: '/solutions.html' },
  { name: 'Composting', keywords: ['green practice', 'services', 'home', 'installation'], url: '/solutions.html' },
  { name: 'Volunteering', keywords: ['green practice', 'services', 'community'], url: '/Effects.html' }

];

function showAutocompleteResults() {
  const query = searchInput.value.toLowerCase();
  const filteredResults = dataset.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.keywords.some(keyword => keyword.includes(query))
  );

  if (query.length === 0) {
    searchResults.innerHTML = '';
    return;
  }

  const html = filteredResults.map(result => {
    const keywords = result.keywords.map(keyword => `<span class="keywords">${keyword}</span>`).join(', ');
    return `
      <div class="autocomplete-item" data-url="${result.url}">
        ${result.name}<br>
        <div class="keywords">${keywords}</div>
      </div>
    `;
  }).join('');
  searchResults.innerHTML = html;

  const autocompleteItems = document.querySelectorAll('.autocomplete-item');
  autocompleteItems.forEach(item => {
    item.addEventListener('click', () => {
      const url = item.getAttribute('data-url');
      window.location.href = url;
    });
  });
}

searchInput.addEventListener('input', showAutocompleteResults);





// DELETE WHEN CHECKING IF NOT USED
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      }
  })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
      } else{
        entry.target.classList.remove('show2');
      }
  })
})


const hiddenElements1 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show3');
      } else{
        entry.target.classList.remove('show3');
      }
  })
})


const hiddenElements2 = document.querySelectorAll('.hidden3');
hiddenElements2.forEach((el) => observer2.observe(el));
