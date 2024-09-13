import React, { Component } from 'react';
import FaqsContent from './FaqsContent';

const FaqsList = [
    {
        id: 1,
        question: "How do I sign up for a new account?",
        answer: "To sign up for a new account, simply enter your email address and password. You will receive a confirmation email to verify your address."
    },
    {
        id: 2,
        question: "Can I recover my password if I forget it?",
        answer: "Yes, you can recover your password by clicking the 'Forgot Password?' link in the login screen. Follow the on-screen instructions to reset your password."
    },
    {
        id: 3,
        question: "What is the difference between a personal and business account?",
        answer: "A personal account is for individuals who want to access their own personal information and make purchases. A business account is for businesses who want to access and manage their customer data and information."
    },
    {
        id: 4,
        question: "What is the privacy policy for the website?",
        answer: "The privacy policy for our website can be found at our website's homepage. It outlines the types of data we collect, how we use it, and the choices you have regarding sharing that data."
    },
    {
        id: 5,
        question: "Can I change my email address or password?",
        answer: "Yes, you can change your email address or password by logging in to your account, clicking on the 'Account Settings' link, and then updating your information."
    },
    {
        id: 6,
        question: "What is the shipping and delivery process for my orders?",
        answer: "The shipping and delivery process for your orders can be found on our website's homepage. We will send you an email with the details of your order, including the estimated delivery date."
    },
    {
        id: 7,
        question: "Can I cancel or return my orders?",
        answer: "Yes, you can cancel or return your orders by logging in to your account, clicking on the 'My Orders' link, and then selecting the appropriate option."
    }
];

class Faqs extends Component {
    state = {
        activeFaqs: {} // Track which FAQs are open individually
    }

    toggleFaq = (id) => {
        this.setState(prevState => ({
            activeFaqs: {
                ...prevState.activeFaqs,
                [id]: !prevState.activeFaqs[id] // Toggle the clicked FAQ's visibility
            }
        }));
    }

    render() {
        return (
            <div>
                <h1>Frequently Asked Questions</h1>
                {FaqsList.map(eachFaq => (
                    <FaqsContent
                        key={eachFaq.id}
                        eachFaq={eachFaq}
                        isActive={!!this.state.activeFaqs[eachFaq.id]} // Check if the FAQ is active
                        toggleFaq={() => this.toggleFaq(eachFaq.id)}
                    />
                ))}
            </div>
        );
    }
}

export default Faqs;
