import copy from 'clipboard-copy';

export const pathName = (path) => ({
  typePath: path.includes('comidas') ? 'foods' : 'drinks',
  selectorPath: path.includes('comidas') ? 'meals' : 'drinks',
  recomendationPath: path.includes('comidas') ? 'drinks' : 'foods',
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

// Excluir após ajustar recipes Progress
export const sources = (meal, drink, details, typePath) => (details
  && ((typePath === 'food') ? details[meal] : details[drink]));

export const sourcesRecomendations = (meal, drink, recipe, typePath) => (typePath
  === 'food' ? recipe[drink] : recipe[meal]);

export const adjustmentUrl = (url) => {
  return url.replace('watch?v=', 'embed/')
}
