import { Header } from "src/components/header/header";
import { Card } from "src/components/cards/card";
type LicencesPageUIProps = {
    licenceLabel: number;
};

const pageName = "all my licences"

export function LicencesPageUI({ licenceLabel }: LicencesPageUIProps) {
    return (<>
    <Header pageTitle="My Rilix Licences" />
        <div className="grid">                
            <div className=" g-col-12">
                <Card heading={pageName} color="info" minHeight="85vh" />
            </div>
        </div></>
    );
}
