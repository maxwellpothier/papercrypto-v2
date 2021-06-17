import React from 'react';
import PriceList from './PriceList';
import WatchList from './WatchList';
import '../styles/HomePage.css';

class HomePage extends React.Component {
  state = { pricelist: [], watchlist: [] };

  setPricelist = (coins) => {
    this.setState({ pricelist: coins });
  }

  setWatchlist = (coin) => {
    let count = 0;
    for (let i = 0, n = this.state.watchlist.length; i < n; i++) {
      if (this.state.watchlist[i].props.alt === coin.props.alt) {
        count++;
      }
    }

    if (count === 0) {
      this.setState({
        watchlist: [
          ...this.state.watchlist,
          coin
        ]
      });
    } else {
      console.log("Already in your watchlist");
    }
  }

  render() {
    return (
      <div>
        <h3>Portfolio Balance</h3>
        <h2>$100,000.00</h2>
        <div className="graph">Graph</div>
        <WatchList
          watchlist={this.state.watchlist}
        />
        <PriceList
          setPricelist={this.setPricelist}
          setWatchlist={this.setWatchlist}
          pricelist={this.state.pricelist}
        />
      </div>
    );
  }
}

export default HomePage;