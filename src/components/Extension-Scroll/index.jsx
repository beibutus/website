import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Extension-scroll.scss";

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";

// import { extensionImages } from '../../assets/images/products/scroll-pages/ExtensionImages';
import { extensionImages } from "../../assets/images/products/scroll-pages/ExtensionImagesStatic";

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

  state = {
    bgImgId: 0,
    imgId: 0,
  }

  imgTopOffset = 150;

  content = [
    {
      header: <h2>ВЫБИРАЙТЕ ЛЮБОЙ МАТЕРИАЛ</h2>,
      body: (
        <>
          <p>
            Каждая новость в интернете может стать материалом <br /> для
            изучения иностранного языка.
          </p>
          <p>Главное найти интересный именно для вас материал</p>
        </>
      ),
      img: extensionImages[0].src
    },
    {
      header: <h2>ВЫДЕЛЯЙТЕ СЛОВО</h2>,
      body: (
        <>
        <p>
          Можно выбрать для перевода часть слово или несколько слов. <br />
          Еще мы можем быстро отправить предложение на перевод.
        </p>
        </>
      ),
      img: extensionImages[1].src
    },
    {
      header: <h2>ПЕРЕВОДИТЕ ЕГО</h2>,
      body: (
        <>
        <p>
          Окно переводчика можно не закрывать. <br />
          Мы просто держим с ним связь.
        </p>
        </>
      ),
      img: extensionImages[2].src
    },
    {
      header: <h2>СОХРАНЯЙТЕ СЛОВО <br/> ДЛЯ ПОВТОРЕНИЯ</h2>,
      body: (
        <>
        <p>
          База данных в интернете сохранит слово <br />
          для повторения на множестве устройств.
        </p>
        </>
      ),
      img: extensionImages[3].src
    },
    {
      header: (
        <h2>
          В ОДНОМ СПИСКЕ <br /> ВСЯ ИСТОРИЯ ОБУЧЕНИЯ
        </h2>
      ),
      body: (
        <>
        <p>
          Вы читаете сотни страниц, <br />
          и только часть из них станет материалом <br />
          для обучения на иностранным языке.
        </p>
        </>
      ),
      img: extensionImages[4].src
    },
    {
      header: <h2>ПОВТОРЯЙ СЛОВА ПРЯМО В СТАТЬЕ</h2>,
      body: (
        <>
          <p>
            Мы скроем слова для эффективного повтора. <br />
            Если статья на иностранном языке была интересна для Вас, <br />
            то и повторить иностранные слова будет интереснее <br />
            прямо на ранее прочитанных новостях/статьях.
          </p>
        </>
      ),
      img: extensionImages[5].src
    },
    {
      header: <h2>ОТКРОЙ ТРЕНАЖЕР</h2>,
      body: (
        <>
          <p>
            Игры для повтора слов можно вызвать прямо <br />
            из вашей истории интернет чтения и просмотра видео.
          </p>
        </>
      ),
      img: extensionImages[6].src
    },
    {
      header: <h2>ОДНА СТАТЬЯ - ОДИН УРОК</h2>,
      body: (
        <>
        <p>
          Ваши уроки будут удобно рассортированы по материалам
          <br />
          которые вы читали или будут сгруппированы по дням <br />
          когда вы познакомились со словом на иностранном языке.
        </p>
        </>
      ),
      img: extensionImages[7].src
    },
    {
      header: <h2>ПРОСТО ОТСКАНИРУЙТЕ</h2>,
      body: (
        <>
        <p>
          Чтобы из компьютера было бы легко перейти
          <br />
          на мобильные игры просто отсканируйте QR.
        </p>
        </>
      ),
      img: extensionImages[8].src
    },
    {
      header: (
        <h2>
          И БУДЬ МОБИЛЬНЫМ! <br /> НЕ ТЕРЯЙ ВРЕМЯ!
        </h2>
      ),
      body: (
        <>
        <p>
          Теперь повторять материал можно <br /> в любом удобном для Вас месте.
          <br />
          <br />
          А чтобы было не скучно мы создали <br /> несколько игр для процесса
          повторения слов.
        </p>
        </>
      ),
      img: extensionImages[9].src
    }
  ];

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  scrollPageView = _ => {
    const pos = window.pageYOffset;

    this.content.forEach((content, i, arr) => {
      const el = content.parentRef;
      const nextEl = arr[i + 1] && arr[i + 1].parentRef;
      if (
        this.state.imgId !== i &&
        (pos + 250) + this.imgTopOffset >= el.offsetTop &&
        (nextEl ? (pos + 250) + this.imgTopOffset < nextEl.offsetTop : true)
      ) {
        this.setState(old => ({
          bgImgId: old.imgId,
          imgId: i
        }));
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Header text={this.props.text} />
        <div className="Description-Scroll">
          <div className="flex-parent extension-block">
            <div className="extension-header-top">
              <h2>{this.getLangText("ExtensionHeader")}</h2>
              <p>{this.getLangText("ExtensionTopText")}</p>
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
                <a
                  className="get-started-button-extension top"
                  href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={chromeStoreSvg}
                    alt="Chrome-store"
                    className="icon get-started-button__icon"
                  />
                  <span className="tag">
                    {this.getLangText("AddToChromeButton")}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ flex: "0 0 50%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  position: "sticky",
                  left: 0,
                  top: this.imgTopOffset
                }}
              >
                <img
                  className="description-img"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 1
                  }}
                  src={extensionImages[this.state.bgImgId].src}
                />
                <Fade spy={this.state.imgId}>
                  <img
                    className="description-img"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 2
                    }}
                    src={extensionImages[this.state.imgId].src}
                    alt="Extension_Image"
                  />
                </Fade>
              </div>
            </div>
            <div style={{ flex: "0 0 50%", marginLeft: "5%" }}>
              {this.content.map((c, i) => {
                return (
                  <div
                    className="extension-block"
                    ref={ref => {
                      c.parentRef = ref;
                    }}
                    key={i}
                  >
                    <div className="flex-child content">
                      <div className="extension-header content">
                        <div>
                          {c.header}
                          {c.body}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
