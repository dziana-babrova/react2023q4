import styles from './error-message.module.scss';

type ErrorMessageType = {
  text: string;
};

export const ErrorMessage = ({ text }: ErrorMessageType) => {
  return <div className={styles['error-message']}>{text}</div>;
};
