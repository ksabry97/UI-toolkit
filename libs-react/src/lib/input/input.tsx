import { useState } from 'react';
import '@ui-kit-workspace/libs-shared';
import styles from './input.module.scss';

interface Validator {
  minlength?: number;
  maxlength?: number;
  required?: boolean;
}

export type InputProps = {
  type?: 'text' | 'email' | 'password' | 'number';
  value: string | number;
  setValue: (value: string | number) => void;
  onError?: (errorMessage: string) => void;
  validator?: Validator;
  label?: string;
};

export function Input({
  value,
  setValue,
  type = 'text',
  validator,
  onError,
  label,
}: InputProps) {
  const [error, setError] = useState<string>('');

  function validate(val: string | number) {
    let message = '';

    if (validator?.required && !val.toString().trim()) {
      message = 'This field is required';
    } else if (
      validator?.minlength &&
      val.toString().length < validator.minlength
    ) {
      message = `Minimum length is ${validator.minlength}`;
    } else if (
      validator?.maxlength &&
      val.toString().length > validator.maxlength
    ) {
      message = `Maximum length is ${validator.maxlength}`;
    }

    setError(message);
    if (message && onError) onError(message);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    validate(newValue);
  }

  return (
    <div className={styles.formContainer}>
      {label && <label className="text-gray-500">{label}</label>}
      <input
        className={`${styles.input} ${error ? styles['invalid'] : ''}`}
        onChange={handleChange}
        onBlur={() => validate(value)}
        value={value}
        type={type}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default Input;
