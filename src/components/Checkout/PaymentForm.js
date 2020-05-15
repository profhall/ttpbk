import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from "styled-components";

const products = [
    { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
    { name: 'Shipping', desc: '', price: 'Free' },
];

export default function PaymentForm() {

    const toggleItem = (item_id) => {

        console.log("Toggle Item ::"+item_id)
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirm Your Meals
            </Typography>
            <Grid container alignContent={"start"} spacing={0}>
                {products.map((item,id)=>
                    <Product item xs={12} md={6} id={id} >
                        <h4 >{item.name + " :: " + id}</h4>
                        <Checkbox style={{padding:0}} size={"small"} onChange={()=>toggleItem(id)} /> Remove
                    </Product>)}


            </Grid>
        </React.Fragment>
    );
}

const Product =styled(Grid)`

`;
