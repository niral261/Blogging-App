import React, { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { API } from '../../service/api.js';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
`;

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex = 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff661;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const Text = styled(Typography)`
    color: #878787;
    font-size: 16px;
    text-align: center;
`;

const signupInitialValues = {
    name:' ',
    username:' ',
    password:' '
}

const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    };

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async() => {
        let response = await API.userSignup(signup);
        if(response.isSuccess) {
            setSignup(signupInitialValues);
            toggleAccount('login')
        } else {
            setError('Somethng went wrong! please try again')
        }
    } 
    
    return (
        <Component>
            <Box>
                <Image src={imageURL} alt='login' />
                {account === 'login' ? (
                    <Wrapper>
                        <TextField variant="standard" label="Enter username"/>
                        <TextField variant="standard" label="Enter password"/>
                        { error && <Error>{error}</Error>} 
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text>OR</Text>
                        <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper>
                ) : (
                    <Wrapper>
                        <TextField variant="standard" onChange={(e)=> onInputChange()} label="Enter name"/>
                        <TextField variant="standard" onChange={(e)=> onInputChange()} name="username" label="Enter username"/>
                        <TextField variant="standard" onChange={(e)=> onInputChange()} name="password" label="Enter password"/>
                        
                        { error && <Error>{error}</Error> }
                        <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                        <Text>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper>
                )}
            </Box>
        </Component>
    );
};

export default Login;
