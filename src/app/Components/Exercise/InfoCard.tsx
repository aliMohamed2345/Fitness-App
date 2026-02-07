const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) => (
  <div className="rounded-2xl border-2 cursor-pointer text-center sm:text-left border-border hover:border-primary bg-card p-5 shadow-card hover:shadow-elevated transition">
    <div className="mb-3 text-primary">{icon}</div>
    <p className="text-xs text-muted-foreground font-semibold">{label}</p>
    <p className="text-lg font-bold text-foreground capitalize">
      {value || "-"}
    </p>
  </div>
);
export default InfoCard;
