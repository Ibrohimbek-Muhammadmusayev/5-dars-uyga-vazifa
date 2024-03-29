import '../styles/page1.css'

export const Page1 = ()=> {
    return (
        <>
            <div className="wrapper">
                <h1 className='top-status-text'>Начало регистрации</h1>
                <div className="status-element">
                    <div className="status-load"></div>
                </div>
                <h1>Выбор тип профиля</h1>
                <p>Чтобы размещать задания в сервисе, примите условия <br /> Соглашения Qugo с Заказчиком и выберите “Стать заказчиком” <br /> Чтобы выполнять задания и зарабатывать деньги выберите “Стать <br /> исполнителем”</p>
                <form>
                    <div className="top-check">
                        <input type="radio" />
                        Стать исполнителем
                    </div>
                    <div className="top-check">
                        <input type="radio" />
                        Стать заказчиком
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page1;