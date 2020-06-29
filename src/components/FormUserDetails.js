import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('Vorname wird benötigt.'),
    lastName: yup
        .string()
        .required('Nachname wird benötigt.'),
    email: yup
        .string()
        .email('Die E-Mail-Adresse ist ungültig.')
        .required('E-Mail wird benötigt.'),
    mobile: yup
        .string()
        .required('Mobilnummer wird benötigt.')
        .matches(/([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/, 'Mobilnummer ungültig'),
});

export const FormUserDetails = ({
                                    userData,
                                    setUserData,
                                    nextStep,
                                    prevStep
                                }) => {
    return (
        <>
                <div className="container">
                    <Formik
                        initialValues={userData}
                        onSubmit={values => {
                            setUserData(values);
                            nextStep();
                        }}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validationSchema={validationSchema}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <h2>
                                    Kontaktinformationen
                                </h2>
                                <div className="field">
                                    <label className="error-message"><ErrorMessage className="error-message" name="firstName"/></label>
                                    <Field
                                        className="field__input"
                                        name='firstName'
                                        label='Vorname *'
                                        placeholder='Vorname *'
                                        error={touched.firstName && errors.firstName}
                                    />
                                </div>
                                <div className="field">
                                    <label className="error-message"><ErrorMessage className="error-message" name="lastName"/></label>
                                    <Field
                                        className="field__input"
                                        name='lastName'
                                        label='Nachname *'
                                        placeholder='Nachname *'
                                        error={touched.lastName && errors.lastName}
                                    />
                                </div>
                                <div className="field">
                                    <label className="error-message"><ErrorMessage className="error-message" name="email"/></label>
                                    <Field
                                        className="field__input"
                                        type='email'
                                        name='email'
                                        label='E-Mail *'
                                        placeholder="E-Mail *"
                                        error={touched.email && errors.email}
                                    />
                                </div>
                                <div className="field">
                                    <label className="error-message"><ErrorMessage className="error-message" name="mobile"/></label>
                                    <Field
                                        className="field__input"
                                        type='mobile'
                                        name='mobile'
                                        label='Mobilnummer *'
                                        placeholder="Mobilnummer *"
                                        error={touched.mobile && errors.mobile}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-for" type="submit">
                                        weiter
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
        </>
    );
};
