import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { getUsers } from '../api/userApi';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';







const Categories = () => {
    const [view, setView] = React.useState("Categories");


    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getUsers);
    }, []);

    return (
        <>

            <Box height={400}>


                {view === 'Categories' && <>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Button variant="contained" onClick={() => setView('Add')}>Add</Button>
                        </Grid>
                        <Grid item xs={8}>
                            <h1>Categories</h1>
                            <h1>Categories</h1>
                            <h1>Categories</h1>
                        </Grid>
                    </Grid>
                </>}
                {view === 'Add' && <>

                    <Grid container spacing={2}>
                       
                        <Grid item xs={10}>

                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Category Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    label="Category Name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" onClick={() => setView('Categories')}>Cancel</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained">Save</Button>
                        </Grid>
                    </Grid>


                </>
                }

            </Box>
        </>

    )
}

export default Categories;