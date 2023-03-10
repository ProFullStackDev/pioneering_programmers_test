import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  text: string;
  onlyIcon: boolean;
  link: string;
};

const SideMenu: React.FC<Props> = ({ text, onlyIcon, link }) => {
  return (
    <Link to={link} className="sidebar-menu">
      {onlyIcon && <span className="tooltip">{text}</span>}
      <FontAwesomeIcon icon={solid("file-lines")} />
      {!onlyIcon && ` ${text}`}
    </Link>
  );
};

export default SideMenu;
