// This is a mock API service for the GigFlowww application
// In a real application, these functions would make actual HTTP requests to a backend server

// Mock data for the dashboard
const mockStats = {
  employees: 24,
  hiring: 5,
  projects: 1
};

const mockActivities = [
  {
    id: '1',
    title: 'Internal Meeting with Jon - UI designer',
    date: 'Wed May 21',
    time: '08:30 am',
    isInternal: true
  },
  {
    id: '2',
    title: 'Internal Meeting with Content team',
    date: 'Wed May 21',
    time: '01:00 pm',
    isInternal: true
  },
  {
    id: '3',
    title: 'Interview with Ashvini - UI Intern',
    date: 'Wed May 21',
    time: '03:00 pm',
    isInternal: false
  },
  {
    id: '4',
    title: 'Internal Meeting with Content team',
    date: 'Wed May 21',
    time: '05:00 pm',
    isInternal: true
  },
  {
    id: '5',
    title: 'Internal Meeting with Content team',
    date: 'Wed May 21',
    time: '07:00 pm',
    isInternal: true
  }
];

const mockJobPostings = [
  {
    id: '1',
    name: 'Elizabeth Filade',
    position: 'UI/UX Designer',
    company: 'Studio Furi',
    experience: 'UI Designer',
    date: '10 May, 2021',
    logo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Andre Suares',
    position: 'Fullstack Developer',
    company: 'Studio Furi',
    experience: 'Full Stack Developer',
    date: '14 May, 2021',
    logo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Ishita Ashuth',
    position: 'Frontend Developer',
    company: 'Uikit Ine',
    experience: 'Frontend Developer',
    date: '14 May, 2021',
    logo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    name: 'Ishita Ashuth',
    position: 'Product Designer',
    company: 'Uikit Ine',
    experience: 'Product Designer',
    date: '14 May, 2021',
    logo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

// Mock data for the people page
const mockEmployees = [
  {
    id: '1',
    name: 'Alicia Shankur',
    email: 'alicia.shankur@gmail.com',
    jobTitle: 'Software Engineer',
    department: 'Engineering',
    salary: '2,500',
    startDate: 'Mar 16, 2023',
    lifecycle: 'Hired',
    status: 'Active'
  },
  {
    id: '2',
    name: 'James Oyinkan',
    email: 'james.oyinkan@gmail.com',
    jobTitle: 'Visual Designer',
    department: 'Design',
    salary: '2,000',
    startDate: 'Jan 16, 2023',
    lifecycle: 'Hired',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Diti Shreyas',
    email: 'shreyas@gmail.com',
    jobTitle: 'Visual Designer',
    department: 'Design',
    salary: '2,000',
    startDate: 'Dec 09, 2024',
    lifecycle: 'Employed',
    status: 'Inactive'
  },
  {
    id: '4',
    name: 'Ishita Bhagnar',
    email: 'ishita@gmail.com',
    jobTitle: 'UI/UX Designer',
    department: 'Design',
    salary: '1,500',
    startDate: 'Jan 09, 2024',
    lifecycle: 'Employed',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Kito Ashuth',
    email: 'ashuth@gmail.com',
    jobTitle: 'Content Writer',
    department: 'Content',
    salary: '1,000',
    startDate: 'Jan 09, 2024',
    lifecycle: 'Hired',
    status: 'Active'
  },
  {
    id: '6',
    name: 'Dario Berik',
    email: 'dario@yahoo.com',
    jobTitle: 'Sales Manager',
    department: 'Operation',
    salary: '4,000',
    startDate: 'Feb 21, 2022',
    lifecycle: 'Hired',
    status: 'Active'
  },
  {
    id: '7',
    name: 'Aresen Vlamadir',
    email: 'aresen.v@yahoo.com',
    jobTitle: 'Mobile Assistant',
    department: 'Product',
    salary: '3,000',
    startDate: 'Aug 07, 2022',
    lifecycle: 'Employed',
    status: 'Inactive'
  },
  {
    id: '8',
    name: 'Debby Philade',
    email: 'debby@gmail.com',
    jobTitle: 'Product Manager',
    department: 'Product',
    salary: '4,500',
    startDate: 'Apr 02, 2022',
    lifecycle: 'Hired',
    status: 'Active'
  }
];

// Mock data for the salary page
const mockSalaryActivities = {
  activities: [
    {
      id: '1',
      name: 'Alicia Shankur',
      email: 'alicia.shankur@gmail.com',
      jobTitle: 'Software Engineer',
      department: 'Engineering',
      netSalary: '2,500',
      status: 'Paid'
    },
    {
      id: '2',
      name: 'James Oyinkan',
      email: 'james.oyinkan@gmail.com',
      jobTitle: 'Visual Designer',
      department: 'Design',
      netSalary: '2,100',
      status: 'Paid'
    },
    {
      id: '3',
      name: 'Aresen Vlamadir',
      email: 'aresen.v@yahoo.com',
      jobTitle: 'Sales Manager',
      department: 'Product',
      netSalary: '4,700',
      status: 'Pending'
    },
    {
      id: '4',
      name: 'Kito Ashuth',
      email: 'ashuth@gmail.com',
      jobTitle: 'Content Writer',
      department: 'Content',
      netSalary: '3,000',
      status: 'Paid'
    },
    {
      id: '5',
      name: 'Diti Shreyas',
      email: 'shreyas@gmail.com',
      jobTitle: 'Backend Engineer',
      department: 'Engineering',
      netSalary: '2,500',
      status: 'Paid'
    },
    {
      id: '6',
      name: 'Alicia Shankur',
      email: 'alicia.shankur@gmail.com',
      jobTitle: 'Product Manager',
      department: 'Product',
      netSalary: '4,000',
      status: 'Pending'
    },
    {
      id: '7',
      name: 'Dario Berik',
      email: 'dario@yahoo.com',
      jobTitle: 'Software Engineer',
      department: 'Engineering',
      netSalary: '1,900',
      status: 'Paid'
    }
  ],
  selectedUser: {
    id: '1',
    name: 'Elizabeth James',
    position: 'UI Designer',
    department: 'Design',
    status: 'Active',
    basicSalary: '3500',
    bonusOvertime: '500',
    deduction: '0.00',
    netSalary: '3500',
    bankDetails: '12345678910',
    bankName: 'Polaris Bank',
    currency: 'USD'
  }
};

// API functions
export const getStats = () => {
  return Promise.resolve(mockStats);
};

export const getActivities = () => {
  return Promise.resolve(mockActivities);
};

export const getJobPostings = () => {
  return Promise.resolve(mockJobPostings);
};

export const getEmployees = () => {
  return Promise.resolve(mockEmployees);
};

export const getSalaryActivities = () => {
  return Promise.resolve(mockSalaryActivities);
};

export const createJobPosting = (data: any) => {
  console.log('Creating job posting with data:', data);
  return Promise.resolve({ success: true, id: Date.now().toString() });
};

// This would be a real API implementation in a production environment:

// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Replace with your actual API URL

// export const getStats = async () => {
//   const response = await axios.get(`${API_URL}/stats`);
//   return response.data;
// };

// export const getActivities = async () => {
//   const response = await axios.get(`${API_URL}/activities`);
//   return response.data;
// };

// export const getJobPostings = async () => {
//   const response = await axios.get(`${API_URL}/job-postings`);
//   return response.data;
// };

// export const getEmployees = async () => {
//   const response = await axios.get(`${API_URL}/employees`);
//   return response.data;
// };

// export const getSalaryActivities = async () => {
//   const response = await axios.get(`${API_URL}/salary-activities`);
//   return response.data;
// };

// export const createJobPosting = async (data: { role: string; skills: string; driverRequired: string; yearsOfExperience: string; experienceLevel: string; employmentType: string; workplaceType: string; stipend: string; stipendAmount: string; openings: string; description: string; relevantLinks: string; }) => {
//   const response = await axios.post(`${API_URL}/job-postings`, data);
//   return response.data;
// };
