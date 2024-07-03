import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    Box,
    CircularProgress,
    Snackbar, Alert, Grid
} from '@mui/material';
import './displayQuestions.scss';
import { AddExamQuestion, QuestionDisplay } from "../Components.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const DisplayQuestions = ({ questions, setQuestions, navigatePath, sectionType, onNext }) => {
    const navigate = useNavigate();
    const [addExamQuestionOpen, setAddExamQuestionOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('info');
    const [isLoading, setIsLoading] = useState(false);
    const { state, setQuestions: updateQuestionsContext } = useQuestions();

    useEffect(() => {
        setQuestions(state[sectionType] || []);
        console.log("The question in display questions",questions)
    }, [state, sectionType, setQuestions]);

    const handleAddExamQuestionToggle = () => {
        setAddExamQuestionOpen(!addExamQuestionOpen);
    };

    const handleAddNewQuestion = (newQuestion) => {
        const updatedQuestions = [...questions, newQuestion];
        setQuestions(updatedQuestions);
        updateQuestionsContext(sectionType, updatedQuestions);
    };

    const handleSubmitQuestions = () => {
        updateQuestionsContext(sectionType, questions);
        onNext();
        navigate(navigatePath);
        console.log("handleSubmitQuestions");
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="display-questions">
            <Box position="relative" minHeight="100vh">
                {isLoading && (
                    <Box position="absolute" top="20%" left="50%" style={{ transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress />
                    </Box>
                )}
                {!isLoading && (
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11} sx={{ boxShadow: 3, padding: 2, borderRadius: 1 }}>
                            {questions.map((question, index) => (
                                <Accordion key={index} className="question-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}a-content`}
                                        id={`panel${index}a-header`}
                                    >
                                        <Typography>{`${index + 1}. ${question.text}`}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <QuestionDisplay question={question} />
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Button variant="outlined" onClick={handleAddExamQuestionToggle} className="add-new-question-btn">
                                ADD NEW QUESTION
                            </Button>
                            <Box display="flex" justifyContent="flex-end" mt={2}>
                                <Button onClick={handleSubmitQuestions} variant="contained" color="primary">
                                    {sectionType !== 'Diagnosis' ? 'Next' : 'Finish'}
                                </Button>
                                <Button onClick={handleSubmitQuestions} variant="contained" color="primary">
                                    {sectionType !== 'Diagnosis' ? 'Next' : 'Finish'}
                                </Button>
                                <Snackbar
                                    open={openSnackbar}
                                    autoHideDuration={6000}
                                    onClose={handleSnackbarClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}  // Positions the Snackbar at the top center
                                >
                                    <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: '100%' }}>
                                        {snackbarMessage}
                                    </Alert>
                                </Snackbar>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Box>
            <AddExamQuestion
                open={addExamQuestionOpen}
                handleClose={handleAddExamQuestionToggle}
                onAddQuestion={handleAddNewQuestion}
                section={sectionType}
            />
        </div>
    );
};

export default DisplayQuestions;
