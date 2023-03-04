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
import { addCategory, removeCategory, updateItem } from '../state/categorySlice';
import { v4 as uuidv4 } from 'uuid';

const Categories = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.category);
    const [view, setView] = React.useState("Categories");
    const [trry, setTrry] = React.useState("initial");
    const [nameCategory, setName] = React.useState(
        {
            name: '',
            uuid: '',
        }
    );


    // React.useEffect(() => {
    //     dispatch(getUsers());

    // }, []);

    const save = () => {
        // if (nameCategory.trim() == "") return;
        if (view == 'Add') {

            // setName(prevNameCategory => ());
            dispatch(addCategory({ ...nameCategory, uuid: uuidv4() }));
        }
        else {
            dispatch(updateItem(nameCategory));
        }
        // view == 'Add' ? dispatch(addCategory({ nameCategory })) : dispatch(updateItem(nameCategory));
        setView("Categories");
        setName({});
    };

    const editItem = (uuid) => {
        let data = state.categories.find(u => u.uuid === uuid)
        console.log(data, 'uid')
        setName(data)
        // setName(nameCategory.name)
        setView("Edit")

    };

    const deleteCategory = (id) => {

        dispatch(removeCategory(id));
    }

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", gap: "10px" }}>
                {view === 'Categories' && <>

                    <div>

                        <Button variant="contained" onClick={() => setView('Add')}>Add New Category</Button>

                    </div>
                    <div>

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
                                                {row.uuid}
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" onClick={() => editItem(row.uuid)}>Edit</Button> &ensp;
                                                <Button variant="contained" onClick={() => deleteCategory(row.uuid)}>Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* {state.categories.map(c => <div key={c.uuid}>{c.nameCategory}</div>)} */}

                    </div>

                </>}
                {(view === 'Add' || view === 'Edit') && <>

                    <div >
                        <FormControl fullWidth sx={{ width: "100%" }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Category Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Category Name"
                                value={nameCategory.name}
                                // setName(prevNameCategory => ({...nameCategory,uuid:uuidv4()})
                                onChange={e => setName(prevNameCategory => ({ ...nameCategory, name: e.target.value }))}
                            // setName(e.target.value)
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <Button variant="contained" onClick={() => setView('Categories')}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="contained" onClick={save}>Save</Button>
                        </div>
                    </div>

                </>
                }
            </Box>
        </>

    )
}

export default Categories;
