import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ btnFunc, className, value }) => {
    const onClick = () => {
        btnFunc()
    }

    return <button type="button" className={`btn ${className}`} onClick={onClick}>{value}</button>
}

Button.defaultProps = {
    className: 'btn',
    text: 'Click here'
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
}

export default Button
