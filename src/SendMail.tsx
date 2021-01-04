import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./sendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

interface Inputs {
  to: string;
  subject: string;
  message: string;
}

export const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        <p>{errors.to && <p className="sendMail__error">To is Required!</p>}</p>
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        <p>
          {errors.subject && (
            <p className="sendMail__error">Subject is Required!</p>
          )}
        </p>
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          ref={register({ required: true })}
        />
        <p>
          {errors.message && (
            <p className="sendMail__error">Message is Required!</p>
          )}
        </p>
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
