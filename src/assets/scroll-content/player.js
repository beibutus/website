import React from 'react';

import { playerImages } from "../images/products/scroll-pages/PlayerImagesStatic";


export const playerContent = [
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
      img: playerImages[0].src
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
      img: playerImages[1].src
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
      img: playerImages[2].src
    },
    {
      header: <h2>СОХРАНЯЙТЕ СЛОВО <br /> ДЛЯ ПОВТОРЕНИЯ</h2>,
      body: (
        <>
          <p>
            База данных в интернете сохранит слово <br />
          для повторения на множестве устройств.
        </p>
        </>
      ),
      img: playerImages[3].src
    }
  ];