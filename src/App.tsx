import './App.css'
import currencies from './data/currencies'
import Header from './components/Header'
import Currencies from './components/Currencies'

function App() {

  return (
    <div className='container'>
        <Header />
        <main>
          <Currencies currencies={currencies}/>
        </main>
    </div>
  )
}

export default App
