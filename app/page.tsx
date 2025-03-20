import SharePriceChart from './components/SharePriceChart';
import TradingForms from './components/TradingForms';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FaqsPage from '@/app/faqs/page'

// Define Interfaces for your data
interface ChartDataPoint {
  date: string;
  price: number;
}

interface ChartData {
  daily: ChartDataPoint[];
  weekly: ChartDataPoint[];
  monthly: ChartDataPoint[];
}

interface FundamentalsData {
  companyDetails: { [key: string]: string };
  marketMetrics: { [key: string]: string };
}

interface FinancialDataItem {
  label: string;
  "2021": string;
  "2022": string;
  "2023": string;
  "2024": string;
}
interface ShareholdingPatternItem {
  name: string;
  "2021": string;
  "2022": string;
  "2023": string;
  "2024": string;
}

interface FinancialsData {
  incomeStatement: FinancialDataItem[];
  balanceSheet: {
    assets: FinancialDataItem[];
    liabilities: FinancialDataItem[];
  };
  cashFlow: FinancialDataItem[];
  financialRatios: FinancialDataItem[];
  shareholdingPattern: ShareholdingPatternItem[]; // Use the correct interface
}

interface FaqItem {
  question: string;
  answer: string;
}

const mockChartData: ChartData = { // Ensure the mock data adheres to the ChartData interface
  daily: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2024, 0, i + 1).toISOString(),
    price: 192 + Math.random() * 10 - 5
  })),
  weekly: Array.from({ length: 12 }, (_, i) => ({
    date: new Date(2024, 0, i * 7).toISOString(),
    price: 192 + Math.random() * 10 - 5
  })),
  monthly: [
    { date: new Date(2023, 9, 1).toISOString(), price: 218 },  // Oct
    { date: new Date(2023, 10, 1).toISOString(), price: 210 }, // Nov
    { date: new Date(2023, 11, 1).toISOString(), price: 196 }, // Dec
    { date: new Date(2024, 0, 1).toISOString(), price: 188 },  // Jan
    { date: new Date(2024, 1, 1).toISOString(), price: 192 },  // Feb
  ]
};

const fundamentalsData: FundamentalsData = {  // Enforce the FundamentalsData interface
  companyDetails: {
    "Chennai Super Kings (CSK) Shares": "₹192",
    "Lot Size": "-",
    "52 Week High": "₹225",
    "52 Week Low": "₹158",
    "Depository": "-",
    "PAN Number": "AAFCC8730K",
    "ISIN Number": "INE852S01026",
    "CIN": "U74900TN2014PLC098517",
    "RTA": "-"
  },
  marketMetrics: {
    "Market Cap (in cr)": "₹8271",
    "P/E Ratio": "41.05",
    "P/B Ratio": "15.65",
    "Debt to Equity": "-",
    "ROE (%)": "38.16",
    "Book Value": "13.92",
    "Face Value": "0.1",
    "Valuation": "High",
    "Total Shares": "379425004"
  }
};

