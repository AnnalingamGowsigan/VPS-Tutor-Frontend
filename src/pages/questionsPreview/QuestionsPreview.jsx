import React from 'react';
import { Container } from '@mui/material';
import { useQuestions } from "../../contexts/QuestionsContext.jsx";
import QuestionsSection from "../../components/questionsSection/QuestionsSection.jsx";


const QuestionsPreview = () => {
    const { state } = useQuestions();

    return (
        <Container>
            <QuestionsSection questions={state.periodontalScreeningQuestions} sectionTitle="Periodontal Screening Questions" />
            <QuestionsSection questions={state.softTissueAssessment} sectionTitle="Soft Tissue Assessment" />
            <QuestionsSection questions={state.hardTissueAssessment} sectionTitle="Hard Tissue Assessment" />
            <QuestionsSection questions={state.dentalChart} sectionTitle="Dental Chart" />
            <QuestionsSection questions={state.recordPlaqueScore} sectionTitle="Record Plaque Score" />
            <QuestionsSection questions={state.radiographs} sectionTitle="Radiographs" />
            <QuestionsSection questions={state.sensibilityRecordings} sectionTitle="Sensibility Recordings" />
            <QuestionsSection questions={state.hematologicalRecordings} sectionTitle="Hematological Recordings" />
            <QuestionsSection questions={state.diagnosis} sectionTitle="Diagnosis" />
        </Container>
    );
};

export default QuestionsPreview;