import React from 'react';

export const Confirm = ({userData, prevStep, nextStep}) => {
    return (
        <>
            <div className="container">
                <ul className="confirm-list">
                    <li>
                        <h3>Vorname</h3>
                        <span>{userData.firstName}</span>
                    </li>
                    <li>
                        <h3>Nachname</h3>
                        <span>{userData.lastName}</span>
                    </li>
                    <li>
                        <h3>E-Mail</h3>
                        <span>{userData.email}</span>
                    </li>
                    <li>
                        <h3>Mobilnummer</h3>
                        <span>{userData.mobile}</span>
                    </li>
                    <li>
                        <h3>Adresse</h3>
                        <span>{userData.address}</span>
                    </li>
                    <li>
                        <h3>PLZ</h3>
                        <span>{userData.postcode}</span>
                    </li>
                    <li>
                        <h3>Stadt</h3>
                        <span>{userData.city}</span>
                    </li>
                </ul>
                <div>
                    <button className="btn btn-for" onClick={() => nextStep()}
                    >
                        weiter
                    </button>
                    <button className="btn btn-back" onClick={() => prevStep()}>
                        zurück
                    </button>
                </div>
            </div>
        </>
    );
};
