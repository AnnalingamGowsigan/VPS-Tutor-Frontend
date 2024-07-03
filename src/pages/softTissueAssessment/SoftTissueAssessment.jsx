import React, { useState, useEffect } from 'react';
import './softTissueAssessment.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const SoftTissueAssessment = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.softTissueAssessment);

    useEffect(() => {
        setLocalQuestions(state.softTissueAssessment);
        console.log("Questions in context:", state.softTissueAssessment);
    }, [state.softTissueAssessment]);

    const handleNext = () => {
        setQuestions('softTissueAssessment', questions);
    };

    return (
        <div className="soft-tissue-assessment">
            <StepperComponent selectedStep={"Soft Tissue Assessment"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/hardTissueAssessment'}
                sectionType={'SoftTissueAssessment'}
                onNext={handleNext}
            />
        </div>
    );
};

export default SoftTissueAssessment;
