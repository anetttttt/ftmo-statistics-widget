import type { AccountApiResponse } from '../types/account';

export const mockDataAccount = {
  login: 12345,
  equity: 102500.0,
  balance: 100000.0,
  profit: -2500.0,
  currentDailyProfit: 1250.0,
  midnightBalance: {
    timestamp: '2025-11-11T00:00:00Z',
    value: 100000.0,
  },
  maxLoss: {
    timestamp: '2025-11-11T10:30:00Z',
    value: -500.0,
  },
  maxDailyLoss: {
    timestamp: '2025-11-11T14:20:00Z',
    value: -200.0,
  },
  lifetimeMaxDailyLoss: {
    timestamp: '2025-11-11T16:45:00Z',
    value: -350.0,
  },
};

export const mockBalanceCurveData = {
  balance: [100000,100250,100500,100750,101000,101200,101400,101600,101800,102000,102200,102400,102500],
  time: [
    '2025-01-15T00:00:00Z','2025-01-15T06:00:00Z','2025-01-15T12:00:00Z',
    '2025-01-15T18:00:00Z','2025-01-16T00:00:00Z','2025-01-16T06:00:00Z',
    '2025-01-16T12:00:00Z','2025-01-16T18:00:00Z','2025-01-17T00:00:00Z',
    '2025-01-17T06:00:00Z','2025-01-17T12:00:00Z','2025-01-17T18:00:00Z','2025-01-18T00:00:00Z',
  ],
  ticket: ['12345','12346','12347','12348','12349','12350','12351','12352','12353','12354','12355','12356','12357'],
};

// API request simulation
export async function fetchAccountData(): Promise<AccountApiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    account: mockDataAccount,
    balanceCurve: mockBalanceCurveData,
  };
}

/*
export async function fetchAccountData(): Promise<AccountApiResponse> {
  const res = await fetch("https://mocki.io/v1/e2611fbf-4a52-4055-a5c8-3360940479ec");
  if (!res.ok) throw new Error("Failed to fetch account data");
  return res.json();
}
*/
