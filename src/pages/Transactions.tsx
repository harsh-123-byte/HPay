import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

const allTx = [
  { id: "TXN-001", amount: "$250.00", status: "Success", date: "Mar 8, 2026" },
  { id: "TXN-002", amount: "$1,200.00", status: "Success", date: "Mar 7, 2026" },
  { id: "TXN-003", amount: "$89.99", status: "Pending", date: "Mar 7, 2026" },
  { id: "TXN-004", amount: "$450.00", status: "Failed", date: "Mar 6, 2026" },
  { id: "TXN-005", amount: "$320.00", status: "Success", date: "Mar 6, 2026" },
  { id: "TXN-006", amount: "$78.50", status: "Success", date: "Mar 5, 2026" },
  { id: "TXN-007", amount: "$1,500.00", status: "Pending", date: "Mar 5, 2026" },
  { id: "TXN-008", amount: "$200.00", status: "Failed", date: "Mar 4, 2026" },
];

const statusColors: Record<string, string> = {
  Success: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Failed: "bg-destructive/10 text-destructive",
};

const filters = ["All", "Success", "Pending", "Failed"];

const Transactions = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return allTx.filter((tx) => {
      const matchFilter = filter === "All" || tx.status === filter;
      const matchSearch = tx.id.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Transaction History</h1>
          <p className="text-muted-foreground text-sm">View and filter all your transactions.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by ID..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="px-5 py-3 font-medium">Transaction ID</th>
                  <th className="px-5 py-3 font-medium">Amount</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((tx) => (
                  <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                    <td className="px-5 py-3 text-sm font-mono text-foreground">{tx.id}</td>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">{tx.amount}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-muted-foreground">{tx.date}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={4} className="px-5 py-10 text-center text-muted-foreground">No transactions found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
