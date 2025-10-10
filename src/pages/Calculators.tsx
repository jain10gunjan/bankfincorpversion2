import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Home, CreditCard } from "lucide-react";

const Calculators = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure * 12;
    
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Calculators</h1>
              <p className="text-xl text-white/90">
                Plan your finances better with our easy-to-use calculators
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main EMI Calculator */}
              <div className="lg:col-span-2">
                <Card className="shadow-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Calculator className="text-primary" />
                      EMI Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Loan Amount */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Loan Amount</Label>
                        <span className="text-xl font-bold text-primary">
                          ₹{loanAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        min={100000}
                        max={10000000}
                        step={50000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹1L</span>
                        <span>₹1Cr</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Interest Rate (% per annum)</Label>
                        <span className="text-xl font-bold text-primary">{interestRate}%</span>
                      </div>
                      <Slider
                        value={[interestRate]}
                        onValueChange={(value) => setInterestRate(value[0])}
                        min={5}
                        max={25}
                        step={0.1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>5%</span>
                        <span>25%</span>
                      </div>
                    </div>

                    {/* Loan Tenure */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Loan Tenure (Years)</Label>
                        <span className="text-xl font-bold text-primary">{tenure} Years</span>
                      </div>
                      <Slider
                        value={[tenure]}
                        onValueChange={(value) => setTenure(value[0])}
                        min={1}
                        max={30}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 Year</span>
                        <span>30 Years</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mt-8 p-6 rounded-lg gradient-hero text-white">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-sm text-white/80 mb-1">Monthly EMI</div>
                          <div className="text-3xl font-bold">₹{emi.toLocaleString('en-IN')}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-white/80 mb-1">Total Interest</div>
                          <div className="text-3xl font-bold">₹{totalInterest.toLocaleString('en-IN')}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-white/80 mb-1">Total Amount</div>
                          <div className="text-3xl font-bold">₹{totalAmount.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </div>

                    <Link to="/apply" className="w-full">
                      <Button className="w-full gradient-hero" size="lg">
                        Apply for Loan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Tools */}
              <div className="space-y-6">
                <Card className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                        <Home className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold">Home Loan Calculator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate your home loan EMI and plan your dream home purchase
                    </p>
                    <Button variant="outline" className="w-full">Calculate</Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-orange-600 flex items-center justify-center">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold">Investment Calculator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estimate your returns on various investment options
                    </p>
                    <Button variant="outline" className="w-full">Calculate</Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                        <CreditCard className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold">Credit Score</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check your free credit score worth ₹500
                    </p>
                    <Button className="w-full gradient-hero">Check Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Use EMI Calculator</h2>
              
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Enter Loan Amount</h3>
                        <p className="text-muted-foreground">
                          Input the total loan amount you wish to borrow
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Set Interest Rate</h3>
                        <p className="text-muted-foreground">
                          Adjust the annual interest rate offered by your lender
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Choose Tenure</h3>
                        <p className="text-muted-foreground">
                          Select the loan repayment period in years
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Get Instant Results</h3>
                        <p className="text-muted-foreground">
                          View your monthly EMI, total interest, and total payment amount
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calculators;
