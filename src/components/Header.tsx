import './Header.scss'

interface HeaderProps {
    euroAmount:number;
    changeAmount: any;
}

const Header = ({euroAmount, changeAmount}: HeaderProps) => {

    const changeEuroAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = parseInt(e.target.value);
        changeAmount(newAmount);
    }

    return (
        <header className='header'>
            <h1 className='header__title'> Converter </h1>
            <div className="header__amount">
                <input onChange={changeEuroAmount} type="number" min="1" value={euroAmount} /> <h2> euro </h2>
            </div>
            
        </header>
    )
} 

export default Header