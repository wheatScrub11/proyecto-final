import { useState } from "react";
import {
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaRunning,
  FaMusic,
  FaGamepad,
  FaSun,
  FaMoon,
  FaAngleLeft,
  FaAngleRight,
  FaBars 
} from "react-icons/fa";

import { TbTicTac } from "react-icons/tb";
import { IoMdChatbubbles } from "react-icons/io";
import { ImPacman } from "react-icons/im";
import { MdTimer } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Collapse/Expand Button */}

      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="toggle-btn"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <FaBars />
      </div>
      {/* Navigation Menu */}
      <nav>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`menu-item ${currentPage === item.id ? "active" : ""}`}
                onClick={() => setCurrentPage(item.id)}
                aria-label={item.label}
              >
                <span className="menu-icon">{item.icon}</span>
                {!isCollapsed && <span className="menu-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dark Mode Toggle */}

    </div>
  );
};

export default Sidebar;