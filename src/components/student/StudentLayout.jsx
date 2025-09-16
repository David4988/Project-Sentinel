// src/components/student/StudentLayout.jsx
import { Outlet, NavLink } from 'react-router-dom';
import { FiGrid, FiBookOpen, FiHeart, FiShield, FiMessageSquare, FiLogOut } from 'react-icons/fi';

const StudentLayout = () => {
  const navItems = [
    { name: 'Dashboard', icon: <FiGrid />, path: '/student/dashboard' },
    { name: 'My Academics', icon: <FiBookOpen />, path: '/student/academics' },
    { name: 'Wellness Check-in', icon: <FiHeart />, path: '/student/wellness' },
    { name: 'Privacy & Consent', icon: <FiShield />, path: '/student/privacy' },
    { name: 'Forum Feed', icon: <FiMessageSquare />, path: '/student/forum' }, // <-- ADDED THIS LINE
  ];

  return (
    <div className="flex bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen font-inter">
      <aside className="w-64 bg-sentinel-blue text-black flex flex-col p-4 shadow-2xl">
        <div className="text-2xl font-poppins font-bold mb-10 mt-4">
          Project Sentinel
        </div>
        <nav className="flex flex-col space-y-2 flex-grow">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-white/20 shadow-inner'
                    : 'hover:bg-white/10'
                }`
              }
            >
              {item.icon}
              <span className="font-semibold">{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-500/80 transition-all duration-200 mt-auto">
          <FiLogOut />
          <span className="font-semibold">Logout</span>
        </button>
      </aside>

      <main className="flex-1 p-8">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;