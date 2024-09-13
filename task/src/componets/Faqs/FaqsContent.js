import React from 'react';

const FaqsContent = ({ eachFaq, isActive, toggleFaq }) => {
    const { question, answer } = eachFaq;

    return (
        <div>
            <h4>{question}</h4>
            <button onClick={toggleFaq}>
                {isActive ? (
                    <img src='https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png' alt="Collapse" />
                ) : (
                    <img src='https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png' alt="Expand" />
                )}
            </button>
            {isActive && <p>{answer}</p>}
        </div>
    );
}

export default FaqsContent;
