import React, { useState, useEffect } from 'react';
import './periodontalScreeningQuestions.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const PeriodontalScreeningQuestions = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.periodontalScreeningQuestions);

    useEffect(() => {
        setLocalQuestions(state.periodontalScreeningQuestions);
        console.log("question in the context",state.periodontalScreeningQuestions)
    }, [state.periodontalScreeningQuestions]);

    const handleNext = () => {
        setQuestions('periodontalScreeningQuestions', questions);
        // Navigate to the next section
    };

    return (
        <div className="periodontal-screening-questions">
            <StepperComponent selectedStep={"Periodontal Screening Questions"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/softTissueAssessment'}
                sectionType={'PeriodontalScreeningQuestions'}
                onNext={handleNext}
            />
        </div>
    );
};

export default PeriodontalScreeningQuestions;
