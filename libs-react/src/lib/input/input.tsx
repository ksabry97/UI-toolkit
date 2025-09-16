import styles from './input.module.scss';

export type inputProps = {
  type: 'text' | 'email' | 'password' | 'number';
  value?: string | number;
  setValue: (value: string | number) => void;
};
export function Input({ value, setValue, type = 'text' }: inputProps) {
  return (
    <input
      className={styles.input}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      type={type}
    ></input>
  );
}

export default Input;
