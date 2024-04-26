
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model'
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';

// if(module.hot) {
//   module.hot.accept(); 
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    
    if(!id) return ;
    recipeView.renderSpinner();
    // 0) Update results view to makr selected search result
    resultsView.update(model.getSearchResultsPage())


    // 1) loading recipe
    await model.loadRecipe(id);
    // const {recipe} = model.state;
    
   

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
    
  } catch (err) {
    recipeView.renderError()
    
  }
};


  const controlSearchResults = async function(){

    try {
      resultsView.renderSpinner();
      console.log(resultsView)
      // 1) get search query 
      const query = searchView.getQuery();
      if(!query) return; 

      // 2) Load search results 
      await model.loadSearchResults(query);

      // 3) Render resutls 
      resultsView.render(model.getSearchResultsPage(1));

      // 4) Render initial pagination buttons 
      paginationView.render(model.state.search)
    } catch(err){
      console.log(err);
      
    }
  }

  const controlPagination = function(goToPage) {
    // 1) Render new resutls
    resultsView.render(model.getSearchResultsPage(goToPage));

    // 2) Render new pagination buttons
    paginationView.render(model.state.search);
  }
  
  const controlServings = function(newServings) {
    // Update the recipe servings (in state) 
    model.updateServings(newServings);

    // Update the recipe view 
    // recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
  }
// showRecipe();
const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination)
  

}
init();