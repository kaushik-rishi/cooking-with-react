import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ingredients}) {
    // console.log('RenderLog: IngredientList');
    
    const ingredientElements = ingredients.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient}/>
    ));
    
    return (
        <div className="ingredient-grid">
            {ingredientElements}
        </div>
    );
}