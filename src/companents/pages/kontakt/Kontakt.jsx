import React from 'react';
import s from '../kontakt/Kontakt.module.css'
import logo1 from '../../assets/icons/grey-phone.svg'
import logo2 from '../../assets/icons/grey-latter.svg'
import logo3 from '../../assets/icons/grey-gps.svg'
const Kontakt = () => {
    return (
        // <form action="https://echo.htmlacademy.ru" method="post">
        <main className={s.main}>
        <section className={s.main__one}>
            <div className={s.container}>
                <div className={s.container__doublebox}>
                    <div className={s.container__doublebox_odin}>
                        <div className={s.odin__triplbox}>
                            <div className={s.odin__triplbox_odin}>
                                <div className={s.odin__greybox}>
                                    <img src={logo1} alt="" className={s.odin__greybox_grey_phone}/>
                                    <p className={s.odin__greybox_item}>Номер телефона:</p>
                                </div>
                                <a href="tel:+998977540457" className={s.odin__greybox_phone_number}>+998 97 754 04 57</a>
                            </div>

                            <div className={s.odin__triplbox_dva}>
                                <div className={s.dva__greybox}>
                                    <img src={logo2} alt="" className={s.odin__greybox_grey_latter}/>
                                    <p className={s.odin__greybox_item}>Адрес электронной почты:</p>
                                </div>
                                <p className={s.odin__greybox_mail}>egorshibzik@gmail.com</p>
                            </div>

                            <div className={s.odin__triplbox_tri}>
                                <div className={s.tri__greybox}>
                                    <img src={logo3} alt="" className={s.odin__greybox_grey_gps}/>
                                    <p className={s.odin__greybox_item}>Адрес:</p>
                                </div>
                                <p className={s.odin__greybox_adres}>Mirzo-Ulugbek pr-t, Mustaqillik, 75</p>
                            </div>

                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9175.034462553102!2d69.33493990019491!3d41.326429698594794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1673954565599!5m2!1sru!2s" width="100%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className={s.container__doublebox_dva}>
                        <h2 className={s.dva__item}>Регистрация</h2>
                        <label>
                            <p className={s.label__text}>Телефон номер:</p>
                            <input type="text" placeholder="Напишите" name="PHONE NUMBER" className={s.inp__tel}/>
                        </label>

                        <label>
                            <p className={s.label__text}>Эмаил аддресс:</p>
                            <input type="email" placeholder="Напишите" name="EMAIL" className={s.inp__mail}/>
                        </label>

                        <label>
                            <p className={s.label__text}>Текст сообщения:</p>
                            <textarea name="MASSAGE" placeholder="Напишите" className={s.textarea}></textarea>
                        </label>

                        <div className={s.checkbox}>
                            <input type="checkbox" name="AGREE" className={s.inp__checkbox}/>
                            <p className={s.checkbox__text}>Я согласен с условиями использования</p>
                        </div>

                        <button type="submit" className={s.registr}>Регистрация</button>
                    </div>

                </div>
            </div>
        </section>
    </main>
          /* <form/>  */
   
    );
}

export default Kontakt;