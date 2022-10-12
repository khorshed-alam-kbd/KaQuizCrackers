import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const TopicQuestion = (questions) => {
    const { question, options, correctAnswer, id } = questions.questions
    console.log(id);

    const showCorrectAns = (correctAnswer) => {
        // console.log(correctAnswer)
        swal({
            title: `${correctAnswer}`,
            text: "Correct Answer",
            icon: "info",
            button: "Close",
        });
    }
    const compareAnswer = (answer) => {
        console.log(answer);
        if (correctAnswer === answer) {
            console.log("right");
            swal({
                title: "Congratulations !",
                text: "You Answer Is Correct",
                icon: "success",
                button: "Done",
            });
        }
        else {
            console.log("wrong");
            swal({
                title: "Good job!",
                text: "You Answer Is Wrong",
                icon: "error",
                button: "Try Again",
            });

        }
    }

    return (
        <div className='border rounded border-primary m-3 p-5 text-center d-flex'>
            <div class="container text-center">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <h3> Question: {question}</h3>
                        {
                            options.map(option => <p
                                onClick={() => compareAnswer(option)}
                                className='border rounded border-primary m-3 p-3' >{option}</p>)
                        }
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon onClick={() => showCorrectAns(correctAnswer)} icon={faEye}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopicQuestion;