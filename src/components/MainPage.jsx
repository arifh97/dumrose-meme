import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navitem from "./Navitem";
export default function Mainpage() {
  return (
    <div className="main-section h-100">
     <div className="row align-items-center mainRow">
        <div className="col-md-2">
          <Navitem/>
        </div>
        <div className="col-md-10">
          <div className="d-flex align-items-center justify-content-center">
            <Outlet/>
          </div>
        </div>
     </div>
     <Footer/>
    </div>
  );
}
