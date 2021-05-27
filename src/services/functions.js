import copy from 'clipboard-copy';

export const pathName = (path) => ({
  typePath: path.includes('comidas') ? 'food' : 'cocktail',
  selectorPath: path.includes('comidas') ? 'meals' : 'drinks',
  recomendationPath: path.includes('comidas') ? 'cocktail' : 'food',
  recomendationName: path.includes('comidas') ? 'drinks' : 'meals',
});

export const ingredientsArray = (details) => details && Object.keys(details)
  .filter((ingredientKey) => ingredientKey.includes('strIngredient'))
  .map((strIngredients) => details[strIngredients])
  .filter((ingredient) => ingredient);

export const measureArray = (details) => details && Object.keys(details)
  .filter((measureKey) => measureKey.includes('strMeasure'))
  .map((strMeasures) => details[strMeasures])
  .filter((measure) => measure);

export const copyLInk = (link, callback) => {
  copy(link);
  callback(true);
};

export const sources = (meal, drink, details, typePath) => (details
  && ((typePath === 'food') ? details[meal] : details[drink]));

export const sourcesRecomendations = (meal, drink, recipe, typePath) => (typePath
  === 'food' ? recipe[drink] : recipe[meal]);

// export const fetchWithLimit = (type, limit) => {
//   fetchApi(type, selector, searchName).then((res) => {
//     const fetchDrinks = res.drinks
//       .filter((drink) => res.drinks.indexOf(drink) < lengthOfList);
//     setDrinks(fetchDrinks);
// }
