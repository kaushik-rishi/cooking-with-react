import React, {useContext} from 'react';
import IngredientList from './IngredientList';
import {RecipeControllerContext} from './App';

export default function Recipe(props) {
    console.log('RenderLog: Recipe');
    
    const { handleRecipeDelete } = useContext(RecipeControllerContext);
    
    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingredients
    } = props;
    return (
        <div className="recipe">
            <div className="recipe__header">
                <h4 className="recipe__title">{name}</h4>
                <div>
                    <button className="btn btn--primary mr-1">Edit</button><button className="btn btn--danger mr-1" onClick={() => {handleRecipeDelete(id)}}>Delete</button>
                </div>
            </div>
            <div className="recipe__row"><span className="recipe__label">servings: </span><span className="recipe__value">{servings}</span></div>
            <div className="recipe__row"><span className="recipe__label">Cook Time: </span><span className="recipe__value">{cookTime}</span></div>
            <div className="recipe__row"><span className="recipe__label">Instructions</span><div className="recipe__value recipe__value--indented recipe__instructions">{instructions}</div></div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients: </span>
                <div className="recipe__value recipe__value--indented">
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </div>
    );
}