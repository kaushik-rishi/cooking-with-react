import React, {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeControllerContext} from './App';

export default function RecipeList(props) {
    console.log('RenderLog: RecipeList');
    
    const {handleRecipeAdd} = useContext(RecipeControllerContext);
    const {recipes} = props;
    
    return (
        <div className="recipe-list">
            <div>
                {/* 👇️ small nice trick to see what is being passed without console.logging  */}
                {/* <code>
                    {JSON.stringify(recipes)}
                </code> */}
                {/* {recipes.map(recipe => <li key={recipe.id}><Recipe recipe={recipe}/></li>)} */}
                {recipes.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button className="btn btn--primary" onClick={handleRecipeAdd}>Add Recipe</button> 
            </div>
        </div>
    );
}