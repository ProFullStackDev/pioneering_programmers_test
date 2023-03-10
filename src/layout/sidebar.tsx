import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import SideMenu from "../components/side-menu";
import useSideBarStatus from "../hooks/useSidebarStatus";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useSideBarStatus();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`sidebar sidebar-${isCollapsed ? "collapsed" : "expanded"}`}
    >
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isCollapsed ? (
          <FontAwesomeIcon icon={solid("circle-right")} />
        ) : (
          <FontAwesomeIcon icon={solid("circle-left")} />
        )}
      </div>
      <br />
      <br />
      <SideMenu text="Page 1" onlyIcon={isCollapsed} link="first" />
      <br />
      <SideMenu text="Page 2" onlyIcon={isCollapsed} link="second" />
    </div>
  );
};

export default SideBar;
