import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers } from '../api/userApi';







export default function Users() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    // const [rows, setRows] = React.useState(userData.users);
    const [searched, setSearched] = React.useState("");

    // const requestSearch = (searchedVal) => {
    //     setSearched(searchedVal)
    //     const filteredRows = userData.users.filter((row) => {
    //         console.log(searchedVal)
    //         return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    //     });
    //     console.log(filteredRows);
    //     setRows(filteredRows);
    // };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    React.useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            <div style={{ margin: 20 }}>
                <Box style={{ display: "Flex", flexDirection: "column" }}>
                    <div style={{ display: "Flex", justifyContent: "flex-end" }}>
                        <input
                            placeholder='Search'
                            type="text"
                            value={searched}
                            // onChange={(e) => requestSearch(e.target.value)}
                            onChange={(e) => setSearched(e.target.value)}

                        ></input>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Phone</TableCell>
                                        <TableCell align="right">City</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userData.users.filter(u => u.name.toLowerCase().includes(searched.toLowerCase())).map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.phone}</TableCell>
                                            <TableCell align="right">{row.address.city}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
            </div>
        </>
    );
}
