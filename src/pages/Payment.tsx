import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, Wallet, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const methods = [
  { id: "card", label: "Card", icon: CreditCard },
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "wallet", label: "Wallet", icon: Wallet },
];

type PaymentState = "form" | "success" | "failure";

const Payment = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("card");
  const [state, setState] = useState<PaymentState>("form");

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (recipient && amount) {
      setState(Math.random() > 0.2 ? "success" : "failure");
    }
  };

  if (state !== "form") {
    const isSuccess = state === "success";
    return (
      <DashboardLayout>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto mt-20 text-center"
        >
          <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${isSuccess ? "bg-success/10" : "bg-destructive/10"}`}>
            {isSuccess ? <CheckCircle className="w-10 h-10 text-success" /> : <XCircle className="w-10 h-10 text-destructive" />}
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{isSuccess ? "Payment Successful!" : "Payment Failed"}</h2>
          <p className="text-muted-foreground mb-6">
            {isSuccess ? `$${amount} sent to ${recipient}` : "Something went wrong. Please try again."}
          </p>
          <Button variant="hero" onClick={() => { setState("form"); setRecipient(""); setAmount(""); }}>
            {isSuccess ? "Send Another" : "Try Again"}
          </Button>
        </motion.div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-1">Send Payment</h1>
        <p className="text-muted-foreground text-sm mb-6">Transfer money securely to anyone.</p>

        <div className="bg-card rounded-xl shadow-card p-6">
          <form onSubmit={handlePay} className="space-y-5">
            <div>
              <Label htmlFor="recipient">Recipient Email / ID</Label>
              <Input id="recipient" placeholder="recipient@example.com" value={recipient} onChange={(e) => setRecipient(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="amount">Amount ($)</Label>
              <Input id="amount" type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label>Payment Method</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {methods.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      method === m.id ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <m.icon className={`w-6 h-6 ${method === m.id ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`text-xs font-medium ${method === m.id ? "text-primary" : "text-muted-foreground"}`}>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" variant="hero" className="w-full">Pay Now</Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payment;
