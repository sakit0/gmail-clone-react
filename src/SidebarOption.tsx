import { SvgIconComponent } from "@material-ui/icons";
import { VFC } from "react";
import "./sidebarOption.css";

interface Props {
  Icon: SvgIconComponent;
  title: string;
  notification: number;
  selected: boolean;
}

export const SidebarOption: VFC<Props> = ({
  Icon,
  title,
  notification,
  selected,
}) => {
  return (
    <div className={`sidebarOption ${selected && "sideber--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{notification}</p>
    </div>
  );
};
