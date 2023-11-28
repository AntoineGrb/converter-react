import './Converter.scss'

interface ConverterProps {
    currency:string;
    rate:number
}

const Converter = ({currency , rate}: ConverterProps) => {

    return (
        <div className='converter'>
            <p> <span className='converter__result'> {rate.toFixed(2)} </span></p>
            <p className="converter__currency"> {currency} </p>
        </div>
    )

} 

export default Converter