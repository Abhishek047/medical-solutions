'use client';
import { AlertTriangle } from 'react-feather';
import styles from './textInput.module.css';

export const TextInput = ({
  value,
  name,
  label,
  onChange,
  multiple,
  rows = 3,
  errorState = {},
}) => {
  const hasError = !!errorState[name];
  const errorMessage = errorState[name];
  if (multiple) {
    return (
      <div>
        <label
          className={`
        ${styles['custom-field']} 
        ${styles['one']}`}
        >
          <textarea
            className={`${value ? styles['dirty'] : ''}`}
            value={value}
            rows={rows}
            onChange={onChange}
            type="text"
            placeholder=""
          />
          <span className={styles['placeholder']}>{label}</span>
        </label>
      </div>
    );
  }
  return (
    <div>
      <label
        className={`
        ${styles['custom-field']} 
        ${styles['one']}`}
      >
        <input
          className={`${value ? styles['dirty'] : ''}`}
          value={value}
          onChange={onChange}
          type="text"
          placeholder=""
        />
        <span className={styles['placeholder']}>{label}</span>
        <span className={styles['error-message']}>
          {hasError && (
            <>
              <AlertTriangle
                className="feather-helperText"
                style={{
                  marginRight: 8,
                }}
              />{' '}
              {errorMessage}
            </>
          )}
        </span>
      </label>
    </div>
  );
};
