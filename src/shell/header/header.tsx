import { UserProfile } from "./userProfile";

export function Header() {
    return (
        <div className="d-flex justify-content-between py-3">
            <div className="d-flex d-flex-column align-items-center">
                <span className="gray">Dashboard</span>
            </div>
            <div className="d-flex d-flex-column align-items-center">
                <UserProfile />
            </div>
        </div>
    );
}
