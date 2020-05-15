import styled from "styled-components";
import Button from '@material-ui/core/Button/index';
import colors from '../Styles/Colors'
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export const SubmitButton = styled(Button)`
background-color: ${props=> {
    return props.color? props.color : colors.secondaryTwo
}} !important;

color:${props=> props.text ? props.text : "white"}  !important;
margin:12px 8px  !important ;

&:hover {
    background-color: ${colors.bright}  !important;
  }

`;

export const Buttons = styled.div`
  display:flex;
  justify-content: ${props=> props.justifyContent ? props.justifyContent : "flex-end"};
  
  `;


export const  Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}