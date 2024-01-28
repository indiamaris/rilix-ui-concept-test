import { propsWithClass } from "src/lib/className";
import { PropsOf } from "src/types";

type NavigationCardProps = PropsOf<"div">;
export function NavigationCard(props: NavigationCardProps) {
    return (
        <div {...propsWithClass(props, "sidebar-card d-none d-lg-flex")}>
            <img className="sidebar-card-illustration mb-3" src="img/undraw_rocket.svg" alt="..." />
            <p className="text-center mb-2">
                <strong>Coins are always on Sale</strong> The more you buy, the more discount you get! Visit our store
                and shop like a profit pro!
            </p>
            <a className="btn btn-success btn-sm" href="./pages/sale.html">
                Buy More, Pay Less!
            </a>
        </div>
    );
}
