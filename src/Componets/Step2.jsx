import React from 'react';
import './Step2.css';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
    return (
        <div className="step-container">
            <h2>Project type</h2>
            <p>Don't panic — You can also customize this types in settings</p>
            <div className="project-type-section">
                <button onClick={() => handleChange({ target: { name: 'projectType', value: 'Time & Materials' } })} className={values.projectType === 'Time & Materials' ? 'active' : ''}>Time & Materials</button>
                <button onClick={() => handleChange({ target: { name: 'projectType', value: 'Fixed Fee' } })} className={values.projectType === 'Fixed Fee' ? 'active' : ''}>Fixed Fee</button>
                <button onClick={() => handleChange({ target: { name: 'projectType', value: 'Non-Billable' } })} className={values.projectType === 'Non-Billable' ? 'active' : ''}>Non-Billable</button>
            </div>

            {values.projectType === 'Time & Materials' && (
                <div>
                    <label>Project Hourly Rate</label>
                    <input type="number" name="hourlyRate" value={values.hourlyRate} onChange={handleChange} />
                    
                    <label>Budget</label>
                    <select name="budgetType" value={values.budgetType} onChange={handleChange}>
                        <option value="Hours per Person">Hours per Person</option>
                        <option value="Total Budget">Total Budget</option>
                    </select>
                    <input type="number" name="budget" value={values.budget} onChange={handleChange} />
                    
                    <label>
                        <input type="checkbox" name="budgetResets" checked={values.budgetResets} onChange={handleChange} />
                        Budget resets every month
                    </label>
                    
                    <label>
                        <input type="checkbox" name="emailAlerts" checked={values.emailAlerts} onChange={handleChange} />
                        Send email alerts if project exceeds
                    </label>
                    <input type="number" name="alertThreshold" value={values.alertThreshold} onChange={handleChange} />
                </div>
            )}
            
        </div>
    );
};

export default Step2;
