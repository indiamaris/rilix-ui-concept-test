import { ReactNode } from "react";
import { propsWithClass } from "src/lib/className";
import { BootstrapColor, PropsOf } from "src/types";

type WidgetProps = {
    heading: string;
    headingAction?: ReactNode;
    color?: BootstrapColor;
    minHeight?: string;
} & PropsOf<"div">;
export function Widget({ children, heading, headingAction, minHeight, ...props }: WidgetProps) {
    return (
        <div {...propsWithClass(props, "card shadow h-100")}>
            <div className="card-header py-3  d-flex flex-row align-items-center justify-content-between ">
                <h6 className="m-0 fw-bold text-primary">{heading}</h6>
                {headingAction}
            </div>
            <div className="card-body" style={{ minHeight }}>
                {children}
            </div>
        </div>
    );
}
