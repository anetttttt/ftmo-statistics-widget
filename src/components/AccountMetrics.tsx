import clsx from 'clsx';
import { formatCurrency } from '../utils/format';
import { InfoTooltip } from './designSystem/InfoTooltip';
import type { AccountData } from '../types/account';

type AccountMetricsProps = {
  data: AccountData;
};

export const AccountMetrics: React.FC<AccountMetricsProps> = ({ data }) => {
  const unrealizedPnL = data.equity - data.balance;

  const items = [
    {
      label: "Today's profit",
      description: 'The total profit or loss generated so far today, based on all closed and open positions.',
      value: data.profit,
      className: 'order-3 lg:order-1 col-span-2 lg:col-span-1',
    },
    {
      label: 'Equity',
      description: 'The real-time value of your account: balance plus the current profit or loss from open trades.',
      value: data.equity,
      className: 'order-1 lg:order-2',
    },
    {
      label: 'Unrealized PnL',
      description: 'The current profit or loss from open positions that haven’t been closed yet.',
      value: unrealizedPnL,
      className: 'order-2 lg:order-3',
    },
  ];

  return (
    <section className="grid gap-4 grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
      {items.map((item, index) => {
        const negativeValue = item.value < 0;

        return (
          <div
            key={index}
            className={clsx('flex flex-col gap-2', item.className)}
          >
            <p className={clsx(
              'flex items-center gap-2 text-sm text-content-secondary',
              'dark:text-dark-content-secondary',
            )}>
              {item.label}
              <InfoTooltip>{item.description}</InfoTooltip>
            </p>
            <div
              className={clsx(
                'flex items-center justify-center p-3 rounded-[4px]',
                negativeValue
                  ? 'bg-danger-10 text-danger'
                  : 'bg-success-10 text-success',
              )}
            >
              {formatCurrency(item.value, 2)}
            </div>
          </div>
        );
      })}
    </section>
  );
};
