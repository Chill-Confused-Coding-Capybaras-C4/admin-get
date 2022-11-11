// import Button from '@mui/material/Button';

import { useMsal } from '@azure/msal-react';
import { Button } from 'react-bootstrap';

export const SignOutButton = () => {

    const { instance } =  useMsal();

    const handleSignOut = () => {
        instance.logoutRedirect(); // accepts parameters. customize sign-in or sign-out process, 
    }
    return (
        <Button variant='outline-success' onClick={handleSignOut}>Sign out</Button>
    )
};