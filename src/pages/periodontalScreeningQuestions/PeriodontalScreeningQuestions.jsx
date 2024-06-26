import React, { useState } from 'react';
import './periodontalScreeningQuestions.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const PeriodontalScreeningQuestions = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="periodontal-screening-questions">
            <StepperComponent selectedStep={"Periodontal Screening Questions"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/softTissueAssessment'}
                sectionType={'PeriodontalScreeningQuestions'}
            />
        </div>
    );
};

export default PeriodontalScreeningQuestions;