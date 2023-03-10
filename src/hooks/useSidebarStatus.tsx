import { useEffect, useState } from "react";

const iniState = localStorage.getItem("sidebar-status");

const useSideBarStatus = () => {
  const [isCollpased, setIsCollapsed] = useState<boolean>(
    iniState === "collapsed"
  );

  useEffect(() => {
    localStorage.setItem(
      "sidebar-status",
      isCollpased ? "collapsed" : "expanded"
    );
  }, [isCollpased]);

  return [isCollpased, setIsCollapsed] as const;
};

export default useSideBarStatus;
