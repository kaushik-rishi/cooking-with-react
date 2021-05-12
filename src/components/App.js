import React, { useState } from "react";
import RecipeList from './RecipeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeControllerContext = React.createContext();

const recipeList = [
  {
    id: 1,
    name: 'Palakura pappu',
    servings: 3,
    cookTime: '1:00',
    instructions: '1. On stove\n2. Make curry\n3. Eat',
    ingredients: [
      { name: 'dal', amount: '1kg' },
      { name: 'palak', amount: '3 kattas' }
    ]
  },
  {
    id: 2,
    name: 'Mugalai biryani',
    servings: 2,
    cookTime: '3:00',
    instructions: '1. On stove\n2. Make chicken\n3. Eat',
    ingredients: [
      { name: 'chicken', amount: '2kg' },
      { name: 'maida', amount: '1.5 kg' }
    ]
  }
];

export default function App() {
  const [recipes, setRecipes] = useState(recipeList);
  
  const recipeContextValue = {handleRecipeAdd, handleRecipeDelete};
  
  function handleRecipeAdd() {
    const newRecipe = {
        id: uuidv4(),
        name: 'New',
        servings: 1,
        cookTime: '1:00',
        instructions: 'nob',
        ingredients: [
          { name: 'nub', amount: '1kg' }
        ]
    }
    setRecipes([...recipes, newRecipe]);
  }
  
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  
  return (
    <RecipeControllerContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
    </RecipeControllerContext.Provider>
  );
}