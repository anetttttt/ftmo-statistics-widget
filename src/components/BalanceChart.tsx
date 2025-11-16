import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import clsx from 'clsx';
import { useState } from 'react';
import { Button } from './designSystem/Button';
import { ArrowRight } from './designSystem/Icons/ArrowRight';
import { Close } from './designSystem/Icons/Close';
import type { BalanceCurveData } from '../types/account';

type BalanceChartProps = {
  data: BalanceCurveData;
}

interface ChartPoint {
  time: string;
  balance: number;
}

function formatTimeLabel(iso: string) {
  const date = new Date(iso);
  return date.toLocaleString('cs-CZ', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export const BalanceChart: React.FC<BalanceChartProps> = ({ data }) => {
  const [showChart, setShowChart] = useState(false);

  const chartToggle = () => {
    if (showChart) {
      setShowChart(false);
    } else {
      setShowChart(true);
    }
  };

  const chartData: ChartPoint[] = data.time.map((time, index) => ({
    time: formatTimeLabel(time),
    balance: data.balance[index],
  }));

  return (
    <>
      <Button
        variant="outlined"
        className="gap-3"
        onClick={chartToggle}
      >
        Detail
        <ArrowRight />
      </Button>

      {showChart && (
        /* ----- Backdrop ----- */
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[#00000080]">

          {/* ----- Modal ----- */}
          <div className={clsx(
            'relative p-5 m-3 max-w-[700px] w-full flex flex-col justify-center items-center rounded-[4px]',
            'bg-bcg-primary',
          )}>
            <Button
              variant="icon"
              onClick={chartToggle}
              className="absolute right-3 top-3"
            >
              <Close
                className="text-content-primary"
                size={40}
              />
            </Button>

            <h2 className="my-4 text-lg text-content-primary font-bold">
              Balance evolution
            </h2>

            <div className="w-full lg:w-[500px] h-[300px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    stroke="#03C7B4"
                    strokeWidth={5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
