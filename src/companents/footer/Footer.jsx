import React from 'react';
import f from '../footer/Footer.module.css'
const Footer = () => {
    return (
        <div>
              <footer className={f.footer}>
            <section className={f.footer__one}>
                <div className={f.container}>
                    <div className={f.footer__upperbox}>
                        <div className={f.footer__upperbox_titlebox}>
                            <h1 className={f.titlebox__title}>Будьте в курсе новостей</h1>
                        </div>
                        <div className={f.titlebox__inpbox}>
                            <input type="email" placeholder="Введите адрес электронной почты" name="EMAIL" className={f.inp__email}/>
                            <button type="submit" className={f.text__btn}>Отправить</button>
                        </div>
                    </div>

                    <div className={f.footer__middlebox}>
                        <div className={f.footer__middlebox_one}>
                            <div className={f.one__doublebox}>
                                <div className={f.one__doublebox_one}>
                                    <div className={f.one__one}>
                                        <div className={f.one__one_imgbox}>
                                            <a href="tel:+998977540457" className={f.imgbox__link_tel}>
                                                <img src="./assets/icons/phone.svg" alt="" className={f.imgbox__link_tel_phoneimg}/>
                                            </a>
                                        </div>

                                        <div className={f.one__one_numberbox}>
                                            <a href="tel:+998977540457" className={f.numberbox__one}>+998 97 754 04 57
                                            </a>
                                            <a href="tel:+998977540457" className={f.numberbox__two}>+998 97 754 04 57
                                            </a>
                                        </div>
                                    </div>

                                    <div className={f.one__two}>
                                        <div className={f.one__two_imgbox}>
                                            <a href="#" className={f.imgbox__link_latter}>
                                                <img src="./assets/icons/latter.svg" alt="" className={f.imgbox__link_latter_latterimg}/>
                                            </a>
                                        </div>

                                        <div className={f.one__two_emailbox}>
                                            <p className={f.emailbox__email}>egorshibzik@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className={f.one__three}>
                                        <div className={f.one__three_imgbox}>
                                            <a href="#" className={f.imgbox__link_gps}>
                                                <img src="./assets/icons/gps.svg" alt="" className={f.imgbox__link_gps_gpsimg}/>
                                            </a>
                                        </div>

                                        <div className={f.one__three_gpsbox}>
                                            <p className={f.gpsbox__gps}>Mirzo-Ulugbek pr-t, Mustaqillik, 75</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={f.one__doublebox_two}>
                                    <div className={f.two__contacts}>
                                        <a href="https://www.instagram.com/invites/contact/?i=fbe6tlq9otb2&utm_content=hm6rzvf" className={f.two__contscts_insta}>
                                            <img src="./assets/icons/inst.svg" alt="" className={f.insta__instaimg}/>
                                        </a>

                                        <a href="https://t.me/+998909210816" className={f.two__contacts_telega}>
                                            <img src="./assets/icons/telega.svg" alt="" className={f.telega__telegaimg}/>
                                        </a>

                                        <a href="#" className={f.two__contscts_youtube}>
                                            <img src="./assets/icons/youtube.svg" alt="" className={f.youtube__youtubeimg}/>
                                        </a>

                                        <a href="#" className={f.two__contacts_facebook}>
                                            <img src="./assets/icons/facebook.svg" alt="" className={f.facebook__facebook_img}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={f.footer__middlebox_two}>
                            <ul className={f.two__ull}>
                                <li className={f.two__ull_lii}>
                                    <a href="#Главная " className={f.lii__aa}>Главная </a>
                                </li>
                                <li className={f.two__ull_lii}>
                                    <a href="#Мероприятия " className={f.lii__aa}>Мероприятия </a>
                                </li>
                                <li className={f.two__ull_lii}>
                                    <a href="#Статьи " className={f.lii__aa}>Статьи </a>
                                </li>
                                <li className={f.two__ull_lii}>
                                    <a href="#Продукт " className={f.lii__aa}>Продукт</a>
                                </li>
                                <li className={f.two__ull_lii}>
                                    <a href="#Контакт " className={f.lii__aa}>Контакт </a>
                                </li>
                            </ul>
                        </div>

                        <div className={f.footer__lowerbox_three}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7659.870826358165!2d69.33256072806445!3d41.32539117945671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1673886177191!5m2!1sru!2s" width="530" height="250" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                    <div className={f.footer__lowerbox}>
                        <a href="#" className={f.footer__lowerbox_link}>
                            <img src="./assets/icons/taffeine.svg" alt="" className={f.link__logo}/>
                        </a>
                        <p className={f.lasttext}>© Sightex LLC 2022    /    Все права защищены</p>
                    </div>
                </div>
            </section>
        </footer>
        </div>
    );
}

export default Footer;
