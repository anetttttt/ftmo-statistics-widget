export interface TimestampValue {
  timestamp: string;
  value: number;
}

export interface AccountData {
  login: number;
  equity: number;
  balance: number;
  profit: number;
  currentDailyProfit: number;
  midnightBalance: TimestampValue;
  maxLoss: TimestampValue;
  maxDailyLoss: TimestampValue;
  lifetimeMaxDailyLoss: TimestampValue;
}

export interface AccountApiResponse {
  account: AccountData;
}
