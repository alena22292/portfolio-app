import React, { Component } from 'react';
import PortofolioItem from './portfolioItem';
// images:
import pic_1 from '../images/Portofolio/project_1_2.png';
import pic_2 from '../images/Portofolio/project_2_1.png';
import pic_3 from '../images/Portofolio/project_3_2.png';
import pic_4 from '../images/Portofolio/project_4.jpg';
import pic_5 from '../images/Portofolio/project_5.jpg';
import pic_6 from '../images/Portofolio/project_6.jpg';

const portfolio = [
      { title: 'Redu.co', subtitle: 'The App will help you to reduce CO2 emissions on daily base', image: pic_1, link: 'http://www.redu.co', local: '#'  },
      { title: 'Dress-to-Impress', subtitle: 'How often do you wonder what to dress to the comming party...', image: pic_2, link: 'https://dress-to-impress-alena.herokuapp.com/', local: '#'  },
      { title: 'Task Tracker', subtitle: 'This app helps you to maintain a time management of daily life', image: pic_3, link: '/tasks', local: '#' },
      { title: 'Calculator', subtitle: 'Easy to use the app when you need to sum up some stuff', image: pic_4, link: '/calculator', local: '#' },
      { title: 'Chat Messanger', subtitle: 'Keep in touch with your love ones', image: pic_5, link: '/chat', local: '#' },
      { title: 'Shopping bag', subtitle: 'Keep in touch with your love ones', image: pic_6, link: '/chat', local: '#' },
    ];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      portfolio: portfolio,
    }
  }

  handleEvent = () => {
    this.setState({value: this.state.value + 1})
  }

  render() {
    return (
      <section className="mt-3" id="portfolio">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="text-uppercase">Projects</h2>
          </div>
        <div className="row">
            {this.state.portfolio.map((item, i)=>{
                return <PortofolioItem {...item} key={i} num={this.state.value} function={this.handleEvent} />
            })}
        </div>
        </div>
       </section>
    );
  }
}

export default Portfolio;
