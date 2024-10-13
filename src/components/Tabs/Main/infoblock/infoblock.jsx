import './infoblock.css'

export default function Infoblock() {
    const infoText = {
        text1: 'ДЕШЕВЫЕ ПРОДУКТЫ С ДОСТАВКОЙ ПО ГОРОДУ',
        text2: 'Скидка 20% новым клиентам по промокоду «NEW»'
    }
    return (
            <div class="maininfo">
                <p className='maintext'>{infoText.text1}</p>
                <p className='undertext'>{infoText.text2}</p>
            </div>
    )
  }