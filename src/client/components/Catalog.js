
import React, { Component } from 'react';
import DialogWrapper from './DialogWrapper';
import Footer from './Footer';
import Items from './Items';
import Header from './Header';
import Filters from './Filters';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        price_from: 0,
        price_to: 30000,
        master: [],
        category: [],
        technique: [],
      },
      items: [],
      groupBy: null,
      activePage: 1,
    };
    this.sortFunctions = {
      time: (a, b) => a.time - b.time,
      'price-up': (a, b) => a.price - b.price,
      'price-down': (a, b) => b.price - a.price,
      'a-z': (a, b) => a.name.localeCompare(b.name),
      'z-a': (a, b) => b.name.localeCompare(a.name),
    };
    this.onFilter = this.onFilter.bind(this);
    this.onGroup = this.onGroup.bind(this);
    this.changeActivePage = this.changeActivePage.bind(this);
  }

  componentDidMount() {
    this.onFilter();
  }

  onFilter() {
    fetch(`/api/catalog?filter=${JSON.stringify(this.state.filter)}`)
      .then(res => res.json())
      .then((items) => {
        if (this.state.groupBy != null) {
          items.sort(this.sortFunctions[this.state.groupBy]);
        }
        this.setState({ items });
        this.setState({ activePage: 1 });
      });
  }

  onGroup(issue) {
    this.setState({ groupBy: issue });
    this.setState(prevState => ({
      items: prevState.items.sort(this.sortFunctions[this.state.groupBy]),
    }));
  }

  changeActivePage(page) {
    this.setState({ activePage: page });
  }

  render() {
    return (
      <div>
        <Header />
        <section className="category">
          <div className="wrapper">
            <h1 className="title">
Каталог
            </h1>
            <div className="category_nav">
              <a href="" className="button || active">
                <span>
Живопись
                </span>
                <i className="ic_dir_arrow" />
              </a>
              <a href="" className="button">
                <span>
Графика
                </span>
                <i className="ic_dir_arrow" />
              </a>
              <a href="" className="button">
                <span>
Изделия
                </span>
                <i className="ic_dir_arrow" />
              </a>
            </div>
            <div className="rows">

              <Filters
                onFilter={this.onFilter}
                query={this.state.filter}
              />
              <Items
                items={this.state.items}
                onGroup={this.onGroup}
                groupBy={this.state.groupBy}
                activePage={this.state.activePage}
                onPageChange={this.changeActivePage}
              />

            </div>
          </div>
        </section>

        <Footer />

        <DialogWrapper />

      </div>
    );
  }
}
