// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView'
import { elements, renderResults, renderLoader, clearLoader } from './views/base'

//Global state 
//- Search object
//- Current recipe
//- Shopping list object
//- Liked recipes

const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); // Update later

  // 2) New search object and add to state
  if (query) {    
    state.search = new Search(query);
  }

  // 3) Prepare UI for results
  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searcRes);

  // 4) Search for recipe
  await state.search.getResults();

  // 5) Render results on UI
  clearLoader();
  searchView.renderResults(state.search.result);
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

