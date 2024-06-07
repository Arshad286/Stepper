import React from 'react';
 import './Step3.css';
 import logo1 from '../assets/img1.png'
 import logo2 from '../assets/img2.png'

 

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
    return (
        <div className="step-container">
            <h2>Select a view</h2>
            <div className="view-section">
                <button onClick={() => handleChange({ target: { name: 'view', value: 'List' } })} className={values.view === 'List' ? 'active' : ''}>
                    <img src={logo1} alt="List view" />
                    List
                </button>
                <button onClick={() => handleChange({ target: { name: 'view', value: 'Board' } })} className={values.view === 'Board' ? 'active' : ''}>
                    <img src={logo2} alt="Board view" />
                    Board
                </button>
            </div>
          
        </div>
    );
};

export default Step3;
