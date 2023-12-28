import { Message } from "./styles";

interface ErrorMessageProps {
  text: string;
}

function ErrorMessage({ text }: ErrorMessageProps) {
  return <Message>{text}</Message>;
}

export default ErrorMessage;
