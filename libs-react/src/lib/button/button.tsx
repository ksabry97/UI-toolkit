import styles from './button.module.scss';

export type ButtonProps = {
  content?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
};

export function Button({ content, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