const financialsData: FinancialsData = {  // Enforce FinancialsData interface
  incomeStatement: [
    { label: "P&L Statement", "2021": "24783", "2022": "34105", "2023": "27315", "2024": "69545" },
    { label: "Cost of Material Consumed", "2021": "17941", "2022": "281559", "2023": "20161", "2024": "41841" },
    { label: "Gross Margins", "2021": "26.61", "2022": "17.43", "2023": "26.19", "2024": "39.84" },
    { label: "Change in Inventory", "2021": "0", "2022": "0", "2023": "0", "2024": "17" },
    { label: "Employee Benefit Expenses", "2021": "247", "2022": "318", "2023": "368", "2024": "668" },
    { label: "Other Expenses", "2021": "400", "2022": "1495", "2023": "284", "2024": "655" },
    { label: "EBITDA", "2021": "6195", "2022": "4133", "2023": "6502", "2024": "26364" },
    { label: "OPM", "2021": "25", "2022": "12012", "2023": "23.8", "2024": "37.91" },
    { label: "Other Income", "2021": "586", "2022": "8809", "2023": "1919", "2024": "2783" },
    { label: "Finance Cost", "2021": "526", "2022": "567", "2023": "1005", "2024": "756" },
    { label: "D&A", "2021": "333", "2022": "240", "2023": "363", "2024": "474" },
    { label: "EBIT", "2021": "5862", "2022": "3893", "2023": "6139", "2024": "25890" },
    { label: "EBIT Margins", "2021": "23.65", "2022": "11.41", "2023": "22.47", "2024": "37.23" },
    { label: "PBT Margins", "2021": "5919", "2022": "4133", "2023": "7053", "2024": "27916" },
    { label: "PBT Margins", "2021": "23.88", "2022": "12.12", "2023": "25.82", "2024": "40.14" },
    { label: "Tax", "2021": "1893", "2022": "920", "2023": "1835", "2024": "7766" },
    { label: "PAT", "2021": "4026", "2022": "3213", "2023": "5218", "2024": "20150" },
    { label: "NPM", "2021": "16.25", "2022": "9.42", "2023": "19.1", "2024": "28.97" },
    { label: "EPS", "2021": "1.31", "2022": "1.04", "2023": "1.69", "2024": "5.32" }
  ],
  balanceSheet: {
    assets: [
      { label: "Assets", "2021": "", "2022": "", "2023": "", "2024": "" },
      { label: "Fixed Assets", "2021": "14128", "2022": "12963", "2023": "13601", "2024": "21010" },
      { label: "CWIP", "2021": "-", "2022": "-", "2023": "1701", "2024": "4811" },
      { label: "Investments", "2021": "-", "2022": "10", "2023": "5204", "2024": "651" },
      { label: "Trade Receivables", "2021": "2191", "2022": "3740", "2023": "570", "2024": "5158" },
      { label: "Inventory", "2021": "-", "2022": "-", "2023": "-", "2024": "86" },
      { label: "Other Assets", "2021": "15302", "2022": "22318", "2023": "27965", "2024": "52195" },
      { label: "Total Assets", "2021": "31621", "2022": "39031", "2023": "49041", "2024": "83911" }
    ],
    liabilities: [
      { label: "Liabilities", "2021": "", "2022": "", "2023": "", "2024": "" },
      { label: "Share Capital", "2021": "308", "2022": "308", "2023": "308", "2024": "379" },
      { label: "FV", "2021": "0.1", "2022": "0.1", "2023": "0.1", "2024": "0.1" },
      { label: "Reserves", "2021": "21303", "2022": "24515", "2023": "29792", "2024": "52420" },
      { label: "Borrowings", "2021": "6500", "2022": "6500", "2023": "6500", "2024": "-" },
      { label: "Trade Payables", "2021": "1354", "2022": "2822", "2023": "3637", "2024": "800" },
      { label: "Other Liabilities", "2021": "2156", "2022": "4886", "2023": "8804", "2024": "30312" },
      { label: "Total Liabilities", "2021": "31621", "2022": "39031", "2023": "49041", "2024": "83911" }
    ]
  },
  cashFlow: [
    { label: "Cash-Flow Statement", "2021": "", "2022": "", "2023": "", "2024": "" },
    { label: "PBT", "2021": "5919", "2022": "4133", "2023": "7053", "2024": "27916" },
    { label: "OPBWC", "2021": "6193", "2022": "5273", "2023": "6512", "2024": "26360" },
    { label: "Change in Receivables", "2021": "-1659", "2022": "-6879", "2023": "3170", "2024": "-4510" },
    { label: "Change in Inventories", "2021": "-", "2022": "-", "2023": "-", "2024": "-86" },
    { label: "Change in Payables", "2021": "918", "2022": "4315", "2023": "802", "2024": "-3128" },
    { label: "Other Changes", "2021": "-", "2022": "-", "2023": "5160", "2024": "22041" },
    { label: "Working Capital Change", "2021": "-741", "2022": "-2564", "2023": "9132", "2024": "14317" },
    { label: "Cash Generated From Operations", "2021": "5452", "2022": "2709", "2023": "15644", "2024": "40677" },
    { label: "Tax", "2021": "-1763", "2022": "-1102", "2023": "-1864", "2024": "-7723" },
    { label: "Cash Flow From Operations", "2021": "3689", "2022": "1607", "2023": "13780", "2024": "32954" },
    { label: "Purchase of PPE", "2021": "-486", "2022": "-483", "2023": "-2209", "2024": "-9991" },
    { label: "Sale of PPE", "2021": "-", "2022": "-", "2023": "-", "2024": "-" },
    { label: "Cash Flow From Investment", "2021": "100", "2022": "316", "2023": "-24413", "2024": "-17074" },
    { label: "Borrowing", "2021": "-", "2022": "-", "2023": "50", "2024": "-" },
    { label: "Divided", "2021": "-", "2022": "-", "2023": "-", "2024": "-" },
    { label: "Equity", "2021": "-", "2022": "-", "2023": "-", "2024": "-" },
    { label: "Others From Financing", "2021": "-526", "2022": "-567", "2023": "-1005", "2024": "-756" },
    { label: "Cash Flow from Financing", "2021": "-526", "2022": "-567", "2023": "-1005", "2024": "-756" },
    { label: "Net Cash Generated", "2021": "3263", "2022": "1356", "2023": "-11588", "2024": "14124" },
    { label: "Cash at the Start", "2021": "8917", "2022": "12179", "2023": "13534", "2024": "2552" },
    { label: "Cash at the End", "2021": "12180", "2022": "13535", "2023": "13535", "2024": "16676" }
  ],
  financialRatios: [
    { label: "Operating Profit Margin", "2021": "25", "2022": "12.12", "2023": "23.8", "2024": "37.91" },
    { label: "Net Profit Margin", "2021": "16.25", "2022": "9.42", "2023": "19.1", "2024": "28.7" },
    { label: "Earning Per Share (Diluted)", "2021": "1.31", "2022": "1.04", "2023": "1.69", "2024": "5.32" }
  ],
  shareholdingPattern: [
    { name: "Trustees, India Cements Shareholders Trust", "2021": "30.06%", "2022": "30.03%", "2023": "21.47%", "2024": "36.22%" },
    { name: "Sri Saradha Logistics Private Limited", "2021": "6.89%", "2022": "6.89%", "2023": "6.89%", "2024": "5.26%" },
    { name: "Life Insurance Corporation Of India", "2021": "6.04%", "2022": "6.04%", "2023": "6.04%", "2024": "5.60%" },
    { name: "Trustees", "2021": "-", "2022": "-", "2023": "1.76%", "2024": "4.90%" },
    { name: "Others", "2021": "57.01%", "2022": "57.04%", "2023": "57.36%", "2024": "48.02%" }
  ]
};

