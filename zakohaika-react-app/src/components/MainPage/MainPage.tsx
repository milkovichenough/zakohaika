import React from "react";
import {PlacesList} from "../PlacesList/PlacesList";


export const MainPage = () => {
    const style: React.CSSProperties = {
        width: '100%',
    };

    return (
      <>
          <section id="container">
              <div className="wrap-container">
                  <section className="content-box box-1">
                      <div className="zerogrid">
                          <div className="wrap-box">
                              <div className="box-header">
                                  <h2>ПРО НАС</h2>
                              </div>
                              <div className="box-content">
                                  <p>
                                      Ми - команда студентів Львівського національного університету ім. Івана Франка
                                      <br/>Наш продукт - сайт для закоханих людей та "просто друзів"
                                      <br/>Тут Ви знайдете найкращі місця для побачень у місті Львів
                                  </p>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="content-box box-style-1 box-2">
                      <div className="zerogrid">
                          <div className="wrap-box">
                              <PlacesList />
                          </div>
                      </div>
                  </section>
              </div>
          </section>
          <section className="content-box box-3">
              <div className="zerogrid">
                  <div className="wrap-box">
                      <div className="box-header">
                          <p>Відкрийте Двері до Романтичного Світу: Місця для Найнезабутніших Побачень</p>
                      </div>
                      <div className="box-content">
                          <p>Любов — це подорож, і ми є вашими провідниками у світі романтичних вражень.
                              На нашому сайті ви знайдете наймальовничіші місця для невимушених побачень та важливих моментів.
                              Чи оберете ви кінотеатр, терасу, купол чи ресторан, кожне місце розкриває атмосферу кохання, залишаючи
                              деталі вашого вечора на вашому підконтрольному полі.
                              Дозвольте собі зануритися у світ, де кожна мить — це частинка вашої унікальної романтичної
                              історії.</p>
                      </div>
                  </div>
              </div>
          </section>
          <section className="content-box box-style-1 box-4">
              <div className="zerogrid" style={style}>
                  <div className="wrap-box">
                      <div className="row">
                          <article>
                              <div className="col-1-2">
                                  <img src="images/kilimsky.jpg" alt="" />
                              </div>
                              <div className="col-1-2">
                                  <div className="entry-content t-center">
                                      <h3>Ресторан «Kilinski»</h3>
                                      <p>Ресторан «Kilinski» знаходиться у Стрийському парку - одному із найбільших та найкрасивіших у Львові.
                                          Заклад доповнить Ваш  список ресторанів, які ідеально підходять для урочистих свят, романтичної вечері, або навіть елегантного освідчення у День всіх закоханих.
                                          Витончені деталі інтер’єру, шедевральні страви, і елегантна атмосфера Парижу - Вам захочеться  знов повернутись сюди.
                                      </p>
                                      <a className="button" href="single.html">Перейти</a>
                                  </div>
                              </div>
                          </article>
                      </div>
                      <div className="row">
                          <article>
                              <div className="col-1-2 f-right">
                                  <img src="images/kupol-kinocenter.jpg" alt="" />
                              </div>
                              <div className="col-1-2">
                                  <div className="entry-content t-center">
                                      <h3>Під куполом на даху кіноцентру</h3>
                                      <p>Якщо Ви вже були на оглядових майданчиках у Львові, або терасах ресторанчиків, і далі перебуваєте  у пошуках оригінальної локації для  освідчення - запросіть свою половинку у кіно на даху будинку.
                                          Рекомендуємо Вам компанію What’s On Friday - кіно та купол під зорями на даху Lviv Film Center.
                                          У Вас буде нагода  орендувати територію даху та купол тільки на двох  для вашої особливої події — освідчення чи просто  романтичного побачення.
                                          Тут дуже атмосферно, затишно і тепло, а  на випадок вимкнення світла працюють генератори.
                                      </p>
                                      <a className="button" href="single.html">Перейти</a>
                                  </div>
                              </div>
                          </article>
                      </div>
                      <div className="row">
                          <article>
                              <div className="col-1-2">
                                  <img src="images/Panorama.jpg" alt="" />
                              </div>
                              <div className="col-1-2">
                                  <div className="entry-content t-center">
                                      <h3>Ресторан «Cloud no7.Panorama»</h3>
                                      <p>Ресторан «Cloud no7.Panorama» також входить у список популярних закладів, де можна вийти на терасу і насолодитися фантастичною панорамою Львова та зробити чудові фото на заході сонця.
                                          Крім цього, ресторан підкорить Вас смачними стравами і власною лабораторією коктейлів.
                                          І найважливіше - у закладі «Cloud no7.Panorama» можна організувати незабутнє освідчення, обравши зал із скляним куполом під вечірнім зоряним небом.
                                          Оригінальності  до інтер’єру додає дерево, яке росте через усі поверхи. Прекрасне місце, щоб освідчитись в коханні або просто  провести романтичний вечір у мрійливій атмосфері.
                                      </p>
                                      <a className="button" href="single.html">Перейти</a>
                                  </div>
                              </div>
                          </article>
                      </div>
                  </div>
              </div>
          </section>
      </>
    );
}
