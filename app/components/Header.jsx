import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='header gs-u-align-center'>
        <div className='gel-wrap gs-u-pv++'>
          <Link className='header-logo' to='/'>
            <img src='/img/logo.png' alt='' />
          </Link>
        </div>
      </header>
    );
  }
}
