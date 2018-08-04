
import React, { Component } from 'react';

export default class DialogWrapper extends Component {
  render() {
    return (
      <div className="dialog_wrapper">
        <div className="table || main_table">
          <div className="tcell || main_tcell">
            <div className="dialog_close || dialog_bg" />
            <div className="modal_feedback dialog">
              <span className="dialog_close || icon_close">
                <svg className="icon">
                  <use xlinkHref="./img/svgdefs.svg#icon_close" />
                </svg>
              </span>
              <form action="#" className="feedback">
                <h2 className="title">
Заказать звонок
                </h2>
                <p className="mp1">
Возникли вопросы, оставьте заявку и мы с Вами свяжемся
                </p>
                <div className="input_effect">
                  <input name="" type="text" className="input" />
                  <label className="labels">
Как Вас зовут?
                  </label>
                </div>
                <div className="input_effect">
                  <input id="" name="" type="email" className="input" />
                  <label className="labels">
Эллектронная почта
                  </label>
                </div>
                <input
                  name=""
                  type="text"
                  className="input"
                  placeholder="+ _ _ ( _ _ _ ) _ _ _ - _ _ - _ _"
                />
                <div className="input_effect">
                  <textarea name="" className="input" />
                  <label className="labels">
Какой у Вас вопрос?
                  </label>
                </div>
                <button className="button btn_wd">
Перезвоните мне
                </button>
              </form>
            </div>

            <div className="modal_alert_book dialog">
              <span className="dialog_close || icon_close">
                <svg className="icon">
                  <use xlinkHref="./img/svgdefs.svg#icon_close" />
                </svg>
              </span>
              <span className="ico_check" />
              <p>
Вы успешно подписаны на рассылку
              </p>
            </div>

            <div className="modal_registration dialog">
              <span className="dialog_close || icon_close">
                <svg className="icon">
                  <use xlinkHref="./img/svgdefs.svg#icon_close" />
                </svg>
              </span>
              <form action="#" className="login_form">
                <div className="title">
Регистрация
                </div>
                <div className="rows">
                  <button className="button btn_fb">
Facebook
                  </button>
                  <button className="button btn_gp">
Google +
                  </button>
                </div>
                <label className="labels">
Имя
                </label>
                <input type="text" className="input" />
                <label className="labels">
Электронная почта
                </label>
                <input type="email" className="input" />
                <label className="labels">
Номер телефона
                </label>
                <input type="text" className="input" />
                <label className="labels">
Пароль
                </label>
                <input type="password" className="input" />
                <button
                  className="button btn_wd"
                  style={{ margin: '1.2rem 0 1rem' }}
                >
ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
                <p className="mp2">
Уже зарегистрированы?
                </p>
                <div className="tc">
                  <a
                    href="#"
                    className="btn_open_login || underscore_rev"
                  >
Войти
                  </a>
                </div>
              </form>
            </div>

            <div className="modal_login dialog">
              <span className="dialog_close || icon_close">
                <svg className="icon">
                  <use xlinkHref="./img/svgdefs.svg#icon_close" />
                </svg>
              </span>
              <form action="#" className="login_form">
                <div className="title">
Вход
                </div>
                <div className="rows">
                  <button className="button btn_fb">
Facebook
                  </button>
                  <button className="button btn_gp">
Google +
                  </button>
                </div>
                <label className="labels">
Электронная почта
                </label>
                <input type="email" className="input" />
                <label className="labels">
Пароль
                </label>
                <input type="password" className="input" />
                <button
                  className="button btn_wd"
                  style={{ margin: '1.2rem 0 1rem' }}
                >
Войти
                </button>
                <p className="mp2">
Ещё не  зарегистрированы?
                </p>
                <div className="tc">
                  <a
                    href="#"
                    className="btn_open_reg || underscore_rev"
                  >
Зарегистрироваться
                  </a>
                </div>
              </form>
            </div>


            <div className="modal_ dialog">
              <span className="dialog_close || icon_close">
                <svg className="icon">
                  <use xlinkHref="./img/svgdefs.svg#icon_close" />
                </svg>
              </span>
              <p>
Modal content
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
