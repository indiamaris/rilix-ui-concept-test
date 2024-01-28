import { propsWithClass } from "src/lib/className";
import { PropsOf } from "src/types";

export function RoundButton(props: PropsOf<"button">) {
    return <button {...propsWithClass(props, "rounded-circle border-0")} />;
}
