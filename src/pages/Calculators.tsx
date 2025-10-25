import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Home, CreditCard, Building, Car, GraduationCap, PiggyBank, Target, PieChart } from "lucide-react";

const Calculators = () => {
  // EMI Calculator States
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);

  // SIP Calculator States
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipTenure, setSipTenure] = useState(10);

  // Home Loan States
  const [homeLoanAmount, setHomeLoanAmount] = useState(3000000);
  const [homeLoanRate, setHomeLoanRate] = useState(8.5);
  const [homeLoanTenure, setHomeLoanTenure] = useState(20);

  // Personal Loan States
  const [personalLoanAmount, setPersonalLoanAmount] = useState(200000);
  const [personalLoanRate, setPersonalLoanRate] = useState(12.5);
  const [personalLoanTenure, setPersonalLoanTenure] = useState(3);

  // Business Loan States
  const [businessLoanAmount, setBusinessLoanAmount] = useState(1000000);
  const [businessLoanRate, setBusinessLoanRate] = useState(14.5);
  const [businessLoanTenure, setBusinessLoanTenure] = useState(5);

  // Car Loan States
  const [carLoanAmount, setCarLoanAmount] = useState(800000);
  const [carLoanRate, setCarLoanRate] = useState(9.5);
  const [carLoanTenure, setCarLoanTenure] = useState(5);

  // Credit Score Calculator States
  const [creditScore, setCreditScore] = useState(750);
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [existingEMI, setExistingEMI] = useState(10000);

  // EMI Calculation Function
  const calculateEMI = (principal: number, rate: number, time: number) => {
    const monthlyRate = rate / 12 / 100;
    const months = time * 12;
    
    if (monthlyRate === 0) {
      return principal / months;
    }
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  // SIP Calculation Function
  const calculateSIP = (amount: number, rate: number, time: number) => {
    const monthlyRate = rate / 12 / 100;
    const months = time * 12;
    
    if (monthlyRate === 0) {
      return amount * months;
    }
    
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  // Credit Score Assessment
  const getCreditScoreAssessment = (score: number) => {
    if (score >= 750) return { rating: "Excellent", color: "text-green-600", bgColor: "bg-green-100" };
    if (score >= 700) return { rating: "Good", color: "text-blue-600", bgColor: "bg-blue-100" };
    if (score >= 650) return { rating: "Fair", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    return { rating: "Poor", color: "text-red-600", bgColor: "bg-red-100" };
  };

  // Calculate loan eligibility
  const calculateLoanEligibility = (income: number, emi: number, score: number) => {
    const maxEMI = income * 0.4; // 40% of income
    const eligibilityMultiplier = score >= 750 ? 60 : score >= 700 ? 50 : score >= 650 ? 40 : 30;
    return Math.round((income * eligibilityMultiplier) / 1000) * 1000;
  };

  // Current calculations
  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const homeEMI = calculateEMI(homeLoanAmount, homeLoanRate, homeLoanTenure);
  const personalEMI = calculateEMI(personalLoanAmount, personalLoanRate, personalLoanTenure);
  const businessEMI = calculateEMI(businessLoanAmount, businessLoanRate, businessLoanTenure);
  const carEMI = calculateEMI(carLoanAmount, carLoanRate, carLoanTenure);

  const sipValue = calculateSIP(sipAmount, sipRate, sipTenure);
  const sipInvestment = sipAmount * sipTenure * 12;
  const sipReturns = sipValue - sipInvestment;

  const creditAssessment = getCreditScoreAssessment(creditScore);
  const loanEligibility = calculateLoanEligibility(monthlyIncome, existingEMI, creditScore);

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
                Plan your finances better with our comprehensive suite of calculators
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="emi" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="emi" className="flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  EMI Calculator
                </TabsTrigger>
                <TabsTrigger value="sip" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  SIP Calculator
                </TabsTrigger>
                <TabsTrigger value="loans" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Loan Calculators
                </TabsTrigger>
                <TabsTrigger value="credit" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Credit Score
                </TabsTrigger>
              </TabsList>

              {/* EMI Calculator Tab */}
              <TabsContent value="emi" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
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
                    </CardContent>
                  </Card>

                  {/* Results */}
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle>EMI Calculation Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 rounded-lg gradient-hero text-white">
                        <div className="grid grid-cols-1 gap-6">
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
                      <Link to="/apply" className="w-full mt-6">
                        <Button className="w-full gradient-hero mt-4" size="lg">
                          Apply for Loan
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* SIP Calculator Tab */}
              <TabsContent value="sip" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <TrendingUp className="text-primary" />
                        SIP Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* SIP Amount */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>Monthly SIP Amount</Label>
                          <span className="text-xl font-bold text-primary">
                            ₹{sipAmount.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <Slider
                          value={[sipAmount]}
                          onValueChange={(value) => setSipAmount(value[0])}
                          min={500}
                          max={100000}
                          step={500}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>₹500</span>
                          <span>₹1L</span>
                        </div>
                      </div>

                      {/* Expected Return */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>Expected Annual Return (%)</Label>
                          <span className="text-xl font-bold text-primary">{sipRate}%</span>
                        </div>
                        <Slider
                          value={[sipRate]}
                          onValueChange={(value) => setSipRate(value[0])}
                          min={6}
                          max={20}
                          step={0.5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>6%</span>
                          <span>20%</span>
                        </div>
                      </div>

                      {/* Investment Period */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>Investment Period (Years)</Label>
                          <span className="text-xl font-bold text-primary">{sipTenure} Years</span>
                        </div>
                        <Slider
                          value={[sipTenure]}
                          onValueChange={(value) => setSipTenure(value[0])}
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
                    </CardContent>
                  </Card>

                  {/* SIP Results */}
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle>SIP Calculation Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 rounded-lg gradient-hero text-white">
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center">
                            <div className="text-sm text-white/80 mb-1">Total Investment</div>
                            <div className="text-3xl font-bold">₹{sipInvestment.toLocaleString('en-IN')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-white/80 mb-1">Expected Returns</div>
                            <div className="text-3xl font-bold">₹{sipReturns.toLocaleString('en-IN')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-white/80 mb-1">Maturity Value</div>
                            <div className="text-3xl font-bold">₹{sipValue.toLocaleString('en-IN')}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Loan Calculators Tab */}
              <TabsContent value="loans" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Home Loan Calculator */}
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Home className="text-primary" />
                        Home Loan Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Loan Amount</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[homeLoanAmount]}
                            onValueChange={(value) => setHomeLoanAmount(value[0])}
                            min={500000}
                            max={50000000}
                            step={100000}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-20">₹{Math.round(homeLoanAmount/100000)}L</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Interest Rate (%)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[homeLoanRate]}
                            onValueChange={(value) => setHomeLoanRate(value[0])}
                            min={6}
                            max={15}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{homeLoanRate}%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Tenure (Years)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[homeLoanTenure]}
                            onValueChange={(value) => setHomeLoanTenure(value[0])}
                            min={5}
                            max={30}
                            step={1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{homeLoanTenure}Y</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-blue-50">
                        <div className="text-center">
                          <div className="text-sm text-blue-600 mb-1">Monthly EMI</div>
                          <div className="text-2xl font-bold text-blue-700">₹{homeEMI.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Personal Loan Calculator */}
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="text-primary" />
                        Personal Loan Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Loan Amount</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[personalLoanAmount]}
                            onValueChange={(value) => setPersonalLoanAmount(value[0])}
                            min={50000}
                            max={5000000}
                            step={25000}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-20">₹{Math.round(personalLoanAmount/1000)}K</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Interest Rate (%)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[personalLoanRate]}
                            onValueChange={(value) => setPersonalLoanRate(value[0])}
                            min={8}
                            max={25}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{personalLoanRate}%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Tenure (Years)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[personalLoanTenure]}
                            onValueChange={(value) => setPersonalLoanTenure(value[0])}
                            min={1}
                            max={7}
                            step={1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{personalLoanTenure}Y</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-green-50">
                        <div className="text-center">
                          <div className="text-sm text-green-600 mb-1">Monthly EMI</div>
                          <div className="text-2xl font-bold text-green-700">₹{personalEMI.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Loan Calculator */}
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building className="text-primary" />
                        Business Loan Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Loan Amount</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[businessLoanAmount]}
                            onValueChange={(value) => setBusinessLoanAmount(value[0])}
                            min={100000}
                            max={10000000}
                            step={50000}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-20">₹{Math.round(businessLoanAmount/100000)}L</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Interest Rate (%)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[businessLoanRate]}
                            onValueChange={(value) => setBusinessLoanRate(value[0])}
                            min={10}
                            max={25}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{businessLoanRate}%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Tenure (Years)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[businessLoanTenure]}
                            onValueChange={(value) => setBusinessLoanTenure(value[0])}
                            min={1}
                            max={10}
                            step={1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{businessLoanTenure}Y</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-purple-50">
                        <div className="text-center">
                          <div className="text-sm text-purple-600 mb-1">Monthly EMI</div>
                          <div className="text-2xl font-bold text-purple-700">₹{businessEMI.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Car Loan Calculator */}
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Car className="text-primary" />
                        Car Loan Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Loan Amount</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[carLoanAmount]}
                            onValueChange={(value) => setCarLoanAmount(value[0])}
                            min={100000}
                            max={2000000}
                            step={25000}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-20">₹{Math.round(carLoanAmount/100000)}L</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Interest Rate (%)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[carLoanRate]}
                            onValueChange={(value) => setCarLoanRate(value[0])}
                            min={6}
                            max={18}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{carLoanRate}%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Tenure (Years)</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[carLoanTenure]}
                            onValueChange={(value) => setCarLoanTenure(value[0])}
                            min={1}
                            max={7}
                            step={1}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{carLoanTenure}Y</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-orange-50">
                        <div className="text-center">
                          <div className="text-sm text-orange-600 mb-1">Monthly EMI</div>
                          <div className="text-2xl font-bold text-orange-700">₹{carEMI.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Credit Score Calculator Tab */}
              <TabsContent value="credit" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="text-primary" />
                        Credit Score Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>Credit Score</Label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[creditScore]}
                            onValueChange={(value) => setCreditScore(value[0])}
                            min={300}
                            max={900}
                            step={10}
                            className="flex-1"
                          />
                          <span className="text-sm font-medium w-12">{creditScore}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Monthly Income (₹)</Label>
                        <Input
                          type="number"
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                          placeholder="Enter monthly income"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Existing EMI (₹)</Label>
                        <Input
                          type="number"
                          value={existingEMI}
                          onChange={(e) => setExistingEMI(Number(e.target.value))}
                          placeholder="Enter existing EMI"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elevated">
                    <CardHeader>
                      <CardTitle>Credit Assessment Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className={`p-4 rounded-lg ${creditAssessment.bgColor}`}>
                          <div className="text-center">
                            <div className="text-sm text-gray-600 mb-1">Credit Score</div>
                            <div className={`text-4xl font-bold ${creditAssessment.color}`}>{creditScore}</div>
                            <div className={`text-lg font-semibold ${creditAssessment.color}`}>{creditAssessment.rating}</div>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-blue-50">
                          <div className="text-center">
                            <div className="text-sm text-blue-600 mb-1">Loan Eligibility</div>
                            <div className="text-2xl font-bold text-blue-700">₹{loanEligibility.toLocaleString('en-IN')}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Tips to Improve Credit Score:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Pay bills on time</li>
                            <li>• Keep credit utilization below 30%</li>
                            <li>• Don't apply for multiple loans at once</li>
                            <li>• Maintain a good credit history</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Current Interest Rates */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Current Interest Rates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center shadow-card">
                  <CardContent className="p-6">
                    <Home className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Home Loan</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">8.5%</div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-card">
                  <CardContent className="p-6">
                    <CreditCard className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Personal Loan</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">10.5%</div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-card">
                  <CardContent className="p-6">
                    <Building className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Business Loan</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">12.5%</div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-card">
                  <CardContent className="p-6">
                    <Car className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Car Loan</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-1">9.5%</div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
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
