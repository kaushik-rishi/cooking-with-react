import React from 'react';
import Recipe from './Recipe';

export default function RecipeList(props) {
    return (
        <div>
            {/* 👇️ small nice trick to see what is being passed without console.logging  */}
            {/* <code>
                {JSON.stringify(props.recipes)}
            </code> */}
            {/* {props.recipes.map(recipe => <li key={recipe.id}><Recipe recipe={recipe}/></li>)} */}
            {props.recipes.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
        </div>
    );
}