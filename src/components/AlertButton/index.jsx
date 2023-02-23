import React from 'react'
import './index.css'

export function AlertButton(props) {
    return(
        <button className='btn'
        onClick={() => alert(`A label desse botão é ${props.label}`)}
        >
            {props.label}
        </button>
    )
}

AlertButton.defaultProps = {
    label: 'Baixar CV'
}