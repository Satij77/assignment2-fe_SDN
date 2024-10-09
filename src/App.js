import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const App = () => {
    return (
        <>
            
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    pt: 10, // Cung cấp padding top đủ để nội dung không bị dính vào header
                    pb: 8,  // Cung cấp padding bottom để tránh dính vào footer
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Quiz and Question Management
                    </Typography>
                    <Button variant="contained" color="primary" component={Link} to="/questions">
                        Manage Questions
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/quizzes"
                        sx={{ ml: 2 }}
                    >
                        Manage Quizzes
                    </Button>
                </Box>
            </Container>
      
        </>
    );
};

export default App;
