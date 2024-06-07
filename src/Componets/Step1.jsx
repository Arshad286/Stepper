import React from 'react';
import './Step1.css';

const Step1 = ({ handleChange, values, errors }) => {
    return (
        <div className="step-container">
            <h2>Create a project</h2>
            <label>Project name</label>
            <input type="text" name="projectName" value={values.projectName} onChange={handleChange} placeholder="Enter project name here" />
            {errors.projectName && <p className="error">{errors.projectName}</p>}
            
            <label>Client</label>
            <div className="client-section">
                <select name="client" value={values.client} onChange={handleChange}>
                    <option value="" disabled>Select a client</option>
                    <option value="Client1">Client1</option>
                    <option value="Client2">Client2</option>
                </select>
                <button className="new-client-button">+ New Client</button>
            </div>
            {errors.client && <p className="error">{errors.client}</p>}
            
            <label>Dates</label>
            <div className="date-section">
                <input type="date" name="startDate" value={values.startDate} onChange={handleChange} />
                <span> - </span>
                <input type="date" name="endDate" value={values.endDate} onChange={handleChange} />
            </div>
            {errors.startDate && <p className="error">{errors.startDate}</p>}
            {errors.endDate && <p className="error">{errors.endDate}</p>}
            
            <label>Notes</label>
            <textarea name="notes" value={values.notes} onChange={handleChange} placeholder="Optional"></textarea>
        </div>
    );
};

export default Step1;
