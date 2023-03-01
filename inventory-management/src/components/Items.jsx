import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateItem } from '../state/itemSlice';


const Items = () => {
    const dispatch = useDispatch();
    const stateCategory = useSelector(state => state.category);
    const stateUser = useSelector(state => state.user);
    const state = useSelector(state => state.item);
    const [view, setView] = React.useState("Items");

    const [item, setItem] = React.useState(
        {
            name: '',
            categoryUuid: '',
            userId: '',
            quantity: 0,
            details: '',
        }
    );

    const save = () => {
        view == 'Add' ? dispatch(addItem(item)) : dispatch(updateItem(item));
        setView("Items");
        setItem({})
    };

    const findUser = (id) => {
        let user = stateUser.users.find(u => u.id === id)
        return user ? user.name : ""

    };
    
    const findCategory = (id) => {
        let category = stateCategory.categories.find(u => u.uuid === id)
        return category ? category.name : ""

    };

    const deleteItem = (id) => {
        dispatch(removeItem(id));
    };

    const editItem = (uuid) => {
        let data = state.items.find(u => u.uuid === uuid)
        setItem(data)
        setView("Edit")
    };
    return (

        <div>
            <Box height={400}>
                {view == 'Items' &&
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Button variant="contained" onClick={() => setView('Add')}>Add New Item</Button>
                            </Grid>
                            <Grid item sx={{ m: 1 }}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Id</TableCell>
                                                <TableCell align="right">Name</TableCell>
                                                <TableCell align="right">Quantity</TableCell>
                                                <TableCell align="right">Category</TableCell>
                                                <TableCell align="right">User</TableCell>
                                                <TableCell align="right">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {state.items.map((row, id) => (
                                                <TableRow
                                                    key={id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.uuid}
                                                    </TableCell>
                                                    <TableCell align="right">{row.name}</TableCell>
                                                    <TableCell align="right">{row.quantity}</TableCell>
                                                    <TableCell align="right">{findCategory(row.categoryUuid)}</TableCell>
                                                    <TableCell align="right">{findUser(row.userId)}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button variant="contained" onClick={() => editItem(row.uuid)}>Edit</Button> &ensp;
                                                        <Button variant="contained" onClick={() => deleteItem(row.uuid)}>Delete</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </>
                }

                {(view == 'Add' || view == 'Edit') &&
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Button variant="contained" onClick={() => setView('Items')}>Cancel</Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button variant="contained" onClick={save}>Save</Button>
                            </Grid>

                            <Grid item xs={10}>

                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Item Name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Item Name"
                                        value={item.name}
                                        onChange={e => setItem({ ...item, name: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="category"
                                        value={item.categoryUuid}
                                        label="Category"
                                        onChange={e => setItem({ ...item, categoryUuid: e.target.value })}>
                                        {stateCategory.categories.map(c => <MenuItem key={c.uuid} value={c.uuid}>{c.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel id="demo-simple-select-label">Users</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="user"
                                        value={item.userId}
                                        label="Users"
                                        onChange={e => setItem({ ...item, userId: e.target.value })}>
                                        {stateUser.users.map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                                <TextField fullWidth sx={{ m: 1 }}
                                    type={"number"}
                                    id="outlined-multiline-static"
                                    onChange={(event) => {
                                        event.target.value < 0
                                            ? (event.target.value = 0)
                                            : event.target.value
                                        setItem({ ...item, quantity: event.target.value })
                                    }
                                    }
                                />
                                <TextField fullWidth sx={{ m: 1 }}
                                    id="outlined-multiline-static"
                                    label="Details"
                                    multiline
                                    rows={5}
                                    onChange={e => setItem({ ...item, details: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                    </>
                }
            </Box>
        </div>


    )
}
export default Items
