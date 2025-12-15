import { Caption } from "../typography";

const ErrorMessages = ({ message, error }) => {
  return (
    <section className={`h-50 w-full border-accent border p-20 justify-center col-(--full-col) self-center text-center ${error}`}>
      <Caption text={message} />
    </section>
  );
};

export default ErrorMessages;
