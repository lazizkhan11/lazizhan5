import React from 'react';
import { NavLink } from 'react-router-dom';
import l from '../header/Header.module.css';
import img1 from '../assets/images/logotext.png'

const Header = () => {
    return (
      
            <header className={l.header}>
                <section className={l.header__one}>
                    <div className={l.container}>
                        <nav className={l.container__navbar}>
                            <NavLink to="" className={l.navbar__a}>
                            <img src={img1} alt="" className={l.a__teffine}/> 
                            </NavLink>
                            <ul className={l.navbar__ul}>
                                <li className={l.ul__li}>
                                    <NavLink to="" className={l.li__a}>Главная</NavLink>
                                </li>
                                <li className={l.ul__li}>
                                    <NavLink to="Metropolitia" className={l.li__a}>Мероприятия</NavLink>
                                </li>
                                <li className={l.ul__li}>
                                    <NavLink to="/statia" className={l.li__a}>Статьи</NavLink>
                                </li>
                             
                                <li className={l.ul__li}>
                                    <NavLink to="/kontakt" className={l.li__a}>Контакт</NavLink>
                                </li>
                            </ul>
                            <button type="button" className={l.navbar__btn}>Купить онлайн</button>
                        </nav>
                    </div>
                </section>

           


            </header>
        
    );
}

export default Header;
