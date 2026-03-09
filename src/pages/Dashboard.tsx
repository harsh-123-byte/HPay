import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DollarSign, ArrowUpRight, ArrowDownRight, CheckCircle, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Balance", value: "$24,563.00", change: "+12.5%", up: true, icon: DollarSign },
  { label: "Total Transactions", value: "1,247", change: "+8.2%", up: true, icon: ArrowUpRight },
  { label: "Successful Payments", value: "1,180", change: "94.6%", up: true, icon: CheckCircle },
];

const recentTx = [
  { id: "TXN-001", to: "john@example.com", amount: "$250.00", status: "Success", date: "Mar 8, 2026" },
  { id: "TXN-002", to: "sarah@corp.io", amount: "$1,200.00", status: "Success", date: "Mar 7, 2026" },
  { id: "TXN-003", to: "mike@shop.com", amount: "$89.99", status: "Pending", date: "Mar 7, 2026" },
  { id: "TXN-004", to: "alex@dev.co", amount: "$450.00", status: "Failed", date: "Mar 6, 2026" },
  { id: "TXN-005", to: "lisa@store.net", amount: "$320.00", status: "Success", date: "Mar 6, 2026" },
];

const statusColors: Record<string, string> = {
  Success: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Failed: "bg-destructive/10 text-destructive",
};

const Dashboard = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Welcome back! Here's your overview.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/dashboard/payment">
            <Button variant="hero" size="sm" className="gap-1"><Send className="w-4 h-4" /> Send Money</Button>
          </Link>
          <Button variant="outline" size="sm" className="gap-1"><Download className="w-4 h-4" /> Request</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <span className="text-xs text-success font-medium flex items-center gap-1 mt-1">
              {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {s.change}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="bg-card rounded-xl shadow-card overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-semibold text-foreground">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="px-5 py-3 font-medium">Transaction ID</th>
                <th className="px-5 py-3 font-medium">Recipient</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTx.map((tx) => (
                <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                  <td className="px-5 py-3 text-sm font-mono text-foreground">{tx.id}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{tx.to}</td>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">{tx.amount}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
