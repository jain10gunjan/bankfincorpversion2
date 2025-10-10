import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CheckCircle2, FileText, Clock, Shield } from "lucide-react";

const loanApplicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  loanType: z.string().min(1, "Please select a loan type"),
  loanAmount: z.string().trim().min(1, "Please enter loan amount"),
  employmentType: z.string().min(1, "Please select employment type"),
  monthlyIncome: z.string().trim().min(1, "Please enter monthly income"),
  city: z.string().trim().min(2, "Please enter city").max(100, "City name too long"),
  panNumber: z.string().trim().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g., ABCDE1234F)").optional().or(z.literal("")),
  message: z.string().trim().max(1000, "Message too long").optional(),
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept terms and conditions"),
});

type FormData = z.infer<typeof loanApplicationSchema>;

const Apply = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
    employmentType: "",
    monthlyIncome: "",
    city: "",
    panNumber: "",
    message: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = loanApplicationSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", validatedData);
      
      toast.success("Application submitted successfully!", {
        description: "Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        loanType: "",
        loanAmount: "",
        employmentType: "",
        monthlyIncome: "",
        city: "",
        panNumber: "",
        message: "",
        termsAccepted: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix the errors in the form");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { icon: FileText, title: "Fill Application", description: "Complete the simple form" },
    { icon: CheckCircle2, title: "Verification", description: "Quick document check" },
    { icon: Clock, title: "Approval", description: "Get approved in 24 hours" },
    { icon: Shield, title: "Disbursal", description: "Funds transferred to account" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for a Loan</h1>
              <p className="text-xl text-white/90">
                Get instant approval with our simple application process. Fill the form and our experts will contact you.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="shadow-elevated bg-white text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-hero mb-4">
                      <step.icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Loan Application Form</CardTitle>
                  <p className="text-muted-foreground">
                    Please fill in your details accurately. All fields marked with * are mandatory.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            placeholder="John Doe"
                            className={errors.fullName ? "border-destructive" : ""}
                          />
                          {errors.fullName && (
                            <p className="text-sm text-destructive">{errors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="john@example.com"
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="9876543210"
                            maxLength={10}
                            className={errors.phone ? "border-destructive" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleChange("city", e.target.value)}
                            placeholder="Mumbai"
                            className={errors.city ? "border-destructive" : ""}
                          />
                          {errors.city && (
                            <p className="text-sm text-destructive">{errors.city}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="panNumber">PAN Number (Optional)</Label>
                          <Input
                            id="panNumber"
                            value={formData.panNumber}
                            onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
                            placeholder="ABCDE1234F"
                            maxLength={10}
                            className={errors.panNumber ? "border-destructive" : ""}
                          />
                          {errors.panNumber && (
                            <p className="text-sm text-destructive">{errors.panNumber}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Loan Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Loan Details</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="loanType">Loan Type *</Label>
                          <Select
                            value={formData.loanType}
                            onValueChange={(value) => handleChange("loanType", value)}
                          >
                            <SelectTrigger className={errors.loanType ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select loan type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="personal">Personal Loan</SelectItem>
                              <SelectItem value="home">Home Loan</SelectItem>
                              <SelectItem value="business">Business Loan</SelectItem>
                              <SelectItem value="property">Loan Against Property</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.loanType && (
                            <p className="text-sm text-destructive">{errors.loanType}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="loanAmount">Loan Amount Required (₹) *</Label>
                          <Input
                            id="loanAmount"
                            type="number"
                            value={formData.loanAmount}
                            onChange={(e) => handleChange("loanAmount", e.target.value)}
                            placeholder="500000"
                            min="10000"
                            className={errors.loanAmount ? "border-destructive" : ""}
                          />
                          {errors.loanAmount && (
                            <p className="text-sm text-destructive">{errors.loanAmount}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Employment Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Employment Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="employmentType">Employment Type *</Label>
                          <Select
                            value={formData.employmentType}
                            onValueChange={(value) => handleChange("employmentType", value)}
                          >
                            <SelectTrigger className={errors.employmentType ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="salaried">Salaried</SelectItem>
                              <SelectItem value="self-employed">Self-Employed</SelectItem>
                              <SelectItem value="business">Business Owner</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.employmentType && (
                            <p className="text-sm text-destructive">{errors.employmentType}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="monthlyIncome">Monthly Income (₹) *</Label>
                          <Input
                            id="monthlyIncome"
                            type="number"
                            value={formData.monthlyIncome}
                            onChange={(e) => handleChange("monthlyIncome", e.target.value)}
                            placeholder="50000"
                            min="10000"
                            className={errors.monthlyIncome ? "border-destructive" : ""}
                          />
                          {errors.monthlyIncome && (
                            <p className="text-sm text-destructive">{errors.monthlyIncome}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us more about your loan requirement..."
                        rows={4}
                        maxLength={1000}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleChange("termsAccepted", checked as boolean)}
                          className={errors.termsAccepted ? "border-destructive" : ""}
                        />
                        <div className="space-y-1">
                          <Label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I accept the terms and conditions *
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            By submitting this form, I agree to UrbanMoney's privacy policy and authorize them to contact me regarding my loan application.
                          </p>
                          {errors.termsAccepted && (
                            <p className="text-sm text-destructive">{errors.termsAccepted}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 gradient-hero"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        onClick={() => {
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            loanType: "",
                            loanAmount: "",
                            employmentType: "",
                            monthlyIncome: "",
                            city: "",
                            panNumber: "",
                            message: "",
                            termsAccepted: false,
                          });
                          setErrors({});
                        }}
                      >
                        Reset
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Security Note */}
              <Card className="mt-8 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Your Information is Safe</h3>
                      <p className="text-sm text-muted-foreground">
                        We use industry-standard encryption to protect your personal information. 
                        Your data will only be used to process your loan application and will never be shared with third parties without your consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
