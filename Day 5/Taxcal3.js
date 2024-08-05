import React, { useState } from 'react';
import "../Assets/styles/taxcal3.css";
import { Link } from 'react-router-dom';
function Taxcal3() {
  const [filingStatus, setFilingStatus] = useState('');
  const [childTaxCredits, setChildTaxCredits] = useState('');
  const [earnedIncomeCredits, setEarnedIncomeCredits] = useState('');
  const [educationCredits, setEducationCredits] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., calculate taxes based on the inputs
    console.log({
      filingStatus,
      childTaxCredits,
      earnedIncomeCredits,
      educationCredits,
    });
  };

  return (
    <div className="OuterContainer">
      <div className="TaxCalculatorForm">
        {/* <h1>Tax Calculator</h1> */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Tax Filing Status:
              <select value={filingStatus} onChange={(e) => setFilingStatus(e.target.value)}>
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married_jointly">Married Filing Jointly</option>
                <option value="married_separately">Married Filing Separately</option>
                <option value="head_of_household">Head of Household</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Child Tax Credits:
              <input
                type="number"
                value={childTaxCredits}
                onChange={(e) => setChildTaxCredits(e.target.value)}
                placeholder="Enter child tax credits"
              />
            </label>
          </div>
          <div>
            <label>
              Earned Income Credits:
              <input
                type="number"
                value={earnedIncomeCredits}
                onChange={(e) => setEarnedIncomeCredits(e.target.value)}
                placeholder="Enter earned income credits"
              />
            </label>
          </div>
          <div>
            <label>
              Education Credits:
              <input
                type="number"
                value={educationCredits}
                onChange={(e) => setEducationCredits(e.target.value)}
                placeholder="Enter education credits"
              />
            </label>
          </div>
          <Link to='/taxcal4'>
          <button type="submit">Calculate</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Taxcal3;