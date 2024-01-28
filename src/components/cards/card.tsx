import { propsWithClass } from "src/lib/className";
import { BootstrapColor, PropsOf } from "src/types";

type CardProps = {
    color?: BootstrapColor;
} & PropsOf<"div">;
export function Card({ children, color, ...props }: CardProps) {
    return (
        <div {...propsWithClass(props, "card shadow h-100", `border-left-${color}`)}>
            <div className="card-body">{children}</div>
        </div>
    );
}
