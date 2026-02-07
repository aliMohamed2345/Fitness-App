import { PageHeaderProps } from "@/app/types/ui";
const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="mb-5">
      <h1 className="text-foreground text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default PageHeader;
