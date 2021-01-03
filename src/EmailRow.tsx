import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { VFC } from "react";
import { useHistory } from "react-router-dom";
import "./emailRow.css";

interface Props {
  id?: number;
  title: string;
  subject: string;
  description: string;
  time: string;
}

export const EmailRow: VFC<Props> = ({
  id,
  title,
  subject,
  description,
  time,
}) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow__description">{time}</p>
    </div>
  );
};
