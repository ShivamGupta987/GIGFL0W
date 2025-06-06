import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Bell, LogOut, LayoutDashboard, Users, Briefcase as BriefcaseBusiness, DollarSign, StarHalf } from 'lucide-react';

interface NavbarProps {
  user: any;
}

const Navbar = ({ user }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-primary text-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-white rounded flex items-center justify-center">
                  <div className="h-4 w-4 bg-primary rounded-sm"></div>
                </div>
                <span className="ml-2 text-xl font-bold tracking-tight">GIGFLOWWW</span>
              </div>
            </Link>
            <div className="ml-10 flex items-center space-x-2">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>
              <Link 
                to="/people" 
                className={`nav-link ${location.pathname === '/people' ? 'active' : ''}`}
              >
                <Users size={18} />
                <span>People</span>
              </Link>
              <Link 
                to="/hiring" 
                className={`nav-link ${location.pathname === '/hiring' ? 'active' : ''}`}
              >
                <BriefcaseBusiness size={18} />
                <span>Hiring</span>
              </Link>
              <Link 
                to="/salary" 
                className={`nav-link ${location.pathname === '/salary' ? 'active' : ''}`}
              >
                <DollarSign size={18} />
                <span>Salary</span>
              </Link>
              <Link 
                to="/reviews" 
                className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`}
              >
                <StarHalf size={18} />
                <span>Reviews</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative rounded-full bg-white/10 p-1 text-white hover:bg-white/20">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px]">
                1
              </span>
            </button>
            <div className="relative">
              <button className="flex items-center rounded-full border-2 border-white/30 p-0.5">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User"
                />
              </button>
            </div>
            <button onClick={handleLogout} className="text-white hover:text-white/80">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;