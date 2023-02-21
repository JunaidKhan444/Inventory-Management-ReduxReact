import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Items = () => {
    const [view, setView] = React.useState("Items");
    return (

        <div>
            <Box height={400}>
                {view == 'Items' &&
                    <>
                     <Grid container spacing={2}>
                            <Grid item xs={8}>
                                    <Button variant="contained" onClick={() => setView('Add')}>Add</Button>
                            </Grid>
                            <Grid item xs={8}>
                                Add Items
                            </Grid>
                        </Grid>
                        
                        
                    </>
                }

                {view == 'Add' &&
                    <>
                        <Grid container spacing={2}>
                            
                            <Grid item xs={8}>

                                Add Items jj
                            </Grid>
                            <Grid item xs={5}>
                                    <Button variant="contained" onClick={() => setView('Items')}>Cancel</Button>
                            </Grid>
                            <Grid item xs={5}>
                                    <Button variant="contained">Save</Button>
                            </Grid>
                        </Grid>




                    </>
                }
            </Box>
        </div>


    )
}

export default Items