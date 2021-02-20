import React, { Component } from 'react';
import PortofolioItem from './portfolioItem';
// images:
import pic_1 from '../images/Portofolio/project_1_2.png';
import pic_2 from '../images/Portofolio/project_2_1.png';
import pic_3 from '../images/Portofolio/project_3_2.png';
import pic_4 from '../images/Portofolio/project_4.jpg';
import pic_5 from '../images/Portofolio/project_5.jpg';
import pic_6 from '../images/Portofolio/project_6.jpg';
import pic_7 from '../images/Portofolio/project_7.jpg';

const projects = [
      { title: 'Redu.co', subtitle: 'The App will help you to reduce CO2 emissions on daily base', image: pic_1, link: 'http://www.redu.co', local: '#', like: false, value: 356, category: 'web site', display: false },
      { title: 'Dress-to-Impress', subtitle: 'How often do you wonder what to dress to the comming party...', image: pic_2, link: 'https://dress-to-impress-alena.herokuapp.com/', local: '#', like: true, value: 289, category: 'web site', display: false },
      { title: 'Task Tracker', subtitle: 'This app helps you to maintain a time management of daily life', image: pic_3, link: '/tasks', local: '#', like: false, value: 23, category: 'web application', display: false },
      { title: 'Calculator', subtitle: 'Easy to use the app when you need to sum up some stuff', image: pic_4, link: '/calculator', local: '#', like: true, value: 56, category: 'web application', display: false },
      { title: 'Mr. Cocktail', subtitle: 'Create your uniq cocktail list', image: pic_7, link: 'https://rails-mister-cocktail-504.herokuapp.com/', local: '#', like: true, value: 13, category: 'web site', display: false },
      { title: 'Chat Messanger', subtitle: 'Keep in touch with your love ones', image: pic_5, link: '/chat', local: '#', like: false, value: 8, category: 'web page', display: false },
      { title: 'Shopping bag', subtitle: 'Keep in touch with your love ones', image: pic_6, link: '/chat', local: '#', like: false, value: 1, category: 'web application', display: false },
    ];
// display: false => click on the btn with a category, function get the category as parameter => display: true => filtering array by display;

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: projects,
      active: false,
    }
  }

  handleEvent = (title) => {
    const update = this.state.portfolio.map(obj => obj.title === title ? { ...obj, like: !obj.like } : obj);
    this.setState({
      portfolio: update,
    });
  }
  countViewers = (title) => {
    const update = this.state.portfolio.map(obj => obj.title === title ? { ...obj, value: obj.value + 1 } : obj);
    this.setState({
      portfolio: update,
    });
  }
  clickSite = (category) => {
    const update = this.state.portfolio.map(obj => obj.category === category || category === '' ? {...obj, display: !obj.display } : obj);
    this.setState({
      portfolio: update,
    });
  }

  render() {
    return (
      <section className="mt-3" id="portfolio">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="text-uppercase">Projects</h2>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn active-category" onClick={(e) => {e.preventDefault(); this.clickSite('')}}> Show all</button>
            <button className="btn" onClick={(e) => {e.preventDefault(); this.clickSite('web application')}} > Web Application</button>
            <button className="btn" onClick={(e) => {e.preventDefault(); this.clickSite('web site')}}> Web Site</button>
            <button className="btn" onClick={(e) => {e.preventDefault(); this.clickSite('web page')}}> Web Page</button>
          </div>
        <div className="row">
            {this.state.portfolio.filter(item => item.display).map((item, i)=>{
                return <PortofolioItem {...item} key={i} function={this.handleEvent} functionView={this.countViewers} />
            })
          }
        </div>
        </div>
       </section>
    );
  }
}

export default Portfolio;
