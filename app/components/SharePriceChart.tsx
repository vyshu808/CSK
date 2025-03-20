"use client";
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

interface ChartData {
  date: string;
  price: number;
}

interface SharePriceChartProps {
  data: {
    daily: ChartData[];
    weekly: ChartData[];
    monthly: ChartData[];
  } | undefined; // Allow for undefined data
}

export default function SharePriceChart({ data }: SharePriceChartProps) {

  // Combine all data into a single array for the chart
  const allData = useMemo(() => {
    if (!data) {
      return []; // Return an empty array if data is undefined
    }
    return [...data.daily, ...data.weekly, ...data.monthly];
  }, [data]);

  console.log("SharePriceChart data:", data);

  const priceChange = useMemo(() => {
    if (allData.length < 2) return 0;

    const firstPrice = allData[0]?.price || 0;
    const lastPrice = allData[allData.length - 1]?.price || 0;

    return lastPrice - firstPrice;
  }, [allData]);

  const lineColor = priceChange >= 0 ? "#22c55e" : "#ef4444";

  return (
    <Card className="p-6">
      {/* Container for Text and Chart */}
      <div className="flex flex-col items-center space-y-6">
        {/* Title above the chart */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Chennai Super Kings (CSK) Shares</h2>
        </div>

        <div className="h-[400px] w-full"> {/* Make sure chart takes full width */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={allData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  const month = date.toLocaleString('default', { month: 'short' });
                  return month;
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                domain={['auto', 'auto']}
                tickFormatter={(value) => `₹${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px 12px',
                }}
                formatter={(value: number) => [`₹${value}`, 'Price']}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return date.toLocaleDateString('default', { month: 'long', year: 'numeric' });
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke={lineColor}
                strokeWidth={2}
                dot={{
                  fill: lineColor,
                  stroke: lineColor,
                  r: 4,
                }}
                activeDot={{
                  fill: lineColor,
                  stroke: 'white',
                  strokeWidth: 2,
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}