const faqsData: FaqItem[] = [
  {
    question: "What is the share price of Chennai Super Kings (CSK)?",
    answer: "The price of CSK shares can be found on our website. We provide real-time updates based on the latest private transactions.",
  },
  {
    question: "Can I buy shares of Chennai Super Kings?",
    answer: "Yes, you can buy shares of CSK through our platform. We help connect buyers and sellers in private transactions.",
  },
  {
    question: "Why are Chennai Super Kings shares unlisted?",
    answer: "CSK shares are unlisted as the team is privately owned and has not yet gone public through a stock exchange listing.",
  },
  {
    question: "How is Chennai Super Kings performing financially?",
    answer: "Chennai Super Kings is one of the most successful teams in the IPL, with strong financial backing and brand value. Detailed financials can be found on our website.",
  },
  {
    question: "Is it a good idea to invest in CSK shares?",
    answer: "Investing in CSK shares can offer potential growth, but like all unlisted shares, it carries higher risk due to limited liquidity and market unpredictability.",
  },
  {
    question: "How can I track the price of CSK shares?",
    answer: "The price of CSK shares is updated on our platform regularly. You can check the latest price at any time by visiting our page.",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {mockChartData && <SharePriceChart data={mockChartData} />} {/* Passes the mock data that type checks against the ChartData Interface*/}
          </div>
          <div className="lg:col-span-1">
            <TradingForms />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">About CSK</h2>
          <Card className="p-6">
            <p className="text-lg mb-6">
              Chennai Super Kings Cricket Limited (CSK) is one of the most successful franchises in the Indian Premier League (IPL).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white text-sm">
                      1
                    </span>
                    <span>5-time IPL Champions (2010, 2011, 2018, 2021, 2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white text-sm">
                      2
                    </span>
                    <span>Most appearances in IPL playoffs (12)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white text-sm">
                      3
                    </span>
                    <span>Highest win percentage in IPL history</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Market Position</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Brand Value</p>
                    <p className="text-muted-foreground">₹1,000+ Crore</p>
                  </div>
                  <div>
                    <p className="font-medium">Market Share</p>
                    <p className="text-muted-foreground">22% of IPL viewership</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Fundamentals</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fundamentalsData?.companyDetails && <div>
                {Object.entries(fundamentalsData.companyDetails).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>}
              {fundamentalsData?.marketMetrics && <div>
                {Object.entries(fundamentalsData.marketMetrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>}
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Financials (In Cr)</h2>
          <Card className="p-6">
            <Tabs defaultValue="income" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="income" className="flex-1">Income Statement</TabsTrigger>
                <TabsTrigger value="balance" className="flex-1">Balance Sheet</TabsTrigger>
                <TabsTrigger value="cash" className="flex-1">Cash Flow</TabsTrigger>
              </TabsList>
              <TabsContent value="income">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">P&L Statement</th>
                        <th className="text-right py-2">2021</th>
                        <th className="text-right py-2">2022</th>
                        <th className="text-right py-2">2023</th>
                        <th className="text-right py-2">2024</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialsData.incomeStatement && financialsData.incomeStatement.map((item) => (
                        <tr key={item.label} className="border-b">
                          <td className="py-2">{item.label}</td>
                          <td className="text-right">{item["2021"]}</td>
                          <td className="text-right">{item["2022"]}</td>
                          <td className="text-right">{item["2023"]}</td>
                          <td className="text-right">{item["2024"]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="balance">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Balance Sheet</th>
                        <th className="text-right py-2">2021</th>
                        <th className="text-right py-2">2022</th>
                        <th className="text-right py-2">2023</th>
                        <th className="text-right py-2">2024</th>
                      </tr>
                    </thead>
                    <tbody>
                     { financialsData.balanceSheet && [...financialsData.balanceSheet.assets, ...financialsData.balanceSheet.liabilities].map((item) => (
                        <tr key={item.label} className="border-b">
                          <td className="py-2">{item.label}</td>
                          <td className="text-right">{item["2021"]}</td>
                          <td className="text-right">{item["2022"]}</td>
                          <td className="text-right">{item["2023"]}</td>
                          <td className="text-right">{item["2024"]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="cash">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Cash Flow Statement</th>
                        <th className="text-right py-2">2021</th>
                        <th className="text-right py-2">2022</th>
                        <th className="text-right py-2">2023</th>
                        <th className="text-right py-2">2024</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialsData.cashFlow && financialsData.cashFlow.map((item) => (
                        <tr key={item.label} className="border-b">
                          <td className="py-2">{item.label}</td>
                          <td className="text-right">{item["2021"]}</td>
                          <td className="text-right">{item["2022"]}</td>
                          <td className="text-right">{item["2023"]}</td>
                          <td className="text-right">{item["2024"]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Financial Ratios</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Financial Ratios</th>
                    <th className="text-right py-2">2021</th>
                    <th className="text-right py-2">2022</th>
                    <th className="text-right py-2">2023</th>
                    <th className="text-right py-2">2024</th>
                  </tr>
                </thead>
                <tbody>
                 { financialsData.financialRatios && financialsData.financialRatios.map((item) => (
                    <tr key={item.label} className="border-b">
                      <td className="py-2">{item.label}</td>
                      <td className="text-right">{item["2021"]}</td>
                      <td className="text-right">{item["2022"]}</td>
                      <td className="text-right">{item["2023"]}</td>
                      <td className="text-right">{item["2024"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Shareholding Pattern</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Shareholding Pattern</th>
                    <th className="text-right py-2">2021</th>
                    <th className="text-right py-2">2022</th>
                    <th className="text-right py-2">2023</th>
                    <th className="text-right py-2">2024</th>
                  </tr>
                </thead>
                <tbody>
                  {financialsData.shareholdingPattern && financialsData.shareholdingPattern.map((item) => (
                    <tr key={item.name} className="border-b">
                      <td className="py-2">{item.name}</td>
                      <td className="text-right">{item["2021"]}</td>
                      <td className="text-right">{item["2022"]}</td>
                      <td className="text-right">{item["2023"]}</td>
                      <td className="text-right">{item["2024"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">FAQs</h2>
          <FaqsPage faqs={faqsData} />
        </section>
      </div>
    </main>
  );
}