import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { fetchAccountData } from '../api/accountApi';
import { CollapsibleWidget } from '../components/CollapsibleWidget';
import type { AccountApiResponse } from '../types/account';

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
      <div className="flex justify-center py-20 text-content-primary dark:text-dark-content-primary">
        Loading data…
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(
        'mx-auto max-w-xl p-4 rounded-lg',
        'border border-danger bg-danger-10 text-danger-10',
      )}>
        {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8">
      <h1 className="text-2xl font-bold">
        Account Overview
      </h1>

      <CollapsibleWidget data={data} />
    </div>
  );
};
