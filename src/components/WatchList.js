import React from 'react';

class WatchList extends React.Component {
  render() {
    const { watchlist } = this.props;
    if (watchlist.length === 0) {
      return (
        <div>
          <h3>Watch List</h3>
          <div>List is currently empty</div>
        </div>
      );
    }

    return (
      <div>
        <h3>Watch List</h3>
        <div>{this.props.watchlist}</div>
      </div>
    );
  }
}

export default WatchList;