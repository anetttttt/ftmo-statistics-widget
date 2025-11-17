import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { formatCurrency } from '../utils/format';
import { Badge } from './designSystem/Badge';
import { Switch } from './designSystem/Switch';
import { AccountMetrics } from '../components/AccountMetrics';
import { BalanceChart } from '../components/BalanceChart';
import { Key } from './designSystem/Icons/Key';
import { Chart } from './designSystem/Icons/Chart';
import { Live } from './designSystem/Icons/Live';
import { Analysis } from './designSystem/Icons/Analysis';
import { Mentor } from './designSystem/Icons/Mentor';
import type { AccountApiResponse } from '../types/account';

type CollapsibleWidgetProps = {
  data: AccountApiResponse;
};

export const CollapsibleWidget: React.FC<CollapsibleWidgetProps> = ({
  data,
}) => {
  const [hidden, setHidden] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>('0px');
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (hidden) {
      setMaxHeight('0px');
    } else {
      const scrollHeight = contentRef.current.scrollHeight;
      setMaxHeight(`${scrollHeight}px`);
    }
  }, [hidden]);

  const summaryDataItems = [
    { label: 'Balance', value: formatCurrency(data.account.balance, 0) },
    { label: 'End', value: '–' },
    { label: 'Result', value: 'Ongoing', cls: 'text-primary' },
  ];

  const accountDataItems = [
    { label: 'Credentials', icon: <Key /> },
    { label: 'Metrix', icon: <Chart /> },
    { label: 'Live MetriX', icon: <Live /> },
    { label: 'Mentor', icon: <Mentor /> },
    { label: 'Analysis', icon: <Analysis /> },
  ];

  return (
    <section className="flex flex-col bg-white dark:bg-dark-bcg-secondary rounded-[4px] px-5">
      {/* ----- Widget – Header ----- */}
      <div className="flex flex-col gap-3 pt-5">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Badge variant="success">Ongoing</Badge>
            <Badge variant="primary">FTMO Challenge</Badge>
          </div>

          <div className="flex gap-3 relative ">
            <span
              className={clsx(
                'text-content-tertiary hidden lg:inline-block',
                'dark:text-dark-content-tertiary',
              )}
            >
              {hidden ? 'Hidden' : 'Visible'}
            </span>
            <Switch
              checked={hidden}
              onCheckedChange={setHidden}
            />
          </div>
        </div>

        <p className="flex gap-2">
          <span className="text-content-secondary dark:text-dark-content-secondary">
            Login:
          </span>
          <span className="font-semibold">
            {data.account.login}
          </span>
        </p>
      </div>

      {/* ----- Widget – Body ----- */}
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out pb-5"
      >
        <div className={clsx(
          'transition-opacity duration-200 pt-5',
          hidden ? 'opacity-0' : 'opacity-100',
        )}>

          <hr className="w-full border-border-primary dark:border-dark-border-primary" />

          <div className="flex flex-col gap-4 pt-5">
            <ul className="flex gap-5 lg:gap-10 text-sm">
              {summaryDataItems.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-wrap gap-2"
                >
                  <span className="text-content-tertiary dark:text-dark-content-tertiary">
                    {item.label}:
                  </span>
                  <span className={clsx(item.cls)}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div className="flex gap-10">
                <img
                  src="/images/balanceChart.png"
                  alt="balance chart thumbnail"
                  className="max-h-[48px] h-auto w-auto hidden lg:block"
                />
                <div className={clsx(
                  'grid grid-rows grid-cols-2 gap-4 w-full',
                  'lg:flex lg:gap-10 ',
                )}>
                  {accountDataItems.map((item, index) => (
                    <div
                      key={index}
                      className={clsx(
                        'flex items-center gap-4',
                        index > 2 && 'lg:hidden',
                      )}
                    >
                      <div
                        className={clsx(
                          'rounded-[4px] w-[48px] h-[48px] flex justify-center items-center',
                          'border border-border-secondary dark:border-dark-border-secondary',
                        )}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <BalanceChart data={data.balanceCurve} />
            </div>

            <AccountMetrics data={data.account} />
          </div>
        </div>
      </div>
    </section>
  );
};
