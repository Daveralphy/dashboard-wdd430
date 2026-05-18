import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

export const revalidate = 0;

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <RevenueChart revenue={revenue} />
      <LatestInvoices latestInvoices={latestInvoices} />
    </main>
  );
}
