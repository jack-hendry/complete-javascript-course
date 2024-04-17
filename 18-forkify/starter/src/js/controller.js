
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model'
import recipeView from './views/recipeView';
// console.log(icons);


const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
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

// showRecipe();
const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}
init();