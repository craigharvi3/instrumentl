import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class Card extends PureComponent {
  render() {
    const { id, image, title, subtitle, subImage } = this.props;
    return (
      <div className='pack'>
        <div className='pack-image'>
          <Link to={`/pack/${id}`}>
            <img src={image} alt='' />
          </Link>
        </div>
        <div className='pack-artist gs-u-pv+'>
          <img className='pack-artist-image gs-u-float-left gs-u-mr+' src={subImage} alt='' />
          <div className='pack-artist-details'>
            <Link to={`/pack/${id}`}>{title}</Link>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subImage: PropTypes.string.isRequired
};
