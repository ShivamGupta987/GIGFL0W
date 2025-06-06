import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { createJobPosting } from '../services/api';

const HiringPage = () => {
  const [formData, setFormData] = useState({
    role: '',
    skills: '',
    driverRequired: '',
    yearsOfExperience: '',
    experienceLevel: '',
    employmentType: '',
    workplaceType: '',
    stipend: '',
    stipendAmount: '',
    openings: '',
    description: '',
    relevantLinks: '',
  });

  const [existingPostings, setExistingPostings] = useState([
    {
      id: '1',
      title: 'UI/UX Designer (Intern)',
      applicants: 10,
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      applicants: 23,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real app, this would call an API
      await createJobPosting(formData);
      alert('Job posting created successfully!');
      
      // Reset form
      setFormData({
        role: '',
        skills: '',
        driverRequired: '',
        yearsOfExperience: '',
        experienceLevel: '',
        employmentType: '',
        workplaceType: '',
        stipend: '',
        stipendAmount: '',
        openings: '',
        description: '',
        relevantLinks: '',
      });
    } catch (error) {
      console.error('Error creating job posting:', error);
      alert('Error creating job posting. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <motion.h1 
        className="text-2xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Job Posting
      </motion.h1>
      <p className="text-text-secondary">Post your new hire details for your job post</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Job Form */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="card">
            <h2 className="mb-6 text-xl font-medium">Fill in Job Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-text-secondary">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="form-select mt-1"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Marketing Specialist">Marketing Specialist</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-text-secondary">
                    Skills Required
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    className="form-input mt-1"
                    placeholder="e.g., React, Node.js, UI Design"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="driverRequired" className="block text-sm font-medium text-text-secondary">
                    Driver Required
                  </label>
                  <select
                    id="driverRequired"
                    name="driverRequired"
                    className="form-select mt-1"
                    value={formData.driverRequired}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-text-secondary">
                    Years of Experience
                  </label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    className="form-select mt-1"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="0-2 years">0-2 years</option>
                    <option value="2-5 years">2-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-text-secondary">
                    Experience Level
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    className="form-select mt-1"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Level</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="employmentType" className="block text-sm font-medium text-text-secondary">
                    Employment Type
                  </label>
                  <select
                    id="employmentType"
                    name="employmentType"
                    className="form-select mt-1"
                    value={formData.employmentType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="workplaceType" className="block text-sm font-medium text-text-secondary">
                    Workplace Type
                  </label>
                  <select
                    id="workplaceType"
                    name="workplaceType"
                    className="form-select mt-1"
                    value={formData.workplaceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Workplace</option>
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="stipend" className="block text-sm font-medium text-text-secondary">
                    Stipend
                  </label>
                  <select
                    id="stipend"
                    name="stipend"
                    className="form-select mt-1"
                    value={formData.stipend}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Stipend Type</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Performance-based">Performance-based</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="stipendAmount" className="block text-sm font-medium text-text-secondary">
                    Stipend Amount
                  </label>
                  <input
                    type="text"
                    id="stipendAmount"
                    name="stipendAmount"
                    className="form-input mt-1"
                    placeholder="e.g., 10-15 LPA"
                    value={formData.stipendAmount}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="openings" className="block text-sm font-medium text-text-secondary">
                    No. of Opening
                  </label>
                  <select
                    id="openings"
                    name="openings"
                    className="form-select mt-1"
                    value={formData.openings}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Openings</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="20+">20+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-secondary">
                  Job Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="form-input mt-1"
                  placeholder="Enter job description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="relevantLinks" className="block text-sm font-medium text-text-secondary">
                  Relevant Links
                </label>
                <input
                  type="text"
                  id="relevantLinks"
                  name="relevantLinks"
                  className="form-input mt-1"
                  placeholder="e.g., LinkedIn"
                  value={formData.relevantLinks}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <Sparkles size={16} />
                  <span className="ml-2">Write with AI</span>
                </button>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn btn-primary px-8 py-2">
                  Create Job Posting
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Manage Postings */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-medium">Manage Posting</h2>
              <span className="text-sm text-text-secondary">See all</span>
            </div>
            <div className="space-y-4">
              {existingPostings.map((posting) => (
                <div key={posting.id} className="overflow-hidden rounded-lg border border-border">
                  <div className="bg-blue-500 p-3 text-white">
                    <h3 className="font-medium">{posting.title}</h3>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3">
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-text-secondary" />
                      <span className="text-sm text-text-secondary">{posting.applicants} Applicants</span>
                    </div>
                    <button className="text-primary hover:underline">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Career illustration"
                className="h-32 w-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-medium">Use AI to write</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Let AI generate job descriptions based on your requirements
              </p>
              <button className="btn btn-primary mt-4 w-full">
                Write with AI
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HiringPage;