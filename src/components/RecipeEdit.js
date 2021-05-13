import React from 'react';
import RecipeIngredient from './RecipeIngredient';

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__close-btn--container">
                <button className="btn close-btn">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" className="recipe-edit__input"/>
                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime"  className="recipe-edit__input"/> 
                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" className="recipe-edit__input" />
                <label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea id="instructions" name="instructions"  className="recipe-edit__input"/>
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                
                <RecipeIngredient />
                <RecipeIngredient />
                
                {/* Ingredient Component */}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
        </div>
    );
}