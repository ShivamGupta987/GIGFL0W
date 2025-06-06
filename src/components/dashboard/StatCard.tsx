import { ArrowRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  linkText: string;
}

const StatCard = ({ title, value, icon, linkText }: StatCardProps) => {
  return (
    <div className="card transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        {icon}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="text-3xl font-bold">{value}</div>
        <a href="#" className="flex items-center text-sm text-primary hover:underline">
          <span>{linkText}</span>
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default StatCard;