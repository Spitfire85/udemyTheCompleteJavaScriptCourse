// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipes';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderResults, renderLoader, clearLoader } from './views/base';


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
    // console.log(goToPage);
  }
});

const controlRecipe = async () => {
  //Get ID from URL
  const id = window.location.hash.replace('#', '');
  // console.log(id);
    
  if (id) {
    //Prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    //Highlight search item
    if (state.search) {
      searchView.highlightSelected(id);
    }

    //New recipe object
    state.recipe = new Recipe(id);

    // TESTING
    // window.r = state.recipe;

    try {
      //Get new recipe data
      await state.recipe.getRecipe();
      // console.log(state.recipe.ingredients);
      state.recipe.parseIngredients();

      //Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      //Render recipe
      // console.log(state.recipe);
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
      );

    } catch (error) {
      console.log(error);
    }    
  }  
};

//LIST CONTROLLER
const controlList = () => {
  //Create a list if there is non yet
  if (!state.list) {
    state.list = new List();
  }

  //Add each ingredient
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  })
};

// Handke delete and update list item
elements.shoppingList.addEventListener('click', e => {
  const id = e.target.closest('.shopping__item').dataset.itemid;

  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    // Delete from state
    state.list.deleteItem(id);

    // Delete from UI
    listView.deleteItem(id);
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

//Recipe controller
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));




//Like controller
const controlLike = () => {
  if (!state.likes) {
    state.likes = new Likes();
  }
  const currentID = state.recipe.id;

  //USER HAS NOT LIKED YET
  if (!state.likes.isLiked(currentID)) {
    //add like to state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    //toggle button    
    likesView.toggleLikeBtn(true);

    //add to UI
    likesView.renderLike(newLike);

  //USER HAS LIKED YET
  } else {

    //remove like to state
    state.likes.deleteLike(currentID);

    //toggle button
    likesView.toggleLikeBtn(false);

    //remove to UI
   likesView.deleteLike(currentID);
  }

  likesView.toggleLikeMenu(state.likes.getNumLikes());
};


//restore on page load
window.addEventListener('load', () => {
  state.likes = new Likes();
  state.likes.readStorage();

  likesView.toggleLikeMenu(state.likes.getNumLikes());

  //render liked recipes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {
    // Decrease button is click
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }    
  } else if (e.target.matches('.btn-increase, .btn-increase *')) {
    // Increase button is click
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
    controlList();
  } else if (e.target.matches('.recipe__love, .recipe__love *')) {
    controlLike();
  }

  // console.log(state.recipe);
});