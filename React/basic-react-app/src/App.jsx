import './App.css';
import './Index.css'
import ProductTab from './ProductTab';
import Button from './Button.jsx'
import Form from './Form.jsx';
import Counter from './State/Counter.jsx';
import LikeButton from './State/LikeButton.jsx';
import LudoBoard from './State/LudoBoard.jsx';
import ToDoList from './State/ToDoList.jsx';
import Lottery from './State/Lottery.jsx';
import LotteryGame from './LotteryGame/Lottery.jsx';
import { sum } from './State/helper.js';

function App() {
  let winCondition = (ticket) => {
    // return (sum(ticket) === 15);
    return (ticket.every((num) => num === ticket[0]))
  }
  return (
    <>
      <LotteryGame n={3} winCondition={winCondition}/>
    </>
  );
}

export default App
