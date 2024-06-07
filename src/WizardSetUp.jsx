import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Step1 from './Componets/Step1';
import Step2 from './Componets/Step2';
import Step3 from './Componets/Step3';
import Step4 from './Componets/Step4';
import './Wizard.css';

const ProjectSetupWizard = () => {
    const initialFormData = JSON.parse(localStorage.getItem('formData')) || {
        projectName: '',
        client: '',
        startDate: '',
        endDate: '',
        notes: '',
        projectType: 'Time & Materials',
        hourlyRate: '',
        budgetType: 'Hours per Person',
        budget: '',
        budgetResets: false,
        emailAlerts: false,
        alertThreshold: 80,
        view: 'List',
        permissions: 'Only Admins',
    };

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const theme = useTheme();

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleNext = () => {
        if (validateForm()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (activeStep === 0) {
            if (!formData.projectName) newErrors.projectName = 'Project name is required';
            if (!formData.client) newErrors.client = 'Client is required';
            if (!formData.startDate) newErrors.startDate = 'Start date is required';
            if (!formData.endDate) newErrors.endDate = 'End date is required';
        } else if (activeStep === 1) {
            if (!formData.hourlyRate) newErrors.hourlyRate = 'Hourly rate is required';
            if (!formData.budget) newErrors.budget = 'Budget is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const renderStep = () => {
        switch (activeStep) {
            case 0:
                return <Step1 handleChange={handleChange} values={formData} errors={errors} />;
            case 1:
                return <Step2 handleChange={handleChange} values={formData} errors={errors} />;
            case 2:
                return <Step3 handleChange={handleChange} values={formData} />;
            case 3:
                return <Step4 handleChange={handleChange} values={formData} />;
            default:
                return <Step1 handleChange={handleChange} values={formData} errors={errors} />;
        }
    };

    return (
        <div className="wizard-container">
            {renderStep()}
            <MobileStepper
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </div>
    );
};

export default ProjectSetupWizard;
