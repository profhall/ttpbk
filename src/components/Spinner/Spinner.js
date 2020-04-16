import React from 'react';
import {CircularProgress} from "@material-ui/core/";
import colors from "../../Styles/Colors"
import withStyles from "@material-ui/core/styles/withStyles";
import styled from "styled-components";



const Loader = () => {
    return (
        <StyledProgress color={colors.bright}/>
    );
};

export default Loader;

const StyledProgress = styled(CircularProgress)`
color:${colors.bright};
`;

