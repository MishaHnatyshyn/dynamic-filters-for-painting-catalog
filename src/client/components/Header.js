
import React, { Component } from 'react';
import logo from '../../../public/img/logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header_top">
          <div className="wrapper">
            <div className="navigation_btn">
              <span />
            </div>
            <a href="index.php" className="header_logo">
              <img src={logo} alt="РосАрт" />
            </a>
            <ol className="header_right">

              <li>
                <a href="#">
                  <svg className="icon icon-login">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="./img/svgdefs.svg#icon-login"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg className="icon icon-user">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="./img/svgdefs.svg#icon-user"
                    />
                  </svg>
                </a>
              </li>

              <li className="header_lang || js_DropWrap">
                <div className="ttl || js_DropBtn">
Ru
                  <i className="ic_arrow" />
                </div>
                <div className="box || js_DropBox">
                  <a href="index.php">
En
                  </a>
                  <a href="index.php">
En
                  </a>
                  <a href="index.php">
En
                  </a>
                </div>
              </li>
              <li className="cart">
                <a href="cart.php">
                  <svg className="icon icon-cart">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="./img/svgdefs.svg#icon-cart"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="navigation_wrap">
          <div className="wrapper">
            <nav className="navigation">
              <ol className="nav_btns">

                <li>
                  <a href="#">
                    <svg className="icon icon-login">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="./img/svgdefs.svg#icon-login"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg className="icon icon-user">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="./img/svgdefs.svg#icon-user"
                      />
                    </svg>
                  </a>
                </li>

                <li className="header_lang || js_DropWrap">
                  <div className="ttl || js_DropBtn">
                                        Ru
                    <i className="ic_arrow" />
                  </div>
                  <div className="box || js_DropBox">
                    <a href="index.php">
En
                    </a>
                    <a href="index.php">
En
                    </a>
                    <a href="index.php">
En
                    </a>
                  </div>
                </li>
              </ol>
              <form action="#" className="header_search">
                <input type="text" className="input" placeholder="Поиск" />
                <button>
                  <svg className="icon icon-search">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="./img/svgdefs.svg#icon-search"
                    />
                  </svg>
                </button>
              </form>
              <ul>
                <li id="active_menu_1">
                  <a href="about.php">
О галерее
                  </a>
                </li>
                <li id="active_menu_2">
                  <a href="masters.php">
Мастера
                  </a>
                </li>
                <li id="active_menu_3" className="dropDown">
                  <a href="catalog.php">
Каталог
                    <i className="ic_arrow" />
                  </a>
                  <ul className="navigation_dropDown">
                    <li>
                      <a href="category.php">
Живопись
                      </a>
                    </li>
                    <li>
                      <a href="category.php">
Графика
                      </a>
                    </li>
                    <li>
                      <a href="category.php">
Изделия
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="active_menu_4">
                  <a href="blog.php">
Блог
                  </a>
                </li>
                <li id="active_menu_5">
                  <a href="contacts.php">
Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="dark_overlay" />
      </header>
    );
  }
}
