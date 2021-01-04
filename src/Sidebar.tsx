import { Button, IconButton } from "@material-ui/core";
import "./sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import { SidebarOption } from "./SidebarOption";
import {
  AccessTime,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { opneSendMessage } from "./features/mailSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(opneSendMessage())}
      >
        compose
      </Button>
      <SidebarOption
        Icon={Inbox}
        title="Inbox"
        notification={54}
        selected={true}
      />
      <SidebarOption
        Icon={Star}
        title="Starred"
        notification={54}
        selected={false}
      />
      <SidebarOption
        Icon={AccessTime}
        title="Snoozed"
        notification={54}
        selected={false}
      />
      <SidebarOption
        Icon={LabelImportant}
        title="Importnt"
        notification={54}
        selected={false}
      />
      <SidebarOption
        Icon={NearMe}
        title="Sent"
        notification={54}
        selected={false}
      />
      <SidebarOption
        Icon={Note}
        title="Drafts"
        notification={54}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMore}
        title="More"
        notification={54}
        selected={false}
      />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
