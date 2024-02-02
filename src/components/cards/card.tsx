import { propsWithClass } from "src/lib/className";
import { BootstrapColor, PropsOf } from "src/types";

type CardProps = {
    minHeight: string;
    heading: string;
    color?: BootstrapColor;
} & PropsOf<"div">;
export function Card({ children, color,minHeight,heading, ...props }: CardProps) {
    return (
        <div {...propsWithClass(props, "card shadow h-100 p-2", `border-left-${color}`)}>
           
               <h6 {...propsWithClass(props, "m-2 fw-bold text-primary text-xl font-weight-bold text-uppercase", `text-${color}`)}>{heading}</h6> <div className="card-body" style={{ minHeight }}>{children}</div>
        </div>
    );
}

