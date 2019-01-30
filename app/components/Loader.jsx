import React, { PureComponent } from 'react';

export default class Loader extends PureComponent {
  render() {
    return (
      <div className='loader'>
        <img src='/img/loader.svg' alt='' />
      </div>
    );
  }
}
