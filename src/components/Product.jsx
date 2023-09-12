import React from 'react'

function Product({title, type, image, price}) {
    return (
        <article>
            <span>{title}</span>
                <img src={image} alt={title}/>
                <p>{type}</p>
            <h4>{price}</h4>
            </article>

            )
}

export default Product;