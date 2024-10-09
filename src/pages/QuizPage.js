import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import QuizDisplay from '../components/QuizDisplay';
import { Container } from '@mui/material';

const QuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('https://assignment1-be-sdn.onrender.com/quizzes');
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };
        fetchQuizzes();
    }, []);

    const handleQuizSelect = (quiz) => {
        setSelectedQuiz(selectedQuiz ? null : quiz); // Toggle quiz
    };

    return (
        <Container>
            <h1>Create New Quiz</h1>
            <QuizForm />
            <QuizList quizzes={quizzes} onQuizSelect={handleQuizSelect} />
            {selectedQuiz && <QuizDisplay quiz={selectedQuiz} />}
        </Container>
    );
};

export default QuizPage;
