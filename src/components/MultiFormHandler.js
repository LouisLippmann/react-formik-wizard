import React, {useState} from 'react';
import {FormUserDetails} from "./FormUserDetails";
import {FormAddressDetails} from "./FormAddressDetails";
import {Confirm} from "./Confirm";
import {Success} from "./Success";

export const MultiFormHandler = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        street: '',
        postcode: '',
        city: ''
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);
    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    userData={userData}
                    setUserData={setUserData}
                    nextStep={nextStep}
                />
            );
        case 2:
            return (
                <FormAddressDetails
                    userData={userData}
                    setUserData={setUserData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <Confirm
                    userData={userData}
                    nextStep={nextStep}
                    prevStep={prevStep}/>
            );
        default:
            return <Success/>;
    }
};
