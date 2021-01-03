import { SvgIconComponent } from "@material-ui/icons";
import { VFC } from "react";
import "./section.css";

interface Props {
  Icon: SvgIconComponent;
  selected: boolean;
  color: string;
  title: string;
}

export const Section: VFC<Props> = ({ Icon, selected, color, title }) => {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};
