import { ArrowRight } from 'lucide-react';

interface JobPostingCardProps {
  posting: {
    id: string;
    name: string;
    position: string;
    company: string;
    experience: string;
    date: string;
    logo: string;
  };
}

const JobPostingCard = ({ posting }: JobPostingCardProps) => {
  return (
    <div className="card transition-all hover:shadow-md">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src={posting.logo}
            alt={`${posting.name}'s profile`}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mt-3 text-lg font-medium">{posting.name}</h3>
        <p className="text-sm text-text-secondary">{posting.position}</p>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-full bg-blue-500"></div>
          <span className="text-xs text-text-secondary">Latest Experience</span>
        </div>
        <div className="ml-7 flex flex-col">
          <span className="text-sm font-medium">{posting.company}</span>
          <span className="text-xs text-text-muted">{posting.experience} • {posting.date}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end">
        <button className="text-sm text-primary hover:underline">
          <span>View Resume</span>
          <ArrowRight size={16} className="ml-1 inline" />
        </button>
      </div>
    </div>
  );
};

export default JobPostingCard;