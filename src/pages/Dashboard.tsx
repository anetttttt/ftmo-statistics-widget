import { useEffect, useState } from 'react';
import type { AccountApiResponse } from '../types/account';
import { fetchAccountData } from '../api/accountApi';
import { CollapsibleWidget } from '../components/CollapsibleWidget';

export const Dashboard = () => {
  const [data, setData] = useState<AccountApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        const res = await fetchAccountData();
        if (!mounted) return;
        setData(res);
      } catch {
        if (!mounted) return;
        setError('Failed to load account data');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-slate-500">
        Loading data…
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-xl rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8">
      <h1 className="text-2xl font-bold">Account Overview</h1>

      <CollapsibleWidget data={data} />
    </div>
  );
};
