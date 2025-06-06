import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll simulate a successful login
    login('dummy-token', { name: 'Nuraj group', role: 'Admin' });
    navigate('/');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side with background image */}
      <div className="relative hidden w-1/2 bg-gray-800 lg:block">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team collaborating"
            className="h-full w-full object-cover opacity-70"
          />
        </div>
      </div>

      {/* Right side with form */}
      <div className="flex w-full flex-col justify-center bg-white px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <motion.div 
          className="mx-auto w-full max-w-sm space-y-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                  <div className="h-5 w-5 bg-white rounded-sm"></div>
                </div>
                <span className="ml-2 text-2xl font-bold text-primary tracking-tight">GIGFLOWWW</span>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary">
              Welcome to Gigflowww
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Seamless HR operations start now!<br />
              {isLogin ? 'Log in to your account' : 'Sign up'}
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="name\" className="block text-sm font-medium text-text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="form-input mt-1"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input mt-1"
                placeholder="Your Work Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="form-input pr-10"
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-secondary">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="form-input mt-1"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full py-3"
              >
                {isLogin ? 'Log in' : 'Sign up for free'}
              </button>
            </div>

            {!isLogin && (
              <p className="text-center text-xs text-text-secondary">
                By clicking on Sign up, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">
                  Terms and Conditions
                </a>
              </p>
            )}
          </form>

          <div className="mt-4 flex items-center justify-center">
            <span className="text-sm text-text-secondary">
              {isLogin ? "Don't have an account? " : "Already on Gigflowww? "}
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;