import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Minigame from '../pages/Minigame';
import TicTacToe from '../pages/TicTacToe';
import Pacman from '../pages/Pacman';
import Pomodoro from '../pages/Pomodoro';
import Calculadora from '../pages/Calculadora';



const MainContent = ({ currentPage }) => {
  const pageComponents = {
    home: <Home />,
    portfolio: <Portfolio />,
    contact: <Contact />,
    pomodoro: <Pomodoro />,
    calculadora: <Calculadora />,
    pacman: <Pacman />,
    tictactoe: <TicTacToe />,
    chatweb: <Minigame />
  };

  return (
    <div className="main-content">
      {pageComponents[currentPage]}
    </div>
  );
};

export default MainContent;