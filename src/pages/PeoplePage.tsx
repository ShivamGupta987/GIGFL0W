import { useState, useEffect } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { getEmployees } from '../services/api';

interface Employee {
  id: string;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  salary: string;
  startDate: string;
  lifecycle: string;
  status: string;
}

const PeoplePage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [lifecycleFilter, setLifecycleFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(8);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search term and filters
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === '' || employee.department === typeFilter;
    const matchesRole = roleFilter === '' || employee.jobTitle === roleFilter;
    const matchesLifecycle = lifecycleFilter === '' || employee.lifecycle === lifecycleFilter;
    
    return matchesSearch && matchesType && matchesRole && matchesLifecycle;
  });

  // Get current employees for pagination
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6">
      <motion.div 
        className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">List of people</h1>
        <button className="btn btn-primary">
          Add new member
        </button>
      </motion.div>

      {/* Filters */}
      <motion.div 
        className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
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
        <div className="flex space-x-4">
          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Type</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Product">Product</option>
            <option value="Content">Content</option>
            <option value="Operation">Operation</option>
          </select>
          <select
            className="form-select"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">Role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Visual Designer">Visual Designer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Content Writer">Content Writer</option>
            <option value="Sales Manager">Sales Manager</option>
          </select>
          <div className="flex items-center space-x-2">
            <select
              className="form-select"
              value={lifecycleFilter}
              onChange={(e) => setLifecycleFilter(e.target.value)}
            >
              <option value="">Lifecycle</option>
              <option value="Hired">Hired</option>
              <option value="Employed">Employed</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button className="btn btn-outline flex items-center">
              <Filter size={16} />
              <span className="ml-2 hidden sm:inline">Advanced Filter</span>
            </button>
            <button className="btn btn-outline flex items-center">
              <Download size={16} />
              <span className="ml-2 hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Employees Table */}
      <motion.div 
        className="card overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="w-12 px-4 py-3 text-left">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Job Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Department</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Salary</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Start Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Life Cycle</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-4 text-center text-text-secondary">
                    Loading...
                  </td>
                </tr>
              ) : currentEmployees.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-4 text-center text-text-secondary">
                    No employees found.
                  </td>
                </tr>
              ) : (
                currentEmployees.map((employee) => (
                  <tr 
                    key={employee.id} 
                    className={`border-b border-border hover:bg-gray-50 ${
                      employee.status === 'Inactive' ? 'bg-red-50' : ''
                    }`}
                  >
                    <td className="px-4 py-4">
                      <input type="checkbox" className="h-4 w-4 rounded border-border" />
                    </td>
                    <td className="px-4 py-4">
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-xs text-text-muted">{employee.email}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{employee.jobTitle}</td>
                    <td className="px-4 py-4">{employee.department}</td>
                    <td className="px-4 py-4">${employee.salary}</td>
                    <td className="px-4 py-4">{employee.startDate}</td>
                    <td className="px-4 py-4">{employee.lifecycle}</td>
                    <td className="px-4 py-4">
                      <span className={employee.status === 'Active' ? 'status-active' : 'status-inactive'}>
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex items-center space-x-1">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
            className="rounded-md border border-border p-2 text-text-secondary hover:bg-background-alt disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          {Array.from({ length: Math.ceil(filteredEmployees.length / employeesPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`h-10 w-10 rounded-md ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'border border-border text-text-secondary hover:bg-background-alt'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage < Math.ceil(filteredEmployees.length / employeesPerPage) ? currentPage + 1 : currentPage)}
            disabled={currentPage === Math.ceil(filteredEmployees.length / employeesPerPage)}
            className="rounded-md border border-border p-2 text-text-secondary hover:bg-background-alt disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PeoplePage;