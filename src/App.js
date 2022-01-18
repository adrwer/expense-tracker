import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
