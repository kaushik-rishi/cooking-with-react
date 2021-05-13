import React from 'react';

export default function RecipeIngredient({ingredient}) {
    // console.log('RenderLog: RecipeIngredient');
    
    return (
        <React.Fragment>
            <input type="text" className="recipe-edit__input" value={ingredient.name} />
            <input type="text" className="recipe-edit__input" value={ingredient.amount} />
            <button className="btn btn--danger">&times;</button>
        </React.Fragment>
    );
}