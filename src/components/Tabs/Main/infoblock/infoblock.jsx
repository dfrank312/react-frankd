import './infoblock.css'

export default function Infoblock() {
    const infoText = {
        text1: 'САМОЛЁТ',
        text2: 'Сервис экспресс-доставки'
    }
    return (
            <div className="maininfo">
                <h1 className='maintext'>{infoText.text1}</h1>
                <h1 className='undertext'>{infoText.text2}</h1>
            </div>
    )
  }