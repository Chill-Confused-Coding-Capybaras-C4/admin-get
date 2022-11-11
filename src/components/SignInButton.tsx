
// import Button from '@mui/material/Button';


import { useMsal } from '@azure/msal-react';
// import { Button } from 'react-bootstrap';

export const SignInButton = () => {

    // now I can access the the pca instance i created in index
    const { instance } = useMsal();   //=>> I can access the api msal provide

    const handleSignIn = () => {
        instance.loginRedirect({            //will redirect the browser to Azure AD
            scopes: ['user.read']       // consent to sign in  => will get an access token later on
        });
    }
    return (
        // <Button color="inherit" onClick={handleSignIn}>Sign in</Button>
        <div className='msft'>
            <h1>Capybara Admin Portal</h1>
            <div  onClick={handleSignIn}>
                <img src='./ms-symbollockup_signin_dark.svg' alt='ms-login' />
            </div>
        </div>

    )
};