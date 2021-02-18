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
        <div className="container">
        <div className="row mt-3">
          <div className="col-sm-12 col-md-8 hero-picture-200" style={cssStyle2}>
          </div>
          <div className="col-sm-12 col-md-4 grid-box">
            <h2 style={{textAlign: "center"}}>Redux state</h2>
            <ul>
              <li>Store a list of messages</li>
              <li>Store a list of channels</li>
              <li>Store the selected channel</li>
              <li>Store the current username</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-4 grid-box">
            <h2 style={{textAlign: "center"}}>Fuctionalities</h2>
            <ul>
              <li>Fetching messages from the API</li>
              <li>Posting a message</li>
              <li>Updating messages every X second</li>
              <li>Multi Channels app</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-8 hero-picture-200" style={cssStyle3}>
          </div>
        </div>

      </div>
      </div>
    );
  }
}

export default Chat;
