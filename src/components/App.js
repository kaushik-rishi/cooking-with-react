import React, { useState, useEffect } from "react";
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeControllerContext = React.createContext();

const recipeList = [
  // {
  //   id: 1,
  //   name: 'Palakura pappu',
  //   servings: 3,
  //   cookTime: '1:00',
  //   instructions: '1. On stove\n2. Make curry\n3. Eat',
  //   ingredients: [
  //     { id: 1, name: 'dal', amount: '1kg' },
  //     { id: 2, name: 'palak', amount: '3 kattas' }
  //   ]
  // },
  // {
  //   id: 2,
  //   name: 'Mugalai biryani',
  //   servings: 2,
  //   cookTime: '3:00',
  //   instructions: '1. On stove\n2. Make chicken\n3. Eat',
  //   ingredients: [
  //     { id: 1, name: 'chicken', amount: '2kg' },
  //     { id: 2, name: 'maida', amount: '1.5 kg' }
  //   ]
  // }
];

export default function App() {
  console.log('RenderLog: App');
  
  const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';
  const [recipes, setRecipes] = useState(recipeList);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);
  
  useEffect(() => {
    const recipeStore = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (recipeStore !== null) setRecipes(recipeStore);
  }, []); // this will run only when the app component is rendered for the first time
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    // unmount effect
    // return () => { 
    //   console.log('recipes set 👍️');
    // }
  }, [recipes]); // this will run when there is a change in the recipes(state)
  
  const recipeContextValue = {handleRecipeAdd, handleRecipeDelete, handleSelectedRecipeId, handleRecipeChange};
  
  function handleRecipeAdd() {
    const newRecipe = {
        id: uuidv4(),
        name: '',
        servings: 1,
        cookTime: '',
        instructions: '',
        ingredients: [
          {id: uuidv4(), name: '', amount: ''}
        ]
    }
    setRecipes([...recipes, newRecipe]);
    handleSelectedRecipeId(newRecipe.id);
  }
  
  function handleRecipeDelete(id) {
    // remove the selected recipe id if the currently edited recipe is deleted
    if (id === selectedRecipe) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  
  function handleRecipeChange(id, recipeEdited) {
    const newRecipes = [...recipes];
    const recipeIndex = newRecipes.findIndex(r => r.id === id);
    newRecipes[recipeIndex] = recipeEdited;
    setRecipes(newRecipes);
  }
  
  function handleSelectedRecipeId(id) {
    setSelectedRecipeId(id);
  }
  
  return (
    <RecipeControllerContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
      { selectedRecipe && <RecipeEdit recipe={selectedRecipe}/> }
    </RecipeControllerContext.Provider>
  );
}