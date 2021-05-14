import React, { useContext } from 'react';
import RecipeIngredient from './RecipeIngredient';
import { RecipeControllerContext } from './App';

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
        newIngredients[index] = {...newIngredients[index], ...ingredient};
        handleChange({ingredients: newIngredients});
    }
    
    function deleteIngredient(id) {
        const newIngredients = recipe.ingredients.filter(i => i.id !== id);
        handleChange({ingredients: newIngredients});
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__close-btn--container">
                <button className="btn close-btn" onClick={() => handleSelectedRecipeId(null)}>&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" className="recipe-edit__input" value={recipe.name} onInput={e => handleChange({name : e.target.value})}/>
                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" className="recipe-edit__input" value={recipe.cookTime} onInput={e => handleChange({cookTime : e.target.value})}/>
                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" className="recipe-edit__input" value={recipe.servings} onInput={e => handleChange({servings : parseInt(e.target.value) || ''})}/>
                <label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea id="instructions" name="instructions" className="recipe-edit__input" value={recipe.instructions} onInput={e => handleChange({instructions: e.target.value})}/>
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
                        deleteIngredient={deleteIngredient}
                    />
                )}

                {/* Ingredient Component */}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
        </div>
    );
}