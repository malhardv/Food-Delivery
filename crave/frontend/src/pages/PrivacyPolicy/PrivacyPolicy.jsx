import React from "react";
import privacy from "../../assets/privacy";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {privacy.effectiveDate}</p>
      {privacy.sections.map((section, index) => (
        <div key={index} className="policy-section">
          <h2>{section.title}</h2>
          <ul>
            {section.content.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
