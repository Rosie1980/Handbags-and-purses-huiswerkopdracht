import React from 'react'

function Button({buttonType, buttonText, clickHandler, disabledButton}) {
    return (

        <button
            type={buttonType}
            onClick={clickHandler}
            disabled={disabledButton}
        >
            {buttonText}
        </button>

    )
}

export default Button
