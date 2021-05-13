import React from 'react';

export default function Ingredient(props) {
    // console.log('RenderLog: Ingredient');
    
    const {
        name,
        amount
    } = props;
    return (
        <React.Fragment>
            <span>{name}</span>
            <span>{amount}</span>
        </React.Fragment>
    )
}