import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }
    // this.state = {
    //   pageTitle: "Welcome to my portfolio",
    //   isLoading: false,
    //   data: [
    //     {title:'Published Work',
    //     category:['CV'],
    //     slug:'published-work'
    //     }, 
    //     {title: 'Certificates',
    //     category:'Resume',
    //     slug:'certificates'
    //     }, 
    //     {title: 'Headline',
    //     category:'Resume',
    //     slug: 'headline'
    //     }, 
    //     {title:'Education',
    //     category:['Resume'],
    //     slug:'education'
    //     }, 
    //     {title:'Volunteering',
    //     category:'Resume',
    //     slug:'volunteering'
    //     }
    //   ]
    // };

    //this.handleFilter = this.handleFilter.bind(this);
    //this.getPortfolioItems = this.getPortfolioItems.bind(this);
  

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getPortfolioItems() {
    axios
      .get("https://fontanezplanner.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('Category 1')}>Category 1</button>
        <button onClick={() => this.handleFilter('Category 2' )}>Category 2</button>
        <button onClick={() => this.handleFilter('Category 3' )}>Category 3</button>

      <div className='portfolio-items-wrapper'>
        {this.portfolioItems()}
      </div>
      </div>
    );
  }
}