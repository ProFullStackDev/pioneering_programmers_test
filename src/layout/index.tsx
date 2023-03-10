import Header from "./header";
import SideBar from "./sidebar";
import "../styles/layout.css";

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
