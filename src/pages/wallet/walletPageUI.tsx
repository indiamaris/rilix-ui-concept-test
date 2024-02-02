import { spawn } from "child_process";
import { BulletCard } from "src/components/cards/bulletCard";
import { Card } from "src/components/cards/card";
import { Widget } from "src/components/cards/widget";
import { Header } from "src/components/header/header";
import { formatCurrency } from "src/lib/formatters/currency";

// recebe: 
// Ano atual 
// mes atual 
type DashboardPageUIProps = {
    pageName: string;
    tickets: number;
    ticketsValue: number;
    ridesThisMonth: number;
};

const topCardsGridClass = "g-col-lg-4 g-col-12";
const pageName ='My Rilix wallet'

export function WalletPageUI({ tickets, ticketsValue, ridesThisMonth }: DashboardPageUIProps) {
    
    return (


        <>
            <Header pageTitle={pageName}/>
            <div className="grid">   
            <div className="g-col-lg-6 g-col-12 ">
                            <Card heading={'TICKETS BALANCE DETAILS'} color="info" minHeight="25vh" />
                </div>
                    <div className="g-col-lg-6 g-col-12 ">
                            <Card heading={'TICKETS RECORD IN JANUARY 2024  '} color="info" minHeight="25vh" />
                </div>
                    <div className="g-col-12 ">
                            <Card heading={'WALLET RECORDS'} color="info" minHeight="50vh" />
                    </div>
                
           
        </div></>
    );
}





 
