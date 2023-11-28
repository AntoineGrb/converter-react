import {useState} from 'react'
import './App.css'
import currencies from './data/currencies'
import Header from './components/Header'
import Currencies from './components/Currencies'

function App() {

  const [euroAmount , setEuroAmount] = useState(1);

  const handleEuroAmount = (amount: number) => {
    setEuroAmount(amount)
  }

  return (
    <div className='container'>
        <Header euroAmount={euroAmount} changeAmount={handleEuroAmount}/>
        <main>
          <Currencies currencies={currencies} euroAmount={euroAmount}/>
        </main>
    </div>
  )
}

export default App
