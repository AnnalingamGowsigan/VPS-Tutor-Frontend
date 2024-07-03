import React, {useEffect} from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from "axios";
import config from "../../config.js";

const RenderHistoryQuestions = ({ historyQuestions }) => {

    useEffect(() => {
        console.log("History questions from Render History: ",historyQuestions)
    }, [historyQuestions]);

    if (!historyQuestions || historyQuestions.length === 0) return null;

    const groupedQuestions = historyQuestions.reduce((acc, question) => {
        acc[question.questionType] = acc[question.questionType] || [];
        acc[question.questionType].push(question);
        return acc;
    }, {});

    return (
        <div>
            {Object.entries(groupedQuestions).map(([section, questions], sectionIndex) => (
                <div key={sectionIndex}>
                    <Typography variant="h5" sx={{ mb: 2 }}>{section}</Typography>
                    {questions.map((question, index) => (
                        <Card key={index} sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6">{`${index + 1}. ${question.questionText}`}</Typography>
                                <Typography variant="body1">{`Answer: ${question.answer}`}</Typography>
                                <Typography variant="body2" color={question.required ? 'success.main' : 'text.secondary'}>
                                    {question.required ? 'Required' : 'Optional'}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RenderHistoryQuestions;
