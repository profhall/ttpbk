import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {Checkout,Product} from "../Paypal/Checkout";
import chair from "../Paypal/chair.jpg";

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();
    const product = {
        price: 75+7,
        name: '5 meals w/Delivery (+$7.00)',
        description: '5 Meals',
        image: chair,
    };
    return (
        <React.Fragment>
            <Typography variant="h6" >
                Order summary
            </Typography>
            <Grid container >
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Delivery
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography
                    >

                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Product  product={product} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}