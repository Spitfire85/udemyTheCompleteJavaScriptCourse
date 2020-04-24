// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipes';
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

  const query = searchView.getInput(); 
  // TESTING
  // const query = 'pizza'; 

  // 2) New search object and add to state
  if (query) {    
    state.search = new Search(query);
  }

  // 3) Prepare UI for results
  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searcRes);

  try {
    // 4) Search for recipe
    await state.search.getResults();

    // 5) Render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  } catch(error) {
    clearLoader();
    console.log(error);
  }  
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});


// TESTING
// window.addEventListener('load', e => {
//   e.preventDefault();
//   controlSearch();
// });

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
    console.log(goToPage);
  }
});

const controlRecipe = async () => {
  //Get ID from URL
  const id = window.location.hash.replace('#', '');
  console.log(id);
    
  if (id) {
    //Prepare UI for changes

    //New recipe object
    state.recipe = new Recipe(id);

    // TESTING
    // window.r = state.recipe;

    try {
      //Get new recipe data
      await state.recipe.getRecipe();
      console.log(state.recipe.ingredients);
      state.recipe.parseIngredients();

      //Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      //Render recipe
      console.log(state.recipe);
    } catch (error) {
      console.log(error);
    }    
  }
};


//Recipe controller
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));