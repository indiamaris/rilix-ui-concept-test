import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";
import { Header } from "./header/header";

export function Shell() {
    return (
        <div id="wrapper">
            <Navigation />
            <div id="content-wrapper" className="d-flex flex-column justify-content-center  ">
                <div id="content">
                    <div className="container-fluid">
                        <Header />
                        <Outlet />
                    </div>
                </div>
                <footer className="sticky-footer bg-white mt-4">
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
