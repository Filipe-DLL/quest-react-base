import React from 'react'
import './button.css'

const labelAlert = (props) => {
    alert(`A label desse botão é ${props.label}`)
}

export function Button(props) {
    return(
        <button className='btn'
        onClick={() => labelAlert(props)}
        >
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}