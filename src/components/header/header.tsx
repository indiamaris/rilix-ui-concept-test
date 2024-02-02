import { UserProfile } from "./userProfile";
type headerProps ={
    pageTitle: string;
}

export function Header({pageTitle}:headerProps) {
    return (
        <div className="d-flex justify-content-between py-3 px-2">
            <div className="d-flex d-flex-column align-items-center">
                <span className="gray  ">{pageTitle}</span>
            </div>
            <div className="d-flex d-flex-column align-items-center">
                <UserProfile />
            </div>
        </div>
    );
}
