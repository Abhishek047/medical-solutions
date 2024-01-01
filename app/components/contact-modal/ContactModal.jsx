'use client';
import { useModalContext } from '@/app/context/contactModalContext';
import styles from './contactModal.module.css';
import { Modal } from '../ui/modal/Modal';
import { useState } from 'react';
import { TextInput } from '../ui/inputs/TextInput';
import { Typography } from '../ui/typography/Typography';
import { X } from 'react-feather';
import Button from '../ui/buttons/Button';

const validations = {
  name: (value) => {
    if (value.length < 3) {
      return 'Please enter a name more than 3 letters';
    }
  },
  email: (value) => {
    const regex = new RegExp(
      "^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    );
    if (!regex.test(value)) {
      return 'Please enter a valid email';
    }
  },
  number: (value) => {
    const regex = new RegExp(
      '^(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
    );
    if (!regex.test(value)) {
      return 'Please enter a valid number';
    }
  },
  message: (value) => {
    if (value.length < 3) {
      return 'Please enter a message more than 3 letters';
    }
  },
};

export const ContactModal = () => {
  const { isOpen, closeModal } = useModalContext();
  const [values, setValues] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });
  const [errorState, setErrorState] = useState({});
  const [processing, setProcessing] = useState(false);
  const handleValidation = ({ fieldName, newValue, isValidate }) => {
    const currentValidations = {
      ...errorState,
    };
    let message = '';
    switch (fieldName) {
      case 'name': {
        message = validations.name(newValue);
        break;
      }
      case 'number': {
        message = validations.number(newValue);
        break;
      }
      case 'email': {
        message = validations.email(newValue);
        break;
      }
      case 'message': {
        message = validations.message(newValue);
        break;
      }
    }
    if (message && (newValue || isValidate)) {
      currentValidations[fieldName] = message;
    } else {
      delete currentValidations[fieldName];
    }
    setErrorState(currentValidations);
  };
  const handleValueChange = (fieldName, newValue) => {
    if (fieldName) {
      const newFormData = { ...values };
      newFormData[`${fieldName}`] = newValue;
      setValues(newFormData);
      // perform-validation
      handleValidation({
        fieldName,
        newValue,
      });
    }
  };

  return (
    <Modal open={isOpen} handleClose={closeModal}>
      <div className={styles['contact-modal-container']}>
        <nav className={styles['top-nav']}>
          <div className={styles['nav-action']}>
            <Button onClick={closeModal}>
              <X className={styles['icon-styles']} />
            </Button>
          </div>
        </nav>

        <div className={styles['contact-modal-content']}>
          <Typography
            type="h2"
            gutterBottom
            color="black"
            className={styles['modal-heading']}
          >
            Contact us
          </Typography>
          <div className={styles['contact-modal-grid']} data-grid-size="12">
            <div
              className={styles['contact-modal-grid-item']}
              data-grid-item-size="6"
            >
              <TextInput
                value={values.name}
                onChange={(event) =>
                  handleValueChange('name', event.target.value)
                }
                name={'name'}
                label={'Name'}
                errorState={errorState}
              />
            </div>
            <div
              className={styles['contact-modal-grid-item']}
              data-grid-item-size="6"
            >
              <TextInput
                name={'number'}
                value={values.number}
                onChange={(event) =>
                  handleValueChange('number', event.target.value)
                }
                label={'Number'}
                errorState={errorState}
              />
            </div>
            <div className={styles['contact-modal-grid-item']}>
              <TextInput
                name={'email'}
                value={values.email}
                onChange={(event) =>
                  handleValueChange('email', event.target.value)
                }
                label={'Email'}
                errorState={errorState}
              />
            </div>
            <div className={styles['contact-modal-grid-item']}>
              <TextInput
                name={'message'}
                multiple={true}
                value={values.message}
                rows={3}
                onChange={(event) =>
                  handleValueChange('message', event.target.value)
                }
                label={'Message'}
                errorState={errorState}
              />
            </div>
            <div className={styles['contact-modal-grid-item']}>
              <Button
                className={styles['button-styles']}
                color="primary"
                type="filled"
              >
                <span>Submit</span>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles['contact-modal-image']}>
          <div className={styles['contact-modal-image-background']} />
        </div>
      </div>
    </Modal>
  );
};
