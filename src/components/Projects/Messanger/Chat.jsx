import React, { Component } from 'react';

class Chat extends Component {
  render () {
    const cssStyle = {
      backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.image + '")',
    }
    const cssStyle2 = {
      backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.pic_1 + '")',
    }
     const cssStyle3 = {
      backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.pic_2 + '")',
    }

    return (
      <div>
        <header className="hero-picture-400" style={cssStyle}>
          <div className="hero-text">
              <h1 style={{ color: '#f7f6e7' }} className="">{this.props.title}</h1>
              <h3 style={{ color: '#f7f6e7' }} className="text-uppercase">{this.props.subtitle}</h3>
          </div>
        </header>
        <div className="hero-picture-200" style={cssStyle2}>
        </div>
        <div className="hero-picture-200" style={cssStyle3}>
        </div>
      </div>
    );
  }
}

export default Chat;
