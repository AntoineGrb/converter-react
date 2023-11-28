import './App.css'
import currencies from './data/currencies'
import Header from './components/Header'
import Currencies from './components/Currencies'
import Converter from './components/Converter'

function App() {

  console.log(currencies);

  return (
    <div className='container'>
        <Header />
        <main>
          <Currencies />
          <Converter />
        </main>
    </div>
  )
}

export default App
