// ./components/FaqsPage.tsx
"use client"; // Make it a client component for interactivity

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Or any icon library

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqsPageProps {
    faqs: FaqItem[];
}

const FaqsPage: React.FC<FaqsPageProps> = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-semibold cursor-pointer" onClick={() => toggleExpand(index)}>
                            {faq.question}
                        </CardTitle>
                        <button onClick={() => toggleExpand(index)} className="focus:outline-none">
                            {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </CardHeader>
                    {expandedIndex === index && (
                        <CardContent className="p-4"> {/* Adjusted CardContent styling */}
                            <CardDescription className="text-gray-600 text-sm">  {/* Adjusted CardDescription styling */}
                                {faq.answer}
                            </CardDescription>
                        </CardContent>
                    )}
                </Card>
            ))}
        </div>
    );
};

export default FaqsPage;