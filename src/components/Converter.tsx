import './Converter.scss'

interface ConverterProps {
    currency:string;
    rate:number;
    euroAmount: number;
}

const Converter = ({currency , rate , euroAmount}: ConverterProps) => {

    return (
        <div className='converter'>
            <p> <span className='converter__result'> {euroAmount ? (euroAmount * rate).toFixed(2) : rate.toFixed(2)} </span></p>
            <p className="converter__currency"> {currency} </p>
        </div>
    )

} 

export default Converter