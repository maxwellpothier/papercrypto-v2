import React from 'react';
import CoinCard from './CoinCard';
import coingecko from '../api/coingecko';

class PriceList extends React.Component {
  componentDidMount() {
    this.loadAPI();
  }

  loadAPI = async () => {
    const res = await coingecko.get('?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    this.makeAllCards(res.data);
  }

  createWatchlistCard(coin) {
    return (
      <CoinCard
        key={coin.symbol}
        icon={coin.image}
        name={coin.name}
        price={coin.current_price}
        cap={coin.market_cap}
        alt={coin.id}
      />
    );
  }

  test(coin) {
    const card = this.createWatchlistCard(coin);
    this.props.setWatchlist(card);
  }

  makeAllCards(coins) {
    const cards = coins.map((coin) => {
      return (
        <div
          key={coin.symbol}
          onClick={() => this.test(coin)}
        >
          <CoinCard
            icon={coin.image}
            name={coin.name}
            price={coin.current_price}
            cap={coin.market_cap}
            alt={coin.id}
          />
        </div>
      );
    });
    this.props.setPricelist(cards);
  }

  render() {
    return (
      <div>
        <h3>Price List</h3>
        <div>{this.props.pricelist}</div>
      </div>
    );
  }
}

export default PriceList;