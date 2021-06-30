import PropTypes from 'prop-types';
import SswapWanted from './Style';

export default function SwapWanted({ list }) {
  return (
    <SswapWanted>
      <h1>
        <i>{list.length}</i> Swaps available
      </h1>
      <div className="container">
        {list.map((request) => {
          return (
            <div className="profile">
              <div className="avatar" />

              <div className="description">
                <div className="title">
                  <a href={`mailto:${request.mail}`}>
                    <h2>{request.username}</h2>
                  </a>
                  <div className="star">4,8 ★</div>
                </div>
                <h3>{request.label}</h3>
                <p>{request.textProposed}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SswapWanted>
  );
}

SwapWanted.propTypes = { list: PropTypes.arrayOf(PropTypes.object).isRequired };
