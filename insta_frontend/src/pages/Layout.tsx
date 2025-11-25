import { Outlet } from "react-router-dom";
const Layout = () =>{
    return (
        <main className = "text-center font-roboto">
            <Outlet/>
        </main>
    );
};

export default Layout;