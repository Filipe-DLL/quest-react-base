import './paragrafo.css'

export function Paragrafo({children, color}) {
    return (
        <p className="textBox"
        style={{color: color, textTransform: 'uppercase'}}>
            {children}
        </p>
    )
}

Paragrafo.defaultProps = {
    color: 'black'
}