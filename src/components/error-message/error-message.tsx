import './error-message.scss';

type ErrorMessageType = {
  text: string;
};

export const ErrorMessage = ({ text }: ErrorMessageType) => {
  return <div className="error-message">{text}</div>;
};
