import classNames from "classnames";
import { PropsOfComponent } from "src/types";
import { Card } from "./card";

type BulletCardProps = {
    heading: string;
    icon: string;
} & PropsOfComponent<typeof Card>;
export function BulletCard({ heading, children, color = "info", icon, ...props }: BulletCardProps) {
    return (
        <Card {...props} color={color}>
            <div className="row no-gutters align-items-center">
                <div className="col">
                    <div className={classNames("text-xs fw-bold text-uppercase mb-1", `text-${color}`)}>{heading}</div>
                    {/* <div className="row no-gutters align-items-center">
                            <div className="col-auto"> */}
                    <div className="h5 mb-0 mr-3 fw-bold text-gray-800">{children}</div>
                    {/* </div>
                        </div> */}
                </div>
                <div className="col-auto">
                    <i className={classNames("fas fa-2x text-gray-300", icon)}></i>
                </div>
            </div>
        </Card>
    );
}
