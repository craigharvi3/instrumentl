import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class NoMatch extends PureComponent {
  render() {
    return (
      <div className='no-match submission-thanks'>
        <Helmet title="Page not found" />
        <div className='gel-wrap content submit-post-wrap'>
          <div className='submit-post-headline'>
            <h1>Ooops!</h1>
            <h3>Page was not found</h3>
            <Link to='/'>Back to the home page</Link>
          </div>
        </div>
      </div>
    );
  }
}
