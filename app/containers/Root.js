import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function renderInitialState(initialState) {
  const innerHtml = `window.INITIAL_STATE = ${JSON.stringify(initialState)}`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

class Root extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    head: PropTypes.shape({}).isRequired,
    initialState: PropTypes.shape({}),
  };

  render() {
    const { content, head, initialState } = this.props;

    return (
      <html lang="en" className='b-pw-1280'>
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="/css/app.css" />
          <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
          <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          {initialState && renderInitialState(initialState)}
          <script src='/js/app.js' />
        </body>
      </html>
    );
  }
}

export default Root;
