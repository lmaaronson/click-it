import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <span>
          <img
            id={this.props.id}
            src={this.props.url}
            alt="minion"
            height="200"
            onClick={() => {
              this.props.onCardClick(this.props.id);
            }}
          />
      </span>
    );
  }
}

export default Card;