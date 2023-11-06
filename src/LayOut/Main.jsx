import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navber></Navber>
        </div>
    );
};

export default Main;