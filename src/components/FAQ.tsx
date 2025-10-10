import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the minimum credit score required for a loan?",
    answer: "While requirements vary by loan type, we generally recommend a credit score of 700+ for personal loans and 750+ for home loans. However, we evaluate each application individually and consider multiple factors.",
  },
  {
    question: "How long does the approval process take?",
    answer: "Most loan applications are approved within 24-48 hours after document submission. Personal loans can be approved even faster, sometimes within a few hours.",
  },
  {
    question: "Can I prepay my loan without penalties?",
    answer: "Yes! Most of our loan products come with zero prepayment charges. You can pay off your loan early without any additional fees.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "Basic documents include KYC (Aadhaar, PAN), income proof (salary slips/bank statements), and address proof. Specific requirements may vary based on loan type and amount.",
  },
  {
    question: "Is the online application process safe?",
    answer: "Absolutely! We use bank-grade encryption to protect your personal information. Your data is stored securely and never shared with third parties without your consent.",
  },
  {
    question: "Can I apply for multiple loans at once?",
    answer: "While you can express interest in multiple loan types, we recommend applying for one loan at a time to avoid multiple hard inquiries on your credit report.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
