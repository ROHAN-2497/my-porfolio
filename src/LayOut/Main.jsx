import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav/SideNav";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <SideNav></SideNav>
        </div>
    );
};

export default Main;