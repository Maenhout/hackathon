import PropTypes from 'prop-types';
import SswapWanted from './Style';

export default function SwapWanted({ list }) {
  return (
    <SswapWanted>
      <h1>{list.length} swaps available</h1>
      <div className="container">
        {list.map((request) => {
          return (
            <div className="description">
              <h2>{request.username}</h2>

              <h3>{request.label}</h3>
              <p>{request.textWanted}</p>
            </div>
          );
        })}
      </div>
    </SswapWanted>
  );
}

SwapWanted.propTypes = { list: PropTypes.arrayOf(PropTypes.object).isRequired };
