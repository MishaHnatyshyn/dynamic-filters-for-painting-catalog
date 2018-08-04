
import React, { Component } from 'react';
import logo from '../../../public/img/logo.png';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer
        className="footer"
        style={{ backgroundImage: "url('./img/footer.jpg')" }}
      >
        <div className="wrapper">
          <div className="footer_content">
            <div className="column cl1">
              <a href="index.php" className="footer_logo">
                <img src={logo} alt="РосАрт" />
              </a>
              <p>
Искусство русских мастеров
              </p>
            </div>
            <div className="column cl2">
              <h3 className="hh">
Каталог
              </h3>
              <ul className="footer_nav">
                <li id="active_menu_101">
                  <a className="underscore" href="category.php">
Живопись
                  </a>
                </li>
                <li id="active_menu_102">
                  <a className="underscore" href="category.php">
Графика
                  </a>
                </li>
                <li id="active_menu_103">
                  <a className="underscore" href="category.php">
Изделия
                  </a>
                </li>
              </ul>
            </div>
            <div className="column cl3">
              <h3 className="hh">
О компании
              </h3>
              <ul className="footer_nav">
                <li id="active_menu_104">
                  <a className="underscore" href="blog_popular.php">
Популярные статьи
                  </a>
                </li>
                <li id="active_menu_105">
                  <a className="underscore" href="how_buy.php">
Как купить
                  </a>
                </li>
              </ul>
            </div>
            <div className="column cl4">
              <h3 className="hh">
Присоединяйтесь к нам
              </h3>
              <div className="social">
                <a href="#" target="_blank">
                  <svg className="icon icon-facebook">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="./img/svgdefs.svg#icon-facebook"
                    />
                  </svg>
                </a>
                <a href="#" target="_blank">
                  <svg className="icon icon-vk">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="./img/svgdefs.svg#icon-vk"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer_copy">
© РосАрт 2016-2017
          </div>
          <div className="btn_up_wrap">
            <div className="btn_up" />
          </div>
        </div>
      </footer>
    );
  }
}
