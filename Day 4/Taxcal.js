import React, { useState } from 'react';
import '../Assets/styles/taxcal.css';
import { Link } from 'react-router-dom';

const Taxcal = () => {
  const [formData, setFormData] = useState({
    grossIncome: '',
    allowances: '',
    bonuses: '',
    commissions: '',
    otherIncome: '',
    salaryFrequency: 'monthly',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="tax-form">
        <div className="form-group">
          <label htmlFor="grossIncome" className="form-label">Gross Income:</label>
          <input
            type="number"
            id="grossIncome"
            name="grossIncome"
            value={formData.grossIncome}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="allowances" className="form-label">Allowances:</label>
          <input
            type="number"
            id="allowances"
            name="allowances"
            value={formData.allowances}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bonuses" className="form-label">Bonuses:</label>
          <input
            type="number"
            id="bonuses"
            name="bonuses"
            value={formData.bonuses}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="commissions" className="form-label">Commissions:</label>
          <input
            type="number"
            id="commissions"
            name="commissions"
            value={formData.commissions}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherIncome" className="form-label">Other Income:</label>
          <input
            type="number"
            id="otherIncome"
            name="otherIncome"
            value={formData.otherIncome}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="salaryFrequency" className="form-label">Salary Frequency:</label>
          <select
            id="salaryFrequency"
            name="salaryFrequency"
            value={formData.salaryFrequency}
            onChange={handleChange}
            className="form-select"
          >
            <option value="monthly">Monthly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
        <div className="form-actions">
          <Link to='/taxcal2'>
            <button type="submit" className="form-button">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Taxcal;
