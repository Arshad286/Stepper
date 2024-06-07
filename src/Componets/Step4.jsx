import React from 'react';
import everyone from '../assets/people.png';  
import admin from '../assets/admin.png';        
import vip from '../assets/assign.png'           

const Step4 = ({ handleChange, values }) => {
    return (
        <div className="step-container">
            <h2>Who can manage projects</h2>
            <p>Don't panic — You can also customize this permissions in settings</p>
            <div className="permissions-section">
                <button onClick={() => handleChange({ target: { name: 'permissions', value: 'Everyone' } })} className={values.permissions === 'Everyone' ? 'active' : ''}>
                    <img src={everyone} alt="Everyone" />
                    <div className="button-text">
                        <strong>Everyone</strong>
                        <p>All users can now see it, but guests cannot access the projects</p>
                    </div>
                </button>
                <button onClick={() => handleChange({ target: { name: 'permissions', value: 'Only Admins' } })} className={values.permissions === 'Only Admins' ? 'active' : ''}>
                    <img src={admin} alt="Only Admins" />
                    <div className="button-text">
                        <strong>Only Admins</strong>
                        <p>Only admins can manage everything</p>
                    </div>
                </button>
                <button onClick={() => handleChange({ target: { name: 'permissions', value: 'Specific people' } })} className={values.permissions === 'Specific people' ? 'active' : ''}>
                    <img src={vip} alt="Specific people" />
                    <div className="button-text">
                        <strong>Specific people</strong>
                        <p>Only some specific people can see it</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Step4;
