
import React, { Component } from 'react';

class MastersFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterWrap isOpened">
        <div className="filterHead">
Мастер
        </div>
        <ul className="filterBody">
          {this.props.masters.map((master, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="checkbox"
                id={`filter_ch_${index + 1}`}
                onChange={this.props.handleMaster.bind(this, master)}
              />
              <label htmlFor={`filter_ch_${index + 1}`}>
                {master}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class TechniquesFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterWrap isOpened">
        <div className="filterHead">
Техника
        </div>
        <ul className="filterBody">
          {this.props.techniques.map((technique, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="checkbox"
                id={`filter_ct_${index + 1}`}
                onChange={this.props.handleTechnique.bind(this, technique)}
              />
              <label htmlFor={`filter_ct_${index + 1}`}>
                {technique}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class CategoriesFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterWrap isOpened">
        <div className="filterHead">
Категория
        </div>
        <ul className="filterBody">
          {this.props.categories.map((category, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="checkbox"
                id={`filter_cc_${index + 1}`}
                onChange={this.props.handleCategory.bind(this, category)}
              />
              <label htmlFor={`filter_cc_${index + 1}`}>
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class PriceFilter extends Component {
  render() {
    return (
      <div className="filterWrap isOpened">
        <div className="filterHead">
Цена
        </div>
        <div className="filterBody filterSlider">
          <div id="filter_price" />
          <div className="rows">
            <input
              type="text"
              id="amount_from"
              className="from"
              readOnly
              style={{ border: 0 }}
            />
            <input
              type="text"
              id="amount_to"
              className="to"
              readOnly
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

class AllFilters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterWrap isOpened">
        <div className="filterHead">
Все категории
        </div>
        <ul className="filterBody">
          <li>
            <a href="#">
Все
            </a>
          </li>
          {this.props.filters.map(filter => (
            <li key={filter}>
              <a href="#">
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.filters = {
      masters: [
        'Рейпольский А.Д.',
        'Рудаева Е.Л.',
        'Митков Павел',
        'Уркинеев Д.Л',
        'Гусев Валерий',
      ],
      categories: [
        'Живопись',
        'Графика',
        'Изделия',
      ],
      techniques: [
        'Карандаш',
        'Акрил',
        'Акварель',
        'Масло',
        'Тушь',
        'Каменая живопись',
      ],
    };

    this.handleMaster = this.handleMaster.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleTechnique = this.handleTechnique.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleMaster(master) {
    const position = this.props.query.master.indexOf(master);
    position === -1
      ? this.props.query.master.push(master)
      : this.props.query.master.splice(position, 1);
    this.props.onFilter();
  }

  handleCategory(category) {
    const position = this.props.query.category.indexOf(category);
    position === -1
      ? this.props.query.category.push(category)
      : this.props.query.category.splice(position, 1);
    this.props.onFilter();
  }

  handleTechnique(technique) {
    const position = this.props.query.technique.indexOf(technique);
    position === -1
      ? this.props.query.technique.push(technique)
      : this.props.query.technique.splice(position, 1);
    this.props.onFilter();
  }

  handlePriceChange() {
    this.props.query.price_from = parseInt(document.getElementById('amount_from').value);
    this.props.query.price_to = parseInt(document.getElementById('amount_to').value);
    this.props.onFilter();
  }

  componentDidMount() {
    $('#filter_price').on('slidestop', this.handlePriceChange).bind(this);
  }

  render() {
    return (
      <aside className="category_sidebar">
        <h3 className="h3">
Показать
        </h3>

        <AllFilters
          filters=
            {
              this.filters.masters
                .concat(this.filters.categories)
                .concat(this.filters.techniques)
            }
        />

        <PriceFilter />

        <MastersFilter
          masters={this.filters.masters}
          handleMaster={this.handleMaster}
        />

        <CategoriesFilter
          categories={this.filters.categories}
          handleCategory={this.handleCategory}
        />

        <TechniquesFilter
          techniques={this.filters.techniques}
          handleTechnique={this.handleTechnique}
        />

      </aside>
    );
  }
}
