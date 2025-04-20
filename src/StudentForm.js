import { Button, colors, FormLabel, Grid, Typography } from '@mui/material';
import React from 'react';

const StudentForm = props => {
    return (
        <Grid 
            container
            spacing={2}
            sx={
                {
                    padding: 2,
                    backgroundColor: 'white',
                    marginBottom: '30px',
                    display: 'block',
                }
            }
        >
            <Grid item xs={12}>
                <Typography component={{FormLabel}} sx={{color:'white'}}>Student Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{display: 'flex'}}>
                <Typography
                 component={{FormLabel}}
                 sx={{
                        color:'black',
                        fontSize: '16px',
                        marginRight: '20px',
                        width: '100%',
                        display: 'block',
                    
                    }}>
                    ID
                    </Typography>
                    <input
                        type ="number"
                        placeholder="Enter your ID"
                        id ="id"
                        name ="id"
                        sx={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '20px',
                        }}
                        value={''}
                        onChange={e => {}}
                    
                    />
            </Grid>


            <Grid item xs={12} sm={6} md={4} sx={{display: 'flex'}}>
                <Typography
                 component={{FormLabel}}
                 sx={{
                        color:'black',
                        fontSize: '16px',
                        marginRight: '20px',
                        width: '100%',
                        display: 'block',
                    
                    }}>
                    Name
                    </Typography>
                    <input
                        type ="text"
                        placeholder="Enter your name"
                        id ="name"
                        name ="name"
                        sx={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '20px',
                        }}
                        value={''}
                        onChange={e => {}}
                    
                    />
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{display: 'flex'}}>
                <Typography
                 component={{FormLabel}}
                 sx={{
                        color:'black',
                        fontSize: '16px',
                        marginRight: '20px',
                        width: '100%',
                        display: 'block',
                    
                    }}>
                    Email
                    </Typography>
                    <input
                        type ="email"
                        placeholder="Enter your email"
                        id ="email"
                        name ="email"
                        sx={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '20px',
                        }}
                        value={''}
                        onChange={e => {}}
                    
                    />
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{display: 'flex'}}>
                <Typography
                 component={{FormLabel}}
                 sx={{
                        color:'black',
                        fontSize: '16px',
                        marginRight: '20px',
                        width: '100%',
                        display: 'block',
                    
                    }}>
                    Phone
                    </Typography>
                    <input
                        type ="tel"
                        placeholder="Enter your phone number"
                        id ="phone"
                        name ="phone"
                        sx={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '20px',
                        }}
                        value={''}
                        onChange={e => {}}
                    
                    />
            </Grid>
            
            <Button 
            sx={{
                backgroundColor: colors.blue[500],
                color: 'black',
                padding: '10px 20px',
                borderRadius: '5px',
                margin: 'auto',
                '&:hover': {
                    opacity: 0.7,
                    backgroundColor: colors.blue[500],
                },
            }}>
                Submit
            </Button>
        
        </Grid>
    );

}

export default StudentForm;