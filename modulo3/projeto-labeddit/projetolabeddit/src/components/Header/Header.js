import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import {goToLogin,goToRecipesList} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import styled from "styled-components"

const LogoImage=styled.img`
width:15vh;
height:7vh ;
border-radius:70%;

`

export const Header = () => {
  const navigate= useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={()=>goToRecipesList(navigate)} color="inherit"><LogoImage src={logo} /></Button>
          <Button onClick={()=>goToLogin(navigate)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
