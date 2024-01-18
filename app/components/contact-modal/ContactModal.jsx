'use client';
import { useModalContext } from '@/app/context/contactModalContext';
import styles from './contactModal.module.css';
import { Modal } from '../ui/modal/Modal';
import { useState } from 'react';
import { TextInput } from '../ui/inputs/TextInput';
import { Typography } from '../ui/typography/Typography';
import { Send, X } from 'react-feather';
import Button from '../ui/buttons/Button';
import svg from '../../../public/images/contact-us.svg';
import { SHOW_CONTACT, validations } from './helpers';

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
                <Send className={styles['button-icon']} />
              </Button>
            </div>
            <div
              className={`${styles['contact-modal-grid-item']} ${styles['contact-modal-icon']}`}
            >
              {SHOW_CONTACT.map((item) => (
                <div
                  className={styles['contact-modal-icon-item_icon-container']}
                >
                  <item.icon
                    className={styles['contact-modal-icon-item_icon']}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['contact-modal-image']}>
          <div className={styles['contact-modal-image-background']} />
          <img
            className={styles['modal-image']}
            alt="contact-image"
            src={svg.src}
          />
        </div>
      </div>
    </Modal>
  );
};
