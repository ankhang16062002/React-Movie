import React from 'react'
import PropTypes from 'prop-types'
import {useRef, useEffect} from 'react'

import './button.scss'

const Button = (props) => {
    return (
        <button className='btn' onClick = {props.onClick}>{props.children}</button>
    )
}

export const ButtonOutline = (props) => {
    const buttonRef = useRef(null)

    useEffect(() => {
        buttonRef.current.addEventListener('touchstart', props.onClick)

        return () => {
            buttonRef.current.removeEventListener('touchstart',  props.onClick)
        }
    }, [props.onClick])

    return (
        <button 
            className='btn outline'
            onClick = {props.onClick}
            ref = {buttonRef}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}

ButtonOutline.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}

export default Button


