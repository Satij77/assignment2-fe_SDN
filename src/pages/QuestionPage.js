import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionForm from '../components/QuestionForm';
import QuestionList from '../components/QuestionList';
import DisplayQuestion from '../components/DisplayQuestion';
import { Container } from '@mui/material';

const QuestionPage = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('https://assignment1-be-sdn.onrender.com/questions');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleQuestionSelect = (question) => {
        setSelectedQuestion(selectedQuestion ? null : question); // Toggle question
    };

    return (
        <Container>
            <h1>----</h1>
            <QuestionForm />
            <QuestionList questions={questions} onQuestionSelect={handleQuestionSelect} />
            {selectedQuestion && <DisplayQuestion question={selectedQuestion} />}
            <h1>----</h1>
        </Container>
    );
};

export default QuestionPage;
