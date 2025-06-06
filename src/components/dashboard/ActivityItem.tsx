import { Calendar } from 'lucide-react';

interface ActivityItemProps {
  activity: {
    id: string;
    title: string;
    date: string;
    time: string;
    isInternal?: boolean;
  };
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
  return (
    <div className="flex items-start space-x-3 rounded-md border border-border p-3 hover:bg-gray-50">
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Calendar size={20} />
      </div>
      <div>
        <h4 className="font-medium">{activity.title}</h4>
        <div className="mt-1 flex items-center space-x-2">
          <span className="text-xs text-text-secondary">{activity.time}</span>
          {activity.isInternal && (
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
              Internal Meeting
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;