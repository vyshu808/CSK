export interface ShareData {
  date: string;
  price: number;
  volume: number;
  marketCap: number;
  peRatio: number;
  bookValue: number;
  dividendYield: number;
  eps: number;
  faceValue: number;
  industry: string;
  sector: string;
  companyDescription: string;
  keyHighlights: string[];
  financialMetrics: {
    revenue: number;
    profit: number;
    assets: number;
    liabilities: number;
  };
}

export interface ChartData {
  date: string;
  price: number;
}

export interface InterestFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  investmentAmount: number;
}