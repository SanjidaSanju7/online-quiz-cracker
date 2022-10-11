import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const QuizDetails = () => {
    const { data } = useLoaderData();


    return (
        <div>
            {
                data.questions.map(quiz => (
                    <Questions
                        key={quiz.id}
                        quiz={quiz}

                    >
                    </Questions>
                ))
            }
        </div>
    );
};

export default QuizDetails;