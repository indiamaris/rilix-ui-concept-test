import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";


export function Shell (){
    return (
        <div id="wrapper">
            <Navigation />
            <div id="content-wrapper" className="d-flex flex-column justify-content-center  ">
                <div id="content">
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span> &copy;Rilix 2024</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
