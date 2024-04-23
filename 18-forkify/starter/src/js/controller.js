
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model'
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

// if(module.hot) {
//   module.hot.accept(); 
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return ;
    recipeView.renderSpinner();

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
      resultsView.render(model.getSearchResultsPage());
      
    } catch(err){
      console.log(err);
      
    }
  }

  
// showRecipe();
const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults)

}
init();