const stats = [
  { value: "5.8 Lacs+", label: "Happy Customers" },
  { value: "₹6,100 Mn+", label: "Disbursed Annually" },
  { value: "150+", label: "Cities Covered" },
  { value: "587+", label: "Branches" },
];

const StatsBar = () => {
  return (
    <div className="bg-muted/30 border-y">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
