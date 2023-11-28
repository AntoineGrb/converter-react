import {useState} from 'react'
import './Currencies.scss'
import Converter from './Converter'

//Déclaration des types
interface CurrenciesPropsObjects {
    name:string,
    rate:number
}

interface CurrenciesProps {
    currencies:CurrenciesPropsObjects[];
    euroAmount:number;
}

const Currencies = ({currencies , euroAmount} : CurrenciesProps) => {

    //Déclaration du state
    const [currency , setCurrency] = useState(currencies[0].name)
    const [rate, setRate] = useState(currencies[0].rate)

    //Sélection de la currency
    const changeCurrency = (e:any) => {
        const newCurrency = e.target.textContent;
        const currency = currencies.find(currency => currency.name === newCurrency);
        
        //Maj le state
        if (currency) {
            setCurrency(currency.name);
            setRate(currency.rate)
        }
    }

    return (
        <>
        <div className='currencies'>
            <p className='currencies__title'> Currencies </p>
            <ul className='currencies__list'>
                {currencies.map((element , index)  => (
                    <li onClick={changeCurrency} key={index} className='currency'>{element.name}</li>
                ))}
            </ul>
        </div>
        <Converter currency={currency} rate={rate} euroAmount={euroAmount}/>
        </>
    )
} 

export default Currencies