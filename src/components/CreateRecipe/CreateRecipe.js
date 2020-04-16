import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Copyright, SubmitButton} from "../../StyledComps/StyledComps";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import AddIcon from '@material-ui/icons/Add';

import FormHelperText from "@material-ui/core/FormHelperText";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Button} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";




const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function CreateRecipe() {
    const classes = useStyles()

    const [ingredients, setIngredients] = useState([{"":""}])



    return (
        <Container component="main" maxWidth="l">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Recipe
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="recipe_name"
                                name="recipeName"
                                variant="outlined"
                                required
                                fullWidth
                                id="recipeName"
                                label="Name of Dish"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth required className={classes.formControl}>
                                <InputLabel htmlFor="recipe-type-required">Age</InputLabel>
                                <Select
                                    native
                                    value={20}
                                    onChange={()=>console.log("changed")}
                                    name="age"
                                    inputProps={{
                                        id: 'recipe-type-required',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextareaAutosize
                                style={{width:"100%"}}
                                required
                                fullWidth
                                id="description"
                                name="description"
                                aria-label="minimum height"
                                rowsMin={5}
                                placeholder="Description" />

                        </Grid>

                        <Grid container xs={12}
                              direction="row"
                              justify="flex-start"
                              alignItems="flex-start"
                        >
                            <h2>Ingredients</h2> <br/>
                            <Fab color="primary" aria-label="add" onClick={()=>setIngredients(ingredients.concat({"":""}))}>
                                <AddIcon />
                            </Fab>

                            {ingredients.map((ing, index)=>{
                                return(
                                    <Grid spacing={2} container xs={12}>
                                        <Grid item xs={10} sm={4}>
                                            <TextField
                                                autoComplete={`ingredient ${index 
                                                +1}`}
                                                name={`ingredient_${index+1}`}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id={`ingredient_ ${index+1}`}
                                                label={`Ingredient ${index+1}`}
                                            />
                                        </Grid>
                                        <Grid item xs={10} sm={4}>
                                            <TextField
                                                fullWidth
                                                autoComplete={`ingredient_${index+1}+amount`}
                                                name={`ingredient_${index+1}_amount`}
                                                id={`ingredient_${index+1}_amount`}
                                                variant="outlined"
                                                required
                                                label={`Amount `}
                                            />
                                        </Grid>
                                </Grid>
                                )
                            })}
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <SubmitButton
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Sign Up
                    </SubmitButton>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
