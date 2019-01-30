import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class ErrorView extends PureComponent {
  render() {
    return (
      <div className='error'>
        <Helmet title="An error occurred" />
        <div className='gel-wrap'>
          <p>Uh oh! Looks like something broke. Try <Link to='/'>heading back to the home page</Link></p>
        </div>
      </div>
    );
  }
}
