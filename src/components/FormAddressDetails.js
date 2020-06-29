import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    address: yup
        .string()
        .required('Stadt wird benötigt.'),
    postcode: yup
        .string()
        .required('PLZ wird benötigt.')
        .matches(/(^\s*(\d{5})\s*$)/, 'keine gültige Postleitzahl'),
    city: yup
        .string()
        .required('Stadt wird benötigt.')
});

export const FormAddressDetails = ({
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
                            <h2>Addressinformationen</h2>
                            <div className="field">
                                <label className="error-message"><ErrorMessage className="error-message"
                                                                               name="address"/></label>
                                <Field
                                    className="field__input"
                                    name='address'
                                    label='Adresse *'
                                    placeholder='Adresse *'
                                    error={touched.address && errors.address}
                                />
                            </div>
                            <div className="field">
                                <label className="error-message"><ErrorMessage className="error-message"
                                                                               name="postcode"/></label>
                                <Field
                                    className="field__input"
                                    name='postcode'
                                    label='PLZ *'
                                    margin='normal'
                                    placeholder='PLZ *'
                                    error={touched.postcode && errors.postcode}
                                />
                            </div>
                            <div className="field">
                                <label className="error-message"><ErrorMessage className="error-message"
                                                                               name="city"/></label>
                                <Field
                                    className="field__input"
                                    name='city'
                                    label='Stadt *'
                                    margin='normal'
                                    placeholder='Stadt *'
                                    error={touched.city && errors.city}
                                />
                            </div>
                            <div>
                                <button className="btn btn-for" type="submit">
                                    weiter
                                </button>
                                <button className="btn btn-back" onClick={() => prevStep()}>
                                    zurück
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};
