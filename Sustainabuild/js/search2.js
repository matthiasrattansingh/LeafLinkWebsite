const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
];

const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

searchInput.addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  let autocompleteItems = '';
  const filteredStates = states.filter(state => state.toLowerCase().includes(searchQuery));
  
  if (searchQuery.length === 0) {
    autocompleteList.innerHTML = '';
    return;
  }
  
  filteredStates.forEach(state => {
    autocompleteItems += `<div class="autocomplete-item">${state}</div>`;
  });

  autocompleteList.innerHTML = autocompleteItems;
});

autocompleteList.addEventListener('click', function(e) {
  if (e.target.classList.contains('autocomplete-item')) {
    searchInput.value = e.target.innerText;
    autocompleteList.innerHTML = '';
  }
});

