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
      <DialogContent className="sm:max-w-md w-[92%] rounded-2xl p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-white p-6 sm:p-8">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center animate-in fade-in zoom-in duration-300">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">You're in!</h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-[240px]">We've sent the workshop details to your email.</p>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader className="mb-6 space-y-2 text-center sm:text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  Reserve Your Seat
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base font-medium">
                  Just <span className="text-primary font-bold">₹199</span> · Limited Period Offer
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold ml-1">Full Name</Label>
                  <Input 
                    id="name" 
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    placeholder="Enter your name" 
                    className="h-12 rounded-xl border-border/60 bg-muted/30 focus:bg-white transition-all text-base"
                  />
                  {errors.name && <p className="text-xs font-semibold text-destructive mt-1 ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-bold ml-1">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    placeholder="you@example.com" 
                    className="h-12 rounded-xl border-border/60 bg-muted/30 focus:bg-white transition-all text-base"
                  />
                  {errors.email && <p className="text-xs font-semibold text-destructive mt-1 ml-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold ml-1">WhatsApp Number</Label>
                  <Input 
                    id="phone" 
                    value={form.phone} 
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                    placeholder="+91 XXXXX XXXXX" 
                    className="h-12 rounded-xl border-border/60 bg-muted/30 focus:bg-white transition-all text-base"
                  />
                  {errors.phone && <p className="text-xs font-semibold text-destructive mt-1 ml-1">{errors.phone}</p>}
                </div>
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full h-14 bg-primary hover:bg-primary/95 text-primary-foreground rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Reserving...</span>
                    </div>
                  ) : (
                    "Confirm My Seat"
                  )}
                </Button>
                <p className="text-[10px] sm:text-xs text-center text-muted-foreground font-medium opacity-80">
                  Secure checkout hosted by The Baap Company.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
