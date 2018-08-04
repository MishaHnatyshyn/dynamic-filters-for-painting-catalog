
import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.generateArray = this.generateArray.bind(this);
    this.displayLeftDots = this.displayLeftDots.bind(this);
    this.displayRightsDots = this.displayRightsDots.bind(this);
  }

  handleNext() {
    this.props.changeActivePage(this.props.active + 1);
  }

  handlePrev() {
    this.props.changeActivePage(this.props.active - 1);
  }

  handlePageClick(page, e) {
    location.href = '#';
    this.props.changeActivePage(page);
    e.preventDefault();
  }

  generateArray() {
    const arr = [];
    if (this.props.pageCount < 7) {
      for (let i = 2; i < this.props.pageCount; i++) {
        arr.push(i);
      }
    } else if (this.displayLeftDots() && this.displayRightsDots()) {
      for (let i = this.props.active - 2; i <= this.props.active + 2; i++) {
        arr.push(i);
      }
    } else if (this.displayLeftDots()) {
      for (let i = this.props.pageCount - 5; i < this.props.pageCount; i++) {
        arr.push(i);
      }
    } else if (this.displayRightsDots()) {
      for (let i = 2; i <= 6; i++) {
        arr.push(i);
      }
    }
    return arr;
  }

  displayLeftDots() {
    return (this.props.active > 5 && this.props.pageCount > 6);
  }

  displayRightsDots() {
    return ((this.props.pageCount - this.props.active > 4) && this.props.pageCount > 6);
  }

  render() {
    if (this.props.pageCount === 0) {
      return null;
    }
    return (
      <ul className="paginations">

        <li
          className="prev"
          onClick={this.handlePrev}
          style={{ display: this.props.active === 1 ? 'none' : 'inline-block' }}
        >
          <a href="#" />
        </li>
        <li
          key={1}
          className={this.props.active === 1 ? 'active' : ''}
          onClick={this.handlePageClick.bind(this, 1)}
        >
          <a href="#">
1
          </a>
        </li>

        <li
          className="pagination-dots"
          onClick={this.handlePageClick.bind(this, this.props.active - 5)}
          style={{ display: this.displayLeftDots() && screen.width>=550 ? 'inline-block' : 'none' }}
        >
          <a href="#">
...
          </a>
        </li>

        {this.generateArray().map(page => (
          <li
            key={page}
            className={this.props.active === page ? 'active' : ''}
            onClick={this.handlePageClick.bind(this, page)}
          >
            <a href="#">
              {page}
            </a>
          </li>
        ))}

        <li
          className="pagination-dots"
          style={{ display: this.displayRightsDots() && screen.width>=550 ? 'inline-block' : 'none' }}
          onClick={this.handlePageClick.bind(this, this.props.active + 5)}
        >
          <a href="#">
...
          </a>
        </li>

        <li
          key={this.props.pageCount}
          className={this.props.active === this.props.pageCount ? 'active' : ''}
          style={{ display: (this.props.pageCount>1 && screen.width>=550) ? 'inline-block' : 'none' }}
          onClick={this.handlePageClick.bind(this, this.props.pageCount)}
        >
          <a href="#">
            {this.props.pageCount}
          </a>
        </li>

        <li
          className="next"
          onClick={this.handleNext}
          style={{ display: this.props.active === this.props.pageCount ? 'none' : 'inline-block' }}
        >
          <a href="#" />
        </li>
      </ul>
    );
  }
}

class ItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div
        className="category_item"
        style={{ backgroundImage: `url('./img/${this.props.picture}.jpg')` }}
      >
        <div
          className="img"
          style={{ backgroundImage: `url('./img/${this.props.picture}.jpg')` }}
        />

        <div className="category_info">
          <h3 className="hh">
            <span>
              {this.props.name}
            </span>
          </h3>
          <div className="currency || js_DropWrap">
            <div>
              <span>
                {this.props.price}
                {' '}
руб.
              </span>
              <i className="currency_btn || js_DropBtn" />
            </div>
            <ul className="currency_box || js_DropBox">
              <li className="cur_item">
USD
              </li>
              <li className="cur_item">
EUR
              </li>
            </ul>
          </div>
          <div className="category_btns">
            <a href="product.php" className="button">
              <span>
Подробнее
              </span>
              <i className="ic_dir_arrow" />
            </a>
            <button className="button">
              <span>
В корзину
              </span>
              <svg className="icon icon-cart">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="./img/svgdefs.svg#icon-cart"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.getPageCount = this.getPageCount.bind(this);
  }

  handleSort(e) {
    this.props.onGroup(e.target.value);
  }

  getPageCount() {
    return (this.props.items.length - (this.props.items.length % 9)) / 9 + (this.props.items.length % 9 ? 1 : 0);
  }


  render() {
    $('#group-selector').on('change', this.handleSort).bind(this);

    return (
      <div className="category_content">
        <div className="rows">
          <select
            id="group-selector"
            onChange={this.handleSort}
            name="group-selector"
            className="filter_sort_by"
            data-placeholder="Сортировка"
          >
            <option value="" />
            <option value="time">
Новейшие
            </option>
            <option value="price-up">
По возрастанию цены
            </option>
            <option value="price-down">
По убыванию цены
            </option>
            <option value="a-z">
Название А-Я
            </option>
            <option value="z-a">
Название Я-А
            </option>
          </select>
        </div>
        <div className="category_items">
          {this.props.items.map((item, index) => {
            if (index + 1 <= (this.props.activePage - 1) * 9 || index + 1 > this.props.activePage * 9){
              return null;
            }
            return (
              <ItemContainer
                key={item.name}
                name={item.name}
                price={item.price}
                picture={item.picture}
              />
            );
          })}
        </div>

        <Pagination
          active={this.props.activePage}
          changeActivePage={this.props.onPageChange}
          pageCount={this.getPageCount()}
        />

      </div>
    );
  }
}
