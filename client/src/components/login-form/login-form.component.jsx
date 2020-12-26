import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { AdminContext } from '../../context/admin/admin.context'

import LoginInput from '../login-input/login-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Spinner from '../spinner/spinner.component'


const AdminContainer = styled.section`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 4rem;    
        font-weight: bolder;
        text-align: center;
        margin-bottom: 2rem;
    }
`

const AdminForm = styled.form`
    max-width: 50rem;
    width: 100%;
    margin: 8rem 1rem 0; 
`

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { logIn, logOut, currentUser, isLoading } = useContext(AdminContext)

    const handleSubmit = e => {
        e.preventDefault()
        logIn(username, password)
    }

    return (
        <AdminContainer>
            {currentUser ? (
                <div>
                    <h2>
                        Ste prihlásený
                </h2>
                    <CustomButton onClick={logOut} center>
                        Odhlásiť sa
                </CustomButton>
                </div>
            ) : isLoading ? (
                <Spinner />
            ) : (
                        <AdminForm onSubmit={handleSubmit}>
                            <h2>Administrácia</h2>
                            <LoginInput
                                label='Prihlasovacie meno'
                                name='login'
                                type='text'
                                value={username}
                                handleChange={e => setUsername(e.target.value)}
                            />
                            <LoginInput
                                label='Heslo'
                                name='password'
                                type='password'
                                value={password}
                                handleChange={e => setPassword(e.target.value)}
                            />

                            <CustomButton center>
                                Prihlásiť
                    </CustomButton>
                        </AdminForm>
                    )}
        </AdminContainer>

    )
}

export default LoginForm
