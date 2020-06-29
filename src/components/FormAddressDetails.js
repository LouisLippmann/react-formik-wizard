import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field, ErrorMessage} from 'formik';



export const FormPersonalDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep
}) => {
  const [direction, setDirection] = useState('back');
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        <Form className={classes.form}>
          <Field
            name='occupation'
            label='Occupation'
            margin='normal'
            as={TextField}
          />
          <Field name='city' label='City' margin='normal' as={TextField} />
          <Field name='bio' label='Bio' margin='normal' as={TextField} />
          <div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('back')}
            >
              Back
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('forward')}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

FormPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};

<div className="section section-address">
  <div className="section__header">
    <h2>Addressinformationen</h2>
  </div>
  <div className="section__content">
    <div className="fieldset">
      <div className="field field--half">
        <label className="error-message"><ErrorMessage
            name="firstName"/></label>
        <Field
            className={
              'field__input' + (touched.firstName ? (errors.firstName ? ' field__input--error' : '') : '')
            } name='firstName'
            label='Vorname *'
            margin='normal'
            placeholder='Vorname *'
            error={touched.firstName && errors.firstName}
        />
      </div>
      <div className="field field--half">
        <label className="error-message"><ErrorMessage name="lastName"/></label>
        <Field
            className={
              'field__input' + (touched.lastName ? (errors.lastName ? ' field__input--error' : '') : '')
            }
            name='lastName'
            label='Nachname *'
            margin='normal'
            placeholder='Nachname *'
            error={touched.lastName && errors.lastName}
        />
      </div>
      <div className="field">
        <label className="error-message"><ErrorMessage name="address"/></label>
        <Field
            className={
              'field__input' + (touched.address ? (errors.address ? ' field__input--error' : '') : '')
            } name='address'
            label='Adresse *'
            margin='normal'
            placeholder='Straße + Hausnummer *'
            error={touched.address && errors.address}
        />
      </div>
      <div className="field">
        <Field
            className={
              'field__input' + (touched.apartment ? (errors.apartment ? ' field__input--error' : '') : '')
            } name='apartment'
            label='Hinterhof, Stockwerk, (optional)'
            margin='normal'
            placeholder='Hinterhof, Stockwerk, (optional)'
            error={touched.apartment && errors.apartment}
        />
      </div>
      <div className="field field--half">
        <label className="error-message"><ErrorMessage name="postcode"/></label>
        <Field
            className={
              'field__input' + (touched.postcode ? (errors.postcode ? ' field__input--error' : '') : '')
            } name='postcode'
            label='PLZ *'
            margin='normal'
            placeholder='PLZ *'
            error={touched.postcode && errors.postcode}
        />
      </div>
      <div className="field field--half">
        <label className="error-message"><ErrorMessage name="city"/></label>
        <div className="field__input-wrapper">
          <Field
              className={
                'field__input' + (touched.city ? (errors.city ? ' field__input--error' : '') : '')
              }
              name='city'
              label='Stadt *'
              margin='normal'
              placeholder='Stadt *'
              error={touched.city && errors.city}
          />
        </div>
      </div>
      <div className="field">
        <label className="error-message"><ErrorMessage name="country"/></label>
        <div className="field__input-wrapper">
          <Field as="select"
                 className={
                   'field__input' + (touched.country ? (errors.country ? ' field__input--error' : '') : '')
                 }
                 name='country'
                 label='Land *'
                 margin='normal'
                 placeholder='Land *'
                 error={touched.country && errors.country}
          >
            <option value="Deutschland">Deutschland</option>
            <option value="Österreich">Österreich</option>
            <option value="Schweiz">Schweiz</option>
            <option value="Niederlande">Niederlande</option>
          </Field>
        </div>
      </div>
      <div className="field">
        <label className="error-message"><ErrorMessage className="error-message" name="agbs"/></label>
        <div className="checkbox__input">
          <Field
              className="input-checkbox"
              type='checkbox'
              name='agbs'
              label='agbs'
              margin='normal'
              id="agbs"
              error={touched.agbs && errors.agbs}
          />
        </div>
        <label className="checkbox__label" htmlFor="agbs">
          Ich stimme den <a className="agb-link" href="https://www.google.com" target="_blank">AGB</a> zu.
        </label>
      </div>
    </div>
  </div>
</div>
<div>