import { spawn } from "child_process";
import { BulletCard } from "src/components/cards/bulletCard";
import { Widget } from "src/components/cards/widget";
import { Header } from "src/components/header/header";
import { formatCurrency } from "src/lib/formatters/currency";

type DashboardPageUIProps = {
    tickets: number;
    ticketsValue: number;
    ridesThisMonth: number;
};

const topCardsGridClass = "g-col-lg-4 g-col-12";

export function DashboardPageUI({ tickets, ticketsValue, ridesThisMonth }: DashboardPageUIProps) {
    return (

        <>
            <Header pageTitle="DashBoard"/>
            <div className="grid">
                
            <div className={topCardsGridClass}>
                <BulletCard heading="Saldo tickets atual" icon="fa-clipboard-list">{`${tickets} Tickets`}</BulletCard>
            </div>
            <div className={topCardsGridClass}>
                <BulletCard
                    heading="CONSUMERS JANUARY 2024"
                    icon="fa-dollar-sign"
                >{`Total ${ridesThisMonth} rides`}</BulletCard>
            </div>
            <div className={topCardsGridClass}>
                <BulletCard heading="My tickets" icon="fa-ticket-alt">{`${formatCurrency(ticketsValue)}`}</BulletCard>
            </div>
            <div className="g-col-lg-8 g-col-12">
                <Widget heading="My Wallet in 2024" minHeight="500px" />
            </div>
            <div className="g-col-lg-4 g-col-12">
                <Widget heading="Scenarios in January" minHeight="500px" />
            </div>
            <div className="g-col-lg-8 g-col-md-12">
                <Widget heading="Consume 2024" minHeight="500px" />
            </div>
            <div className="g-col-lg-4 g-col-md-12">
                <Widget heading="Top Hight and Low Active Licenses" minHeight="500px" />
            </div>
        </div></>
    );
}
