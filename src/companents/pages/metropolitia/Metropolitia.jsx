import React from 'react';
import m from '../metropolitia/Metropolitia.module.css'
import logo1 from '../../assets/icons/calendar.svg'
import logo2 from '../../assets/icons/calendar.svg'
import logo3 from '../../assets/icons/calendar.svg'
import logo4 from '../../assets/icons/calendar.svg'
import logo5 from '../../assets/icons/calendar.svg'
const Metropolitia = () => {
    return (
        <main class={m.main}>
<section class={m.main__one}>
    <div class={m.container}>
        <div class={m.container__title2}>Поиск событий по интересам</div>

        <div class={m.container__triplbox}>

            <div class={m.container__triplbox_one}>
                <div class={m.one__onex}>
                    <div class={m.one__onex_imgbox}>
                        <button class={m.imgbox__btn} type="button">Киберспорт</button>
                    </div>
                    <h2 class={m.onex__title}>2022 F1 Esports Series Pro
                    Championship – Race Eight</h2>
                    <div class={m.datebox}>
                        <img src={logo1} alt="" class={m.datebox__img}/>
                        <p class={m.datebox__day}>3 ноября 2022 г</p>
                    </div>
                </div>


                <div class={m.one__twox}>
                    <div class={m.one__twox_imgbox}>
                        <button class={m.imgbox__btn} type="button">Киберспорт</button>
                    </div>
                    <h2 class={m.onex__title}>Back from the edge: the full story of Gee Atherton's return</h2>
                    <div class={m.datebox}>
                        <img src={logo1} alt="" class={m.datebox__img}/>
                        <p class={m.datebox__day}>3 ноября 2022 г</p>
                    </div>
                </div>

                <div class={m.one__twox}>
                    <div class={m.one__threex_imgbox}>
                        <button class={m.imgbox__btn} type="button">Киберспорт</button>
                    </div>
                    <h2 class={m.onex__title}>Back from the edge: the full story of Gee Atherton's return</h2>
                    <div class={m.datebox}>
                        <img src="./assets/icons/calendar.svg" alt="" class={m.datebox__img}/>
                        <p class={m.datebox__day}>3 ноября 2022 г</p>
                    </div>
                </div>
            </div>


            <div class={m.container__triplbox_one}>
                <div class={m.one__onex}>
                    <div class={m.one__fourx_imgbox}>
                        <button class={m.imgbox__btn} type="button">Киберспорт</button>
                    </div>
                    <h2 class={m.onex__title}>2022 F1 Esports Series Pro
                    Championship – Race Eight</h2>
                    <div class={m.datebox}>
                        <img src="./assets/icons/calendar.svg" alt="" class={m.datebox__img}/>
                        <p class={m.datebox__day}>3 ноября 2022 г</p>
                    </div>
                </div>


                <div class={m.one__twox}>
                    <div class={m.one__fivex_imgbox}>
                        <button class={m.imgbox__btn} type="button">Киберспорт</button>
                    </div>
                    <h2 class={m.onex__title}>Back from the edge: the full story of Gee Atherton's return</h2>
                    <div class={m.datebox}>
                        <img src="./assets/icons/calendar.svg" alt="" class={m.datebox__img}/>
                        <p class={m.datebox__day}>3 ноября 2022 г</p>
                    </div>
                </div>

                <div class={m.one__twox}>
                    <div class={m.one__sixx_imgbox}>
                        <button class={m.imgbox__btn} type="button">Киберспорт</button>
                    </div>
                    <h2 class={m.onex__title}>Back from the edge: the full story of Gee Atherton's return</h2>
                    <div class={m.datebox}>
                        <img src="./assets/icons/calendar.svg" alt="" class={m.datebox__img}/>
                        <p class={m.datebox__day}>3 ноября 2022 г</p>
                    </div>
                </div>
            </div>

            <div class={m.addbox}>
                <button class={m.adding} type="button">Загрузи больше</button>
            </div>
        </div>
    </div>
</section>
</main>
    );
}

export default Metropolitia;
