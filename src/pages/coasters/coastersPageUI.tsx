import { Header } from "src/components/header/header";
import { Card } from "src/components/cards/card";


type CoastersPageUIProps = {
    licenceLabel: number;
};

const pageName = " All my rilix coasters"

export function CoastersPageUI({ licenceLabel }: CoastersPageUIProps) {
    return (<>
    <Header pageTitle="My Rilix Coasters" />
        <div className="grid">                
            <div className=" g-col-12">
                <Card heading={pageName} color="info" minHeight="85vh" />
            </div>
        </div></>
    );
}
