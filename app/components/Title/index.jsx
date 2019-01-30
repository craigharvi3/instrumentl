import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Title extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className='title gs-u-mb+'>
        <h2>{title}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};
