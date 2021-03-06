import React, { useContext } from 'react';
import RecipeIngredient from './RecipeIngredient';
import { RecipeControllerContext } from './App';
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({ recipe }) {
    console.log('RenderLog: RecipeEdit');

    const { handleRecipeChange, handleSelectedRecipeId } = useContext(RecipeControllerContext);
    function handleChange(changes) {
        const newRecipe = {
            ...recipe,
            ...changes
        };

        handleRecipeChange(recipe.id, newRecipe);
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex(i => i.id === id);
        newIngredients[index] = { ...newIngredients[index], ...ingredient };
        handleChange({ ingredients: newIngredients });
    }

    function handleIngredientDelete(id) {
        const newIngredients = recipe.ingredients.filter(i => i.id !== id);
        handleChange({ ingredients: newIngredients });
    }

    function handleIngredientAdd() {
        const newIngredients = [...recipe.ingredients, {
            id: uuidv4(),
            name: '',
            amount: ''
        }];
        handleChange({ ingredients: newIngredients });
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__close-btn--container">
                <button className="btn close-btn" onClick={() => handleSelectedRecipeId(undefined)}>&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" className="recipe-edit__input" value={recipe.name} onChange={e => handleChange({ name: e.target.value })} />
                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" className="recipe-edit__input" value={recipe.cookTime} onChange={e => handleChange({ cookTime: e.target.value })} />
                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" className="recipe-edit__input" value={recipe.servings} onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })} />
                <label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea id="instructions" name="instructions" className="recipe-edit__input" value={recipe.instructions} onChange={e => handleChange({ instructions: e.target.value })} />
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>

                {recipe.ingredients.map(ingredient =>
                    <RecipeIngredient
                        ingredient={ingredient}
                        key={ingredient.id}
                        handleIngredientChange={handleIngredientChange}
                        handleIngredientDelete={handleIngredientDelete}
                    />
                )}

                {/* Ingredient Component */}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary" onClick={handleIngredientAdd}>Add Ingredient</button>
            </div>
        </div>
    );
}