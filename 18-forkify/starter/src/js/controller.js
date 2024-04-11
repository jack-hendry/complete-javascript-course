const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function() {

  try{
    // 1) loading recipe
    const res = await fetch(
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886',
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc990'
    );

    const data = await res.json(); 
    console.log(res, data);
    let {recipe} = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      imge: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredints: recipe.ingredints
    }    
    console.log(recipe);
    
    if(!res.ok) throw new Error(`${data.message} (${res.status})`);

    

  } catch (err) {
    alert(err); 
  }
}


showRecipe()