import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>Username: {this.props.user.login}</h3>
        <img
          src={this.props.user.avatar_url}
          alt={`${this.props.user.name}'s avatar`}
        />
        <a target='_blank' href={`https://github.com/${this.props.user.login}`}>Visit Profile</a>
      </div>
    );
  }
}

export default Card;
