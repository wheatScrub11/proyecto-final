import { useState, useEffect } from "react";
import {
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { TbTicTac } from "react-icons/tb";
import { IoMdChatbubbles } from "react-icons/io";
import { ImPacman } from "react-icons/im";
import { MdTimer } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "portfolio", icon: <FaBriefcase />, label: "Portafolio" },
    { id: "contact", icon: <FaEnvelope />, label: "Contacto" },
    { id: "pomodoro", icon: <MdTimer />, label: "Pomodoro" },
    { id: "calculadora", icon: <FaCalculator />, label: "Calculadora" },
    { id: "pacman", icon: <ImPacman />, label: "Pacman" },
    { id: "tictactoe", icon: <TbTicTac />, label: "Tricky" },
    { id: "chatweb", icon: <IoMdChatbubbles />, label: "Chat web" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile && showMobileMenu) setShowMobileMenu(false);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, showMobileMenu]);

  const toggleMenu = () => {
    if (isMobile) {
      setShowMobileMenu(!showMobileMenu);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <>
      {/* Mobile Topbar */}
      {isMobile && (
        <div className="mobile-topbar">
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}

      {/* Sidebar/Topbar */}
      <div 
        className={`
          sidebar 
          ${isCollapsed ? "collapsed" : ""} 
          ${isMobile ? "mobile" : ""}
          ${isMobile && showMobileMenu ? "mobile-open" : ""}
        `}
      >
        {!isMobile && (
          <div
            onClick={toggleMenu}
            className="toggle-btn"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <FaBars />
          </div>
        )}
        
        {/* Navigation Menu */}
        <nav>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`menu-item ${currentPage === item.id ? "active" : ""}`}
                  onClick={() => {
                    setCurrentPage(item.id);
                    if (isMobile) setShowMobileMenu(false);
                  }}
                  aria-label={item.label}
                >
                  <span className="menu-icon">{item.icon}</span>
                  {(!isCollapsed || isMobile) && <span className="menu-label">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;