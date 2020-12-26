import React from 'react'

import {
    InputGroup
} from './login-input.styles'

const LoginInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <InputGroup>
            <input
                className='form-input'
                onChange={handleChange}
                {...otherProps}
            />
            {label ? (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
            }
        </InputGroup>
    )
}

export default LoginInput