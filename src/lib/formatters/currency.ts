// TODO: somehow get the locale and currency of the customer
const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function formatCurrency(value: number) {
    return currencyFormatter.format(value);
}
