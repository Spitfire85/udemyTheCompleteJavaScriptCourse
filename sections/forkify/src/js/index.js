// Global app controller
import Search from './models/Search';

//Global state 
//- Search object
//- Current recipe
//- Shopping list object
//- Liked recipes

const state = {};

const controlSearch = async () => {
  console.log('controlSearch');
  // 1) Get query from view
  const query = 'pizza'; // Update later
  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);
  }

  // 3) Prepare UI for results

  // 4) Search for recipe
  await state.search.getResults();

  // 5) Render results on UI
  console.log(state.search.result);
};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

const search = new Search('pizza');

