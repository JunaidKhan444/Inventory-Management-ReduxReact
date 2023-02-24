import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Dashboard() {

    const userState = useSelector(state => state.user);
    const itemState = useSelector(state => state.item);
    const userCategory = useSelector(state => state.category);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h1" component="div">
                                {userCategory.categories.length}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Categories
                            </Typography>
                            <Typography variant="body2">
                                Number of Categories
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={4}>

                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h1" component="div">
                                {itemState.items.length}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Items
                            </Typography>
                            <Typography variant="body2">
                                Number of Items
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>

                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h1" component="div">
                                {userState.users.length}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Users
                            </Typography>
                            <Typography variant="body2">
                                Number of Users
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
