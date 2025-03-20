import { Card } from "@/components/ui/card";
import { ShareData } from "../types/share";

export default function ShareMetrics({ data }: { data: ShareData }) {
  const metrics = [
    { label: "Market Cap", value: `₹${data.marketCap.toLocaleString()} Cr` },
    { label: "P/E Ratio", value: data.peRatio.toFixed(2) },
    { label: "Book Value", value: `₹${data.bookValue.toFixed(2)}` },
    { label: "Dividend Yield", value: `${data.dividendYield.toFixed(2)}%` },
    { label: "EPS", value: `₹${data.eps.toFixed(2)}` },
    { label: "Face Value", value: `₹${data.faceValue}` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-4">
          <p className="text-sm text-muted-foreground">{metric.label}</p>
          <p className="text-2xl font-bold">{metric.value}</p>
        </Card>
      ))}
    </div>
  );
}