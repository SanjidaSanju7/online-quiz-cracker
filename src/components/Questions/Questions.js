import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React from 'react';

const Questions = ({ quiz }) => {
    // console.log(quiz);

    const { question, options, correctAnswer } = quiz;

    const eyeIcon = () => {
        toast.success(correctAnswer, {
            position: 'top-center',
        });

    }

    return (
        <div className="QuizContainer mt-5 container">
            <div className="quizHeader">
                <p className="PracticeDescription text-2xl">
                    Read the question and choose the most correct option:
                </p>
            </div>
            <div className="PracticeQuestionContainer bg-emerald-300 border-emerald-400 mt-4 p-8 max-w-lg m-auto shadow-lg rounded">

                <div className='flex justify-evenly'>
                    <h2 className=' font-semibold'>Question: {question}</h2>
                    <FontAwesomeIcon className='px-4' onClick={eyeIcon} icon={faEyeLowVision} />
                    <ToastContainer />
                </div>


                <ul className='option-container text-slate-500 py-7  '>
                    <li>
                        <input type="radio" name="answer" id="ans1" className="answer" />
                        <label for="ans1" id="option1">{options[0]}</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans1" className='answer' />
                        <label for="ans1" id="option1">{options[1]}</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans1" className='answer' />
                        <label for="ans1" id="option1">{options[2]}</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans1" className='answer' />
                        <label for="ans1" id="option1">{options[3] ? options[3] : ''}</label>
                    </li>
                </ul>

            </div>
        </div>

    );
};

export default Questions;