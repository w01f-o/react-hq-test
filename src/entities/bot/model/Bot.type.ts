export interface BotData {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
  bots: Bot[];
}

export interface Bot {
  name: string;
  cost: number;
  '24h': number;
  '7d': number;
  '30d': number;
  '60d': number;
  '90d': number;
  all_time: number;
}
