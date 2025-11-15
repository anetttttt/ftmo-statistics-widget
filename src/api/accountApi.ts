import type { AccountApiResponse } from '../types/account';

export const mockDataAccount = {
  login: 12345,
  equity: 102500.0,
  balance: 100000.0,
  profit: -2500.0,
  currentDailyProfit: 1250.0,
  midnightBalance: {
    timestamp: '2025-11-11T00:00:00Z',
    value: 100000.0
  },
  maxLoss: {
    timestamp: '2025-11-11T10:30:00Z',
    value: -500.0
  },
  maxDailyLoss: {
    timestamp: '2025-11-11T14:20:00Z',
    value: -200.0
  },
  lifetimeMaxDailyLoss: {
    timestamp: '2025-11-11T16:45:00Z',
    value: -350.0
  },
};

export async function fetchAccountData(): Promise<AccountApiResponse> {
  // API request simulation
  await new Promise((resolve) => setTimeout(resolve, 500)); // fake delay
  return {
    account: mockDataAccount,
  };
}
