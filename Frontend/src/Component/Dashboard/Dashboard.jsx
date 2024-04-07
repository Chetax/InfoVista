import Navbar from "./Navbar.jsx/Navbar";
import { Route,Routes } from "react-router-dom";
import Profile from "./Profile";
import CreatNew from "./CreatNew";
import ManageNews from "./ManageNews";
import Performance from "./Performance";
function Dashboard() {
    return ( <>

            <Navbar/>
            <Routes>
         <Route path="/Profile" element={<Profile/>}></Route>
         <Route path="/CreatNew" element={<CreatNew/>}></Route>
         <Route path="/ManageNews" element={<ManageNews/>}></Route>
         <Route path="/Performance" element={<Performance/>}></Route>
            </Routes>


    </>);
}

export default Dashboard;