import React from 'react';

export default function RecipeIngredient() {
    // console.log('RenderLog: RecipeIngredient');
    
    return (
        <React.Fragment>
            <input type="text" className="recipe-edit__input"/>
            <input type="text" className="recipe-edit__input"/>
            <button className="btn btn--danger">&times;</button>
        </React.Fragment>
    );
}