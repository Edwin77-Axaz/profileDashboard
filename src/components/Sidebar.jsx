import React, { useState } from 'react';
import { RiHome3Line, RiLogoutCircleLine, RiAwardLine, RiTaskLine, RiMore2Line, RiCloseCircleLine } from 'react-icons/ri';

const Sidebar = () => {
  const [showmenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static lg:w-[100%] md:w-[40%] w-full transition-all duration-300 ${showmenu ? 'left-0' : '-left-full'}`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-4 gap-2 md:h-[30vh]">
          <img
            src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-400"
            alt="Profile"
          />
          <h1 className="text-xl text-white font-bold">Osvaldo Abello</h1>
          <p className="bg-primary-100 py-1 px-3 rounded-full text-white">Pro Level</p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-5 rounded-tr-[90px] md:h-[70vh] overflow-auto flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-5">
            <a href="#" className="flex items-center gap-4 text-white py-1 px-1 rounded-xl hover:bg-primary-900/50 transition-colors">
              <RiHome3Line /> Home
            </a>
            <a href="#" className="flex items-center gap-4 text-white py-1 px-1 rounded-xl hover:bg-primary-900/50 transition-colors">
              <RiTaskLine /> Task
            </a>
           
            <a href="#" className="flex items-center gap-4 text-white py-1 px-1 rounded-xl hover:bg-primary-900/50 transition-colors">
              <RiLogoutCircleLine /> Logout
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-400">Perma Company</p>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      {/* Button móvil */}
      <button
        onClick={() => setShowMenu(!showmenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-3 rounded-full text-white"
      >
        {showmenu ? <RiCloseCircleLine /> : <RiMore2Line />}
      </button>
    </>
  );
};

export default Sidebar;
