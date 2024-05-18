import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navitem from "./Navitem";
export default function Mainpage() {
  return (
    <div className="container main-section">
     <div className="row">
        <div className="col-md-2">
          <Navitem/>
        </div>
        <div className="col-md-10">
            <Outlet/>
        </div>
     </div>
     <Footer/>
    </div>
  );
}
