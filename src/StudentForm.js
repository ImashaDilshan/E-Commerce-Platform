import React from 'react';
import { Button, Grid, Typography } from '@mui/material';


const StudentForm = (props) => {


    const [FirstName, setFirstName] = React.useState('');
    const [LastName, setLastName] = React.useState('');
    const [Email, setEmail] = React.useState('');

    return (
        <Grid 
            container 
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginbottom: '30px',
                display: 'block',
            }}
        >

            <Grid item xs={12} md={6} lg={4}>

                <Typography 
                component={'h1'} 
                    sx ={{
                         color: '#000000', 
                         fontSize: '24px', 
                         fontWeight: 'bold', 
                         marginBottom: '20px'
                         }}
                >
                    Student Application Form
                </Typography>

            </Grid>

             <Grid item xs={12} md={6} lg={4}>
                <Typography component={'label'} 
                    sx ={{
                         color: '#000000', 
                         fontSize: '16px', 
                         fontWeight: 'bold', 
                         marginBottom: '10px'
                         }}
                >
                    First Name :
                </Typography>
                <input
                    type ="text"
                    placeholder="Enter your first name"
                    sx={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginBottom: '20px',
                    }}
                    value={FirstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                
                <Typography component={'label'}
                    sx ={{
                         color: '#000000', 
                         fontSize: '16px', 
                         fontWeight: 'bold', 
                         marginBottom: '10px'
                         }} 
                >
                    Last Name : 
                </Typography>
                <input
                    type ="text"
                    placeholder="Enter your last name"
                    sx={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginBottom: '20px',
                    }}
                    value={LastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                    
                    <Typography component={'label'}
                        sx ={{
                            color: '#000000', 
                            fontSize: '16px', 
                            fontWeight: 'bold', 
                            marginBottom: '10px'
                            }} 
                    >
                        Email : 
                    </Typography>
                    <input
                        type ="email"
                        placeholder="Enter your email"
                        sx={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '20px',
                        }}
                        value={Email}   
                        onChange={e => setEmail(e.target.value)}
                    />
            
            </Grid>   

            <Button
                sx ={{ 
                    margin:'auto',
                    marginBottom: '20px',
                    backgroundColor: '#007bff',
                    color: '#000000',
                    marginLeft: '20px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: 0.8,
                        backgroundColor: '#0056b3',
                        color: '#ffffff',
                    },
                }}
            >
                Submit
            </Button>
                

        </Grid>
        


    )

}

export default StudentForm;
