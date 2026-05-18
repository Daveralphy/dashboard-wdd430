import { fetchRevenue } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';

export default async function Page() {
  const revenue = await fetchRevenue();

  return (
    <main>
      <RevenueChart revenue={revenue} />
    </main>
  );
}
