import { RoundButton } from "src/components/btns/roundButton";
import { Nav, NavItem } from "reactstrap";
import { rilixIcon } from "./navigation.module.css";
import { Link } from "react-router-dom";
import { PropsOf } from "src/types";
import { propsWithClass } from "src/lib/className";
import { NavigationCard } from "./navigation/navigationCard";
import { useState } from "react";
import classNames from "classnames";

function Divider(props: PropsOf<"hr">) {
    return <hr {...propsWithClass(props, "sidebar-divider")} />;
}

export function Navigation() {
    const [toggled, setToggled] = useState(false);
    return (
        <nav className="bg-gradient-primary">
            <Nav className={classNames("navbar-nav sidebar sidebar-dark accordion", { toggled })}>
                <Link className="mt-4 sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <img src="./img/rilix-logo-white.svg" alt="Rilix logo" className={rilixIcon} />
                </Link>

                <Divider className="mb-0 mt-3" />

                <NavItem>
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        Dashboard
                    </Link>
                </NavItem>

                <Divider />
                <div className="sidebar-heading">Mind your business</div>

                <NavItem>
                    <Link className="nav-link" to="/licences">
                        <i className="fas fa-fw fa-id-card"></i>
                        Licences
                    </Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" to="coasters">
                        <i className="fas fa-fw fa-car-alt"></i>
                        Coasters
                    </Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" to="wallet">
                        <i className="fas fa-fw fa-wallet"></i>
                        Wallet
                    </Link>
                </NavItem>
                   <NavItem>
                    <Link className="nav-link" to="me">
                        <i className="fas fa-fw fa-rss"></i>
                        Profile
                    </Link>
                </NavItem>

                <Divider />

                <div className="sidebar-heading">Invest in your business</div>

                <NavItem>
                    <Link className="nav-link" to="store">
                        <i className="fas fa-fw fa-cart-plus"></i>
                        Store
                    </Link>
                </NavItem>
                    <NavItem>
                    <Link className="nav-link" to="news">
                        <i className="fas fa-fw fa-rss"></i>
                        News
                    </Link>
                </NavItem>

                <Divider />

                <div className="text-center">
                    <RoundButton className="sidebarToggle" id="" onClick={() => setToggled(!toggled)} />
                </div>

                {!toggled && <NavigationCard />}
            </Nav>
        </nav>
    );
}
