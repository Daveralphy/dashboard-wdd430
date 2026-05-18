import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Card } from '@/app/ui/dashboard/cards';

export const revalidate = 0;

export default async function Page() {
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);

  const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = cardData;

  return (
    <main>
      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>
      <RevenueChart revenue={revenue} />
      <LatestInvoices latestInvoices={latestInvoices} />
    </main>
  );
}
