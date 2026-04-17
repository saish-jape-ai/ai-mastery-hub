import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
});

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}

export const RegistrationDialog = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("registrations").insert([{
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
    }]);
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: error.message, variant: "destructive" });
      return;
    }
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setForm({ name: "", email: "", phone: "" });
      onOpenChange(false);
    }, 2200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <h3 className="text-2xl font-bold">You're in!</h3>
            <p className="text-muted-foreground">Check your email for joining details.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Reserve Your Seat</DialogTitle>
              <DialogDescription>
                Just <span className="font-bold text-primary">₹199</span> · Limited Period Offer
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone (WhatsApp)</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>
              <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-cta shadow-cta hover:opacity-95 text-white">
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Reserving…</> : "Confirm My Seat"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">By joining, you agree to receive workshop updates.</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
