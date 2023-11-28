import {useState} from 'react'
import './Currencies.scss'
import Converter from './Converter'

//Déclaration des types
interface CurrenciesPropsObjects {
    name:string,
    rate:number
}

interface CurrenciesProps {
    currencies:CurrenciesPropsObjects[]
}

const Currencies = ({currencies} : CurrenciesProps) => {

    //Déclaration du state
    const [currency , setCurrency] = useState(currencies[0].name)
    const [rate, setRate] = useState(currencies[0].rate)

    //Sélection de la currency
    const changeCurrency = (e:any) => {
        const newCurrency = e.target.textContent;
        const currency = currencies.filter(currency => currency.name === newCurrency);
        
        //Maj le state
        setCurrency(currency[0].name);
        setRate(currency[0].rate)
    }

    return (
        <>
        <div className='currencies'>
            <p className='currencies__title'> Currencies </p>
            <ul className='currencies__list'>
                {currencies.map((currency , index)  => (
                    <li onClick={changeCurrency} key={index} className='currency'>{currency.name}</li>
                ))}
            </ul>
        </div>
        <Converter currency={currency} rate={rate} />
        </>
    )
} 

export default Currencies