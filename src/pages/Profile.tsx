import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, CreditCard, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const savedMethods = [
  { id: 1, type: "Visa", last4: "4242", expiry: "12/28" },
  { id: 2, type: "Mastercard", last4: "8888", expiry: "06/27" },
];

const Profile = () => {
  const [name, setName] = useState("Alex Johnson");
  const [email] = useState("alex@example.com");
  const [methods, setMethods] = useState(savedMethods);

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>

        {/* Profile Info */}
        <div className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center">
              <User className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label>Email</Label>
            <Input value={email} disabled className="mt-1" />
          </div>
          <Button variant="hero" onClick={() => toast.success("Profile updated!")}>Save Changes</Button>
        </div>

        {/* Change Password */}
        <div className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h2 className="font-semibold text-foreground">Change Password</h2>
          <div>
            <Label>Current Password</Label>
            <Input type="password" placeholder="••••••••" className="mt-1" />
          </div>
          <div>
            <Label>New Password</Label>
            <Input type="password" placeholder="••••••••" className="mt-1" />
          </div>
          <Button variant="outline" onClick={() => toast.success("Password updated!")}>Update Password</Button>
        </div>

        {/* Payment Methods */}
        <div className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h2 className="font-semibold text-foreground">Payment Methods</h2>
          {methods.map((m) => (
            <div key={m.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{m.type} •••• {m.last4}</p>
                  <p className="text-xs text-muted-foreground">Expires {m.expiry}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => { setMethods(methods.filter((x) => x.id !== m.id)); toast.info("Card removed"); }}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          ))}
          <Button variant="outline" className="gap-1"><CreditCard className="w-4 h-4" /> Add Payment Method</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
