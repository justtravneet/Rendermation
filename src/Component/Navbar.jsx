import React, { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='py-4'>
      <nav className="bg-gray-800 rounded-xl">
        <div className="mx-auto px-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-white text-lg font-bold">Rendermations</h1>
            </div>
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isOpen ? (
                  <span className="text-2xl">&times;</span> // Close icon (X)
                ) : (
                  <span className="text-2xl">&#9776;</span> // Hamburger icon (☰)
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`} // Hide on medium and larger screens
        >
          <div className="flex flex-col px-4 pt-5 pb-3 space-y-1">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white self-end mb-4"
            >
              <span className="text-2xl">&times;</span> {/* Close icon (X) */}
            </button>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;