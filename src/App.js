import React from "react";
import RecipeList from './RecipeList';

const recipeList = [
  {
    id: 1,
    name: 'Palakura pappu',
    servings: 3,
    cookTime: '1:00',
    instructions: '1. On stove 2. Make curry 3. Eat'
  },
  {
    id: 2,
    name: 'Mugalai biryani',
    servings: 2,
    cookTime: '3:00',
    instructions: '1. On stove 2. Make chicken 3. Eat'
  }
];

export default function App() {
  return (
    <React.Fragment>
      <RecipeList recipes={recipeList}/>
    </React.Fragment>
  );
}