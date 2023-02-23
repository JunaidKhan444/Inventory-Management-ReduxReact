import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../api/userApi';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { addCategory } from '../state/categorySlice';

const Categories = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.category);

    const [view, setView] = React.useState("Categories");
    const [name, setName] = React.useState("");
    

    React.useEffect(() => {
        dispatch(getUsers());

    }, []);

    // React.useEffect(() => {
    //     dispatch(getUsers);
    // }, []);

    const save = () => {
        if (name.trim() == "") return;

        dispatch(addCategory({ name }));
        setView("Categories");
        setName("");
    };

    return (
        <>
            <Box height={400}>
                {view === 'Categories' && <>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Button variant="contained" onClick={() => setView('Add')}>Add</Button>
                        </Grid>
                        <Grid item sx={{ m: 1 }}>
                        <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell align="right">Name</TableCell>
                                           <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {state.categories.map((row, i) => (
                                            <TableRow
                                                key={row.uuid}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {i}
                                                </TableCell>
                                                <TableCell align="right">{row.name}</TableCell>
                                                <TableCell align="right">
                                                <Button variant="contained">Edit</Button> &ensp; 
                                                <Button variant="contained">Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {/* {state.categories.map(c => <div key={c.uuid}>{c.name}</div>)} */}
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
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" onClick={() => setView('Categories')}>Cancel</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" onClick={save}>Save</Button>
                        </Grid>
                    </Grid>
                </>
                }

            </Box>
        </>

    )
}

export default Categories;