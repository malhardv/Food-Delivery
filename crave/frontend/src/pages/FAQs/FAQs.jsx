import React, { useState } from 'react';
import './FAQs.css';
import { faqs } from '../../assets/faq';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQs = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAnswer = (index) => {
    setActiveIndices((prevIndices) => {
      // If the index is already in the array, remove it (collapse the answer)
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      }
      // Otherwise, add it to the array (expand the answer)
      return [...prevIndices, index];
    });
  };

  return (
    <div className="faq">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      {faqs.map((item, index) => (
        <div key={index}>
          <div className="question" onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
            {activeIndices.includes(index) ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {activeIndices.includes(index) && (
            <div className="answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
