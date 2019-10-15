import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class Hero extends PureComponent {

  getStyle() {
    const { image } = this.props;
    return {
      backgroundImage: `url(${image})`
    }
  }

  render() {
    const { packId, title, image, artist } = this.props;

    return (
      <div className='hero gs-u-overflow-hidden gs-u-align-left'>
        <div className='hero-bg-image' style={this.getStyle()}></div>
        <div className='gel-wrap'>
          <div className='i-module-slice gs-o-media-island gs-u-align-left gs-u-clearfix'>
            <img src={image} alt='' className='hero-image gs-u-mr+ gs-u-float-left' />
            <div className='gs-u-display-inline-block@l gs-u-align-left@l gs-u-clearfix gs-u-overflow-hidden'>
              <h2 className='gs-u-display-inline-block'>{title}</h2>
              <p className='gs-u-mt'>{artist}</p>
            </div>
            <Link className='button button--white gs-u-float-right@l gs-u-align-center gs-u-p+ gs-u-display-inline-block' to={`/track/new/${packId}`}>
              <i className='fa fa-plus gs-u-mr+'></i> New track
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  packId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};
