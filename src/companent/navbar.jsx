import '../styles/navbar.css'

export const Navbar = ()=> {
    return (
        <>
            <div className="max-container">
                <div className="max-top-element">
                    <div className="top-element">
                        <img className='top-left-img' src="../../public/svg/logo.svg" alt="logo" />
                        <h1 className='top-right-text'>ООО "Рог и копыта"</h1>
                    </div>
                </div>
                <div className="container">
                    <nav>
                        <div className="top-block">
                            <div className="top-right-element">
                                <img src="../../public/svg/logos.svg" alt="logo" />
                                <ul className='items'>
                                    <li className='item1'>Создать задание</li>
                                    <li className='item'>Найти задание</li>
                                    <li className='item'>Для бизнеса</li>
                                </ul>
                            </div>
                            <div className="top-right-elem">
                                <ul className='items'>
                                    <li className='item'>Сообщения</li>
                                    <li className='item'>Мои заказы</li>
                                </ul>
                                <img src="../../public/svg/hugs.svg" alt="logo" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;