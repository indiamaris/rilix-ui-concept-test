import { BulletCard } from "src/components/cards/bulletCard";
import { Widget } from "src/components/cards/widget";
import { formatCurrency } from "src/lib/formatters/currency";

type LicencePageUIProps = {
    licenceLabel: number;
};



export function LicencePageUI({ licenceLabel }: LicencePageUIProps) {
    return (
        <div className="grid">

            <div className="g-col-lg-8 g-col-12">
                <Widget heading="all my licences" minHeight="500px" />
            </div>
        </div>
    );
}
