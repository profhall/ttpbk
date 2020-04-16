import React, {useContext, useEffect, useState} from 'react';
import colors from "../../Styles/Colors";
import styled from "styled-components";
import {Paper, Grid} from '@material-ui/core/';

export const GridItem = styled(Grid)`
  height: ${ props=> props.height ? props.height : "" };
  //background-color: black; 
`;

export const Sheet = styled(Paper)`
  height: 95%;
  padding: 1em  ;
  text-align: center;
  
  color: ${colors.primaryOne} !important;
  white-space: nowrap;
  margin-bottom: 8px;
  background:${props => props.bgphoto ? `linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.7)),url("${props.bgphoto}")`:`linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.7))`};
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
`;


export const HomeContainer = styled(Grid)`
  height: 100%;
  //background-color: #61dafb;
  overflow: auto;
`;