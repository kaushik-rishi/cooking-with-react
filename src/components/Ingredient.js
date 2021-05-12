import React from 'react';

export default function Ingredient(props) {
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