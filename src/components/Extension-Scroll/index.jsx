import React, { Component, Fragment } from 'react';
import ReactHtmlParser from "react-html-parser";
import Header from '../Header';
import $ from 'jquery';

import './Extension-scroll.scss';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";


// import { extensionImages } from '../../assets/images/products/scroll-pages/ExtensionImages';
import { extensionImages } from '../../assets/images/products/scroll-pages/ExtensionImagesStatic';



// const isMobile = () => {
//     let check = false;
//     (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
//     return check;
// }

// const throttle = (func, limit) => {
//     let inThrottle
//     return function() {
//       const args = arguments
//       const context = this
//       if (!inThrottle) {
//         func.apply(context, args)
//         inThrottle = true
//         setTimeout(() => inThrottle = false, limit)
//       }
//     }
//   }

export default class ExtensionScroll extends Component {

    componentDidMount() {
        $(document).scroll(this.scrollPageView);
    }

    componentWillUnmount() {
        $(document).off("scroll", this.scrollPageView);
    }

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    scrollPageView = () => {

        const pos = $(document).scrollTop();

        const fadeInValue = 300;
        const fadeOutValue = 100;

        if (pos > 300 && pos < 700) {
            this.hideAll("ext_img_1")
            $("#ext_img_1").fadeIn(fadeInValue);
        }
        if (pos > 700 && pos < 1300) {
            this.hideAll("ext_img_2")
            $("#ext_img_1").fadeOut(fadeOutValue);
            $("#ext_img_2").fadeIn(fadeInValue);
        }
        if (pos > 1300 && pos < 1900) {
            this.hideAll("ext_img_3")
            $("#ext_img_2").fadeOut(fadeOutValue);
            $("#ext_img_3").fadeIn(fadeInValue);
        }
        if (pos > 1900 && pos < 2500) {
            this.hideAll("ext_img_4")
            $("#ext_img_3").fadeOut(fadeOutValue);
            $("#ext_img_4").fadeIn(fadeInValue);
        }
        if (pos > 2500 && pos < 3100) {
            this.hideAll("ext_img_5")
            $("#ext_img_4").fadeOut(fadeOutValue);
            $("#ext_img_5").fadeIn(fadeInValue);
        }
        if (pos > 3100 && pos < 3700) {
            this.hideAll("ext_img_6")
            $("#ext_img_5").fadeOut(fadeOutValue);
            $("#ext_img_6").fadeIn(fadeInValue);
        }
        if (pos > 3700 && pos < 4600) {
            this.hideAll("ext_img_7")
            $("#ext_img_6").fadeOut(fadeOutValue);
            $("#ext_img_7").fadeIn(fadeInValue);
        }
        if (pos > 4600 && pos < 5100) {
            this.hideAll("ext_img_8")
            $("#ext_img_7").fadeOut(fadeInValue);
            $("#ext_img_8").fadeIn(fadeOutValue);
        }
        if (pos > 5100 && pos < 5700) {
            this.hideAll("ext_img_9")
            $("#ext_img_8").fadeOut(fadeOutValue);
            $("#ext_img_9").fadeIn(fadeInValue);
        }
        if (pos > 5700 && pos < 6100) {
            this.hideAll("ext_img_10")
            $("#ext_img_8").fadeOut(fadeOutValue);
            $("#ext_img_10").fadeIn(fadeInValue);
        }
        if (pos < 300) {
            $("#ext_img_1").fadeOut(fadeOutValue);
        }
    }

    hideAll = (exceptMe) => {
        $(".left").each(function (i) {
            if ($(this).attr("id") === exceptMe) return;
            $(this).fadeOut(this.fadeOutValue);
        });
    }


    render() {

        const scrollImages = extensionImages.map(img => (
            <div className="flex-child left" id={img.id} key={img.id}>
                <img
                    className="description-img"
                    src={img.src}
                    alt="Extension_Image" />
            </div>
        ));

        return (
            <Fragment>
                <Header text={this.props.text} />
                <div className="Description-Scroll">

                    <div className="flex-parent extension-block">
                        <div className="extension-header-top">
                            <h2>{this.getLangText("ExtensionHeader")}</h2>
                            <p>
                                {this.getLangText("ExtensionTopText")}
                            </p>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header button-header">
                                <div>
                                    <h2>{this.getLangText("ExtensionFirstHeader")}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child button-extension">
                            <div className="button-started-extension">
                                <a className="get-started-button-extension top"
                                    href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ВЫБИРАЙТЕ ЛЮБОЙ МАТЕРИАЛ</h2>

                                    <p>Каждая новость в интернете может стать материалом <br/> для изучения иностранного языка.</p>
                                    <p>Главное найти интересный именно для вас материал</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ВЫДЕЛЯЙТЕ СЛОВО</h2>

                                        <p>
                                            Можно выбрать для перевода часть слово или несколько слов. <br/>
                                            Еще мы можем быстро отправить предложение на перевод.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ПЕРЕВОДИТЕ ЕГО</h2>
                                    <p>
                                        Окно переводчика можно не закрывать. <br/>
                                        Мы просто держим с ним связь.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>СОХРАНЯЙТЕ СЛОВО ДЛЯ ПОВТОРЕНИЯ</h2>

                                    <p>База данных в интернете сохранит слово <br/>
                                     для повторения на множестве устройств.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>В ОДНОМ СПИСКЕ <br/> ВСЯ ИСТОРИЯ ОБУЧЕНИЯ</h2>

                                    <p>Вы читаете сотни страниц, <br/>
                                    и только часть из них станет материалом <br/>
                                    для обучения на иностранным языке.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ПОВТОРЯЙ СЛОВА ПРЯМО В СТАТЬЕ</h2>

                                    <p>Мы скроем слова для эффективного повтора. <br/><br/>

                                    Если статья на иностранном языке была интересна для Вас, <br/>
                                    то и повторить иностранные слова будет интереснее <br/> 
                                    прямо на ранее прочитанных новостях/статьях.
 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ОТКРОЙ ТРЕНАЖЕР</h2>

                                    <p>
                                    Игры для повтора слов можно вызвать прямо <br/>
                                     из вашей истории интернет чтения и просмотра видео.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ОДНА СТАТЬЯ - ОДИН УРОК</h2>
                                    <p>
                                    Ваши уроки будут удобно рассортированы по материалам<br/> 
                                    которые вы читали или будут сгруппированы по дням <br/>
                                     когда вы познакомились со словом на иностранном языке.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>ПРОСТО ОТСКАНИРУЙТЕ</h2>
                                    <p>
                                    Чтобы из компьютера было бы легко перейти<br/>
                                     на мобильные игры просто отсканируйте QR.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">

                        {/* Scroll Images Block */}
                        {scrollImages}

                        <div className="flex-child content">
                            <div className="extension-header">
                                <div>
                                    <h2>И БУДЬ МОБИЛЬНЫМ! <br/> НЕ ТЕРЯЙ ВРЕМЯ!</h2>
                                    <p>
                                        Теперь повторять материал можно <br/> в любом удобном для Вас месте. <br/><br/>

                                        А чтобы было не скучно мы создали <br/> несколько игр для процесса повторения слов.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="flex-child button-extension footer-button">
                        <div className="button-started-extension">
                                <a className="get-started-button-extension top"
                                    href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                                </a>
                        </div>
                    </div> */}

                </div>
            </Fragment>
        )
    }
}






