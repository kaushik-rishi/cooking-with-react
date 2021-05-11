import React from 'react';

export default function Recipe(props) {
    const {
        name,
        servings,
        cookTime,
        instructions
    } = props;
    return (
        <div>
            <div>
                <div>{name}</div>
                <div>
                    <button>Edit</button><button>Delete</button>
                </div>
                <div><span>servings: </span> {servings} </div>
                <div><span>Cook Time: </span><span>{cookTime}</span></div>
                <div><span>Instructions</span><span>{instructions}</span></div>
            </div>
            <br />
        </div>
    );
}