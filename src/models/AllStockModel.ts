export interface AllStockResponse {
  status: string;
  data: Company[];
}

export interface Company {
  company_name: string;
  market_cap: number;
  nsecode: string;
  today_high: number;
  today_low: number;
  today_close: number;
  last_traded_price: number;
  day_change: string;
  day_change_percentage: string;
  volume: number;
  total_buy_quantity: number;
  total_sell_quantity: number;
  yr_high: number;
  yr_low: number;
}
