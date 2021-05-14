import React from 'react';

export default function RecipeIngredient(props) {
    const {
        ingredient,
        handleIngredientChange,
        handleIngredientDelete
    } = props;
    // console.log('RenderLog: RecipeIngredient');
    
    return (
        <React.Fragment>
            <input type="text" className="recipe-edit__input" value={ingredient.name} onInput={e => handleIngredientChange(ingredient.id, {name: e.target.value})} />
            <input type="text" className="recipe-edit__input" value={ingredient.amount} onInput={e => handleIngredientChange(ingredient.id, {amount: e.target.value})}/>
            <button className="btn btn--danger" onClick={() => handleIngredientDelete(ingredient.id)}>&times;</button>
        </React.Fragment>
    );
}