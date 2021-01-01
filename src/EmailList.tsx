import { Checkbox, IconButton } from "@material-ui/core";
import { ArrowDropDown, MoreVert, Redo } from "@material-ui/icons";
import { VFC } from "react";
import "./emailList.css";
export const EmailList = () => {
  return (
    <div className="emailListq">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
