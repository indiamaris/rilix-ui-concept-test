import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

export function UserProfile() {
    return (
        <>
            <UncontrolledDropdown className="me-2">
                <DropdownToggle color="light" caret>
                    Douglas McGee
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                        Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray"></i>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <div className="size-4">
                <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
            </div>
        </>
    );
}
