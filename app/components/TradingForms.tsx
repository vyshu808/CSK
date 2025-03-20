"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tradingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  message: z.string().optional(),
});

type TradingFormData = z.infer<typeof tradingFormSchema>;

export default function TradingForms() {
  const [activeTab, setActiveTab] = useState("buy");
  
  const buyForm = useForm<TradingFormData>({
    resolver: zodResolver(tradingFormSchema),
  });

  const sellForm = useForm<TradingFormData>({
    resolver: zodResolver(tradingFormSchema),
  });

  const onSubmit = async (data: TradingFormData, type: "buy" | "sell") => {
    console.log(`${type} form submitted:`, data);
    // Implement form submission logic here
  };

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy Shares</TabsTrigger>
          <TabsTrigger value="sell">Sell Shares</TabsTrigger>
        </TabsList>
        
        <TabsContent value="buy">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Chennai Super Kings (CSK) Shares</h3>
            <p className="text-2xl font-bold">₹192</p>
          </div>
          <form onSubmit={buyForm.handleSubmit((data) => onSubmit(data, "buy"))} className="space-y-4">
            <Input
              placeholder="Name"
              {...buyForm.register("name")}
              className={buyForm.formState.errors.name ? "border-destructive" : ""}
            />
            <Input
              type="email"
              placeholder="Email"
              {...buyForm.register("email")}
              className={buyForm.formState.errors.email ? "border-destructive" : ""}
            />
            <Input
              type="tel"
              placeholder="Phone (e.g., 0812345678)"
              {...buyForm.register("phone")}
              className={buyForm.formState.errors.phone ? "border-destructive" : ""}
            />
            <Input
              type="number"
              placeholder="Quantity"
              {...buyForm.register("quantity", { valueAsNumber: true })}
              className={buyForm.formState.errors.quantity ? "border-destructive" : ""}
            />
            <Textarea
              placeholder="Message (optional)"
              {...buyForm.register("message")}
            />
            <Button type="submit" className="w-full">Buy Now</Button>
          </form>
        </TabsContent>

        <TabsContent value="sell">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Chennai Super Kings (CSK) Shares</h3>
            <p className="text-sm text-muted-foreground">Best In Industry</p>
          </div>
          <form onSubmit={sellForm.handleSubmit((data) => onSubmit(data, "sell"))} className="space-y-4">
            <Input
              placeholder="Name"
              {...sellForm.register("name")}
              className={sellForm.formState.errors.name ? "border-destructive" : ""}
            />
            <Input
              type="email"
              placeholder="Email"
              {...sellForm.register("email")}
              className={sellForm.formState.errors.email ? "border-destructive" : ""}
            />
            <Input
              type="tel"
              placeholder="Phone (e.g., 0812345678)"
              {...sellForm.register("phone")}
              className={sellForm.formState.errors.phone ? "border-destructive" : ""}
            />
            <Input
              type="number"
              placeholder="Quantity"
              {...sellForm.register("quantity", { valueAsNumber: true })}
              className={sellForm.formState.errors.quantity ? "border-destructive" : ""}
            />
            <Textarea
              placeholder="Message (optional)"
              {...sellForm.register("message")}
            />
            <Button type="submit" className="w-full">Sell Now</Button>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
}