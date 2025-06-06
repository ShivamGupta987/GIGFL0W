import { useState, useEffect } from 'react';
import { Calendar, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getStats, getActivities, getJobPostings } from '../services/api';
import StatCard from '../components/dashboard/StatCard';
import ActivityItem from '../components/dashboard/ActivityItem';
import JobPostingCard from '../components/dashboard/JobPostingCard';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardPage = () => {
  const [stats, setStats] = useState({ employees: 0, hiring: 0, projects: 0 });
  const [activities, setActivities] = useState([]);
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // In a real app, these would be API calls
        const statsData = await getStats();
        const activitiesData = await getActivities();
        const jobPostingsData = await getJobPostings();

        setStats(statsData);
        setActivities(activitiesData);
        setJobPostings(jobPostingsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Performance chart data
  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Performance',
        data: [20, 40, 60, 80, 65, 45, 20],
        fill: true,
        backgroundColor: 'rgba(30, 136, 229, 0.2)',
        borderColor: 'rgba(30, 136, 229, 1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-4 text-blue-700 rounded-lg bg-blue-50">
        <p className="text-sm">
          <span className="font-medium">Optimize your experience on Gigfloww-</span> track your job post, manage teams and streamline hr operations effortlessly today!
        </p>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <motion.h1 
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Welcome Back, Nuraj group
        </motion.h1>
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Calendar size={16} />
          <span>Wed 23, May 2023</span>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <StatCard
          title="Employees"
          value={stats.employees}
          icon={<div className="p-2 text-purple-600 bg-purple-100 rounded-full">👥</div>}
          linkText="View Details"
        />
        <StatCard
          title="Hiring"
          value={stats.hiring}
          icon={<div className="p-2 text-blue-600 bg-blue-100 rounded-full">🔍</div>}
          linkText="View Details"
        />
        <StatCard
          title="Projects"
          value={stats.projects}
          icon={<div className="p-2 text-green-600 bg-green-100 rounded-full">📊</div>}
          linkText="View Details"
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Performance Report */}
        <motion.div 
          className="col-span-2 card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Performance Report</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">Weekly</span>
              <ArrowRight size={16} className="text-text-secondary" />
            </div>
          </div>
          <div className="relative h-64">
            <Line data={chartData} options={chartOptions} />
            {/* Dots with names */}
            <div className="absolute -translate-x-12 -translate-y-8 left-1/2 top-1/2">
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <span className="ml-1 text-xs font-medium text-pink-500">Kiso Teron</span>
              </div>
            </div>
            <div className="absolute translate-x-6 -translate-y-2 right-1/4 top-1/3">
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                <span className="ml-1 text-xs font-medium text-pink-400">Chirag Jain</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Activities */}
        <motion.div 
          className="card lg:row-span-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Upcoming Actions</h2>
            <span className="text-sm text-text-secondary">3 Today</span>
          </div>
          <div className="space-y-4">
            {activities.map((activity: any) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Incoming Applications */}
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Incoming Application</h2>
          <div className="flex items-center space-x-2">
            <button className="btn btn-outline">
              <Filter size={16} />
              <span className="ml-2">Filter</span>
            </button>
            <button className="btn btn-primary">
              <span>See all</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobPostings.map((posting: any) => (
            <JobPostingCard key={posting.id} posting={posting} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;