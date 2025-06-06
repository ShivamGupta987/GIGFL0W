import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { getSalaryActivities } from '../services/api';

interface SalaryActivity {
  id: string;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  netSalary: string;
  status: string;
}

interface UserProfile {
  id: string;
  name: string;
  position: string;
  department: string;
  status: string;
  basicSalary: string;
  bonusOvertime: string;
  deduction: string;
  netSalary: string;
  bankDetails: string;
  bankName: string;
  currency: string;
}

const SalaryPage = () => {
  const [salaryActivities, setSalaryActivities] = useState<SalaryActivity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalaryData = async () => {
      try {
        const data = await getSalaryActivities();
        setSalaryActivities(data.activities);
        setSelectedUser(data.selectedUser);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching salary data:', error);
        setLoading(false);
      }
    };

    fetchSalaryData();
  }, []);

  // Filter salary activities based on search term
  const filteredActivities = salaryActivities.filter((activity) =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.h1 
        className="text-2xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Salary Activities
      </motion.h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Salary Table */}
        <motion.div 
          className="card lg:col-span-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={16} className="text-text-muted" />
              </div>
              <input
                type="text"
                className="form-input pl-10"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn btn-outline flex items-center">
              <Filter size={16} />
              <span className="ml-2">Filter</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Job Title</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Net Salary</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-4 text-center text-text-secondary">
                      Loading...
                    </td>
                  </tr>
                ) : filteredActivities.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-4 text-center text-text-secondary">
                      No salary activities found.
                    </td>
                  </tr>
                ) : (
                  filteredActivities.map((activity) => (
                    <tr 
                      key={activity.id} 
                      className="border-b border-border hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedUser(null)}
                    >
                      <td className="px-4 py-4">
                        <div>
                          <div className="font-medium">{activity.name}</div>
                          <div className="text-xs text-text-muted">{activity.email}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4">{activity.jobTitle}</td>
                      <td className="px-4 py-4">{activity.department}</td>
                      <td className="px-4 py-4">${activity.netSalary}</td>
                      <td className="px-4 py-4">
                        <span className={activity.status === 'Paid' ? 'status-paid' : 'status-pending'}>
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Profile Summary */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="card bg-blue-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Monthly Salary</span>
              <ChevronDown size={16} />
            </div>
            <div className="mt-2 text-2xl font-bold">$3,500</div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">Elizabeth James</h3>
                <p className="text-sm text-text-secondary">UI Designer</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-text-secondary">Position</span>
                <span className="font-medium">UI Designer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Department</span>
                <span className="font-medium">Design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Status</span>
                <span className="status-active">Active</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Basic Salary</span>
                  <span className="font-medium">$3500</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Bonus & Overtime</span>
                <span className="font-medium">$500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Deduction</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Next Salary</span>
                <span className="font-medium">$3500</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Bank Details</span>
                  <span className="font-medium">12345678910</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Bank Name</span>
                <span className="font-medium">Polaris Bank</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Currency</span>
                <span className="font-medium">USD</span>
              </div>
              <button className="btn btn-outline w-full">
                View Payroll History
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SalaryPage;