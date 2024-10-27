import './infoform.css'

const info = {
    textcard1: 'САМОЛЕТ',
    textcard2: 'Самолет - это экспресс сервис доставки продуктов по городу с бесплатной доставкой. Доставка составляет 15 - 30 минут в зависимости от зоны доставки. Заказ, сделанный пользователем в приложении для iOS или Android, комплектуют сборщики или администраторы (товароведы или директор) в дарксторе. Курьеры доставляют заказы пешком или на велосипедах, чтобы избежать пробок.'
}

const InfoForm = () => {
    return  (
        <div className="infoform">
            <div className="adcard">
                <h1 className="maintextoncard">О нас</h1>
                <div className="text">{info.textcard2}</div>                   
            </div>
        </div>
    )
}

export {InfoForm}